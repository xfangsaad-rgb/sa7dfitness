import { getStore } from '@netlify/blobs'
import { getUser } from '@netlify/identity'

const store = getStore('sa7d-user-state')

function json(body, init = {}) {
  const headers = new Headers(init.headers || {})
  headers.set('Content-Type', 'application/json')
  headers.set('Cache-Control', 'no-store')
  return new Response(JSON.stringify(body), {
    ...init,
    headers
  })
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function isValidCloudState(value) {
  return (
    isPlainObject(value) &&
    Array.isArray(value.plans) &&
    Array.isArray(value.history) &&
    Array.isArray(value.notifications) &&
    Array.isArray(value.messages) &&
    Array.isArray(value.challenges) &&
    isPlainObject(value.profile) &&
    isPlainObject(value.preferences) &&
    isPlainObject(value.schedule) &&
    isPlainObject(value.metrics)
  )
}

export default async function handler(req) {
  const user = await getUser()

  if (!user?.id) {
    return json({ error: 'Unauthorized' }, { status: 401 })
  }

  const key = `users/${user.id}/state`

  if (req.method === 'GET') {
    const record = await store.get(key, { type: 'json' })
    return json(record || { state: null, updatedAt: '' })
  }

  if (req.method === 'PUT') {
    let payload = null

    try {
      payload = await req.json()
    } catch {
      return json({ error: 'Invalid JSON payload' }, { status: 400 })
    }

    if (!isValidCloudState(payload)) {
      return json({ error: 'Invalid app state payload' }, { status: 400 })
    }

    const updatedAt = payload.meta?.dataUpdatedAt || new Date().toISOString()
    const record = {
      state: {
        ...payload,
        meta: {
          ...(isPlainObject(payload.meta) ? payload.meta : {}),
          dataUpdatedAt: updatedAt
        }
      },
      updatedAt
    }

    await store.setJSON(key, record)
    return json({ ok: true, updatedAt })
  }

  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      Allow: 'GET, PUT'
    }
  })
}
