// src/data/motivationTypes.js
// Motivatsiya tiplariga bog'langan statik kontent (legacy getType() dan ko'chirilgan).
// Backend `motivation_type` qiymatini qaytaradi: intrinsic / mixed / extrinsic.

export const MOTIVATION_TYPES = {
  intrinsic: {
    ico: '🚀',
    name: 'Ichki motivatsiyali',
    desc: 'Siz kasbni chuqur sevgi va qiziqishdan tanlaysiz — bu eng barqaror va uzoq muddatli motivatsiya turi.',
    riskClass: 'rc-low',
    riskIco: '✅',
    riskTitle: '✅ Past risk — Yaxshi zonada',
    riskDesc:
      "Motivatsion tushkunlik xavfi minimal. Hozirgi yo'nalishni kuchaytiring va chuqurlashtiring.",
    recs: [
      { i: '📚', t: "Loyiha asosida o'qish", d: "Ichki motivatsiya kuchli bo'lganda project-based learning eng samaralisi. Tanlagan sohangizdagi real muammolarga yechim izlang." },
      { i: '🤝', t: 'Mentorlik va ulashish', d: "Bilimingizni boshqalarga o'rgatish ikkilamchi foyda beradi: bilimni mustahkamlaydi va motivatsiyani yanada oshiradi." },
      { i: '🗺️', t: '10 yillik yo\'lxarita', d: "Ichki motivatsiya bilan uzoq muddatli maqsad qo'yish oson. Kasbiy va shaxsiy o'sish xaritasini tuzing." },
      { i: '🏆', t: 'Elita darajasiga intiling', d: "Sohangizdagi eng zo'r mutaxassislar bilan bog'laning. Konferentsiyalar, ilmiy maqolalar, jamoalar." },
    ],
    careers: [
      { i: '🔬', n: 'Ilmiy tadqiqot', m: '96%' },
      { i: '🎓', n: "Ta'lim sohasi", m: '92%' },
      { i: '💡', n: 'Innovatsiya', m: '89%' },
      { i: '🏛️', n: 'Davlat xizmati', m: '84%' },
      { i: '✍️', n: 'Ijodiy kasb', m: '82%' },
      { i: '⚕️', n: "Sog'liqni saqlash", m: '80%' },
    ],
  },
  mixed: {
    ico: '⚖️',
    name: 'Aralash motivatsiyali',
    desc: "Ichki qiziqish va tashqi omillar teng ta'sir qiladi. To'g'ri yo'naltirilsa, bu kuchli kombinatsiya.",
    riskClass: 'rc-mid',
    riskIco: '⚠️',
    riskTitle: "⚠️ O'rta risk — Diqqat talab etadi",
    riskDesc:
      "Ma'lum sharoitlarda motivatsiyangiz pasayishi mumkin. Ichki motivatsiyani mustahkamlash zarur.",
    recs: [
      { i: '🔍', t: 'Ichki sabablarni topish', d: '"Tashqi mukofot bo\'lmasa ham bu ishni qilarmidim?" Agar "ha" bo\'lsa, ichki motivatsiyangiz bor — uni rivojlantirish mumkin.' },
      { i: '📅', t: 'Haftalik mini-maqsadlar', d: "Kichik, o'lchab bo'ladigan maqsadlar qo'ying. Ularni bajarish ichki quvonchni oshiradi." },
      { i: '💬', t: 'Karyera psixologi', d: "Kasbiy yo'nalishni aniqlashtirish uchun mutaxassis bilan suhbat — kuchlilik belgisi." },
      { i: '🌊', t: '"Flow" holatini toping', d: "Vaqt o'tib ketishini sezmagan faoliyat — ichki motivatsiya manbasi. Ko'proq shu narsani qiling." },
    ],
    careers: [
      { i: '📊', n: 'Biznes tahlil', m: '78%' },
      { i: '🤝', n: 'HR va kadrlar', m: '75%' },
      { i: '📣', n: 'Marketing', m: '73%' },
      { i: '🖥️', n: 'IT', m: '70%' },
      { i: '💰', n: 'Moliya', m: '68%' },
      { i: '🏗️', n: 'Loyiha menejeri', m: '65%' },
    ],
  },
  extrinsic: {
    ico: '⚡',
    name: 'Tashqi motivatsiyali',
    desc: "Asosiy harakatlantiruvchi kuch tashqi omillar. Bu me'yoriy holat, lekin uzoq muddatda toliqishga olib kelishi mumkin.",
    riskClass: 'rc-high',
    riskIco: '🔴',
    riskTitle: "🔴 Yuqori risk — Darhol e'tibor kerak",
    riskDesc:
      "Motivatsion tushkunlik (burnout) xavfi yuqori. Kasbiy yo'nalish va hayot ustuvorliklarini qayta ko'rib chiqish zarur.",
    recs: [
      { i: '🌱', t: "Qadriyatlarni qayta ko'rish", d: "Hayotda eng muhim narsa nima? Hozirgi yo'nalish shu qadriyatlarga xizmat qilyaptimi?" },
      { i: '🧘', t: 'Psixologik holat', d: "Tashqi motivatsiya ko'pincha qo'rquv va majburiyatdan kelib chiqadi. Mutaxassis bilan suhbat foydali bo'ladi." },
      { i: '🔄', t: 'Kichik qadamlar', d: "Kuniga 20 daqiqa shaxsan qiziqarli narsa — ichki motivatsiyani uyg'otishning eng ishonchli yo'li." },
      { i: '🗣️', t: 'Ishonchli odamlar', d: "Yaqin do'stingiz yoki oilangiz bilan ochiq gaplashing. Tashqaridan ko'rish yangi yo'l ko'rsatadi." },
    ],
    careers: [
      { i: '🛠️', n: 'Amaliy kasb', m: '62%' },
      { i: '🎨', n: 'Ijodiy kasb', m: '59%' },
      { i: '🌿', n: 'Ekologiya', m: '57%' },
      { i: '📚', n: 'Kutubxonachi', m: '55%' },
      { i: '🤲', n: 'Ijtimoiy ish', m: '54%' },
      { i: '🏞️', n: 'Turizm', m: '52%' },
    ],
  },
}

export function getType(motivationType) {
  return MOTIVATION_TYPES[motivationType] || MOTIVATION_TYPES.mixed
}

// Motivatsiya tipi nomlari (admin jadval / diagrammalar uchun)
export const TYPE_LABELS = {
  intrinsic: 'Ichki motivatsiyali',
  mixed: 'Aralash motivatsiyali',
  extrinsic: 'Tashqi motivatsiyali',
}
