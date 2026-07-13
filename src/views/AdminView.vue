<script setup>
import { ref, computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useAdminStore } from '@/stores/admin'
import { useToast } from '@/composables/useToast'
import { TYPE_LABELS } from '@/data/motivationTypes'
import AdminCharts from '@/components/admin/AdminCharts.vue'

const admin = useAdminStore()
const { toast } = useToast()
const {
  authed, summary, results, chartRows, total, page, search, loading, error,
} = storeToRefs(admin)

const tokenInput = ref(admin.token)
const searchInput = ref('')
let searchTimer = null

onMounted(async () => {
  // sessionStorage da token bo'lsa avtomatik kirishga urinamiz
  if (admin.token && !authed.value) {
    try {
      await admin.authenticate(admin.token)
    } catch {
      /* qayta login so'raladi */
    }
  }
})

async function login() {
  if (!tokenInput.value.trim()) return
  try {
    await admin.authenticate(tokenInput.value)
  } catch {
    /* xato admin.error da */
  }
}

function onSearch() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => admin.setSearch(searchInput.value), 350)
}

function kmiClass(kmi) {
  return kmi >= 75 ? 'kb-high' : kmi >= 50 ? 'kb-mid' : 'kb-low'
}

function fmtDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('uz-UZ')
}

const avgDelta = computed(() => {
  const a = summary.value?.avg_kmi
  if (a == null) return { text: '', cls: '' }
  if (a >= 65) return { text: '↑ Yaxshi daraja', cls: 'up' }
  if (a >= 50) return { text: "→ O'rta daraja", cls: '' }
  return { text: '↓ Pastroq', cls: 'dn' }
})

function exportCSV() {
  if (!chartRows.value.length) {
    toast("Eksport qilish uchun ma'lumot yo'q", 'error')
    return
  }
  const h = ['#', 'Ism', 'KMI', 'Tip', 'Yo\'nalish', 'Kurs', 'Sana']
  const rows = chartRows.value.map((r, i) => [
    i + 1,
    r.full_name,
    r.kmi,
    TYPE_LABELS[r.motivation_type] || r.motivation_type,
    r.direction || '',
    r.course || '',
    fmtDate(r.finished_at),
  ])
  const csv = [h, ...rows]
    .map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `KMI_natijalar_${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
  toast(`${chartRows.value.length} ta natija eksport qilindi`, 'success')
}

async function refresh() {
  try {
    await admin.refreshSummary()
    await admin.fetchCharts()
    await admin.fetchResults(page.value)
    toast('Yangilandi', 'success')
  } catch (e) {
    toast(e.message, 'error')
  }
}
</script>

<template>
  <!-- Login gate -->
  <section v-if="!authed" id="s-admin">
    <div class="auth-card">
      <div class="auth-ico">🔒</div>
      <h2>Admin panel</h2>
      <p>Davom etish uchun admin tokenini kiriting</p>
      <input
        v-model="tokenInput"
        type="password"
        placeholder="Admin token"
        @keyup.enter="login"
      />
      <div class="auth-err">{{ error }}</div>
      <button class="btn-start" style="width: 100%; padding: 14px" :disabled="loading" @click="login">
        {{ loading ? 'Tekshirilmoqda…' : 'Kirish' }}
      </button>
    </div>
  </section>

  <!-- Dashboard -->
  <section v-else id="s-admin">
    <div class="adm-header">
      <div>
        <h2 class="adm-h">Admin Panel</h2>
        <div class="adm-meta">Jami {{ summary?.total ?? 0 }} ta natija</div>
      </div>
      <div class="adm-actions">
        <button class="btn-adm e" @click="exportCSV">⬇ Export CSV</button>
        <button class="btn-adm p" @click="refresh">↻ Yangilash</button>
        <button class="btn-ghost-sm" @click="admin.logout()">Chiqish</button>
      </div>
    </div>

    <!-- KPIs -->
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-num">{{ summary?.total ?? 0 }}</div><div class="kpi-lbl">Jami sinaluvchi</div></div>
      <div class="kpi">
        <div class="kpi-num">{{ summary?.avg_kmi ?? '—' }}</div>
        <div class="kpi-lbl">O'rtacha KMI</div>
        <div class="kpi-delta" :class="avgDelta.cls">{{ avgDelta.text }}</div>
      </div>
      <div class="kpi"><div class="kpi-num">{{ summary?.intrinsic_count ?? 0 }}</div><div class="kpi-lbl">Ichki motivatsiyali</div></div>
      <div class="kpi"><div class="kpi-num">{{ summary?.risk_count ?? 0 }}</div><div class="kpi-lbl">Risk zonasida</div></div>
      <div class="kpi"><div class="kpi-num">{{ summary?.today_count ?? 0 }}</div><div class="kpi-lbl">Bugun</div></div>
    </div>

    <!-- Charts -->
    <AdminCharts v-if="chartRows.length" :rows="chartRows" />

    <!-- Table -->
    <div class="table-card">
      <div class="tc-head">
        <div class="tc-head-title">Barcha natijalar</div>
        <div class="search-box">
          <span style="color: var(--t3)">🔍</span>
          <input v-model="searchInput" type="text" placeholder="Ism yoki yo'nalish..." @input="onSearch" />
        </div>
      </div>
      <table>
        <thead>
          <tr><th>#</th><th>Ism</th><th>KMI</th><th>Tip</th><th>Yo'nalish</th><th>Kurs</th><th>Sana</th></tr>
        </thead>
        <tbody>
          <tr v-if="!results.length">
            <td colspan="7">
              <div class="empty-state"><div class="empty-ico">📭</div><div class="empty-msg">Natija topilmadi</div></div>
            </td>
          </tr>
          <tr v-for="(r, i) in results" :key="r.session_id">
            <td>{{ (page - 1) * admin.perPage + i + 1 }}</td>
            <td class="td-name">{{ r.full_name }}</td>
            <td><span class="kmi-badge-sm" :class="kmiClass(r.kmi)">{{ r.kmi }}</span></td>
            <td><span class="type-chip">{{ TYPE_LABELS[r.motivation_type] || r.motivation_type }}</span></td>
            <td>{{ r.direction || '—' }}</td>
            <td>{{ r.course || '—' }}</td>
            <td>{{ fmtDate(r.finished_at) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <div class="pag-info">{{ total }} natija</div>
        <div class="pag-btns">
          <button
            v-for="p in admin.pages"
            :key="p"
            class="pag-btn"
            :class="{ cur: p === page }"
            @click="admin.fetchResults(p)"
          >
            {{ p }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
