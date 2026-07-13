<script setup>
const props = defineProps({
  question: { type: Object, required: true },
  index: { type: Number, required: true }, // umumiy tartib raqami (1..N)
  badge: { type: String, default: 'qb-i' },
  badgeLabel: { type: String, default: '' },
  value: { type: [Number, null], default: null },
})
const emit = defineEmits(['pick'])

function pick(v) {
  emit('pick', props.question.id, v)
}
</script>

<template>
  <div class="q-block" :class="{ lit: value != null }">
    <span class="q-badge" :class="badge">{{ badgeLabel }}</span>
    <div class="q-text"><span class="q-num">{{ index }}.</span>{{ question.text }}</div>
    <div class="opts">
      <label
        v-for="opt in question.options"
        :key="opt.value"
        class="opt"
        :class="{ sel: value === opt.value }"
        @click="pick(opt.value)"
      >
        <input type="radio" :name="'q' + question.id" :value="opt.value" />
        <div class="opt-radio"></div>
        <div class="opt-txt">{{ opt.label }}</div>
        <div class="opt-num">{{ opt.value }}</div>
      </label>
    </div>
  </div>
</template>
