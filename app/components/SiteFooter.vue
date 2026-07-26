<template>
  <section style="padding:calc(var(--u)*14) 0 0">
    <div class="ink-panel" style="background:#3A342D;border-radius:calc(var(--u)*2);margin:0 5vw;max-width:1470px;color:#F6F0E7">
      <div v-if="showCta" style="padding:calc(var(--u)*9) calc(var(--u)*5)">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">開始 Start</div>
        <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)">{{ ctaPre }}<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em;color:#B7C9FF">{{ ctaEm }}</em>{{ ctaPost }}</h2>
        <NuxtLink class="btn zh fade-up" to="/start" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">預約市場診斷 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
        <div class="offices fade-up zh" style="display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*2);margin-top:calc(var(--u)*5);max-width:1078px">
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Launcher Taichung</h5><p style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;line-height:1.7;margin:0">台中市 [地址]</p></div>
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Launcher New York</h5><p style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;line-height:1.7;margin:0">New York, NY [地址]</p></div>
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Contact Daniel</h5><a class="flink" href="mailto:hello@withlauncher.com" style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;text-decoration:none;line-height:1.7">hello@withlauncher.com</a></div>
        </div>
      </div>
      <footer>
        <div class="zh" style="display:flex;justify-content:space-between;gap:calc(var(--u)*3);flex-wrap:wrap;padding:calc(var(--u)*5) calc(var(--u)*5) calc(var(--u)*3);border-top:1px solid rgba(246,240,231,0.16)">
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">服務</h5><NuxtLink class="flink" to="/services/market-analysis" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">市場分析與定位</NuxtLink><NuxtLink class="flink" to="/services/search-visibility" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">搜尋與能見度</NuxtLink><NuxtLink class="flink" to="/services/social-content" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">社群與內容經營</NuxtLink><NuxtLink class="flink" to="/start" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">市場進入診斷</NuxtLink></div>
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">案例</h5><NuxtLink class="flink" to="/cases/na-saas" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">北美 SaaS 品牌</NuxtLink><NuxtLink class="flink" to="/cases/ny-dtc" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">紐約 DTC 品牌</NuxtLink><NuxtLink class="flink" to="/cases/au-social" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">澳洲消費品牌</NuxtLink></div>
          <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">資源</h5><NuxtLink class="flink" to="/insights" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">洞察</NuxtLink><NuxtLink class="flink" to="/insights/foreign-feel" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">出海失敗學</NuxtLink></div>
        </div>
        <div style="padding:0 calc(var(--u)*5) calc(var(--u)*2.5);font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);display:flex;justify-content:space-between;color:#ABA192"><span>© 2026 LAUNCHER.tw</span></div>
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    showCta?: boolean
    ctaPre?: string
    ctaEm?: string
    ctaPost?: string
  }>(),
  {
    showCta: true,
    ctaPre: '準備好',
    ctaEm: '進入市場',
    ctaPost: '了嗎?'
  }
)
</script>
