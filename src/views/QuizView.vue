<script setup>
import { computed, onMounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useQuizStore } from '@/stores/quiz'
import { useToast } from '@/composables/useToast'
import DemographicForm from '@/components/quiz/DemographicForm.vue'
import QuestionBlock from '@/components/quiz/QuestionBlock.vue'
import LoadingOverlay from '@/components/quiz/LoadingOverlay.vue'

const router = useRouter()
const quiz = useQuizStore()
const { toast } = useToast()
const { steps, step, answers, user, submitting, loadingMethodologies, error } =
  storeToRefs(quiz)

const showLoading = ref(false)

onMounted(async () => {
  try {
    await quiz.loadMethodologies()
  } catch {
    /* error holati shablonda ko'rsatiladi */
  }
})

const current = computed(() => quiz.currentStep)

// Har bir savolning umumiy tartib raqami (1..N)
const questionIndex = computed(() => {
  const map = {}
  quiz.allQuestions.forEach((q, i) => (map[q.id] = i + 1))
  return map
})

function pick(questionId, value) {
  quiz.setAnswer(questionId, value)
  // Keyingi javob berilmagan savolga silliq o'tish
  const missing = quiz.missingInStep()
  if (missing.length) {
    nextTick(() => {
      const el = document.getElementById('qb-' + missing[0])
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 200)
    })
  }
}

function validateStep() {
  const st = current.value
  if (!st) return false
  if (st.type === 'demo') {
    if (!user.value.full_name || !String(user.value.full_name).trim()) {
      toast('Iltimos, ismingizni kiriting', 'error')
      return false
    }
    return true
  }
  const missing = quiz.missingInStep()
  if (missing.length) {
    toast(`${missing.length} ta savolga javob bermadingiz`, 'error')
    const el = document.getElementById('qb-' + missing[0])
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    return false
  }
  return true
}

async function onNext() {
  if (!validateStep()) return
  if (step.value < steps.value.length - 1) {
    quiz.next()
    return
  }
  // Oxirgi qadam → yuborish
  showLoading.value = true
  const started = Date.now()
  try {
    const result = await quiz.submit()
    // Loading animatsiyasi kamida 2.8s ko'rinsin
    const wait = Math.max(0, 2800 - (Date.now() - started))
    setTimeout(() => {
      router.push(`/natija/${result.session_id}`)
    }, wait)
  } catch (e) {
    showLoading.value = false
    toast(e.message || 'Xatolik yuz berdi', 'error')
  }
}

function onPrev() {
  if (step.value > 0) quiz.prev()
  else router.push('/')
}
</script>

<template>
  <!-- Yuklash / xato holatlari -->
  <div v-if="loadingMethodologies" class="state-wrap">
    <div class="state-spin"></div>
    <h3>Yuklanmoqda…</h3>
    <p>Test savollari serverdan olinmoqda</p>
  </div>

  <div v-else-if="error && !steps.length" class="state-wrap">
    <h3>Ulanishda xatolik</h3>
    <p>{{ error }}</p>
    <button class="btn-start" @click="quiz.loadMethodologies()">Qayta urinish</button>
  </div>

  <!-- Yuborish animatsiyasi -->
  <LoadingOverlay v-else-if="showLoading" />

  <!-- Test -->
  <section v-else-if="current" id="s-quiz">
    <div class="qz-top">
      <div class="qz-meta">
        <div class="qz-section">{{ current.section }}</div>
        <div class="qz-count">{{ step + 1 }} / {{ steps.length }}</div>
      </div>
      <div class="qz-bar">
        <div class="qz-fill" :style="{ width: quiz.progressPct + '%' }"></div>
      </div>
      <div class="qz-h">{{ current.title }}</div>
      <div class="qz-hint">{{ current.hint }}</div>
    </div>

    <DemographicForm
      v-if="current.type === 'demo'"
      :model-value="user"
      @update:model-value="quiz.setUser($event)"
    />

    <div v-else>
      <div v-for="q in current.questions" :id="'qb-' + q.id" :key="q.id">
        <QuestionBlock
          :question="q"
          :index="questionIndex[q.id]"
          :badge="current.badge"
          :badge-label="current.badgeLabel"
          :value="answers[q.id] ?? null"
          @pick="pick"
        />
      </div>
    </div>

    <div class="qz-nav">
      <button class="btn-back2" @click="onPrev">← Orqaga</button>
      <button class="btn-fwd" :disabled="submitting" @click="onNext">
        {{ step === steps.length - 1 ? 'Yakunlash →' : 'Davom etish →' }}
      </button>
    </div>
  </section>
</template>
