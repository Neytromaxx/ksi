<script setup>
import { ref, onMounted } from 'vue'
import { kmiApi } from '@/api/kmi'

// Bosqich 3: AI tahlil backend /kmi/results/{id}/ai endpointidan olinadi
// (Claude serverda chaqiriladi). So'rov muvaffaqiyatsiz bo'lsa — mahalliy
// hisoblangan zaxira matn ko'rsatiladi, shuning uchun sahifa hech qachon
// bo'sh qolmaydi.
const props = defineProps({
  result: { type: Object, required: true },
})

const loading = ref(true)
const html = ref('')
const model = ref('')

// mdParagraphs: "**Sarlavha.** matn" ni HTML ga o'giradi
function toHtml(text) {
  return text
    .split(/\n{2,}/)
    .map((p) => `<p style="margin-bottom:12px">${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</p>`)
    .join('')
}

function localFallback() {
  const c = props.result.components || {}
  const r = props.result
  const ichki = c.ichki ?? 0
  const qadr = c.qadr ?? 0
  const risk = c.risk ?? 0
  const typeText =
    r.motivation_type === 'intrinsic'
      ? 'ichki motivatsiya ustunligi'
      : r.motivation_type === 'mixed'
        ? 'ichki va tashqi omillar muvozanati'
        : 'tashqi omillar ustunligi'
  const parts = [
    `**Umumiy tahlil.** KMI indeksingiz ${r.kmi}/100 — bu ${typeText}ni ko'rsatadi.`,
    ichki >= 60
      ? `**Kuchli tomonlar.** Ichki motivatsiyangiz yuqori — kasbiy barqarorlikning ishonchli asosi.`
      : `**Kuchli tomonlar.** Qadriyatlar indeksingiz ${qadr} — aniq hayotiy ustuvorliklaringiz bor.`,
    risk >= 50
      ? `**Diqqat kerak.** Risk ko'rsatkichi ${risk} — motivatsiyani mustahkamlashga e'tibor bering.`
      : `**Diqqat kerak.** Risk darajasi ${risk} nazorat ostida.`,
    c.dominant_sphere_name
      ? `**Kasbiy yo'nalish.** Dominant sohangiz — ${c.dominant_sphere_name}.`
      : '',
  ].filter(Boolean)
  return parts.join('\n\n')
}

onMounted(async () => {
  try {
    const data = await kmiApi.resultAi(props.result.session_id)
    html.value = toHtml(data.content)
    model.value = data.model
  } catch {
    html.value = toHtml(localFallback())
    model.value = 'mahalliy'
  } finally {
    loading.value = false
  }
})

const subLabel = () => {
  if (model.value === 'fallback' || model.value === 'mahalliy') return 'KMI ko\'rsatkichlari asosida'
  return `${model.value} tomonidan generatsiya qilindi`
}
</script>

<template>
  <div class="ai-card">
    <div class="ai-header">
      <div class="ai-spark">✨</div>
      <div>
        <div class="ai-label">AI Tahlil</div>
        <div class="ai-sub">{{ subLabel() }}</div>
      </div>
    </div>
    <div v-if="loading" class="ai-loading">
      <div class="ai-dots"><span></span><span></span><span></span></div>
      AI tahlil yozilmoqda...
    </div>
    <div v-else class="ai-text" v-html="html"></div>
  </div>
</template>
