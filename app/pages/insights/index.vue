<template>
  <div class="page-insights">
    <!-- 版頭 -->
    <header style="padding:calc(var(--u)*16) 0 calc(var(--u)*6)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">洞察 Insights</div>
        <h1 class="h-hero zh reveal" style="font-size:calc(var(--u)*5.4);line-height:1.16;font-weight:700;margin:0 0 calc(var(--u)*3)">出海路上，<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">我們正在想的事</em>。</h1>
        <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0">來自北美、澳洲與台灣第一線的市場觀察——不是理論，是操盤日誌。</p>
      </div>
    </header>

    <!-- 精選文章 -->
    <section style="padding:calc(var(--u)*4) 0">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <NuxtLink class="hovcard g2 fade-up" to="/insights/foreign-feel" style="position:relative;display:grid;grid-template-columns:1.1fr 1fr;gap:calc(var(--u)*3);padding:calc(var(--u)*1.25);text-decoration:none;color:#363129">
          <span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span>
          <span style="position:relative;z-index:1;display:block;height:calc(var(--u)*28);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#585046,#2C2822);display:flex;align-items:flex-end;padding:calc(var(--u)*1.25);color:#fff;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);text-transform:uppercase">FEATURED — FOREIGN FEEL</span>
          <span style="position:relative;z-index:1;display:flex;flex-direction:column;justify-content:center;padding:calc(var(--u)*2) calc(var(--u)*2) calc(var(--u)*2) calc(var(--u)*1)">
            <span class="zh" style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);color:#857C6F"><i style="width:calc(var(--u)*0.9);height:calc(var(--u)*0.9);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>出海失敗學 01</span>
            <b class="zh" style="font-size:calc(var(--u)*2.8);line-height:1.3;font-weight:700;margin-top:calc(var(--u)*1.25)">為什麼你的英文官網，當地人一眼就覺得「怪」?</b>
            <span class="zh" style="color:#857C6F;font-size:max(calc(var(--u)*1.15),13px);line-height:1.8;margin-top:calc(var(--u)*1.25);max-width:32em">三秒鐘的判決:本地感與外國感的差距,藏在字體、照片、排版密度和 CTA 用詞裡。</span>
            <span style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);color:#857C6F;margin-top:calc(var(--u)*2)">DANIEL — 2026.07.02 · 8 分鐘讀完</span>
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- 篩選 + 文章牆 -->
    <section style="padding:calc(var(--u)*4) 0 calc(var(--u)*2)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="zh fade-up" style="display:flex;gap:calc(var(--u)*0.8);flex-wrap:wrap;margin-bottom:calc(var(--u)*3)">
          <button :class="['ftag', { on: filter === 'all' }]" style="height:calc(var(--u)*3.5);padding:0 calc(var(--u)*1.75);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;background:#FFFFFF;color:#363129;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:max(calc(var(--u)*1),12px);transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out" @click="setFilter('all')">全部</button>
          <button :class="['ftag', { on: filter === '市場進入' }]" style="height:calc(var(--u)*3.5);padding:0 calc(var(--u)*1.75);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;background:#FFFFFF;color:#363129;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:max(calc(var(--u)*1),12px);transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out" @click="setFilter('市場進入')">市場進入</button>
          <button :class="['ftag', { on: filter === '搜尋' }]" style="height:calc(var(--u)*3.5);padding:0 calc(var(--u)*1.75);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;background:#FFFFFF;color:#363129;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:max(calc(var(--u)*1),12px);transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out" @click="setFilter('搜尋')">搜尋</button>
          <button :class="['ftag', { on: filter === '品牌' }]" style="height:calc(var(--u)*3.5);padding:0 calc(var(--u)*1.75);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;background:#FFFFFF;color:#363129;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:max(calc(var(--u)*1),12px);transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out" @click="setFilter('品牌')">品牌</button>
          <button :class="['ftag', { on: filter === '社群' }]" style="height:calc(var(--u)*3.5);padding:0 calc(var(--u)*1.75);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;background:#FFFFFF;color:#363129;font-family:'Noto Sans TC',sans-serif;font-weight:500;font-size:max(calc(var(--u)*1),12px);transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out" @click="setFilter('社群')">社群</button>
        </div>
        <div id="wall" class="g3" style="display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*1)">
          <NuxtLink v-show="isShown('品牌')" class="hovcard zh fade-up" data-cat="品牌" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#655C50,#35302A)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>出海失敗學</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">為什麼你的英文官網，當地人一眼就覺得「怪」?</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.07.02</span></span></NuxtLink>
          <NuxtLink v-show="isShown('市場進入')" class="hovcard zh fade-up" data-cat="市場進入" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#4C453C,#26221D)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>市場進入</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">台灣品牌進北美最貴的一課:先投廣告，再做品牌</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.06.18</span></span></NuxtLink>
          <NuxtLink v-show="isShown('市場進入')" class="hovcard zh fade-up" data-cat="市場進入" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#585046,#2C2822)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>市場進入</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">派人駐美 vs 在地團隊:一張成本試算表</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.06.05</span></span></NuxtLink>
          <NuxtLink v-show="isShown('搜尋')" class="hovcard zh fade-up" data-cat="搜尋" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#6B6156,#332E28)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>搜尋</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">北美買家怎麼搜尋?台灣老闆最常猜錯的五件事</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.05.22</span></span></NuxtLink>
          <NuxtLink v-show="isShown('搜尋')" class="hovcard zh fade-up" data-cat="搜尋" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#574F45,#2B2721)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>搜尋</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">AI 搜尋時代，品牌如何出現在 ChatGPT 的答案裡</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.05.08</span></span></NuxtLink>
          <NuxtLink v-show="isShown('市場進入')" class="hovcard zh fade-up" data-cat="市場進入" to="/insights/foreign-feel" style="position:relative;display:flex;flex-direction:column;padding:calc(var(--u)*1.25);text-decoration:none;color:#363129"><span class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></span><span style="position:relative;z-index:1;display:block;height:calc(var(--u)*15);border-radius:calc(var(--u)*0.5);background:linear-gradient(160deg,#655C50,#35302A)"></span><span style="position:relative;z-index:1;padding:calc(var(--u)*1.5) calc(var(--u)*1) calc(var(--u)*1)"><span style="display:flex;align-items:center;gap:0.6em;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F"><i style="width:calc(var(--u)*0.8);height:calc(var(--u)*0.8);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>市場進入</span><b style="display:block;font-size:max(calc(var(--u)*1.5),15px);line-height:1.45;font-weight:700;margin-top:calc(var(--u)*1)">90 天登陸計畫:我們的方法論完整公開</b><span style="display:block;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);color:#857C6F;margin-top:calc(var(--u)*1.5)">2026.04.25</span></span></NuxtLink>
        </div>
        <p v-show="wallEmpty" id="wall-empty" class="zh" style="color:#857C6F;margin:calc(var(--u)*4) 0 0">這個分類還沒有文章——很快就有。</p>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
useLauncherSeo({
  title: '洞察 — Launcher',
  description: '出海英語市場的實戰洞察：市場進入、英文 SEO、品牌在地化與社群經營，操盤手第一手筆記。',
  path: '/insights'
})
useLauncherMotion()

// 文章牆篩選(對應 DCLogic bindFilters)
const wallCats = ['品牌', '市場進入', '市場進入', '搜尋', '搜尋', '市場進入']
const filter = ref('all')

function isShown(cat: string) {
  return filter.value === 'all' || filter.value === cat
}

const wallEmpty = computed(() => !wallCats.some((c) => isShown(c)))

async function setFilter(f: string) {
  filter.value = f
  await nextTick()
  if (import.meta.client) {
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    ScrollTrigger.refresh()
  }
}
</script>

<style>
.page-insights .ftag.on { background: #453F37 !important; color: #F6F0E7 !important; }
@media (max-width: 900px) {
  .page-insights .g2, .page-insights .g3 { grid-template-columns: 1fr !important; }
  .page-insights .h-hero { font-size: clamp(30px, 8.6vw, 40px) !important; line-height: 1.2 !important; }
  .page-insights .h-sec { font-size: clamp(23px, 6.6vw, 32px) !important; line-height: 1.24 !important; }
}
</style>
