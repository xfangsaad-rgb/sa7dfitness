import { initializeApp } from 'firebase/app'
import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile
} from 'firebase/auth'
import { doc, getDoc, getFirestore, serverTimestamp, setDoc } from 'firebase/firestore'

import { firebaseConfig } from './firebase-config.js'

const AUTH_EVENTS = {
  LOGIN: 'login',
  LOGOUT: 'logout'
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const authSetupPromise = setPersistence(auth, browserLocalPersistence).catch(() => null)

let currentUser = null
let authObserverReady = false
let authObserverStarted = false
let initialAuthResolve = null
const initialAuthPromise = new Promise((resolve) => {
  initialAuthResolve = resolve
})
const authListeners = new Set()

function normalizeUser(user) {
  if (!user) {
    return null
  }

  return {
    uid: user.uid,
    email: user.email || '',
    name: user.displayName || user.email || 'Cloud User'
  }
}

function ensureAuthObserver() {
  if (authObserverStarted) {
    return
  }

  authObserverStarted = true

  onAuthStateChanged(auth, (user) => {
    const normalized = normalizeUser(user)
    const previousUid = currentUser?.uid || null
    currentUser = normalized

    if (!authObserverReady) {
      authObserverReady = true
      initialAuthResolve(currentUser)
      return
    }

    const nextUid = normalized?.uid || null
    if (previousUid === nextUid) {
      return
    }

    const event = normalized ? AUTH_EVENTS.LOGIN : AUTH_EVENTS.LOGOUT
    for (const listener of authListeners) {
      listener(event, currentUser)
    }
  })
}

function getIdentityConfig() {
  return {
    provider: 'firebase',
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
  }
}

async function getSettings() {
  return {
    disableSignup: false
  }
}

async function hydrateSession() {
  ensureAuthObserver()
  await authSetupPromise
  return initialAuthPromise
}

async function getUser() {
  ensureAuthObserver()
  await authSetupPromise
  return currentUser || normalizeUser(auth.currentUser)
}

function onAuthChange(callback) {
  ensureAuthObserver()
  authListeners.add(callback)
  return () => authListeners.delete(callback)
}

async function login(email, password) {
  await authSetupPromise
  return signInWithEmailAndPassword(auth, email, password)
}

async function signup(name, email, password) {
  await authSetupPromise
  const credential = await createUserWithEmailAndPassword(auth, email, password)
  if (name) {
    await updateProfile(credential.user, { displayName: name })
    currentUser = normalizeUser({
      ...credential.user,
      displayName: name
    })
  }
  return credential
}

async function logout() {
  await authSetupPromise
  return signOut(auth)
}

async function requestPasswordRecovery(email) {
  await authSetupPromise
  return sendPasswordResetEmail(auth, email)
}

async function updateUser(nextUser) {
  await authSetupPromise
  if (!auth.currentUser) {
    throw new Error('No active user session')
  }
  if (nextUser?.password) {
    await updatePassword(auth.currentUser, nextUser.password)
  }
  currentUser = normalizeUser(auth.currentUser)
  return currentUser
}

async function handleAuthCallback() {
  return null
}

function stateDoc(uid) {
  return doc(db, 'cloudStates', uid)
}

async function loadState(uid) {
  if (!uid) {
    throw new Error('Cloud user is missing')
  }

  const snapshot = await getDoc(stateDoc(uid))
  if (!snapshot.exists()) {
    return null
  }

  const data = snapshot.data() || {}
  return {
    state: data.state || null,
    updatedAt: data.updatedAt || data.state?.meta?.dataUpdatedAt || ''
  }
}

async function saveState(uid, state) {
  if (!uid) {
    throw new Error('Cloud user is missing')
  }

  const updatedAt = state?.meta?.dataUpdatedAt || new Date().toISOString()

  await setDoc(
    stateDoc(uid),
    {
      state,
      updatedAt,
      profile: {
        email: auth.currentUser?.email || '',
        name: auth.currentUser?.displayName || ''
      },
      savedAt: serverTimestamp()
    },
    { merge: true }
  )

  return {
    updatedAt
  }
}

window.SA7DIdentity = {
  AUTH_EVENTS,
  getIdentityConfig,
  getSettings,
  getUser,
  handleAuthCallback,
  hydrateSession,
  login,
  logout,
  onAuthChange,
  requestPasswordRecovery,
  signup,
  updateUser
}

window.SA7DCloud = {
  loadState,
  saveState
}
