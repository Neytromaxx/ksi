// src/api/kmi.js
// KMI backend endpointlari (docs/ARCHITECTURE.md).

import { api } from './client'

export const kmiApi = {
  // 4 metodika savollari
  methodologies: () => api.get('/kmi/methodologies'),

  // sessiya ochish (demografik ma'lumotlar)
  createSession: (payload) => api.post('/kmi/sessions', payload),

  // javoblarni yuborish (upsert)
  submitAnswers: (sessionId, answers) =>
    api.post(`/kmi/sessions/${sessionId}/answers`, { answers }),

  // hisoblash va yakunlash
  finishSession: (sessionId) => api.post(`/kmi/sessions/${sessionId}/finish`),

  // natijani olish
  getResult: (sessionId) => api.get(`/kmi/results/${sessionId}`),

  // AI interpretatsiya (backend, keshlangan)
  resultAi: (sessionId, refresh = false) =>
    api.get(`/kmi/results/${sessionId}/ai${refresh ? '?refresh=true' : ''}`),

  // ── Admin (X-Admin-Token) ──
  adminSummary: (token) =>
    api.get('/kmi/admin/summary', { headers: { 'X-Admin-Token': token } }),

  adminResults: (token, { page = 1, perPage = 10, q = '' } = {}) =>
    api.get(
      `/kmi/admin/results?page=${page}&per_page=${perPage}&q=${encodeURIComponent(q)}`,
      { headers: { 'X-Admin-Token': token } },
    ),

  // AI guruh tahlili
  adminInsights: (token, refresh = false) =>
    api.get(`/kmi/admin/insights${refresh ? '?refresh=true' : ''}`, {
      headers: { 'X-Admin-Token': token },
    }),

  // Adaptiv og'irliklar
  adminWeights: (token) =>
    api.get('/kmi/admin/weights', { headers: { 'X-Admin-Token': token } }),

  adminTrainWeights: (token, activate = false) =>
    api.post(`/kmi/admin/weights/train${activate ? '?activate=true' : ''}`, undefined, {
      headers: { 'X-Admin-Token': token },
    }),

  adminActivateWeights: (token, id) =>
    api.post(`/kmi/admin/weights/${id}/activate`, undefined, {
      headers: { 'X-Admin-Token': token },
    }),
}
