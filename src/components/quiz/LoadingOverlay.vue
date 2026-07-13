<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const STEPS = [
  "Ma'lumotlar normallanmoqda",
  'Zamfir koeffitsientlari hisoblanmoqda',
  'Golomshtok qiziqishlar xaritasi qurilmoqda',
  'Qadriyatlar profili tahlil qilinmoqda',
  'KMI indeksi va risk zonasi aniqlanmoqda',
]
const done = ref(0)
let timers = []

onMounted(() => {
  STEPS.forEach((_, i) => {
    timers.push(setTimeout(() => (done.value = i + 1), 400 + i * 550))
  })
})
onUnmounted(() => timers.forEach(clearTimeout))
</script>

<template>
  <section id="s-load">
    <div class="load-orb">
      <div class="lorb-r2"></div>
      <div class="lorb-r1"></div>
      <div class="lorb-core">🧠</div>
    </div>
    <h3>Tahlil qilinmoqda…</h3>
    <p class="load-sub">Iltimos, bir necha soniya kuting</p>
    <div class="lsteps">
      <div
        v-for="(s, i) in STEPS"
        :key="i"
        class="lstep"
        :class="{ ok: done > i }"
      >
        <span class="li">{{ done > i ? '✅' : '⏳' }}</span> {{ s }}
      </div>
    </div>
  </section>
</template>
