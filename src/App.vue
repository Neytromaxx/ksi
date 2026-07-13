<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import AppNav from '@/components/common/AppNav.vue'
import AppToast from '@/components/common/AppToast.vue'
import { useQuizStore } from '@/stores/quiz'

const route = useRoute()
const quiz = useQuizStore()

// Natija sahifasiga o'tish mumkinligi (nav pill uchun)
const hasResult = computed(() => !!quiz.result)
</script>

<template>
  <div class="mesh">
    <div class="mesh-dot m1"></div>
    <div class="mesh-dot m2"></div>
    <div class="mesh-dot m3"></div>
  </div>

  <div class="wrap">
    <AppNav :has-result="hasResult" />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="route.path" class="route-fade-enter-active" />
    </RouterView>
  </div>

  <AppToast />
</template>
