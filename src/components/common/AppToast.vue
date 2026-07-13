<script setup>
import { useToast } from '@/composables/useToast'
const { toastState } = useToast()
</script>

<template>
  <div class="toast" :class="[toastState.type, { show: toastState.visible }]">
    <span>{{ toastState.type === 'success' ? '✅' : '❌' }}</span>
    <span>{{ toastState.message }}</span>
  </div>
</template>
