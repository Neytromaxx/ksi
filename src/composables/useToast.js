// src/composables/useToast.js
// Global toast holati (bitta umumiy reaktiv obyekt).

import { reactive, readonly } from 'vue'

const state = reactive({
  visible: false,
  message: '',
  type: 'success', // success | error
})

let timer = null

export function useToast() {
  function toast(message, type = 'success') {
    state.message = message
    state.type = type
    state.visible = true
    clearTimeout(timer)
    timer = setTimeout(() => {
      state.visible = false
    }, 3000)
  }
  return { toast, toastState: readonly(state) }
}
