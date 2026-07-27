<template>
  <div class="page-start">
    <!-- H1 -->
    <header style="padding:calc(var(--u)*16) 0 calc(var(--u)*4)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">開始 Start</div>
        <h1 class="h-hero zh reveal" style="font-size:calc(var(--u)*5.4);line-height:1.16;font-weight:700;margin:0 0 calc(var(--u)*3);max-width:18em">跟<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">真正在市場裡的人</em>聊，不是跟業務聊。</h1>
        <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0">填好表單，48 小時內由台灣端品牌策略師親自回覆——不是罐頭信，是針對你的品牌與市場的初步觀察。</p>
      </div>
    </header>

    <!-- 雙欄 -->
    <section style="padding:calc(var(--u)*4) 0 calc(var(--u)*2)">
      <div class="start-grid" style="max-width:1470px;margin:0 auto;padding:0 5vw;display:grid;grid-template-columns:0.45fr 0.55fr;gap:calc(var(--u)*5);align-items:start">
        <div class="s-left">
          <h5 class="zh" style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#857C6F;margin:0 0 calc(var(--u)*2)">接下來會發生什麼</h5>
          <div class="zh fade-up" style="display:flex;flex-direction:column;gap:calc(var(--u)*2.5);border-top:1px solid rgba(54,49,41,0.1);padding-top:calc(var(--u)*2.5)">
            <div style="display:flex;gap:calc(var(--u)*2);align-items:baseline"><span style="font-family:'Space Mono',monospace;color:#3A78FF;font-weight:700;font-size:max(calc(var(--u)*1.1),12px);flex:0 0 auto">01</span><div><b style="font-size:max(calc(var(--u)*1.4),15px)">收到你的資料</b><p style="margin:calc(var(--u)*0.5) 0 0;color:#857C6F;line-height:1.8;font-size:max(calc(var(--u)*1.15),13px)">我們先做功課:看你的網站、查你的市場，48 小時內回覆。</p></div></div>
            <div style="display:flex;gap:calc(var(--u)*2);align-items:baseline"><span style="font-family:'Space Mono',monospace;color:#3A78FF;font-weight:700;font-size:max(calc(var(--u)*1.1),12px);flex:0 0 auto">02</span><div><b style="font-size:max(calc(var(--u)*1.4),15px)">30 分鐘診斷對談</b><p style="margin:calc(var(--u)*0.5) 0 0;color:#857C6F;line-height:1.8;font-size:max(calc(var(--u)*1.15),13px)">與品牌策略師視訊，必要時北美夥伴加入。談你的市場，不推銷方案。</p></div></div>
            <div style="display:flex;gap:calc(var(--u)*2);align-items:baseline"><span style="font-family:'Space Mono',monospace;color:#3A78FF;font-weight:700;font-size:max(calc(var(--u)*1.1),12px);flex:0 0 auto">03</span><div><b style="font-size:max(calc(var(--u)*1.4),15px)">初步機會評估</b><p style="margin:calc(var(--u)*0.5) 0 0;color:#857C6F;line-height:1.8;font-size:max(calc(var(--u)*1.15),13px)">對談後你會收到一頁摘要:我們看到的機會、風險與建議下一步。無論合作與否，這份都是你的。</p></div></div>
          </div>
          <div class="fade-up zh" style="background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2);display:flex;align-items:center;gap:calc(var(--u)*1.5);margin-top:calc(var(--u)*3)">
            <div style="width:calc(var(--u)*5);height:calc(var(--u)*5);border-radius:50%;background:linear-gradient(160deg,#6B6156,#332E28);flex:0 0 auto;filter:grayscale(1)"></div>
            <div><b style="display:block;font-size:max(calc(var(--u)*1.3),14px)">Daniel</b><span style="display:block;font-size:max(calc(var(--u)*1),11px);color:#857C6F">Founder &amp; Strategy</span><a href="mailto:hello@launcher.tw" style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.95),11px);color:#363129">hello@launcher.tw</a></div>
          </div>
          <p class="zh fade-up" style="font-size:calc(var(--u)*2);line-height:1.55;font-weight:500;border-left:2px solid rgba(54,49,41,0.4);padding-left:calc(var(--u)*1.5);margin:calc(var(--u)*3) 0 0">「第一次對談就聽到了我們自己沒想過的市場盲點——而且他們還沒收我們一毛錢。」</p>
          <p class="zh" style="font-size:max(calc(var(--u)*1),11px);color:#857C6F;margin:calc(var(--u)*1) 0 0;padding-left:calc(var(--u)*1.5)">出海準備期品牌 — 創辦人</p>
          <p style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);color:#857C6F;text-transform:uppercase;margin:calc(var(--u)*3.5) 0 0">Taichung × New York × Australia</p>
        </div>
        <div class="s-right">
          <form v-if="!submitted" class="zh" style="background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2.5);display:flex;flex-direction:column;gap:calc(var(--u)*1.75)" @submit.prevent="submit">
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">姓名 *</label><input v-model="form.name" class="fld" type="text" name="name" required placeholder="你的名字"></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">公司 / 品牌名 *</label><input v-model="form.company" class="fld" type="text" name="company" required placeholder="品牌或公司名稱"></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">Email *</label><input v-model="form.email" class="fld" type="email" name="email" required placeholder="you@company.com"></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">品牌網站或社群連結</label><input v-model="form.site" class="fld" type="text" name="site" placeholder="https://"></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">目標市場 *</label><select v-model="form.market" class="fld" name="market" required><option value="">請選擇</option><option>北美</option><option>澳洲 · 紐西蘭</option><option>英國</option><option>其他英語市場</option><option>還在評估</option></select></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">每月行銷預算區間 *</label><select v-model="form.budget" class="fld" name="budget" required><option value="">請選擇</option><option>10 萬以下</option><option>10–30 萬</option><option>30–80 萬</option><option>80 萬以上</option><option>還在規劃</option></select></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">你想解決什麼? *</label><textarea v-model="form.goal" class="fld" name="goal" required rows="4" placeholder="目前卡在哪、試過什麼、目標是什麼" style="resize:vertical;line-height:1.7"></textarea></div>
            <div><label class="zh" style="display:block;font-size:max(calc(var(--u)*1.05),12px);font-weight:700;margin-bottom:calc(var(--u)*0.6)">怎麼知道 Launcher?</label><select v-model="form.source" class="fld" name="source"><option value="">請選擇</option><option>朋友推薦</option><option>LinkedIn</option><option>Google 搜尋</option><option>文章</option><option>其他</option></select></div>
            <button class="btn zh" type="submit" :disabled="sending" style="display:flex;align-items:center;justify-content:center;gap:calc(var(--u)*1);width:100%;height:max(calc(var(--u)*4.25),48px);background:#453F37;border:0;color:#F6F0E7;font-weight:500;font-size:max(calc(var(--u)*1.2),14px);border-radius:calc(var(--u)*0.5);cursor:pointer;font-family:'Noto Sans TC',sans-serif">{{ sending ? '送出中…' : '送出，開始診斷' }} <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></button>
            <p v-if="error" class="zh" style="margin:0;font-size:max(calc(var(--u)*1),12px);color:#C0392B;text-align:center">送出失敗，請再試一次，或直接來信 <a href="mailto:hello@launcher.tw" style="color:#C0392B">hello@launcher.tw</a></p>
            <p class="zh" style="margin:0;font-size:max(calc(var(--u)*0.95),11px);color:#857C6F;text-align:center">送出即表示同意隱私權政策。我們不寄電子報、不外流資料。</p>
          </form>
          <div v-else class="zh" style="background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*6) calc(var(--u)*4);text-align:center">
            <i style="display:inline-grid;place-items:center;width:calc(var(--u)*4.5);height:calc(var(--u)*4.5);background:#3A78FF;color:#FFFFFF;border-radius:calc(var(--u)*0.5);transform:rotate(-8deg);font-style:normal;font-weight:700;font-size:calc(var(--u)*2)">✓</i>
            <h2 class="zh" style="font-size:calc(var(--u)*3.2);font-weight:700;margin:calc(var(--u)*2.5) 0 calc(var(--u)*1.5)">收到了。<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">48 小時內見。</em></h2>
            <p style="color:#857C6F;line-height:1.8;margin:0 auto;max-width:26em">等回覆的同時，可以先讀《出海失敗學》——我們把最常見的出海坑都寫在裡面了。</p>
            <NuxtLink class="btn zh" to="/insights" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#F1E8DC;border:0;color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap;margin-top:calc(var(--u)*3)">去讀洞察 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <SiteFooter :show-cta="false" />
  </div>
