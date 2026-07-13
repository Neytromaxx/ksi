<script setup>
import { computed } from 'vue'

const props = defineProps({
  prediction: { type: Object, required: true },
})

const p = computed(() => props.prediction)

const trajMeta = computed(() => {
  const code = p.value.trajectory?.code
  if (code === 'improving') return { ico: '📈', cls: 'tj-up' }
  if (code === 'declining') return { ico: '📉', cls: 'tj-down' }
  return { ico: '➡️', cls: 'tj-flat' }
})

const confLabel = computed(() => {
  const l = p.value.confidence?.level
  return l === 'high' ? 'Yuqori' : l === 'medium' ? "O'rta" : 'Past'
})
</script>

<template>
  <div class="pred-card">
    <div class="card-title">Kasbiy yo'nalish prognozi</div>

    <div class="pred-head">
      <div class="pred-track">
        <div class="pt-label">Tavsiya etilgan yo'nalish</div>
        <div class="pt-name">{{ p.recommended_track }}</div>
      </div>
      <div class="pred-traj" :class="trajMeta.cls">
        <span class="ptj-ico">{{ trajMeta.ico }}</span>
        <div>
          <div class="ptj-label">{{ p.trajectory?.label }}</div>
          <div class="ptj-conf">Ishonch: {{ confLabel }}</div>
        </div>
      </div>
    </div>

    <div v-if="p.recommended_careers?.length" class="pred-careers">
      <span v-for="(cr, i) in p.recommended_careers" :key="i" class="pred-chip">{{ cr }}</span>
    </div>

    <div class="pred-note">{{ p.stability_note }}</div>

    <div v-if="p.factors?.length" class="pred-factors">
      <div class="pf-title">Prognoz asoslari</div>
      <ul>
        <li v-for="(f, i) in p.factors" :key="i">{{ f }}</li>
      </ul>
    </div>
  </div>
</template>
