<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { Chart } from 'chart.js/auto'

const props = defineProps({
  data: { type: Array, required: true }, // [ichki, tashqi, qadr, risk]
})

const canvas = ref(null)
let chart = null

function render() {
  if (chart) chart.destroy()
  chart = new Chart(canvas.value.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Ichki', 'Tashqi', 'Qadriyatlar', 'Risk'],
      datasets: [
        {
          data: props.data,
          backgroundColor: [
            'rgba(79,110,247,.75)',
            'rgba(139,92,246,.75)',
            'rgba(6,214,160,.75)',
            'rgba(245,158,11,.75)',
          ],
          borderColor: ['#4f6ef7', '#8b5cf6', '#06d6a0', '#f59e0b'],
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      cutout: '68%',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => ` ${c.label}: ${c.raw}` } },
      },
      animation: { animateRotate: true, duration: 1000 },
    },
  })
}

onMounted(render)
watch(() => props.data, render)
onBeforeUnmount(() => chart && chart.destroy())
</script>

<template>
  <canvas ref="canvas" width="180" height="180"></canvas>
</template>
