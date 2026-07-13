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
    insights: null, // AI guruh tahlili
    insightsLoading: false,
    weights: [], // adaptiv og'irlik modellari
    weightsBusy: false,
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
        await Promise.all([
          this.fetchResults(1),
          this.fetchCharts(),
          this.fetchWeights(),
        ])
        this.authed = true
        this.fetchInsights() // ortda yuklanadi
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

    // AI guruh tahlili (Bosqich 3)
    async fetchInsights(refresh = false) {
      this.insightsLoading = true
      try {
        this.insights = await kmiApi.adminInsights(this.token, refresh)
      } catch (e) {
        this.error = e.message
      } finally {
        this.insightsLoading = false
      }
    },

    // Adaptiv og'irliklar (Bosqich 3)
    async fetchWeights() {
      this.weights = await kmiApi.adminWeights(this.token)
    },

    async trainWeights() {
      this.weightsBusy = true
      try {
        await kmiApi.adminTrainWeights(this.token, true)
        await this.fetchWeights()
        return { ok: true }
      } catch (e) {
        return { ok: false, message: e.message }
      } finally {
        this.weightsBusy = false
      }
    },

    async activateWeights(id) {
      this.weightsBusy = true
      try {
        await kmiApi.adminActivateWeights(this.token, id)
        await this.fetchWeights()
      } finally {
        this.weightsBusy = false
      }
    },
  },
})