</template>

<script setup lang="ts">
useLauncherSeo({
  title: '開始 — Launcher',
  description: '填好表單，48 小時內由台灣端品牌策略師親自回覆。30 分鐘市場診斷對談，談你的市場，不推銷方案。',
  path: '/start'
})
useLauncherMotion()

const form = reactive({
  name: '',
  company: '',
  email: '',
  site: '',
  market: '',
  budget: '',
  goal: '',
  source: ''
})
const submitted = ref(false)
const sending = ref(false)
const error = ref(false)

async function submit() {
  if (sending.value) return
  sending.value = true
  error.value = false
  const eventId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-lead`
  try {
    await $fetch('/api/lead', { method: 'POST', body: { ...form, event_id: eventId } })
    submitted.value = true
    // 轉換事件(GA4 + Meta Pixel,與伺服器端 CAPI 以 event_id 去重)
    try {
      const w = window as any
      if (w.gtag) w.gtag('event', 'generate_lead', { market: form.market, budget: form.budget })
      if (w.fbq) w.fbq('track', 'Lead', {}, { eventID: eventId })
    } catch {}
  } catch {
    error.value = true
  } finally {
    sending.value = false
  }
}
</script>

<style>
.page-start html { scroll-padding-top: calc(var(--u) * 10); }
@media (max-width: 900px) {
  .page-start .start-grid { grid-template-columns: 1fr !important; }
  .page-start .s-left { order: 2; }
  .page-start .s-right { order: 1; }
  .page-start .h-hero { font-size: clamp(28px, 8vw, 38px) !important; line-height: 1.22 !important; }
  .page-start .h-sec { font-size: clamp(23px, 6.6vw, 32px) !important; line-height: 1.24 !important; }
}
</style>
