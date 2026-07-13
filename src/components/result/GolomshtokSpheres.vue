<script setup>
import { computed } from 'vue'

const props = defineProps({
  spheres: { type: Object, required: true }, // { TEX: 80, FAN: .. }
  dominant: { type: String, default: null },
})

const NAMES = {
  TEX: 'Texnika va texnologiya',
  FAN: 'Tabiiy-ilmiy soha',
  SAN: "San'at va ijod",
  ODM: 'Odam bilan ishlash',
  IQT: 'Iqtisod va biznes',
}

const rows = computed(() =>
  Object.entries(props.spheres)
    .map(([code, val]) => ({ code, name: NAMES[code] || code, val }))
    .sort((a, b) => b.val - a.val),
)
</script>

<template>
  <div class="sphere-list">
    <div
      v-for="row in rows"
      :key="row.code"
      class="sphere-row"
      :class="{ dom: row.code === dominant }"
    >
      <div class="sp-top">
        <span class="sp-name">{{ row.name }}</span>
        <span>{{ row.val }}</span>
      </div>
      <div class="sphere-bar">
        <div class="sphere-fill" :style="{ width: row.val + '%' }"></div>
      </div>
    </div>
  </div>
</template>
