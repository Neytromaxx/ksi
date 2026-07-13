<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
import { kmiApi } from '@/api/kmi'
import { getType } from '@/data/motivationTypes'
import { useToast } from '@/composables/useToast'
import DonutChart from '@/components/result/DonutChart.vue'
import RadarChart from '@/components/result/RadarChart.vue'
import GolomshtokSpheres from '@/components/result/GolomshtokSpheres.vue'
import AiAnalysis from '@/components/result/AiAnalysis.vue'

const props = defineProps({ sessionId: { type: String, default: '' } })

const router = useRouter()
const quiz = useQuizStore()
const { toast } = useToast()

const result = ref(quiz.result)
const loading = ref(false)
const error = ref('')
const animated = ref(false)

onMounted(async () => {
  // Sahifa to'g'ridan-to'g'ri ochilgan bo'lsa (refresh / havola) — backenddan olamiz
  if (!result.value && props.sessionId) {
    loading.value = true
    try {
      result.value = await kmiApi.getResult(props.sessionId)
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }
  if (!result.value && !props.sessionId) {
    router.replace('/')
    return
  }
  setTimeout(() => (animated.value = true), 300)
})

const c = computed(() => result.value?.components || {})
const type = computed(() => getType(result.value?.motivation_type))
const who = computed(() => {
  const r = result.value
  return [r?.full_name, r?.course, r?.direction].filter(Boolean).join(' · ')
})

const donutData = computed(() => [c.value.ichki || 0, c.value.tashqi || 0, c.value.qadr || 0, c.value.risk || 0])
const radarValues = computed(() => [
  c.value.ichki || 0,
  c.value.tashqi || 0,
  c.value.qadr || 0,
  100 - (c.value.risk || 0),
  c.value.integr || 0,
])

const subs = computed(() => [
  { key: 'i', icon: '⚡', name: 'Ichki motivatsiya', method: 'Zamfir — M₁', val: c.value.ichki || 0, color: 'var(--a1)' },
  { key: 'o', icon: '🏅', name: 'Tashqi motivatsiya', method: 'Zamfir — M₂', val: c.value.tashqi || 0, color: 'var(--a2)' },
  { key: 'q', icon: '🎯', name: 'Qadriyatlar indeksi', method: 'Rokich — M₃', val: c.value.qadr || 0, color: 'var(--a3)' },
  { key: 'r', icon: '⚠️', name: 'Risk zonasi', method: 'Integrativ — M₄', val: c.value.risk || 0, color: 'var(--a4)' },
])

function restart() {
  quiz.reset()
  router.push('/')
}

function share() {
  const r = result.value
  const t = type.value
  const txt = `KMI tizimida mening natijam:\n${t.ico} Motivatsiya tipi: ${t.name}\n📊 KMI indeksi: ${r.kmi}/100\n⚡ Ichki motivatsiya: ${c.value.ichki}\n🎯 Qadriyatlar: ${c.value.qadr}\n\nSiz ham sinab ko'ring!`
  if (navigator.share) {
    navigator.share({ title: 'KMI Natijam', text: txt })
  } else {
    navigator.clipboard.writeText(txt).then(() => toast("Clipboard'ga nusxalandi!", 'success'))
  }
}
</script>

<template>
  <div v-if="loading" class="state-wrap">
    <div class="state-spin"></div>
    <h3>Natija yuklanmoqda…</h3>
  </div>

  <div v-else-if="error" class="state-wrap">
    <h3>Natijani olishda xatolik</h3>
    <p>{{ error }}</p>
    <button class="btn-start" @click="router.push('/')">Bosh sahifa</button>
  </div>

  <section v-else-if="result" id="s-result">
    <!-- Hero -->
    <div class="res-hero">
      <div>
        <div class="rh-lbl">Kasbiy Motivatsiya Indeksi (KMI)</div>
        <div class="rh-who">{{ who || 'Foydalanuvchi natijasi' }}</div>
        <div class="rh-score">{{ result.kmi }}<small>/100</small></div>
        <div class="rh-desc">{{ type.desc }}</div>
      </div>
      <div class="type-card">
        <div class="tc-ico">{{ type.ico }}</div>
        <div class="tc-cat">Motivatsiya tipi</div>
        <div class="tc-name">{{ type.name }}</div>
        <div class="tc-kmi">KMI: {{ result.kmi }} / 100</div>
      </div>
    </div>

    <!-- Donut + ko'rsatkichlar -->
    <div class="two-col">
      <div class="chart-card">
        <div class="cc-title">Taqsimot</div>
        <DonutChart :data="donutData" />
        <div class="legend-list">
          <div class="leg-row"><div class="leg-dot" style="background: var(--a1)"></div><div class="leg-name">Ichki motivatsiya</div><div class="leg-val">{{ c.ichki }}</div></div>
          <div class="leg-row"><div class="leg-dot" style="background: var(--a2)"></div><div class="leg-name">Tashqi motivatsiya</div><div class="leg-val">{{ c.tashqi }}</div></div>
          <div class="leg-row"><div class="leg-dot" style="background: var(--a3)"></div><div class="leg-name">Qadriyatlar</div><div class="leg-val">{{ c.qadr }}</div></div>
          <div class="leg-row"><div class="leg-dot" style="background: var(--a4)"></div><div class="leg-name">Risk zonasi</div><div class="leg-val">{{ c.risk }}</div></div>
        </div>
      </div>
      <div class="subs-card">
        <div class="card-title">Ko'rsatkichlar</div>
        <div class="sub-list">
          <div v-for="s in subs" :key="s.key" class="sub-row">
            <div class="sr-top">
              <div class="sr-left">
                <div class="sr-icon">{{ s.icon }}</div>
                <div class="sr-name">{{ s.name }}</div>
                <div class="sr-method">{{ s.method }}</div>
              </div>
              <div class="sr-val">{{ s.val }}</div>
            </div>
            <div class="sr-bar">
              <div class="sr-fill" :style="{ width: (animated ? s.val : 0) + '%', background: s.color }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Radar -->
    <div class="radar-card">
      <div class="card-title">Radar profil tahlili</div>
      <RadarChart :values="radarValues" />
    </div>

    <!-- Golomshtok sohalari -->
    <div v-if="c.spheres" class="radar-card">
      <div class="card-title">Qiziqishlar xaritasi (Golomshtok)</div>
      <GolomshtokSpheres :spheres="c.spheres" :dominant="c.dominant_sphere" />
    </div>

    <!-- Risk -->
    <div class="risk-card" :class="type.riskClass">
      <div class="risk-ico">{{ type.riskIco }}</div>
      <div>
        <div class="risk-title">{{ type.riskTitle }}</div>
        <div class="risk-desc">{{ type.riskDesc }}</div>
      </div>
    </div>

    <!-- Avtomatik tahlil -->
    <AiAnalysis :result="result" />

    <!-- Tavsiyalar -->
    <div class="recs-card">
      <div class="card-title">Shaxsiy tavsiyalar</div>
      <div class="rec-item" v-for="(r, i) in type.recs" :key="i">
        <div class="rec-ico">{{ r.i }}</div>
        <div>
          <div class="rec-title">{{ r.t }}</div>
          <div class="rec-text">{{ r.d }}</div>
        </div>
      </div>
    </div>

    <!-- Kasblar -->
    <div class="careers-card">
      <div class="card-title">Mos kasbiy yo'nalishlar</div>
      <div class="career-grid">
        <div class="career-item" v-for="(cr, i) in type.careers" :key="i">
          <div class="ci-ico">{{ cr.i }}</div>
          <div class="ci-name">{{ cr.n }}</div>
          <div class="ci-match">{{ cr.m }} mos</div>
        </div>
      </div>
    </div>

    <div class="res-acts">
      <button class="btn-act ba-s" @click="restart">← Qayta boshlash</button>
      <button class="btn-act ba-s" @click="share">🔗 Ulashish</button>
      <button class="btn-act ba-s" @click="router.push('/admin')">📊 Admin panel</button>
      <button class="btn-act ba-p" @click="() => window.print()">📄 PDF hisobot</button>
    </div>
  </section>
</template>
