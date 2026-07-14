# KMI/CMI Ilmiy-Metodologik Asos va Standartlashtirish Yo'l Xaritasi

**Kasbiy Motivatsiya / Kasbiy Moslik Integrativ Indeksi (Career Matching Index, CMI/KMI)**
Psixometrik qayta loyihalash, validatsiya va milliy standartlashtirish uchun ekspert asos hujjati (v1.0)

> **Maqsad.** Ushbu hujjat mavjud dasturiy prototipni **ilmiy jihatdan asoslangan, standartlashtirilgan psixologik o'lchov tizimiga** aylantirish uchun to'liq metodologik ramka beradi. Hujjat kodni qayta yozmaydi — u Scopus/Web of Science darajasidagi nashr va milliy miqyosda joriy etish uchun yaroqli metodologiyani belgilaydi.
>
> **Tayanch standartlar.** AERA/APA/NCME *Standards for Educational and Psychological Testing* (2014); ITC *Guidelines for Translating and Adapting Tests* (2017) va *Guidelines on Test Use*; EFPA *Test Review Model* (v4.2.6); ISO 10667-1/2:2020; APA Ethics Code; GDPR (2016/679) 9-modda (maxsus toifadagi ma'lumotlar).

---

## 0. Nega qayta loyihalash zarur (ijmoliy diagnoz)

Mavjud tizim (KMI = w₁M₁ + w₂M₂ + w₃M₃ + w₄M₄ / Σw) muhandislik jihatdan ishlaydi, ammo **psixometrik jihatdan validatsiyalanmagan**. Asosiy muammolar:

1. **Konstrukt geterogenligi** — bitta indeksga heterojen konstruktlar (motivatsiya yo'nalishi, qiziqishlar, qadriyatlar) qo'shilgan. Ular bir o'lchovga kelmaydi (§1, §10).
2. **Og'irliklar validatsiyasi noto'g'ri** — og'irliklar `academic_score` ga NNLS regressiya bilan olinadi. Akademik ball kasbiy motivatsiyaning kriteriysi emas; bu kriteriy kontaminatsiyasi va kichik namunada ortiqcha moslashuv (overfitting) xavfi (§18).
3. **Ishonchlilik/validlik dalili yo'q** — Cronbach α, ω, retest, tuzilish validligi hisoblanmagan (§7–§14).
4. **Normalar yo'q** — 75/50 kabi chegaralar nazariy asossiz (§16–§17).
5. **Adolat/DIF tekshirilmagan** — jinsiy/hududiy yotiqlik (bias) xavfi baholanmagan (§13, §20).
6. **Meros metodikalar** — Zamfir–Rean, Golomshtok/Klimov Sovet davri asboblari; qayta validatsiya va mualliflik huquqi/ruxsat zarur (§3, §15).

Quyidagi bo'limlar har bir tavsiya uchun **8 nuqta** tahlilini beradi: (1) nega zarur, (2) ilmiy dalil, (3) nazariy asos, (4) joriy etish strategiyasi, (5) statistik validatsiya, (6) psixometrik validatsiya, (7) cheklovlar, (8) e'tibor bermaslik xavfi.

---

## 1. Konseptual asos (Conceptual Framework)

**Tavsiya 1.1 — Konstruktni yagona nazariy modelga tayang: SCCT + SDT + RIASEC + Super integratsiyasi.**

1. **Nega zarur.** Har qanday o'lchov nazariy konstruktni operatsionallashtiradi. Hozir tizim 3–4 ta metodikani "yig'indi" qiladi, lekin ular ortidagi yagona nazariy tarmoq (nomologik tarmoq) aniqlanmagan. Nazariyasiz tuzilgan indeksning ma'nosi izohlanmaydi.
2. **Ilmiy dalil.** Kasbiy tanlov meta-tahlillari qiziqish–moslik va motivatsiya avtonomligining o'quv/kasbiy natijalar bilan barqaror bog'liqligini ko'rsatadi (Nye et al., 2012, *Perspectives on Psychological Science*; Howard et al., 2021, SDT meta-tahlili, *Journal of Vocational Behavior*).
3. **Nazariy asos.**
   - **RIASEC** (Holland, 1997) — qiziqishlar tipologiyasi (Golomshtok/Klimov o'rniga zamonaviy, xalqaro validatsiyalangan model).
   - **Social Cognitive Career Theory** (Lent, Brown, Hackett, 1994) — o'z-samaradorlik, natija kutish, maqsad.
   - **Self-Determination Theory** (Deci & Ryan, 2000) — ichki/tashqi motivatsiya kontinuumi (Zamfir–Rean o'rniga nazariy tayanch).
   - **Super** (1980) hayot-ko'lam/hayot-makon — rivojlanish bosqichi.
   - **Rokeach/Schwartz** (1973; 1992) — qadriyatlar.
4. **Joriy etish strategiyasi.** CMI ni **ko'p o'lchovli profil** sifatida qayta ta'riflash: yagona "indeks" emas, balki (a) Qiziqishlar (RIASEC), (b) Motivatsiya avtonomligi (SDT), (c) O'z-samaradorlik (SCCT), (d) Qadriyatlar ustuvorligi — subshkalalar. Yagona kompozit ball faqat **formativ model** sifatida (ustuvorlik uchun) alohida hisoblanadi va reflektiv subshkalalardan ajratiladi.
5. **Statistik validatsiya.** Nomologik tarmoq gipotezalari SEM bilan sinaladi (masalan, ichki motivatsiya → maqsad qat'iyati → akademik ishtirok).
6. **Psixometrik validatsiya.** Konstrukt validligi (konvergent/divergent) MTMM (multitrait-multimethod, Campbell & Fiske, 1959) matritsasi bilan.
7. **Cheklovlar.** Integratsiya modeli murakkablashadi; talqin uchun mutaxassis kerak.
8. **E'tibor bermaslik xavfi.** Nazariysiz "indeks" — psixometrik jihatdan mudofaasiz; nashr rad etiladi; xulosalar noto'g'ri qaror qabul qilishga olib keladi (masalan, noto'g'ri kasb tavsiyasi).

---

## 2. Konstruktni ta'riflash (Construct Definition)

**Tavsiya 2.1 — Har bir subkonstrukt uchun konseptual va operatsional ta'rif + nomologik tarmoq yozing.**

- **Konseptual ta'rif:** masalan, "Kasbiy ichki motivatsiya — faoliyatning o'ziga xos qiziqish va zavqdan kelib chiqadigan, tashqi mukofotdan mustaqil harakatlantiruvchi kuch" (SDT).
- **Operatsional ta'rif:** shu konstruktni o'lchaydigan aniq topshiriqlar to'plami, javob formati va ballash qoidasi.
- **Formativ vs reflektiv qaror** (Bollen & Lennox, 1991; Diamantopoulos & Winklhofer, 2001): subshkalalar **reflektiv** (indikatorlar konstruktni aks ettiradi → α/ω, CFA mos), kompozit CMI esa **formativ** (indikatorlar konstruktni tashkil etadi → og'irliklar validatsiyasi boshqacha). Bu ajratish hozirgi tizimda umuman yo'q — bu **kritik xato**.

*Xavf (omitted):* formativ konstruktga reflektiv ishonchlilik (α) qo'llash — metodologik xato, retsenzentlar darhol rad etadi.

---

## 3. Adabiyotlar sharhi (Systematic Literature Review)

**Tavsiya 3.1 — PRISMA (2020) bo'yicha tizimli sharh o'tkazing.**

1. **Nega zarur.** Item bankini nazariy va empirik asosga qo'yish; mavjud validatsiyalangan asboblarni aniqlash; takrorlanishdan qochish.
2. **Ilmiy dalil / asos.** PRISMA 2020 (Page et al., *BMJ*); Cochrane sharh standartlari.
3. **Joriy etish.** Manba bazalari: Scopus, Web of Science, PsycINFO, ERIC. Kalit so'zlar: *vocational interest, career motivation, RIASEC, SDT work motivation, career assessment validity*. Kiritish/chiqarish mezonlari, PRISMA oqim diagrammasi, ≥2 mustaqil skrining qiluvchi, Cohen's κ ≥ .70 kelishuv.
4. **Statistik/psixometrik validatsiya.** Har bir tanlangan asbob uchun ishonchlilik/validlik dalillarini jadvalga oling (evidence table).
5. **Cheklov.** O'zbek/rus tilidagi adabiyot cheklangan — kulrang adabiyot (grey literature) qamrab olinsin.
6. **Xavf.** Sharhsiz item yozish — kontent validligi past, "ixtiro qilingan g'ildirak".

**Muhim huquqiy jihat:** Zamfir–Rean va Golomshtok/Klimov metodikalarining mualliflik huquqi va litsenziyasini tekshiring. Xalqaro nashr uchun **ochiq yoki litsenziyalangan** asboblar (masalan, ochiq RIASEC markerlari, O*NET Interest Profiler) afzal.

---

## 4. Ekspert sharhi — Delphi va kontent validligi

**Tavsiya 4.1 — 2–3 bosqichli Delphi + CVR/CVI hisoblang.**

1. **Nega zarur.** Kontent validligi — validlikning birinchi va zaruriy dalili (AERA/APA/NCME, 2014, 5 manbadan biri).
2. **Ilmiy dalil / asos.** Delphi (Dalkey & Helmer, 1963); Lawshe (1975) **CVR**; Lynn (1986) va Polit & Beck (2006) **CVI (I-CVI, S-CVI)**.
3. **Joriy etish.** 8–12 mustaqil ekspert (psixometrist, kasb psixologi, soha mutaxassisi). Har bir item "muhim / foydali / kerak emas" (CVR) va 4 balli relevantlik (I-CVI) bo'yicha baholanadi. 2–3 raund, kontrolli fikr-mulohaza.
4. **Statistik validatsiya.** **Qabul mezoni:** CVR ≥ Lawshe kritik qiymati (12 ekspert uchun ≈ 0.56); **I-CVI ≥ 0.78**; **S-CVI/Ave ≥ 0.90**; modified kappa (tasodifni tuzatgan).
5. **Psixometrik validatsiya.** Kontent validligi indekslari texnik qo'llanmaga kiritiladi.
6. **Cheklov.** Ekspertlar sonining subyektivligi; kelishuvni ta'minlash uchun aniq ta'riflar zarur.
7. **Xavf.** Kontent validligisiz item bank — nashr va sertifikatsiya to'sig'i (EFPA "Content validity" reytingini pasaytiradi).

---

## 5. Test topshiriqlarini ishlab chiqish (Item Development)

**Tavsiya 5.1 — Item yozish qoidalari + test blueprint (spetsifikatsiya jadvali).**

1. **Nega zarur.** Item sifati o'lchov sifatini belgilaydi.
2. **Ilmiy dalil / asos.** Haladyna, Downing & Rodriguez (2002) 31 item yozish qoidasi; AERA/APA/NCME 4-bob.
3. **Joriy etish.**
   - **Blueprint:** har bir subkonstrukt × facet × item soni matritsasi (masalan, RIASEC 6 tip × 8 item = 48).
   - **Javob formati:** Likert 5–7 bosqich; **teskari kodlangan itemlar** (acquiescence yotiqligiga qarshi). Hozirgi tizimda teskari itemlar mavjud (masalan INTEGRATIVE NEG) — bu to'g'ri boshlanish.
   - **Ijtimoiy maqbullik** (social desirability) nazorati (Marlowe–Crowne qisqa shkalasi yoki bespoke).
   - Item banki dastlab **1.5–2×** kerakli hajmda yoziladi (pilotda kamayadi).
4. **Statistik validatsiya.** Item-total korrelyatsiya (≥ .30), item qiyinligi/joylashuvi, javob variantlari taqsimoti.
5. **Psixometrik validatsiya.** Pilotdan keyin IRT item parametrlari (§12).
6. **Cheklov.** Til va madaniy moslik (§15) bilan bog'liq.
7. **Xavf.** Yomon itemlar → past ishonchlilik, DIF, xato o'lchov.

---

## 6. Pilot test (Pretesting)

**Tavsiya 6.1 — Kognitiv intervyu + kichik pilot + katta pilot.**

1. **Nega zarur.** Item ishlashini empirik tekshirish, tushunarsizliklarni aniqlash.
2. **Ilmiy dalil / asos.** Kognitiv intervyu (Willis, 2005); "think-aloud".
3. **Joriy etish.**
   - **1-bosqich:** 15–30 respondent bilan kognitiv intervyu (item tushunarliligi).
   - **2-bosqich:** kichik pilot n ≈ 100–150 (item taqsimoti, dastlabki α).
   - **3-bosqich:** katta pilot n ≥ **500** (EFA + IRT uchun yetarli).
4. **Statistik validatsiya.** Item bo'yicha yo'qolgan javoblar, floor/ceiling effektlari, javob vaqti.
5. **Psixometrik validatsiya.** Dastlabki dimensionallik va item-fit.
6. **Cheklov.** Pilot namunasi vakillik qilmasligi mumkin — yakuniy normalar uchun emas.
7. **Xavf.** Pilotsiz to'g'ridan-to'g'ri joriy etish — commit bo'lgan xatolarni tuzatib bo'lmaydi.

**Namuna hajmi bo'yicha umumiy qoidalar (jadval):** EFA ≥ 10/item va ≥ 300 (Costello & Osborne, 2005); CFA ≥ 200; IRT GRM ≥ 500; Rasch barqaror kalibratsiya ≥ 250; DIF ≥ 200/guruh; retest ≥ 50.

---

## 7. Ishonchlilik (Reliability)

**Tavsiya 7.1 — α o'rniga ω; test–retest; o'lchov standart xatosi (SEM).**

1. **Nega zarur.** Ishonchlilik — validlikning zaruriy sharti; qaror ishonchini belgilaydi.
2. **Ilmiy dalil / asos.** Cronbach (1951) **α**; McDonald (1999) **ω** (α tau-ekvivalentlik farazini talab qiladi, ko'pincha buziladi — Dunn, Baguley & Brunsden, 2014); test–retest barqarorlik; **SEM = SD·√(1−r_xx)**.
3. **Joriy etish.** Har bir subshkala uchun ω_total va ω_hierarchical; retest interval 2–4 hafta; SEM va 95% ishonch oralig'i har bir ballga.
4. **Statistik validatsiya / Qabul mezoni.** Tadqiqot uchun ≥ .70; amaliy qaror uchun ≥ .80; **individual yuqori-xavf qaror uchun ≥ .90** (Nunnally & Bernstein, 1994); test–retest ≥ .70.
5. **Psixometrik validatsiya.** IRT sharoitida **shartli ishonchlilik / test axboroti funksiyasi** (TIF) — α dan ustun.
6. **Cheklov.** α namuna-bog'liq; yagona ω yetarli emas — dimensionallik tekshirilishi shart.
7. **Xavf.** Ishonchlilik dalilisiz — individual qaror uchun yaroqsiz; huquqiy javobgarlik (noto'g'ri kasb tavsiyasi).

> **Hozirgi tizim uchun:** hech qanday ishonchlilik hisoblanmaydi. Bu **Kritik** kamchilik.

---

## 8. Validlik (Validity) — yagona nazariya

**Tavsiya 8.1 — Messick (1995) yagona validlik + AERA/APA/NCME 5 manba.**

1. **Nega zarur.** Validlik — ballardan chiqariladigan **xulosalarning** asoslanganligi, testning o'zi emas.
2. **Ilmiy dalil / asos.** Messick (1995) 6 aspekt: kontent, substantiv, struktura, umumlashtiruvchanlik, tashqi, **oqibatli (consequential)**. AERA/APA/NCME (2014) 5 manba: (a) test mazmuni, (b) javob jarayonlari, (c) ichki tuzilma, (d) boshqa o'zgaruvchilar bilan aloqa, (e) test qo'llash oqibatlari.
3. **Joriy etish.** Har bir manba uchun alohida tadqiqot dizayni (§9–§14 shu manbalarni to'ldiradi). Kriteriy validligi: kasbiy qoniqish, kasb barqarorligi, akademik ishtirok, RIASEC moslik indeksi (Congruence — Holland).
4. **Statistik validatsiya.** Konvergent (r ≥ .50 ekvivalent asboblar bilan), divergent (past r), kriteriy (prognostik r ≥ .30 amaliy ahamiyatli).
5. **Psixometrik validatsiya.** Struktura validligi CFA/SEM (§10–§11).
6. **Cheklov.** Prognostik validlik uchun uzunlamasına (longitudinal) kuzatuv — vaqt talab etadi.
7. **Xavf.** Validliksiz xulosa — noto'g'ri, ba'zan ziyonli qaror; test "spektakl", ilmiy emas.

---

## 9. Exploratory Factor Analysis (EFA)

- **Nega:** empirik dimensionallikni aniqlash (nazariy struktura tasdiqlanishidan oldin).
- **Asos:** Costello & Osborne (2005); Fabrigar et al. (1999).
- **Joriy etish:** ekstraksiya — **principal axis factoring / ML** (PCA emas); rotatsiya — **oblik (oblimin/promax)** (omillar korrelyatsiyalangan deb faraz); omil sonini aniqlash — **parallel analysis** (Horn, 1965) + scree, Kaiser emas.
- **Qabul mezoni:** KMO ≥ .80; Bartlett p < .001; item yuklamasi ≥ .40; qo'shaloq yuklama < .30; kommunallik ≥ .40.
- **Xavf:** noto'g'ri dimensionallik → keyingi barcha tahlillar buziladi.

---

## 10. Confirmatory Factor Analysis (CFA)

- **Nega:** nazariy o'lchov modelini mustaqil namunada tasdiqlash.
- **Asos:** Brown (2015); Hu & Bentler (1999) mos indekslar.
- **Joriy etish:** EFA namunasidan **ajratilgan** yangi namuna; ordinal Likert uchun **WLSMV** estimator (ML emas); item-omil yuklamalari ≥ .50.
- **Qabul mezoni:** CFI ≥ .95; TLI ≥ .95; RMSEA ≤ .06 (90% CI yuqori chegara < .08); SRMR ≤ .08.
- **Muhim:** CMI ning **formativ** qismi CFA bilan test qilinmaydi — bu boshqa model (MIMIC / formativ SEM).
- **Xavf:** model mosligini tekshirmaslik → soxta tuzilish validligi.

---

## 11. Structural Equation Modeling (SEM)

- **Nega:** nomologik tarmoq gipotezalarini (konstruktlararo yo'llar) tekshirish; kompozit CMI ni formativ/MIMIC model sifatida validatsiya.
- **Asos:** Kline (2016); Bollen (1989); formativ — Diamantopoulos & Winklhofer (2001).
- **Joriy etish:** o'lchov modeli + strukturaviy model; ichki motivatsiya → maqsad → natija yo'llari; bootstrap CI (5000 namuna) bilvosita ta'sirlar uchun.
- **Qabul mezoni:** global fit (yuqoridagidek); yo'l koeffitsientlari nazariy yo'nalishda va p < .05; R² ma'noli.
- **Xavf:** og'irliklarni empirik asoslashning yagona to'g'ri yo'li — SEM/formativ model; usiz og'irliklar ixtiyoriy.

---

## 12. Item Response Theory (IRT)

**Tavsiya 12.1 — Likert yig'indi o'rniga Graded Response / Partial Credit Model.**

1. **Nega zarur.** Likert yig'indisi **ordinal** ma'lumotni interval deb qabul qiladi — noto'g'ri; IRT item-darajali axborot va invariant o'lchov beradi.
2. **Ilmiy dalil / asos.** Samejima (1969) **GRM**; Masters (1982) **PCM**; Embretson & Reise (2000).
3. **Joriy etish.** Har bir subshkala uchun GRM; item diskriminatsiyasi (a) va bosqich chegaralari (b); test axborot funksiyasi (TIF); kelajakda **Computerized Adaptive Testing (CAT)** uchun asos.
4. **Statistik validatsiya.** Item-fit (S-X², infit/outfit); a ≥ 0.5 (afzal ≥ 1.0); monotonlik.
5. **Psixometrik validatsiya.** Shartli ishonchlilik; lokal mustaqillik (Q3 < .20).
6. **Cheklov.** Namuna ≥ 500; farazlar (unidimensionallik, lokal mustaqillik) tekshirilishi shart.
7. **Xavf.** IRTsiz — ball metrikasi asosli emas; CAT va adolat tahlili imkonsiz.

---

## 13. Rasch o'lchovi

- **Nega:** intervalli, namunadan mustaqil ("objective") o'lchov; item-shaxs xaritasi (Wright map).
- **Asos:** Rasch (1960); Andrich (1978) **Rating Scale Model**; Bond & Fox (2015).
- **Joriy etish:** RSM/PCM; **infit/outfit MNSQ 0.5–1.5** (afzal 0.7–1.3); item-shaxs xaritasi; kategoriya ishlashi (monoton bosqich chegaralari).
- **Qabul mezoni:** person separation ≥ 2.0 (reliability ≥ .80); target–item moslik.
- **Cheklov:** Rasch bir parametrli — diskriminatsiya farqlarini modellamaydi (IRT-2PL bilan taqqoslang).
- **Xavf:** intervalli metriksiz — ballarni qo'shish/o'rtachalash matematik jihatdan asossiz.

---

## 14. Differential Item Functioning (DIF)

**Tavsiya 14.1 — Jins, hudud, til, yosh bo'yicha DIF.**

1. **Nega zarur.** Bir xil qobiliyat/xususiyatga ega, lekin turli guruhlardagi respondentlar item'ga turlicha javob berishi — adolatsizlik manbai.
2. **Ilmiy dalil / asos.** Mantel–Haenszel (Holland & Thayer, 1988); logistik regressiya (Swaminathan & Rogers, 1990); IRT asosli DIF (Thissen, Steinberg & Wainer).
3. **Joriy etish.** Har bir demografik ajratma uchun MH + LR + IRT; uniform va non-uniform DIF.
4. **Statistik validatsiya.** MH D-DIF: A (ahamiyatsiz), B, C (katta, |ΔMH| ≥ 1.5) tasnifi (ETS); LR R² o'zgarishi ≥ .035.
5. **Psixometrik validatsiya.** DIF item'lar qayta ko'rib chiqiladi yoki chiqariladi; DIF-free "anchor" to'plami.
6. **Cheklov.** Har guruhda ≥ 200 respondent; ko'p taqqoslashda 1-tur xato inflatsiyasi (FDR nazorati).
7. **Xavf.** DIF'siz — tizimli yotiqlik; huquqiy da'volar; milliy joriy etishda adolatsizlik.

---

## 15. Madaniy-lisoniy moslashtirish (Cross-Cultural Adaptation)

**Tavsiya 15.1 — ITC (2017) bo'yicha to'liq moslashtirish + o'lchov invariantligi.**

1. **Nega zarur.** O'zbek/rus/qoraqalpoq tilidagi versiyalar ekvivalent bo'lishi shart; aks holda ballarni taqqoslab bo'lmaydi.
2. **Ilmiy dalil / asos.** ITC *Guidelines for Translating and Adapting Tests* (2017, 18 qoida); van de Vijver & Leung (1997); **o'lchov invariantligi** — konfigural → metrik → skalar (Vandenberg & Lance, 2000; Meredith, 1993).
3. **Joriy etish.** Forward–back translation, mustaqil panel, uyg'unlashtirish (reconciliation); kognitiv intervyu har tilda; ko'p guruhli CFA (MG-CFA).
4. **Statistik validatsiya.** Invariantlik: ΔCFI ≤ .010 va ΔRMSEA ≤ .015 (Chen, 2007) har bosqichda.
5. **Psixometrik validatsiya.** Skalar invariantlik — o'rtachalarni taqqoslash sharti; qisman invariantlik hujjatlashtiriladi.
6. **Cheklov.** To'liq skalar invariantlik kamdan-kam erishiladi; qisman invariantlik ko'pincha yetarli.
7. **Xavf.** Invariantliksiz til versiyalarini taqqoslash — soxta natija; milliy normalar buziladi.

---

## 16. Normativ tanlab olish (Normative Sampling)

**Tavsiya 16.1 — Vakillik qiluvchi, tabaqalashtirilgan milliy namuna.**

1. **Nega zarur.** Xom ball ma'nosiz; u faqat normativ guruhga nisbatan izohlanadi.
2. **Ilmiy dalil / asos.** AERA/APA/NCME 5-bob; standardizatsiya namunasi.
3. **Joriy etish.** **Tabaqalashtirilgan tasodifiy namuna:** hudud (14 viloyat+Toshkent+QQR), jins, yosh, ta'lim turi (akademik litsey/kollej/OTM), shahar/qishloq — davlat statistikasi proporsiyalari bo'yicha vaznlangan. Maqsad n ≥ **1500–2000** (subgroup normlar uchun har katakda ≥ 100–200).
4. **Statistik validatsiya.** Namuna vakilligini aholi parametrlariga solishtirish (χ²); post-stratifikatsiya vaznlash.
5. **Psixometrik validatsiya.** Subgroup normlari (jins/yosh) DIF/invariantlik natijalariga qarab birlashtiriladi yoki ajratiladi.
6. **Cheklov.** Namuna eskiradi — 5–7 yilda qayta normalash (re-norming).
7. **Xavf.** Qulaylik namunasi (convenience) → yotiq normalar → noto'g'ri protsentillar → noto'g'ri qaror.

---

## 17. Standart ballar (Standard Score Development)

**Tavsiya 17.1 — Xom balldan normalangan standart ballarga (T, sten, protsentil).**

1. **Nega zarur.** Taqqoslanadigan, izohlanadigan metrika.
2. **Ilmiy dalil / asos.** T-ball (M=50, SD=10); sten (M=5.5, SD=2); stanine; protsentil rank; normalizatsiya (area transformation).
3. **Joriy etish.** Normativ namunadan protsentil → normalangan T/sten jadvallari; subshkala profili + kompozit; ishonch oralig'i (SEM asosida) har ballga.
4. **Statistik validatsiya.** Norm jadvallarining silliqligi (smoothing), yosh/jins interpolatsiyasi.
5. **Psixometrik validatsiya.** Ball oralig'ida shartli SEM (IRT'dan).
6. **Cheklov.** Standart ball taqsimot normalligini talab qiladi yoki normalizatsiya qilinadi.
7. **Xavf.** Xom ball (hozirgi 0–100 "KMI") milliy tizim uchun izohsiz; 75/50 chegaralari ilmiy asossiz.

---

## 18. Og'irliklarni optimallashtirish (Weight Optimization) — KRITIK QAYTA ISHLASH

**Tavsiya 18.1 — `academic_score`-ga NNLS regressiyani BEKOR QILING; og'irliklarni SEM/formativ model yoki nazariy asosdan oling.**

1. **Nega zarur.** Hozirgi usul (academic ballga NNLS) **konseptual jihatdan noto'g'ri:**
   - Akademik ball kasbiy motivatsiya/moslik kriteriysi emas (kriteriy **relevantligi** yo'q; kriteriy kontaminatsiyasi).
   - Kichik namunada (n≈12 smoke-testda ko'rilgani kabi) regressiya og'irliklari beqaror, ortiqcha moslashadi (overfitting); R² ≈ 0.02 — deyarli signalsiz.
   - Og'irliklar namunadan namunaga sakraydi → reproduksiya buziladi.
2. **Ilmiy dalil / asos.** Formativ indikator og'irliklari (Bollen & Lennox, 1991); kompozit ballash (Ree, Carretta & Earles, 1998 — birlik og'irliklar ko'pincha regressiya og'irliklaridan barqarorroq, "It don't make no nevermind"); kriteriy validligi mezonlari (Binning & Barrett, 1989).
3. **To'g'ri yondashuvlar (ustuvorlik tartibida):**
   - **(a) Nazariy/ekspert og'irliklar** (Delphi-AHP; Saaty, 1980) — shaffof, barqaror, izohlanadigan.
   - **(b) CFA/SEM yuklamalariga asoslangan og'irliklar** (reflektiv subshkalalar uchun standartlashtirilgan yuklama).
   - **(c) Formativ MIMIC model** — kompozit uchun, tashqi kriteriylar (kasbiy qoniqish, moslik) bilan bog'langan holda.
   - **(d) Birlik (teng) og'irliklar** — baseline; ko'pincha yetarli va eng barqaror.
   - **ML (Random Forest va h.k.)** faqat **katta, vakillik qiluvchi, tashqi validatsiyalangan** ma'lumotda va **haqiqiy kasbiy kriteriy** (akademik ball emas) bilan; nested cross-validation, kalibratsiya, SHAP izohlash bilan.
4. **Statistik validatsiya.** k-qatlamli / nested cross-validation; og'irliklar barqarorligi (bootstrap CI); tashqi namunada shrinkage.
5. **Psixometrik validatsiya.** Kompozit ning kriteriy validligi (prognostik r) va inkremental validligi (subshkalalardan ortiq).
6. **Cheklov.** Formativ modellar identifikatsiyasi murakkab; kriteriy ma'lumot yig'ish uzunlamasına.
7. **Xavf (e'tibor bermaslik).** Noto'g'ri og'irliklar → butun CMI ning validligi qulaydi; nashr rad etiladi; milliy tizim adolatsiz qaror chiqaradi.

> **Amaliy ko'rsatma:** kod darajasida `v1-static` (nazariy) og'irliklarni **asosiy** qilib qoldiring; regressiya modelini faqat "tadqiqot rejimi" sifatida, akademik ball emas, **validatsiyalangan kasbiy kriteriy** kelgach yoqing.

---

## 19. Izohlanadigan skorlash modeli (Explainable Scoring)

**Tavsiya 19.1 — Deterministik, oq quti, izohlanadigan hisoblash; ML faqat izohlash qatlami bilan.**

1. **Nega zarur.** Yuqori-xavf psixologik qaror shaffof va himoyalanadigan bo'lishi shart (GDPR 22-modda — avtomatlashtirilgan qaror; "izohga huquq").
2. **Ilmiy dalil / asos.** XAI (Rudin, 2019 — yuqori-xavfda interpretatsiyalanadigan modellarni afzal ko'rish); SHAP (Lundberg & Lee, 2017) — agar ML ishlatilsa.
3. **Joriy etish.** Hozirgi `prediction.py` ning `factors[]` yondashuvi to'g'ri yo'nalish — buni saqlang va kengaytiring: har bir subball, uning normativ o'rni (protsentil), ishonch oralig'i va qaror qoidasi ko'rsatilsin.
4. **Statistik validatsiya.** Izoh sodiqligi (fidelity) — izoh haqiqiy hisoblashga mos.
5. **Psixometrik validatsiya.** Talqin qo'llanmasi (§23) bilan muvofiqlik.
6. **Cheklov.** Soddalik ↔ aniqlik muvozanati.
7. **Xavf.** Qora quti ("Claude generatsiya qildi") → GDPR buzilishi, ishonchsizlik, apellyatsiya imkonsiz.

> **AI interpretatsiya haqida:** LLM (Claude) faqat **statistik natijani tabiiy tilga o'girish** uchun; u **ball hisoblamasligi**, tashxis qo'ymasligi kerak. Hozirgi arxitektura (hisoblash backend'da, LLM faqat matn) to'g'ri; talqin **validatsiyalangan shablon** bilan cheklanishi kerak.

---

## 20. Yotiqlik va adolat (Bias & Fairness)

**Tavsiya 20.1 — O'lchov yotiqligi (DIF) + prognostik yotiqlik (Cleary) + adolat metrikalar.**

1. **Nega zarur.** Milliy tizim barcha guruhlar uchun teng amal qilishi shart.
2. **Ilmiy dalil / asos.** Cleary (1968) regression model of bias; AERA/APA/NCME 3-bob (Fairness); ISO 10667.
3. **Joriy etish.** DIF (§14) + differensial prognoz (guruhlar bo'yicha regressiya kesishmasi/qiyaligi farqi) + adolat metrikalari (agar tanlov qarori bo'lsa: demografik paritet, teng imkoniyat).
4. **Statistik validatsiya.** Guruhlararo intersept/slope farqi ahamiyatsiz (moderatsiya testi).
5. **Psixometrik validatsiya.** Yotiq item'lar tuzatiladi; adolat hisoboti nashr etiladi.
6. **Cheklov.** "Adolat" ta'riflari o'zaro zid bo'lishi mumkin (impossibility theorem, Kleinberg et al., 2016) — kontekstga qarab tanlansin.
7. **Xavf.** Adolatsizlik → ijtimoiy zarar, huquqiy javobgarlik, sertifikatsiya rad.

---

## 21. Etik talablar (Ethics)

- **Asos:** APA Ethics Code (9-bo'lim, Assessment); ITC Test Use guidelines; Helsinki deklaratsiyasi (tadqiqot).
- **Talablar:** xabardor rozilik (informed consent); voyaga yetmaganlar uchun ota-ona roziligi; natijaning maxfiyligi; **faqat malakali mutaxassis talqini**; noto'g'ri qo'llashdan ogohlantirish (test yagona qaror asosi emas); psixologik zarardan himoya.
- **Xavf:** etik ramkasiz — respondentga zarar, ishonch yo'qolishi, huquqiy da'vo.

---

## 22. Ma'lumotlar boshqaruvi (Data Governance)

- **Asos:** GDPR (2016/679), ayniqsa **9-modda** — psixologik ma'lumot maxsus toifada; O'zbekiston "Shaxsga doir ma'lumotlar to'g'risida"gi qonuni (2019).
- **Talablar:** ma'lumot minimizatsiyasi; maqsadni cheklash; shifrlash (transit+rest); saqlash muddati siyosati; kirish nazorati va audit jurnali; **pseudonimizatsiya/anonimizatsiya** tadqiqot uchun; ma'lumotni o'chirish huquqi; DPIA (Data Protection Impact Assessment).
- **Hozirgi tizim uchun:** admin token — boshlanish; lekin rol asosidagi kirish, audit log, shifrlash, saqlash siyosati kerak.
- **Xavf:** buzilish → qonuniy jarima, ishonch yo'qolishi.

---

## 23. Qo'llanmalar (Technical / Scoring / Interpretation Manuals)

**Tavsiya 23.1 — 3 ta rasmiy qo'llanma (AERA/APA/NCME 7-bob).**

- **Texnik qo'llanma (Technical Manual):** konstrukt, item ishlab chiqish, namuna, barcha ishonchlilik/validlik/IRT/DIF/norm dalillari, cheklovlar.
- **Ballash qo'llanmasi (Scoring Manual):** ballash algoritmi, og'irliklar manbai, standart ball konversiyasi, dasturiy amalga oshirish spetsifikatsiyasi.
- **Talqin qo'llanmasi (Interpretation Manual):** ball oralig'i talqini, profil o'qish, ishonch oralig'i, qaror qoidalari, kim va qanday sharoitda qo'llashi, ogohlantirishlar.
- **Xavf:** qo'llanmasiz — noto'g'ri qo'llash, standartlashtirilmagan talqin, sertifikatsiya rad.

---

## 24. Validatsiya hisoboti (Validation Report)

- **Tuzilma:** referat → konstrukt → metod (namuna, protsedura) → natijalar (α/ω, EFA, CFA, SEM, IRT, Rasch, DIF, invariantlik, normlar) → cheklovlar → xulosa.
- **Standart:** EFPA Test Review Model reyting mezonlariga muvofiq (har bir jihat "adequate/good/excellent").
- **Nashr:** Scopus/WoS jurnaliga (masalan, *Journal of Vocational Behavior*, *Educational and Psychological Measurement*, *European Journal of Psychological Assessment*).

---

## 25. Milliy standartlashtirish yo'l xaritasi

1. Homiylik/mandat (Vazirlik, universitetlar konsortsiumi).
2. Etika komissiyasi ruxsati (IRB).
3. Item bank + Delphi (§4–§5).
4. Pilot (§6).
5. Milliy normativ tadqiqot (§16) — ko'p markazli.
6. To'liq psixometrik validatsiya (§7–§20).
7. Qo'llanmalar (§23) + validatsiya hisoboti (§24).
8. Ekspertlar tayyorlash va sertifikatlash (foydalanuvchi malakasi).
9. Davriy re-norming (5–7 yil) va monitoring.

---

## 26. Xalqaro sertifikatsiya yo'l xaritasi

- **EFPA Test Review** (Yevropa) — reyting olish.
- **ITC** guidelines muvofiqligini hujjatlash.
- **Buros Mental Measurements Yearbook** ga taqdim etish.
- Recenziyalangan **nashrlar** (validatsiya + adaptatsiya maqolalari).
- **Open Science:** preregistration (OSF), ma'lumot/kod ochiqligi (etika doirasida).

---

## 27. Joriy metodologiya vs xalqaro amaliyot — kamchiliklar va ustuvorlik

| # | Kamchilik | Xalqaro talab (manba) | Ustuvorlik |
|---|-----------|----------------------|-----------|
| 1 | Yagona nazariy model yo'q; heterojen konstruktlar qo'shilgan | Konstrukt validligi (Messick 1995; AERA/APA/NCME) | **Kritik** |
| 2 | Og'irliklar akademik ballga NNLS bilan — noto'g'ri kriteriy, overfitting | Formativ/SEM/nazariy og'irliklar (Bollen & Lennox 1991) | **Kritik** |
| 3 | Ishonchlilik (α/ω/retest/SEM) yo'q | ω, retest; individual qaror uchun ≥.90 (Nunnally) | **Kritik** |
| 4 | Validlik dalili (kontent/struktura/kriteriy) yo'q | 5 manba (AERA/APA/NCME 2014) | **Kritik** |
| 5 | Normativ namuna va standart ballar yo'q; 75/50 chegaralar asossiz | Vakillik normalar, T/sten (5-bob) | **Kritik** |
| 6 | DIF/adolat tekshirilmagan | MH/LR/IRT DIF; Fairness (3-bob) | **Yuqori** |
| 7 | Likert yig'indi (ordinal→interval xatosi); IRT/Rasch yo'q | GRM/PCM/Rasch (Samejima; Rasch) | **Yuqori** |
| 8 | Til versiyalari invariantligi tekshirilmagan | ITC 2017; MG-CFA invariantlik | **Yuqori** |
| 9 | Meros metodikalar (Zamfir/Golomshtok) validatsiya/litsenziyasi noaniq | Zamonaviy validatsiyalangan asboblar (RIASEC/O*NET) | **Yuqori** |
| 10 | Kognitiv intervyu/pilot hujjatlashtirilmagan | Pretesting (Willis 2005) | **O'rta** |
| 11 | AI talqin shablon bilan cheklanmagan; XAI/GDPR-22 hujjati yo'q | Interpretatsiyalanadigan model (Rudin 2019); GDPR | **O'rta** |
| 12 | Data governance (DPIA, audit, saqlash siyosati) to'liq emas | GDPR 9-modda; ISO 10667 | **O'rta** |
| 13 | Qo'llanmalar (texnik/ballash/talqin) yo'q | AERA/APA/NCME 7-bob | **O'rta** |
| 14 | Foydalanuvchi malakasi/sertifikatsiya yo'q | ITC Test Use; qo'llovchi malakasi | **Past** |
| 15 | Re-norming/monitoring rejasi yo'q | Davriy qayta normalash | **Past** |

---

## 28. Bosqichma-bosqich joriy etish rejasi va o'lchanadigan qabul mezonlari

### Faza 0 — Boshqaruv va etika (1–2 oy)
- **Vazifalar:** mandat, IRB/etika ruxsati, DPIA, mualliflik huquqi tekshiruvi.
- **Qabul mezoni:** IRB tasdig'i olingan; DPIA hujjati imzolangan; barcha metodikalar litsenziyasi tasdiqlangan.

### Faza 1 — Konseptualizatsiya (2–3 oy)
- **Vazifalar:** nazariy model (§1), konstrukt ta'riflari (§2), PRISMA sharh (§3).
- **Qabul mezoni:** nomologik tarmoq diagrammasi; ≥2 skrinerli PRISMA (κ≥.70); evidence table tayyor.

### Faza 2 — Item ishlab chiqish va kontent validligi (2–3 oy)
- **Vazifalar:** blueprint, item bank (1.5×), Delphi (§4–§5).
- **Qabul mezoni:** **I-CVI≥.78**, **S-CVI/Ave≥.90**; blueprint qamrovi 100%; teskari item nisbati ≥30%.

### Faza 3 — Pilot va item tahlili (2–3 oy)
- **Vazifalar:** kognitiv intervyu, katta pilot n≥500, EFA + dastlabki IRT.
- **Qabul mezoni:** KMO≥.80; Bartlett p<.001; item-total≥.30; nazariy tuzilishga mos omillar; muammoli item'lar chiqarilgan.

### Faza 4 — Milliy normativ tadqiqot (3–4 oy)
- **Vazifalar:** tabaqalashtirilgan namuna n≥1500–2000, ko'p markazli yig'ish.
- **Qabul mezoni:** namuna aholi proporsiyalariga mos (χ² p>.05 vaznlashdan keyin); har subgroup katakda ≥100.

### Faza 5 — To'liq psixometrik validatsiya (3–4 oy)
- **Vazifalar:** CFA, SEM, IRT/Rasch, ω/retest/SEM, DIF, invariantlik, og'irlik modeli (§18), normlar/standart ballar.
- **Qabul mezoni:** CFA CFI≥.95, RMSEA≤.06, SRMR≤.08; ω≥.80 (asosiy subshkalalar); test–retest≥.70; Rasch infit/outfit 0.7–1.3; DIF "C" darajali item yo'q (yoki tuzatilgan); skalar invariantlik ΔCFI≤.010; norm jadvallari (T/sten) tayyor; og'irliklar bootstrap CI barqaror.

### Faza 6 — Hujjatlashtirish va nashr (2–3 oy)
- **Vazifalar:** texnik/ballash/talqin qo'llanmalari (§23), validatsiya hisoboti (§24), maqola.
- **Qabul mezoni:** 3 qo'llanma imzolangan; EFPA mezonlari bo'yicha o'z-baho "good+"; ≥1 maqola jurnalga topshirilgan.

### Faza 7 — Joriy etish, monitoring, re-norming (davomiy)
- **Vazifalar:** foydalanuvchi sertifikatsiyasi, ishlash monitoringi, 5–7 yilda re-norming.
- **Qabul mezoni:** sertifikatlangan foydalanuvchilar; drift monitoringi paneli; re-norming rejasi tasdiqlangan.

---

## 29. Yakuniy xulosa

Mavjud tizim **yaxshi dasturiy prototip**, lekin **standartlashtirilgan psixologik o'lchov emas.** Uni ilmiy tizimga aylantirish uchun eng muhim **kritik** o'zgarishlar: (1) yagona nazariy model, (2) og'irliklarni akademik-ball regressiyasidan formativ/SEM/nazariy asosga o'tkazish, (3) ishonchlilik/validlik dalillari, (4) vakillik normalari va standart ballar. So'ngra **yuqori** ustuvorlikdagi DIF/adolat, IRT/Rasch va til invariantligi. Ushbu yo'l xaritasi 18–24 oyda milliy standartlashtirilgan va xalqaro sertifikatsiyaga yaroqli tizimga olib boradi.

> **Eslatma:** ushbu hujjat metodologik ramka; har bir fazada mahalliy etika kengashi va psixometrist nazorati talab etiladi. Statistik chegaralar (masalan CFI≥.95) sohaviy konvensiyalar bo'lib, kontekstga qarab asoslangan holda moslashtirilishi mumkin.

### Asosiy manbalar (tanlangan)
AERA, APA, NCME (2014). *Standards for Educational and Psychological Testing*. · Bollen & Lennox (1991), *Psychological Bulletin*. · Bond & Fox (2015), *Applying the Rasch Model*. · Brown (2015), *CFA for Applied Research*. · Chen (2007), *SEM*. · Cleary (1968), *J. Educational Measurement*. · Costello & Osborne (2005), *PARE*. · Cronbach (1951), *Psychometrika*. · Deci & Ryan (2000), *Psychological Inquiry*. · Diamantopoulos & Winklhofer (2001), *JMR*. · Embretson & Reise (2000), *IRT for Psychologists*. · Holland (1997), *Making Vocational Choices*. · Holland & Thayer (1988), MH-DIF. · Hu & Bentler (1999), *SEM*. · ITC (2017), *Translating and Adapting Tests*. · Lawshe (1975), *Personnel Psychology*. · Lent, Brown & Hackett (1994), *JVB*. · Lynn (1986), *Nursing Research*. · Masters (1982), *Psychometrika*. · McDonald (1999), *Test Theory*. · Messick (1995), *American Psychologist*. · Rasch (1960). · Rudin (2019), *Nature Machine Intelligence*. · Samejima (1969), *Psychometrika Monograph*. · Vandenberg & Lance (2000), *Organizational Research Methods*. · Willis (2005), *Cognitive Interviewing*.
