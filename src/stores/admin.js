// src/stores/admin.js
// Admin panel: token (sessionStorage), KPI va natijalar jadvali.

import { defineStore } from 'pinia'
import { kmiApi } from '@/api/kmi'

const TOKEN_KEY = 'kmi_admin_token'

export const useAdminStore = defineStore('admin', {
  state: () => ({
    token: sessionStorage.getItem(TOKEN_KEY) || '',
    authed: false,
    summary: null,
    results: [],
    chartRows: [], // grafiklar uchun so'nggi natijalar (100 tagacha)
    total: 0,
    page: 1,
    perPage: 10,
    search: '',
    loading: false,
    error: '',
  }),

  getters: {
    pages: (s) => Math.max(1, Math.ceil(s.total / s.perPage)),
  },

  actions: {
    setToken(token) {
      this.token = token.trim()
      sessionStorage.setItem(TOKEN_KEY, this.token)
    },

    logout() {
      this.token = ''
      this.authed = false
      this.summary = null
      this.results = []
      this.total = 0
      sessionStorage.removeItem(TOKEN_KEY)
    },

    // Token to'g'riligini summary orqali tekshiradi
    async authenticate(token) {
      this.setToken(token)
      this.error = ''
      this.loading = true
      try {
        this.summary = await kmiApi.adminSummary(this.token)
        await Promise.all([this.fetchResults(1), this.fetchCharts()])
        this.authed = true
      } catch (e) {
        this.authed = false
        this.error = e.message
        throw e
      } finally {
        this.loading = false
      }
    },

    async refreshSummary() {
      this.summary = await kmiApi.adminSummary(this.token)
    },

    // Grafiklar uchun so'nggi 100 natija (histogram + tip taqsimoti)
    async fetchCharts() {
      const data = await kmiApi.adminResults(this.token, { page: 1, perPage: 100, q: '' })
      this.chartRows = data.items
    },

    async fetchResults(page = this.page) {
      this.loading = true
      this.error = ''
      try {
        const data = await kmiApi.adminResults(this.token, {
          page,
          perPage: this.perPage,
          q: this.search,
        })
        this.results = data.items
        this.total = data.total
        this.page = data.page
      } catch (e) {
        this.error = e.message
        throw e
      } finally {
        this.loading = false
      }
    },

    async setSearch(q) {
      this.search = q
      await this.fetchResults(1)
    },
  },
})
