<template>
  <div>
    <nav style="position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,245,238,0.88);backdrop-filter:blur(12px);border-bottom:1px solid rgba(54,49,41,0.07)">
      <div style="max-width:1470px;margin:0 auto;padding:calc(var(--u)*1.3) 5vw;display:flex;align-items:center;justify-content:space-between">
        <NuxtLink to="/" style="font-weight:700;font-size:max(calc(var(--u)*1.5),16px);letter-spacing:-0.02em;display:flex;align-items:center;gap:0.45em;text-decoration:none;color:#363129"><i style="width:calc(var(--u)*1.3);height:calc(var(--u)*1.3);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);font-style:normal"></i>Launcher</NuxtLink>
        <div class="nav-links zh" style="display:flex;align-items:center;gap:calc(var(--u)*2.6);font-size:max(calc(var(--u)*1.05),12px)">
          <div class="nav-item" :class="{ on: mega === 'svc' }" style="padding:calc(var(--u)*1) 0" @mouseenter="openMega('svc')" @mouseleave="leaveMega">
            <NuxtLink class="navlink" to="/services/search-visibility" style="color:#363129;text-decoration:none;position:relative;display:inline-flex;align-items:center;gap:6px">服務 <svg class="chev" width="10" height="10" viewBox="0 0 14 14" fill="none" style="transition:transform 0.25s"><path d="M2 5 L7 10 L12 5" stroke="#363129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></NuxtLink>
            <div class="mega" style="position:absolute;left:0;right:0;top:100%;padding:0 5vw calc(var(--u)*1.5)">
              <div style="max-width:1470px;margin:0 auto;background:#FFFFFF;border-radius:16px;padding:10px;box-shadow:0 24px 60px rgba(54,49,41,0.14);display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
                <NuxtLink class="mega-card" to="/services/search-visibility" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">搜尋與能見度</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">當買家開始搜尋，第一個看到你</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
                <NuxtLink class="mega-card" to="/services/market-analysis" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">市場分析與定位</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">進場之前，先看清你要打的市場</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
                <NuxtLink class="mega-card" to="/services/social-content" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">社群與內容經營</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">持續累積的品牌聲量</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
              </div>
            </div>
          </div>
          <div class="nav-item" :class="{ on: mega === 'case' }" style="padding:calc(var(--u)*1) 0" @mouseenter="openMega('case')" @mouseleave="leaveMega">
            <NuxtLink class="navlink" to="/cases/medical-aesthetics" style="color:#363129;text-decoration:none;position:relative;display:inline-flex;align-items:center;gap:6px">實績 <svg class="chev" width="10" height="10" viewBox="0 0 14 14" fill="none" style="transition:transform 0.25s"><path d="M2 5 L7 10 L12 5" stroke="#363129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></NuxtLink>
            <div class="mega" style="position:absolute;left:0;right:0;top:100%;padding:0 5vw calc(var(--u)*1.5)">
              <div style="max-width:1470px;margin:0 auto;background:#FFFFFF;border-radius:16px;padding:10px;box-shadow:0 24px 60px rgba(54,49,41,0.14);display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
                <NuxtLink class="mega-card" to="/cases/medical-aesthetics" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">醫美診所</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">從零流量到全美前 4</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
                <NuxtLink class="mega-card" to="/cases/tobi-pearce" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">創辦人品牌 Tobi Pearce</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">名人級的內容產線</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
                <NuxtLink class="mega-card" to="/cases/level-up-tv" style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*3);background:rgba(54,49,41,0.045);border-radius:10px;padding:18px;text-decoration:none;color:#363129;min-height:calc(var(--u)*13)" @click="closeAll"><span><span style="display:block;font-size:max(calc(var(--u)*1.2),14px);font-weight:700;margin-bottom:5px">Level Up TV</span><span style="font-size:max(calc(var(--u)*0.95),12px);color:#857C6F;line-height:1.6">LinkedIn 首檔直播節目</span></span><span class="sq" style="width:32px;height:32px;align-self:flex-end;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
              </div>
            </div>
          </div>
          <NuxtLink class="navlink" to="/insights" style="color:#363129;text-decoration:none;position:relative">洞察</NuxtLink><NuxtLink class="navlink" to="/careers" style="color:#363129;text-decoration:none;position:relative">加入我們</NuxtLink>
        </div>
        <div style="display:flex;align-items:center;gap:10px">
          <NuxtLink class="btn nav-cta zh" to="/start" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:transparent;border:0;color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0;border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">預約諮詢 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          <button class="burger" aria-label="選單" style="display:none;width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);min-width:38px;min-height:38px;border:1px solid rgba(54,49,41,0.12);border-radius:calc(var(--u)*0.5);background:transparent;cursor:pointer;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0" @click="toggleMenu"><s style="display:block;width:16px;height:2px;background:#363129;border-radius:2px;transition:transform 0.3s,opacity 0.3s"></s><s style="display:block;width:16px;height:2px;background:#363129;border-radius:2px;transition:transform 0.3s,opacity 0.3s"></s><s style="display:block;width:16px;height:2px;background:#363129;border-radius:2px;transition:transform 0.3s,opacity 0.3s"></s></button>
        </div>
      </div>
    </nav>
    <div class="m-menu zh" style="display:none;position:fixed;inset:0;z-index:99;background:rgba(54,49,41,0.28);backdrop-filter:blur(6px);transform:translateY(-105%);transition:transform 0.4s cubic-bezier(0.625,0.05,0,1)">
      <div style="display:flex;flex-direction:column;height:100%;padding:calc(var(--u)*7.5) 12px 12px;gap:10px">
        <div style="flex:1;overflow-y:auto;background:#FFFFFF;border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px;min-height:0">
          <button class="m-row" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:rgba(54,49,41,0.045);border:0;border-radius:10px;padding:16px 18px;font-size:17px;font-weight:600;color:#363129;cursor:pointer;font-family:inherit;text-align:left" @click="toggleGroup('svc')">服務 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" :style="{ transform: `rotate(${openGroup === 'svc' ? 180 : 0}deg)`, transition: 'transform 0.3s', flex: 'none' }"><path d="M2 5 L7 10 L12 5" stroke="#363129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          <div v-if="openGroup === 'svc'" style="display:flex;flex-direction:column;gap:8px">
            <NuxtLink to="/services/search-visibility" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">搜尋與能見度</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">當買家開始搜尋，第一個看到你</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
            <NuxtLink to="/services/market-analysis" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">市場分析與定位</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">進場之前，先看清你要打的市場</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
            <NuxtLink to="/services/social-content" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">社群與內容經營</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">持續累積的品牌聲量</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
          </div>
          <button class="m-row" style="display:flex;align-items:center;justify-content:space-between;width:100%;background:rgba(54,49,41,0.045);border:0;border-radius:10px;padding:16px 18px;font-size:17px;font-weight:600;color:#363129;cursor:pointer;font-family:inherit;text-align:left" @click="toggleGroup('case')">實績 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" :style="{ transform: `rotate(${openGroup === 'case' ? 180 : 0}deg)`, transition: 'transform 0.3s', flex: 'none' }"><path d="M2 5 L7 10 L12 5" stroke="#363129" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
          <div v-if="openGroup === 'case'" style="display:flex;flex-direction:column;gap:8px">
            <NuxtLink to="/cases/medical-aesthetics" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">醫美診所</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">從零流量到全美前 4</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
            <NuxtLink to="/cases/tobi-pearce" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">創辦人品牌 Tobi Pearce</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">名人級的內容產線</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
            <NuxtLink to="/cases/level-up-tv" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;text-decoration:none;color:#363129" @click="closeMenu"><span style="display:block;font-size:16px;font-weight:600;margin-bottom:4px">Level Up TV</span><span style="display:flex;align-items:flex-end;justify-content:space-between;gap:12px"><span style="font-size:13px;color:#857C6F;line-height:1.5">LinkedIn 首檔直播節目</span><span style="width:32px;height:32px;flex:none;border-radius:8px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:13px">↗</span></span></NuxtLink>
          </div>
          <NuxtLink class="m-row" to="/insights" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;font-size:17px;font-weight:600;color:#363129;text-decoration:none" @click="closeMenu">洞察</NuxtLink>
          <NuxtLink class="m-row" to="/careers" style="display:block;background:rgba(54,49,41,0.045);border-radius:10px;padding:16px 18px;font-size:17px;font-weight:600;color:#363129;text-decoration:none" @click="closeMenu">加入我們</NuxtLink>
        </div>
        <NuxtLink to="/start" style="flex:none;display:flex;align-items:center;justify-content:flex-end;gap:12px;background:#FFFFFF;border-radius:16px;padding:14px 14px 14px 20px;text-decoration:none;color:#363129;font-size:17px;font-weight:700" @click="closeMenu">預約諮詢 <span style="width:38px;height:38px;border-radius:10px;background:#3A78FF;display:grid;place-items:center;color:#FFFFFF;font-weight:700;font-size:15px">↗</span></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const mega = ref<'svc' | 'case' | null>(null)
