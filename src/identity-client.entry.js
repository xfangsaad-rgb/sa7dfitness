import {
  AUTH_EVENTS,
  getIdentityConfig,
  getUser,
  handleAuthCallback,
  hydrateSession,
  login,
  logout,
  onAuthChange,
  requestPasswordRecovery,
  signup,
  updateUser
} from '@netlify/identity'

window.SA7DIdentity = {
  AUTH_EVENTS,
  getIdentityConfig,
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
