<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
  <section id="s-land">
    <div class="land-eyebrow">
      <span class="eyebrow-pulse"></span>Sun'iy intellekt asosida tahlil
    </div>
    <h1 class="land-h1">
      Kasbiy <span class="hl">motivatsiyangizni</span><br />chuqur o'rganib chiqing
    </h1>
    <p class="land-desc">
      Zamfir, Golomshtok va Rokich metodikalarini birlashtirgan integrativ tizim — KMI
      indeksingizni, shaxsiy profilingizni va kasbiy yo'lxaritangizni oling.
    </p>

    <div class="stats-bar">
      <div class="stat-b"><div class="sb-val">30<sub>+</sub></div><div class="sb-key">Savol</div></div>
      <div class="stat-b"><div class="sb-val">4</div><div class="sb-key">Metodika</div></div>
      <div class="stat-b"><div class="sb-val">5<sub>dk</sub></div><div class="sb-key">Vaqt</div></div>
      <div class="stat-b"><div class="sb-val">AI</div><div class="sb-key">Tahlil</div></div>
    </div>

    <div class="method-cards">
      <div class="mc">
        <div class="mc-num">01 / Zamfir</div>
        <div class="mc-ico ico-1">⚡</div>
        <div class="mc-title">Motivatsiya strukturasi</div>
        <div class="mc-text">
          Ichki (IM), tashqi ijobiy (TIM) va tashqi salbiy (TSM) motivatsiya nisbatini
          aniqlaydi.
        </div>
      </div>
      <div class="mc">
        <div class="mc-num">02 / Golomshtok</div>
        <div class="mc-ico ico-2">🧭</div>
        <div class="mc-title">Qiziqishlar xaritasi</div>
        <div class="mc-text">
          Texnika, fan, san'at, odam bilan ishlash va iqtisod sohalari bo'yicha kasbiy
          yo'nalishni belgilaydi.
        </div>
      </div>
      <div class="mc">
        <div class="mc-num">03 / KMI</div>
        <div class="mc-ico ico-3">📊</div>
        <div class="mc-title">Integrativ indeks</div>
        <div class="mc-text">
          To'rtta metodika birlashtirilgan KMI (0–100), radar profil va AI tafsilotlari.
        </div>
      </div>
    </div>

    <div class="land-cta">
      <button class="btn-start" @click="router.push('/test')">
        Baholashni boshlash →
      </button>
      <div class="cta-tags">
        <span>Bepul</span><span>Anonim</span><span>PDF hisobot</span><span>AI tahlil</span>
      </div>
    </div>
  </section>
</template>
