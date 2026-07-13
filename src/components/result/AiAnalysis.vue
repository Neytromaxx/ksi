<script setup>
import { computed } from 'vue'

// Bosqich 1: mahalliy hisoblangan tahliliy xulosa (tashqi A', chaqiruvsiz).
// Bosqich 3 da backend /kmi/ai endpointi ulanganda shu komponent almashtiriladi.
const props = defineProps({
  result: { type: Object, required: true },
})

const c = computed(() => props.result.components || {})

const paragraphs = computed(() => {
  const r = props.result
  const comp = c.value
  const ichki = comp.ichki ?? 0
  const tashqi = comp.tashqi ?? 0
  const qadr = comp.qadr ?? 0
  const risk = comp.risk ?? 0
  const out = []

  // 1. Umumiy tahlil
  const typeText =
    r.motivation_type === 'intrinsic'
      ? 'ichki motivatsiya ustunligi'
      : r.motivation_type === 'mixed'
        ? 'ichki va tashqi omillar muvozanati'
        : 'tashqi omillar ustunligi'
  out.push({
    label: 'Umumiy tahlil',
    text: `Sizning KMI indeksingiz <strong>${r.kmi}/100</strong> — bu ${typeText}ni ko'rsatadi. Ichki motivatsiya darajasi <strong>${ichki}</strong>, tashqi motivatsiya <strong>${tashqi}</strong> balni tashkil etadi.`,
  })

  // 2. Kuchli tomonlar
  out.push({
    label: 'Kuchli tomonlar',
    text:
      ichki >= 60
        ? `Ichki motivatsiyangiz yuqori — bu kasbiy barqarorlikning eng ishonchli asosi. Qadriyatlar indeksi (<strong>${qadr}</strong>) ham kasbiy yo'nalishingizni qo'llab-quvvatlaydi.`
        : `Qadriyatlar indeksingiz <strong>${qadr}</strong> — bu sizda aniq hayotiy ustuvorliklar borligini bildiradi. Shu asosga tayanib ichki motivatsiyani rivojlantirish mumkin.`,
  })

  // 3. Diqqat kerak
  out.push({
    label: 'Diqqat kerak',
    text:
      risk >= 50
        ? `Risk zonasi ko'rsatkichi <strong>${risk}</strong> — nisbatan yuqori. Tashqi bosim yoki qo'rquvga asoslangan motivatsiya uzoq muddatda toliqishga olib kelishi mumkin.`
        : `Risk darajasi (<strong>${risk}</strong>) nazorat ostida. Hozirgi holatni saqlash va ichki qiziqishni kuchaytirishga e'tibor bering.`,
  })

  // 4. Golomshtok — dominant soha
  if (comp.dominant_sphere_name) {
    out.push({
      label: 'Kasbiy yo\'nalish',
      text: `Qiziqishlar xaritangizda <strong>${comp.dominant_sphere_name}</strong> sohasi eng yuqori ifodalangan. Kasb tanlashda shu yo'nalishga mos imkoniyatlarni ko'rib chiqish tavsiya etiladi.`,
    })
  }

  return out
})
</script>

<template>
  <div class="ai-card">
    <div class="ai-header">
      <div class="ai-spark">✨</div>
      <div>
        <div class="ai-label">Avtomatik tahlil</div>
        <div class="ai-sub">KMI ko'rsatkichlari asosida generatsiya qilindi</div>
      </div>
    </div>
    <div class="ai-text">
      <template v-for="(p, i) in paragraphs" :key="i">
        <p style="margin-bottom: 12px">
          <strong>{{ p.label }}.</strong> <span v-html="p.text"></span>
        </p>
      </template>
    </div>
  </div>
</template>
