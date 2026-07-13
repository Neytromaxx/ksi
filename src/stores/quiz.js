// src/stores/quiz.js
// Test oqimi holati: metodikalar (backenddan), qadamlar, javoblar, natija.

import { defineStore } from 'pinia'
import { kmiApi } from '@/api/kmi'

const CHUNK = 5 // bitta qadamdagi maksimal savol soni

// Metodika kodiga qarab badge (rang) va bo'lim nomi
export const METHODOLOGY_META = {
  zamfir: { badge: 'qb-z', label: 'Zamfir' },
  golomshtok: { badge: 'qb-g', label: 'Golomshtok' },
  rokich: { badge: 'qb-r', label: 'Rokich' },
  integrative: { badge: 'qb-i', label: 'Integrativ' },
}

function buildSteps(methodologies) {
  // 0-qadam: demografik. Keyin har metodika savollari CHUNK bo'yicha bo'linadi.
  const steps = [
    {
      type: 'demo',
      section: "Bo'lim 1: Demografik",
      title: "Shaxsiy ma'lumotlar",
      hint: "To'liq to'ldiring — tahlil aniqroq bo'ladi",
    },
  ]
  let sectionNum = 2
  for (const m of methodologies) {
    const questions = m.questions || []
    if (!questions.length) continue
    const meta = METHODOLOGY_META[m.code] || { badge: 'qb-i', label: m.name }
    const chunks = []
    for (let i = 0; i < questions.length; i += CHUNK) {
      chunks.push(questions.slice(i, i + CHUNK))
    }
    chunks.forEach((qs, idx) => {
      steps.push({
        type: 'questions',
        section: `Bo'lim ${sectionNum}: ${m.name}`,
        title: chunks.length > 1 ? `${meta.label} — ${idx + 1}-qism` : m.name,
        hint: '1 — mutlaqo mos kelmaydi, 5 — to‘liq mos keladi',
        badge: meta.badge,
        badgeLabel: meta.label,
        questions: qs,
      })
    })
    sectionNum++
  }
  return steps
}

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    methodologies: [],
    steps: [],
    step: 0,
    answers: {}, // { [questionId]: value }
    user: {}, // demografik
    session: null,
    result: null,
    loadingMethodologies: false,
    submitting: false,
    error: '',
  }),

  getters: {
    totalSteps: (s) => s.steps.length,
    currentStep: (s) => s.steps[s.step] || null,
    progressPct: (s) =>
      s.steps.length ? Math.round(((s.step + 1) / s.steps.length) * 100) : 0,
    allQuestions: (s) => s.methodologies.flatMap((m) => m.questions),
    totalQuestions() {
      return this.allQuestions.length
    },
    answeredCount: (s) => Object.keys(s.answers).length,
  },

  actions: {
    async loadMethodologies() {
      if (this.methodologies.length) return
      this.loadingMethodologies = true
      this.error = ''
      try {
        const data = await kmiApi.methodologies()
        if (!Array.isArray(data) || !data.length) {
          throw new Error('Serverdan metodikalar kelmadi. Backend ishga tushganini tekshiring.')
        }
        this.methodologies = data
        this.steps = buildSteps(data)
      } catch (e) {
        this.error = e.message
        throw e
      } finally {
        this.loadingMethodologies = false
      }
    },

    setAnswer(questionId, value) {
      this.answers = { ...this.answers, [questionId]: value }
    },

    setUser(user) {
      this.user = { ...this.user, ...user }
    },

    next() {
      if (this.step < this.steps.length - 1) this.step++
    },
    prev() {
      if (this.step > 0) this.step--
    },
    goToStep(i) {
      this.step = i
    },

    // Joriy qadamdagi javob berilmagan savollar id-lari
    missingInStep(stepIndex = this.step) {
      const st = this.steps[stepIndex]
      if (!st || st.type !== 'questions') return []
      return st.questions.filter((q) => !this.answers[q.id]).map((q) => q.id)
    },

    // Sessiya ochish + barcha javoblarni yuborish + yakunlash
    async submit() {
      this.submitting = true
      this.error = ''
      try {
        const session = await kmiApi.createSession({
          full_name: this.user.full_name,
          age: this.user.age ? Number(this.user.age) : null,
          gender: this.user.gender || null,
          course: this.user.course || null,
          direction: this.user.direction || null,
          institution: this.user.institution || null,
          academic_score:
            this.user.academic_score !== '' && this.user.academic_score != null
              ? Number(this.user.academic_score)
              : null,
        })
        this.session = session

        const answers = Object.entries(this.answers).map(([qid, value]) => ({
          question_id: Number(qid),
          value,
        }))
        await kmiApi.submitAnswers(session.id, answers)
        const result = await kmiApi.finishSession(session.id)
        this.result = result
        return result
      } catch (e) {
        this.error = e.message
        throw e
      } finally {
        this.submitting = false
      }
    },

    reset() {
      this.step = 0
      this.answers = {}
      this.user = {}
      this.session = null
      this.result = null
      this.error = ''
    },
  },
})
