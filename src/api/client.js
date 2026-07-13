// src/api/client.js
// Backend (spss-in-uzbek-backend) bilan aloqa uchun yengil fetch-wrapper.

const BASE = (import.meta.env.VITE_API_BASE || '').replace(/\/$/, '')

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function request(path, { method = 'GET', body, headers = {} } = {}) {
  let res
  try {
    res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { 'Content-Type': 'application/json' } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })
  } catch {
    throw new ApiError('Serverga ulanib bo‘lmadi. Internetni tekshiring.', 0)
  }

  let data = null
  let parseFailed = false
  const text = await res.text()
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      data = text
      parseFailed = true
    }
  }

  if (!res.ok) {
    const detail =
      (data && typeof data === 'object' && data.detail) ||
      (typeof data === 'string' && !parseFailed && data) ||
      `Xatolik (${res.status})`
    throw new ApiError(detail, res.status)
  }

  // Muvaffaqiyatli javob, lekin JSON emas (odatda: API manzili noto‘g‘ri
  // sozlangan va o‘rniga HTML sahifa qaytgan).
  if (parseFailed) {
    throw new ApiError(
      'Server JSON o‘rniga boshqa javob qaytardi. VITE_API_BASE backend manziliga to‘g‘ri sozlanganini tekshiring.',
      res.status,
    )
  }
  return data
}

export const api = {
  get: (path, opts) => request(path, { ...opts, method: 'GET' }),
  post: (path, body, opts) => request(path, { ...opts, method: 'POST', body }),
}
