<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

defineProps({
  hasResult: { type: Boolean, default: false },
})

const route = useRoute()
const router = useRouter()

const isHome = computed(() => route.name === 'landing')
const isAdmin = computed(() => route.name === 'admin')
</script>

<template>
  <nav>
    <div class="nav-logo" @click="router.push('/')">
      <div class="nl-box">🧠</div>
      <div class="nl-name">KMI <b>·</b> Tizim</div>
    </div>
    <div class="nav-pills">
      <div class="npill" :class="{ act: isHome }" @click="router.push('/')">Asosiy</div>
      <div
        v-if="hasResult"
        class="npill"
        :class="{ act: route.name === 'result' }"
        @click="router.push('/natija')"
      >
        Natija
      </div>
      <div class="npill adm" :class="{ act: isAdmin }" @click="router.push('/admin')">
        Admin Panel
      </div>
    </div>
  </nav>
</template>
