<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps({
  // [ichki, tashqi, qadr, barqarorlik(100-risk), integr]
  values: { type: Array, required: true },
})

const canvas = ref(null)
let chart = null

function render() {
  if (chart) chart.destroy()
  chart = new Chart(canvas.value.getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['Ichki mot.', 'Tashqi mot.', 'Qadriyatlar', 'Barqarorlik', 'Integratsiya'],
      datasets: [
        {
          label: 'Siz',
          data: props.values,
          backgroundColor: 'rgba(79,110,247,.15)',
          borderColor: 'rgba(79,110,247,.8)',
          pointBackgroundColor: '#4f6ef7',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          borderWidth: 2,
        },
        {
          label: 'Ideal',
          data: [85, 35, 80, 85, 85],
          backgroundColor: 'rgba(6,214,160,.06)',
          borderColor: 'rgba(6,214,160,.35)',
          borderDash: [5, 5],
          pointBackgroundColor: 'rgba(6,214,160,.4)',
          borderWidth: 1.5,
        },
      ],
    },
    options: {
      scales: {
        r: {
          min: 0,
          max: 100,
          grid: { color: 'rgba(255,255,255,.07)' },
          angleLines: { color: 'rgba(255,255,255,.07)' },
          ticks: {
            color: 'rgba(123,132,176,.7)',
            backdropColor: 'transparent',
            stepSize: 25,
            font: { size: 10 },
          },
          pointLabels: { color: '#7b84b0', font: { size: 11 } },
        },
      },
      plugins: {
        legend: { labels: { color: '#7b84b0', font: { size: 11 }, boxWidth: 10, padding: 16 } },
      },
      animation: { duration: 1200 },
    },
  })
}

onMounted(render)
watch(() => props.values, render)
onBeforeUnmount(() => chart && chart.destroy())
</script>

<template>
  <canvas ref="canvas" width="500" height="300" style="max-height: 300px; margin: 0 auto; display: block"></canvas>
</template>
