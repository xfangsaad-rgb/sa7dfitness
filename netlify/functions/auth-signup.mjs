import { admin } from '@netlify/identity'

function json(body, init = {}) {
  const headers = new Headers(init.headers || {})
  headers.set('Content-Type', 'application/json')
  headers.set('Cache-Control', 'no-store')
  return new Response(JSON.stringify(body), {
    ...init,
    headers
  })
}

function normalizeEmail(value) {
  return String(value || '').trim().toLowerCase()
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: {
        Allow: 'POST'
      }
    })
  }

  let payload = null

  try {
    payload = await req.json()
  } catch {
    return json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const name = String(payload?.name || '').trim()
  const email = normalizeEmail(payload?.email)
  const password = String(payload?.password || '')

  if (!email || !password) {
    return json({ error: 'Email and password are required.' }, { status: 400 })
  }

  if (password.length < 8) {
    return json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  try {
    const user = await admin.createUser({
      email,
      password,
      data: {
        user_metadata: {
          full_name: name || email.split('@')[0]
        }
      }
    })

    return json({
      ok: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    })
  } catch (error) {
    console.error(error)
    return json(
      {
        error: error?.message || 'Could not create account right now.'
      },
      { status: error?.status || 400 }
    )
  }
}
