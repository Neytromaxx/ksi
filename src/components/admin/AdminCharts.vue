<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Chart } from 'chart.js/auto'
import { TYPE_LABELS } from '@/data/motivationTypes'

const props = defineProps({
  rows: { type: Array, required: true }, // [{ kmi, motivation_type, ... }]
})

const histCanvas = ref(null)
const pieCanvas = ref(null)
let histChart = null
let pieChart = null

function render() {
  // Histogram: KMI taqsimoti
  const bins = [0, 0, 0, 0, 0] // 0-20,21-40,41-60,61-80,81-100
  props.rows.forEach((r) => bins[Math.min(4, Math.floor(r.kmi / 20))]++)

  if (histChart) histChart.destroy()
  histChart = new Chart(histCanvas.value.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['0-20', '21-40', '41-60', '61-80', '81-100'],
      datasets: [
        {
          label: 'Sinaluvchilar',
          data: bins,
          backgroundColor: [
            'rgba(239,68,68,.6)',
            'rgba(245,158,11,.6)',
            'rgba(245,158,11,.5)',
            'rgba(79,110,247,.6)',
            'rgba(6,214,160,.6)',
          ],
          borderColor: ['#ef4444', '#f59e0b', '#f59e0b', '#4f6ef7', '#06d6a0'],
          borderWidth: 1.5,
          borderRadius: 6,
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#7b84b0', font: { size: 11 } } },
        y: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#7b84b0', font: { size: 11 }, stepSize: 1 } },
      },
    },
  })

  // Pie: motivatsiya tiplari
  const types = {}
  props.rows.forEach((r) => {
    const label = TYPE_LABELS[r.motivation_type] || r.motivation_type
    types[label] = (types[label] || 0) + 1
  })
  if (pieChart) pieChart.destroy()
  pieChart = new Chart(pieCanvas.value.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: Object.keys(types),
      datasets: [
        {
          data: Object.values(types),
          backgroundColor: ['rgba(79,110,247,.7)', 'rgba(245,158,11,.7)', 'rgba(239,68,68,.7)'],
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    },
    options: { plugins: { legend: { labels: { color: '#7b84b0', font: { size: 11 }, padding: 14 } } } },
  })
}

onMounted(render)
watch(() => props.rows, render, { deep: true })
onBeforeUnmount(() => {
  if (histChart) histChart.destroy()
  if (pieChart) pieChart.destroy()
})
</script>

<template>
  <div class="adm-charts">
    <div class="adm-chart-card">
      <div class="acc-title">KMI taqsimoti (histogram)</div>
      <canvas ref="histCanvas" width="400" height="220"></canvas>
    </div>
    <div class="adm-chart-card">
      <div class="acc-title">Motivatsiya tiplari</div>
      <canvas ref="pieCanvas" width="400" height="220"></canvas>
    </div>
  </div>
</template>