const openGroup = ref<'svc' | 'case' | null>(null)
let megaTimer: ReturnType<typeof setTimeout> | null = null

function openMega(which: 'svc' | 'case') {
  if (megaTimer) {
    clearTimeout(megaTimer)
    megaTimer = null
  }
  mega.value = which
}
function leaveMega() {
  if (megaTimer) clearTimeout(megaTimer)
  megaTimer = setTimeout(() => {
    mega.value = null
  }, 250)
}
function toggleGroup(which: 'svc' | 'case') {
  openGroup.value = openGroup.value === which ? null : which
}
function toggleMenu() {
  document.body.classList.toggle('menu-open')
}
function closeMenu() {
  document.body.classList.remove('menu-open')
  openGroup.value = null
}
function closeAll() {
  mega.value = null
  closeMenu()
}

const route = useRoute()
watch(
  () => route.path,
  () => {
    mega.value = null
    if (import.meta.client) closeMenu()
  }
)
</script>

<style>
.nav-item .mega { display: none; }
.nav-item.on .mega { display: block; animation: megaIn 0.35s cubic-bezier(0.625, 0.05, 0, 1); }
.nav-item.on > .navlink::after { transform: scaleX(1); }
.nav-item.on .chev { transform: rotate(180deg); }
.mega .mega-card { animation: cardIn 0.5s cubic-bezier(0.625, 0.05, 0, 1) backwards; }
.mega .mega-card:nth-child(1) { animation-delay: 0.04s; }
.mega .mega-card:nth-child(2) { animation-delay: 0.1s; }
.mega .mega-card:nth-child(3) { animation-delay: 0.16s; }
.mega .mega-card:nth-child(4) { animation-delay: 0.22s; }
@keyframes megaIn { from { opacity: 0; transform: translateY(-12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes cardIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
.mega-card { transition: background 0.25s, transform 0.35s cubic-bezier(0.625, 0.05, 0, 1); }
.mega-card:hover { background: rgba(54, 49, 41, 0.085) !important; transform: translateY(-3px); }
.m-row:active { background: rgba(54, 49, 41, 0.09) !important; }
</style>
