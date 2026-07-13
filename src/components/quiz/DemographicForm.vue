<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Object, required: true },
})
const emit = defineEmits(['update:modelValue'])

const COURSES = ['', '1-kurs', '2-kurs', '3-kurs', '4-kurs', 'Magistrant', 'Doktorant', 'Xodim', 'Boshqacha']
const GENDERS = ['', 'Erkak', 'Ayol', 'Boshqacha']

const form = reactive({
  full_name: props.modelValue.full_name || '',
  age: props.modelValue.age || '',
  course: props.modelValue.course || '',
  direction: props.modelValue.direction || '',
  gender: props.modelValue.gender || '',
  institution: props.modelValue.institution || '',
  academic_score: props.modelValue.academic_score || '',
})

watch(form, (v) => emit('update:modelValue', { ...v }), { deep: true })
</script>

<template>
  <div class="demo-card">
    <div class="dc-label">👤 Demografik ma'lumotlar</div>
    <div class="frow">
      <div class="fl">
        <label>Ism va familiya *</label>
        <input v-model="form.full_name" type="text" placeholder="Masalan: Alisher Qodirov" />
      </div>
      <div class="fl">
        <label>Yosh</label>
        <input v-model="form.age" type="number" placeholder="21" min="14" max="80" />
      </div>
    </div>
    <div class="frow">
      <div class="fl">
        <label>Kurs / Daraja</label>
        <select v-model="form.course">
          <option v-for="c in COURSES" :key="c" :value="c">{{ c || 'Tanlang...' }}</option>
        </select>
      </div>
      <div class="fl">
        <label>Mutaxassislik / Yo'nalish</label>
        <input v-model="form.direction" type="text" placeholder="Masalan: Psixologiya" />
      </div>
    </div>
    <div class="frow">
      <div class="fl">
        <label>Jinsi</label>
        <select v-model="form.gender">
          <option v-for="g in GENDERS" :key="g" :value="g">{{ g || 'Tanlang...' }}</option>
        </select>
      </div>
      <div class="fl">
        <label>Muassasa</label>
        <input v-model="form.institution" type="text" placeholder="Masalan: TDPU" />
      </div>
    </div>
    <div class="frow f1">
      <div class="fl">
        <label>Akademik ko'rsatkich (GPA yoki o'zlashtirish %, ixtiyoriy)</label>
        <input v-model="form.academic_score" type="number" placeholder="85" min="0" max="100" />
      </div>
    </div>
  </div>
</template>
