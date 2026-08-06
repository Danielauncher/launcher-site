<template>
  <div class="page-home">
    <!-- 1 HERO -->
    <header class="hero" style="padding:calc(var(--u)*16) 0 calc(var(--u)*8)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">市場進入合夥人 Market Entry Partner</div>
        <h1 class="h-hero zh reveal" style="font-size:calc(var(--u)*6.2);line-height:1.16;font-weight:700;margin:0 0 calc(var(--u)*8);max-width:16em">我們為亞洲品牌<br>打造進入北美市場的<br><span class="sw zh" style="font-family:'Noto Serif TC',serif;font-size:0.975em">在地行銷引擎</span></h1>
        <div class="hero-grid" style="display:grid;grid-template-columns:1.4fr 0.9fr;gap:calc(var(--u)*5);align-items:end">
          <div>
            <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0">我們建立、優化、放大<br>你在英語市場的品牌能見度與獲客引擎<br>——由每天身處北美與澳洲市場的操盤手執行。</p>
            <div class="fade-up" style="display:flex;gap:calc(var(--u)*1);flex-wrap:wrap;margin-top:calc(var(--u)*2.5)">
              <a class="btn zh" href="#start" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:transparent;border:0;color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0;border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">了解更多 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="av">↓</i><i class="av avd">↓</i></span></a>
            </div>
          </div>
          <div class="hovcard hero-card fade-up" style="position:relative;padding:calc(var(--u)*1.25);justify-self:end;width:min(100%,calc(var(--u)*36))">
            <div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div>
            <div class="hero-card-inner" style="position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1)">
              <div style="display:flex;flex-direction:column;justify-content:space-between;gap:calc(var(--u)*2)">
                <div class="zh" style="font-size:max(calc(var(--u)*1.375),14px);font-weight:700;line-height:1.55">ROAS 17 — 品牌招募型廣告的實戰投報</div>
                <div style="display:flex;align-items:center;justify-content:space-between;gap:calc(var(--u)*1)">
                  <span style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*1),11px);font-weight:700">FEATURED CASE</span>
                  <span class="sq" style="position:relative;overflow:hidden;width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out;flex:0 0 auto"><i class="a2">↗</i><i class="a2 a2d">↗</i></span>
                </div>
              </div>
              <div class="hero-card-img" style="height:calc(var(--u)*12);background:linear-gradient(160deg,#5A5248,#2E2A24);border-radius:calc(var(--u)*0.5)"></div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 2 RESULTS -->
    <section id="results" style="padding:calc(var(--u)*6) 0 calc(var(--u)*10)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="res-head" style="display:grid;grid-template-columns:1.25fr 0.85fr auto;gap:calc(var(--u)*4);align-items:end;margin-bottom:calc(var(--u)*5)">
          <div>
            <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">實績 Results</div>
            <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0">30+ 個品牌<br>信任我們的<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">市場佈局<br></em></h2>
          </div>
          <div class="fade-up">
            <p class="intro zh" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0 0 calc(var(--u)*1.8)">來自台灣、北美與澳洲的品牌，信任 Launcher 團隊成員為他們建立在地能見度與獲客引擎。</p>
            <NuxtLink class="btn zh" to="/cases/medical-aesthetics" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">看所有實績 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          </div>
          <div class="arrows fade-up" style="display:flex;gap:calc(var(--u)*0.8);padding-bottom:calc(var(--u)*0.2)">
            <button class="arrow dim" id="ar-prev" data-dir="-1" style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;font-size:max(calc(var(--u)*1.1),12px);display:grid;place-items:center;background:#453F37;color:#F6F0E7;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out">←</button>
            <button class="arrow" id="ar-next" data-dir="1" style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;font-size:max(calc(var(--u)*1.1),12px);display:grid;place-items:center;background:#453F37;color:#F6F0E7;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out">→</button>
          </div>
        </div>
      </div>
      <div style="overflow:hidden">
        <div class="norail" id="rail" style="display:flex;gap:calc(var(--u)*1);overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 max(5vw,calc(50vw - 735px)) calc(var(--u)*0.5)">
          <div class="case hovcard fade-up" style="position:relative;flex:0 0 calc(var(--u)*37);scroll-snap-align:start;padding:calc(var(--u)*1);min-height:calc(var(--u)*22.5);display:flex;flex-direction:column;justify-content:space-between"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.5);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div><div style="position:relative;z-index:1;padding:calc(var(--u)*1)"><div style="font-weight:700;font-size:max(calc(var(--u)*1.3),13px);display:flex;align-items:center;gap:0.5em"><i style="width:calc(var(--u)*1);height:calc(var(--u)*1);border-radius:calc(var(--u)*0.25);background:#363129;font-style:normal;transform:rotate(-8deg)"></i>醫美診所</div><div style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);color:#857C6F;text-transform:uppercase;margin-top:calc(var(--u)*0.5)">Medical Aesthetics — SEO</div></div><div style="position:relative;z-index:1;display:flex;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)"><span class="go-tile" style="height:calc(var(--u)*6.3);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;font-weight:700;font-size:calc(var(--u)*1.5)"><i style="font-style:normal;display:block;position:relative;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);line-height:0"><svg class="ga1" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="ga2" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></span><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="179" data-suf=" 萬" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">179 萬</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">12 個月自然曝光</span></div><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">前 4 名</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">主打字全美平均排名</span></div></div></div>
          <div class="case hovcard fade-up" style="position:relative;flex:0 0 calc(var(--u)*37);scroll-snap-align:start;padding:calc(var(--u)*1);min-height:calc(var(--u)*22.5);display:flex;flex-direction:column;justify-content:space-between"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.5);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div><div style="position:relative;z-index:1;padding:calc(var(--u)*1)"><div style="font-weight:700;font-size:max(calc(var(--u)*1.3),13px);display:flex;align-items:center;gap:0.5em"><i style="width:calc(var(--u)*1);height:calc(var(--u)*1);border-radius:calc(var(--u)*0.25);background:#363129;font-style:normal;transform:rotate(-8deg)"></i>Level Up TV</div><div style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);color:#857C6F;text-transform:uppercase;margin-top:calc(var(--u)*0.5)">LinkedIn — B2B Media</div></div><div style="position:relative;z-index:1;display:flex;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)"><span class="go-tile" style="height:calc(var(--u)*6.3);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;font-weight:700;font-size:calc(var(--u)*1.5)"><i style="font-style:normal;display:block;position:relative;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);line-height:0"><svg class="ga1" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="ga2" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></span><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="20" data-suf=" 萬+" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">20 萬+</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">LinkedIn Live 觸及</span></div><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="60" data-suf="+ 國" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">60+ 國</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">觀眾遍及地區</span></div></div></div>
          <div class="case hovcard fade-up" style="position:relative;flex:0 0 calc(var(--u)*37);scroll-snap-align:start;padding:calc(var(--u)*1);min-height:calc(var(--u)*22.5);display:flex;flex-direction:column;justify-content:space-between"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.5);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div><div style="position:relative;z-index:1;padding:calc(var(--u)*1)"><div style="font-weight:700;font-size:max(calc(var(--u)*1.3),13px);display:flex;align-items:center;gap:0.5em"><i style="width:calc(var(--u)*1);height:calc(var(--u)*1);border-radius:calc(var(--u)*0.25);background:#363129;font-style:normal;transform:rotate(-8deg)"></i>創辦人品牌 Tobi Pearce</div><div style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);color:#857C6F;text-transform:uppercase;margin-top:calc(var(--u)*0.5)">Founder Brand — Content</div></div><div style="position:relative;z-index:1;display:flex;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)"><span class="go-tile" style="height:calc(var(--u)*6.3);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;font-weight:700;font-size:calc(var(--u)*1.5)"><i style="font-style:normal;display:block;position:relative;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);line-height:0"><svg class="ga1" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="ga2" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></span><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">4 億</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">澳幣出場的創辦人 IP</span></div><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="18" data-suf=" 萬" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">18 萬</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">IG 追蹤(帳號現況)</span></div></div></div>
          <div class="case hovcard fade-up" style="position:relative;flex:0 0 calc(var(--u)*37);scroll-snap-align:start;padding:calc(var(--u)*1);min-height:calc(var(--u)*22.5);display:flex;flex-direction:column;justify-content:space-between"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.5);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div><div style="position:relative;z-index:1;padding:calc(var(--u)*1)"><div style="font-weight:700;font-size:max(calc(var(--u)*1.3),13px);display:flex;align-items:center;gap:0.5em"><i style="width:calc(var(--u)*1);height:calc(var(--u)*1);border-radius:calc(var(--u)*0.25);background:#363129;font-style:normal;transform:rotate(-8deg)"></i>財鑰投資顧問</div><div style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);color:#857C6F;text-transform:uppercase;margin-top:calc(var(--u)*0.5)">Taiwan — Strategy</div></div><div style="position:relative;z-index:1;display:flex;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)"><span class="go-tile" style="height:calc(var(--u)*6.3);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;font-weight:700;font-size:calc(var(--u)*1.5)"><i style="font-style:normal;display:block;position:relative;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);line-height:0"><svg class="ga1" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="ga2" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></span><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">ROAS 17</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">招募型廣告投報</span></div><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="30" data-suf="+" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">30+</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">品牌從零到定位</span></div></div></div>
          <div class="case hovcard fade-up" style="position:relative;flex:0 0 calc(var(--u)*37);scroll-snap-align:start;padding:calc(var(--u)*1);min-height:calc(var(--u)*22.5);display:flex;flex-direction:column;justify-content:space-between"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.5);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div><div style="position:relative;z-index:1;padding:calc(var(--u)*1)"><div style="font-weight:700;font-size:max(calc(var(--u)*1.3),13px);display:flex;align-items:center;gap:0.5em"><i style="width:calc(var(--u)*1);height:calc(var(--u)*1);border-radius:calc(var(--u)*0.25);background:#363129;font-style:normal;transform:rotate(-8deg)"></i>北美電商品牌</div><div style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);color:#857C6F;text-transform:uppercase;margin-top:calc(var(--u)*0.5)">North America — SEO</div></div><div style="position:relative;z-index:1;display:flex;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)"><span class="go-tile" style="height:calc(var(--u)*6.3);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;font-weight:700;font-size:calc(var(--u)*1.5)"><i style="font-style:normal;display:block;position:relative;width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);line-height:0"><svg class="ga1" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg class="ga2" viewBox="0 0 24 24" fill="none" style="position:absolute;inset:0;width:100%;height:100%"><path d="M5 19 L19 5 M9 5 H19 V15" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"></path></svg></i></span><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b data-count="157" data-suf=" 萬" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">157 萬</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">11 個月自然曝光</span></div><div class="stat" style="background:#F1E8DC;border-radius:calc(var(--u)*0.25);height:calc(var(--u)*6.3);padding:0 calc(var(--u)*1);display:flex;flex-direction:column;justify-content:center"><b style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:-0.02em;line-height:1.2">19.6 萬</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F;line-height:1.3">主打字年度曝光</span></div></div></div>
        </div>
      </div>
    </section>

    <!-- 3 SERVICES -->
    <section id="services" style="padding:calc(var(--u)*4) 0 calc(var(--u)*10)">
      <div class="svc-layout" style="max-width:1470px;margin:0 auto;padding:0 5vw;display:grid;grid-template-columns:0.85fr 1.5fr;gap:calc(var(--u)*5);align-items:start">
        <div>
          <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">我們的服務 Our Services</div>
          <div class="svc-photo fade-up" style="height:calc(var(--u)*46);border-radius:calc(var(--u)*0.75);margin-top:calc(var(--u)*8);background:linear-gradient(165deg,#574F45,#2B2721);display:flex;align-items:flex-end;padding:calc(var(--u)*1.25);color:#fff;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);text-transform:uppercase">LAUNCHER — TAICHUNG HQ</div>
        </div>
        <div>
          <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)">升級你的出海能力，放大每一分<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">行銷投資</em>。</h2>
          <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0">更好的在地執行，帶來更好的行銷投報。Launcher 幫你升級進入英語市場的完整引擎——從定位、內容、投放到成效衡量。</p>
          <div class="svc-cards fade-up" style="display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*1);margin-top:calc(var(--u)*4)">
            <NuxtLink class="svc hovcard" to="/services/search-visibility" style="position:relative;padding:calc(var(--u)*2);min-height:calc(var(--u)*26);display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;text-decoration:none;color:inherit"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div>
              <div style="position:relative;z-index:1"><h3 class="zh" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:0;line-height:1.35;margin:0">搜尋與能見度</h3><p class="zh" style="color:#857C6F;font-size:max(calc(var(--u)*1.1),12px);margin:calc(var(--u)*0.8) 0 0;max-width:26em">當北美買家開始搜尋，第一個看到你。</p></div>
              <span class="go" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;display:grid;place-items:center;font-weight:700;align-self:flex-end;position:relative;z-index:1;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span>
            </NuxtLink>
            <NuxtLink class="svc hovcard" to="/services/market-analysis" style="position:relative;padding:calc(var(--u)*2);min-height:calc(var(--u)*26);display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;text-decoration:none;color:inherit"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div>
              <div style="position:relative;z-index:1"><h3 class="zh" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:0;line-height:1.35;margin:0">市場分析與定位</h3><p class="zh" style="color:#857C6F;font-size:max(calc(var(--u)*1.1),12px);margin:calc(var(--u)*0.8) 0 0;max-width:26em">進場之前，先看清你要打的市場。</p></div>
              <span class="go" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;display:grid;place-items:center;font-weight:700;align-self:flex-end;position:relative;z-index:1;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span>
            </NuxtLink>
            <NuxtLink class="svc hovcard" to="/services/social-content" style="position:relative;padding:calc(var(--u)*2);min-height:calc(var(--u)*18);display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;text-decoration:none;color:inherit;grid-column:1 / -1"><div class="bg" style="position:absolute;inset:0;background:#FFFFFF;border-radius:calc(var(--u)*0.75);transition:transform 0.45s cubic-bezier(0.35,1.5,0.6,1)"></div>
              <div style="position:relative;z-index:1"><h3 class="zh" style="font-size:calc(var(--u)*2);font-weight:700;letter-spacing:0;line-height:1.35;margin:0">社群與內容經營</h3><p class="zh" style="color:#857C6F;font-size:max(calc(var(--u)*1.1),12px);margin:calc(var(--u)*0.8) 0 0;max-width:26em">用母語級語感，讓當地受眾停下手指。</p></div>
              <span class="go" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;color:#FFFFFF;display:grid;place-items:center;font-weight:700;align-self:flex-end;position:relative;z-index:1;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span>
            </NuxtLink>
          </div>
          </div>
      </div>
    </section>

    <!-- 4 概念 A -->
    <section style="padding:calc(var(--u)*14) 0 calc(var(--u)*10)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">建立心佔率 Mind-Share First</div>
        <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)">在需求出現之前，先住進當地買家的<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">腦海裡</em>。</h2>
        <div class="concept-grid" style="display:grid;grid-template-columns:1fr 1.1fr;gap:calc(var(--u)*7);margin-top:calc(var(--u)*3);align-items:start">
          <div class="c-text zh fade-up">
            <p style="margin:0 0 1.2em">英語市場的消費者不會因為你出現了就購買。需求無法被強迫——但當需求出現的那一刻，你要是他第一個想起的品牌。</p>
            <p style="margin:0 0 1.2em">所以你的品牌必須在目標客群的生活圈裡持續出現：他們讀的內容、滑的社群、信任的聲音。這不是翻譯，是用當地人的方式，成為當地的聲音。</p>
            <h5 style="font-size:max(calc(var(--u)*1.1),12px);font-weight:700;margin:calc(var(--u)*2) 0 calc(var(--u)*1.2)">結果是？</h5>
            <ul style="margin:0;padding:0">
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">品牌搜尋量持續成長</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更短的信任建立週期</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更高比例的理想客群主動詢問</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">隨時間複利的品牌資產</li>
            </ul>
            <NuxtLink class="btn zh" to="/services/social-content" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap;margin-top:calc(var(--u)*2)">了解更多 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          </div>
          <div class="fade-up" style="background:#FFFFFF;border-radius:calc(var(--u)*2);min-height:calc(var(--u)*34);display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*1),10px);color:#857C6F">VISUAL — MIND-SHARE</div>
        </div>
      </div>
    </section>

    <!-- 5 概念 B -->
    <section style="padding:calc(var(--u)*4) 0 calc(var(--u)*10)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">承接主動需求 Capture Demand</div>
        <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)">當買家開始搜尋，確保他<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">找到的是你</em>。</h2>
        <div class="concept-grid mirror" style="display:grid;grid-template-columns:1fr 1.1fr;gap:calc(var(--u)*7);margin-top:calc(var(--u)*3);align-items:start">
          <div class="c-text zh fade-up" style="order:2">
            <p style="margin:0 0 1.2em">英語市場的買家準備好購買時，會自己做功課。那個時刻來臨，你要出現在他的每一個搜尋結果和比較清單裡。</p>
            <p style="margin:0 0 1.2em">我們幫你識別當地搜尋行為，建立搜尋能見度基建，架設最有效的需求承接動線——這是市場之外的團隊最難補的一課，卻是我們的日常。</p>
            <h5 style="font-size:max(calc(var(--u)*1.1),12px);font-weight:700;margin:calc(var(--u)*2) 0 calc(var(--u)*1.2)">結果是？</h5>
            <ul style="margin:0;padding:0">
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更多主動進站的高意圖流量</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更低的獲客成本</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更高的落地頁轉換率</li>
              <li class="li-dot" style="list-style:none;display:flex;align-items:center;gap:calc(var(--u)*1);background:#FFFFFF;border-radius:calc(var(--u)*0.5);height:calc(var(--u)*4.4);padding:0 calc(var(--u)*1.25);margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.2),13px)">更精準的理想客群名單</li>
            </ul>
            <NuxtLink class="btn zh" to="/services/search-visibility" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap;margin-top:calc(var(--u)*2)">了解更多 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          </div>
          <div class="fade-up" style="background:#FFFFFF;border-radius:calc(var(--u)*2);min-height:calc(var(--u)*34);display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*1),10px);color:#857C6F">VISUAL — CAPTURE</div>
        </div>
      </div>
    </section>

    <!-- 6 TEAM -->
    <section id="team" style="padding:calc(var(--u)*14) 0 calc(var(--u)*10);position:relative;overflow:hidden">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">你的先遣部隊 The Launchers</div>
        <div class="team-head" style="display:grid;grid-template-columns:1.15fr 0.85fr;gap:calc(var(--u)*5);align-items:end">
          <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0">一支本來就在市場裡的<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">專家團隊</em>。</h2>
          <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0">由身處北美、紐約、澳洲與台灣的資深操盤手組成，補位你團隊缺少的在地能力。每位成員都在自己市場的第一線，服務當地客戶多年。</p>
        </div>
      </div>
      <div class="team-stage" style="position:relative;min-height:calc(var(--u)*60);margin-top:calc(var(--u)*4)">
        <span class="chip" data-f="1" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*-14.37);margin-top:calc(var(--u)*-29.39);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">SEO</span>
        <span class="chip" data-f="2" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*6.87);margin-top:calc(var(--u)*-29.39);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">Content</span>
        <span class="chip" data-f="3" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*21.89);margin-top:calc(var(--u)*-14.37);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">AI</span>
        <span class="chip" data-f="1" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*21.89);margin-top:calc(var(--u)*6.87);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">Social</span>
        <span class="chip" data-f="2" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*6.87);margin-top:calc(var(--u)*21.89);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">Paid Media</span>
        <span class="chip" data-f="3" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*-14.37);margin-top:calc(var(--u)*21.89);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">Strategy</span>
        <span class="chip" data-f="1" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*-29.39);margin-top:calc(var(--u)*6.87);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">LinkedIn</span>
        <span class="chip" data-f="2" style="position:absolute;left:50%;top:50%;margin-left:calc(var(--u)*-29.39);margin-top:calc(var(--u)*-14.37);width:calc(var(--u)*7.5);height:calc(var(--u)*7.5);background:#3A78FF;color:#FFFFFF;font-weight:500;font-size:max(calc(var(--u)*1),10px);padding:calc(var(--u)*0.5);border-radius:calc(var(--u)*0.5);display:flex;align-items:center;justify-content:center;text-align:center;will-change:transform">Design</span>
        <div class="team-word zh" style="position:absolute;top:50%;transform:translateY(-50%);right:calc(50% + var(--u)*16);font-size:calc(var(--u)*6.3);font-weight:600;font-family:'Noto Serif TC',serif;white-space:nowrap;color:#363129;letter-spacing:0">先遣</div>
        <div class="team-word zh" style="position:absolute;top:50%;transform:translateY(-50%);left:calc(50% + var(--u)*15.7);font-size:calc(var(--u)*6.5);font-weight:700;white-space:nowrap;color:#363129;letter-spacing:0">部隊</div>
        <div id="deck" style="position:absolute;left:50%;top:50%;width:calc(var(--u)*14);height:calc(var(--u)*21);margin-left:calc(var(--u)*-7);margin-top:calc(var(--u)*-10.5)">
          <div class="deck-item deck-item-l" style="position:absolute;left:calc(var(--u)*-5.7);top:calc(var(--u)*-0.3);width:calc(var(--u)*15);height:calc(var(--u)*21.6);transform-origin:50% 85%;will-change:transform"><div class="deck-card deck-card-l" style="width:100%;height:100%;background:#FFFFFF;border-radius:calc(var(--u)*1.5);padding:3px;transform-origin:50% 85%;transition:transform 0.5s cubic-bezier(0.625,0.05,0,1)"><div style="width:100%;height:100%;border-radius:calc(var(--u)*1.5);display:flex;align-items:flex-end;padding:calc(var(--u)*1);color:#fff;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);text-transform:uppercase;background:linear-gradient(160deg,#585046,#2C2822)">North America — SEO</div></div></div>
          <div class="deck-item deck-item-r" style="position:absolute;left:calc(var(--u)*4.7);top:calc(var(--u)*-0.3);width:calc(var(--u)*15);height:calc(var(--u)*21.6);transform-origin:50% 85%;will-change:transform"><div class="deck-card deck-card-r" style="width:100%;height:100%;background:#FFFFFF;border-radius:calc(var(--u)*1.5);padding:3px;transform-origin:50% 85%;transition:transform 0.5s cubic-bezier(0.625,0.05,0,1)"><div style="width:100%;height:100%;border-radius:calc(var(--u)*1.5);display:flex;align-items:flex-end;padding:calc(var(--u)*1);color:#fff;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);text-transform:uppercase;background:linear-gradient(160deg,#655C50,#35302A)">New York — Design</div></div></div>
          <div class="deck-item deck-item-m" style="position:absolute;left:0;top:0;width:100%;height:100%"><div class="deck-card deck-card-m" style="width:100%;height:100%;background:#FFFFFF;border-radius:calc(var(--u)*1.5);padding:3px;transform-origin:50% 85%;transition:transform 0.5s cubic-bezier(0.625,0.05,0,1)"><div style="width:100%;height:100%;border-radius:calc(var(--u)*1.5);display:flex;align-items:flex-end;padding:calc(var(--u)*1);color:#fff;font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),9px);text-transform:uppercase;background:linear-gradient(160deg,#4C453C,#26221D)">Taichung — Strategy</div></div></div>
          <a class="btn zh" href="#" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap;position:absolute;left:50%;top:100%;transform:translate(-50%,-50%);z-index:5">認識團隊 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></a>
        </div>
      </div>
    </section>

    <!-- 7 績效思維 × 證言 -->
    <section style="padding:calc(var(--u)*6) 0 calc(var(--u)*10)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">實績 Results</div>
        <div class="testi-head" style="display:grid;grid-template-columns:1.25fr 0.85fr auto;gap:calc(var(--u)*4);align-items:end;margin-bottom:calc(var(--u)*2)">
          <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0">用<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">結果</em>說話的團隊。</h2>
          <div class="fade-up">
            <p class="intro zh" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0 0 calc(var(--u)*1.8)">你請到的不只是專家，是一群把成果當作信仰的人。跟我們合作，你會遇到一支和你一樣對成長野心勃勃的隊伍。</p>
            <a class="btn zh" href="#results" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">看我們的案例 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></a>
          </div>
          <div class="arrows fade-up" style="display:flex;gap:calc(var(--u)*0.8);padding-bottom:calc(var(--u)*0.2)">
            <button class="arrow dim" id="t-prev" data-dir="-1" style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;font-size:max(calc(var(--u)*1.1),12px);display:grid;place-items:center;background:#453F37;color:#F6F0E7;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out">←</button>
            <button class="arrow" id="t-next" data-dir="1" style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:calc(var(--u)*0.5);border:0;cursor:pointer;font-size:max(calc(var(--u)*1.1),12px);display:grid;place-items:center;background:#453F37;color:#F6F0E7;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out">→</button>
          </div>
        </div>
      </div>
      <div class="t-rail norail" style="display:flex;gap:calc(var(--u)*1.25);overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:calc(var(--u)*3) max(5vw,calc(50vw - 735px)) 0">
        <div class="quote-card fade-up" style="flex:0 0 calc(var(--u)*64.5);scroll-snap-align:start;background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2.5);min-height:calc(var(--u)*23);display:flex;flex-direction:column;justify-content:space-between"><p class="zh" style="font-size:calc(var(--u)*2.4);line-height:1.45;font-weight:500;border-left:2px solid rgba(54,49,41,0.4);padding-left:calc(var(--u)*1.5);margin:0">「合作三個月，我們的自然流量翻了一倍。」</p><div style="display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u)*2);margin-top:calc(var(--u)*2)"><div style="display:flex;align-items:center;gap:calc(var(--u)*1)"><div style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:50%;background:linear-gradient(160deg,#6B6156,#332E28);flex:0 0 auto"></div><div><b style="display:block;font-size:max(calc(var(--u)*1.15),12px)">[姓名]</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F">行銷主管 — [北美客戶]</span></div></div><span style="font-weight:700;font-size:max(calc(var(--u)*1.2),12px);letter-spacing:0.04em">NA·SAAS</span></div></div>
        <div class="quote-card fade-up" style="flex:0 0 calc(var(--u)*64.5);scroll-snap-align:start;background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2.5);min-height:calc(var(--u)*23);display:flex;flex-direction:column;justify-content:space-between"><p class="zh" style="font-size:calc(var(--u)*2.4);line-height:1.45;font-weight:500;border-left:2px solid rgba(54,49,41,0.4);padding-left:calc(var(--u)*1.5);margin:0">「這是第一個讓我看到實際成果的行銷夥伴。」</p><div style="display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u)*2);margin-top:calc(var(--u)*2)"><div style="display:flex;align-items:center;gap:calc(var(--u)*1)"><div style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:50%;background:linear-gradient(160deg,#6B6156,#332E28);flex:0 0 auto"></div><div><b style="display:block;font-size:max(calc(var(--u)*1.15),12px)">[姓名]</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F">創辦人 — [客戶]</span></div></div><span style="font-weight:700;font-size:max(calc(var(--u)*1.2),12px);letter-spacing:0.04em">[CLIENT]</span></div></div>
        <div class="quote-card fade-up" style="flex:0 0 calc(var(--u)*64.5);scroll-snap-align:start;background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2.5);min-height:calc(var(--u)*23);display:flex;flex-direction:column;justify-content:space-between"><p class="zh" style="font-size:calc(var(--u)*2.4);line-height:1.45;font-weight:500;border-left:2px solid rgba(54,49,41,0.4);padding-left:calc(var(--u)*1.5);margin:0">「反應快、品質好、決策清楚，我永遠知道能期待什麼。」</p><div style="display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u)*2);margin-top:calc(var(--u)*2)"><div style="display:flex;align-items:center;gap:calc(var(--u)*1)"><div style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:50%;background:linear-gradient(160deg,#6B6156,#332E28);flex:0 0 auto"></div><div><b style="display:block;font-size:max(calc(var(--u)*1.15),12px)">[姓名]</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F">行銷經理 — [客戶]</span></div></div><span style="font-weight:700;font-size:max(calc(var(--u)*1.2),12px);letter-spacing:0.04em">[CLIENT]</span></div></div>
        <div class="quote-card fade-up" style="flex:0 0 calc(var(--u)*64.5);scroll-snap-align:start;background:#FFFFFF;border-radius:calc(var(--u)*0.75);padding:calc(var(--u)*2.5);min-height:calc(var(--u)*23);display:flex;flex-direction:column;justify-content:space-between"><p class="zh" style="font-size:calc(var(--u)*2.4);line-height:1.45;font-weight:500;border-left:2px solid rgba(54,49,41,0.4);padding-left:calc(var(--u)*1.5);margin:0">「開始合作後，終於是客戶主動來找我們。」</p><div style="display:flex;justify-content:space-between;align-items:flex-end;gap:calc(var(--u)*2);margin-top:calc(var(--u)*2)"><div style="display:flex;align-items:center;gap:calc(var(--u)*1)"><div style="width:calc(var(--u)*3.5);height:calc(var(--u)*3.5);border-radius:50%;background:linear-gradient(160deg,#6B6156,#332E28);flex:0 0 auto"></div><div><b style="display:block;font-size:max(calc(var(--u)*1.15),12px)">[姓名]</b><span class="zh" style="font-size:max(calc(var(--u)*1),10px);color:#857C6F">業務主管 — [客戶]</span></div></div><span style="font-weight:700;font-size:max(calc(var(--u)*1.2),12px);letter-spacing:0.04em">[CLIENT]</span></div></div>
      </div>
    </section>

    <!-- 9 COMPARE(置中白面板 — 全站置中例外) -->
    <section style="padding:calc(var(--u)*6) 0 calc(var(--u)*10)">
      <div style="max-width:1470px;margin:0 auto;padding:0 5vw">
        <div style="background:#FFFFFF;border-radius:calc(var(--u)*2);padding:calc(var(--u)*8) 5vw calc(var(--u)*9);text-align:center">
          <div class="eyebrow zh" style="display:flex;align-items:center;justify-content:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">比較 Compare</div>
          <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)"><em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em">隔海行銷</em> vs 在地操盤</h2>
          <p class="intro zh fade-up" style="font-size:max(calc(var(--u)*1.375),14px);line-height:1.8;color:#857C6F;max-width:34em;margin:0 auto">出海的遊戲規則正在快速改變：注意力更短、AI 更聰明、競爭更擁擠。你需要的是一個站在市場最前線的合夥人。</p>
          <div class="vs-grid fade-up zh" style="display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--u)*2);max-width:1078px;margin:calc(var(--u)*5) auto 0;text-align:left">
            <div><h4 style="font-size:calc(var(--u)*1.8);font-weight:700;margin:0 0 calc(var(--u)*1.8);text-align:center">隔海行銷</h4><ul style="margin:0;padding:0">
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>翻譯你的中文文案</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>操盤者研究報告裡的市場</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>套台灣審美做英文網站</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>廣告投放隔空調參數</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>交付報表</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#453F37;color:#F6F0E7">−</i>用專案思維做行銷</li>
            </ul></div>
            <div><h4 style="font-size:calc(var(--u)*1.8);font-weight:700;margin:0 0 calc(var(--u)*1.8);text-align:center">在地操盤（Launcher）</h4><ul style="margin:0;padding:0">
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>用當地語感重寫你的訊息</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>操盤者每天身處其中的市場</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>紐約設計師按當地審美打造</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>搜尋＋社群＋廣告的在地組合拳</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>交付市場位置</li>
              <li style="list-style:none;background:#F1E8DC;border-radius:calc(var(--u)*0.5);min-height:calc(var(--u)*6);padding:calc(var(--u)*1) calc(var(--u)*1.5);margin-bottom:calc(var(--u)*1.25);display:flex;align-items:center;gap:calc(var(--u)*1.25);font-size:max(calc(var(--u)*1.2),13px)"><i style="width:calc(var(--u)*2.8);height:calc(var(--u)*2.8);border-radius:calc(var(--u)*0.5);display:grid;place-items:center;font-style:normal;font-weight:700;flex:0 0 auto;font-size:max(calc(var(--u)*1.3),13px);background:#3A78FF;color:#FFFFFF">+</i>用長期心佔率思維建立品牌</li>
            </ul></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10 TALK TO EXPERT + FOOTER -->
    <section style="padding:calc(var(--u)*14) 0 0">
      <div class="ink-panel" style="background:#3A342D;border-radius:calc(var(--u)*2);margin:0 5vw;max-width:1470px;color:#F6F0E7">
        <div style="padding:calc(var(--u)*9) calc(var(--u)*5)">
          <div class="eyebrow zh" style="display:flex;align-items:center;gap:0.7em;font-size:max(calc(var(--u)*1),11px);font-weight:500;margin-bottom:calc(var(--u)*1.5)">開始 Start</div>
          <h2 class="h-sec zh reveal" style="font-size:calc(var(--u)*4.6);line-height:1.14;font-weight:700;margin:0 0 calc(var(--u)*2)">跟真正在市場裡的人，<em class="sw zh" style="font-family:'Noto Serif TC',serif;font-style:normal;font-weight:600;font-size:0.975em;color:#B7C9FF">聊 30 分鐘</em>。</h2>
          <NuxtLink class="btn zh fade-up" to="/start" id="start" style="display:inline-flex;align-items:center;gap:calc(var(--u)*0.75);height:calc(var(--u)*3.5);background:#FFFFFF;border:1px solid rgba(54,49,41,0.08);color:#363129;font-weight:500;font-size:max(calc(var(--u)*1),11px);padding:0 calc(var(--u)*0.5) 0 calc(var(--u)*1);border-radius:calc(var(--u)*0.5);text-decoration:none;cursor:pointer;white-space:nowrap">預約市場進入診斷 <span class="sq" style="width:calc(var(--u)*2.5);height:calc(var(--u)*2.5);border-radius:calc(var(--u)*0.25);background:#3A78FF;display:grid;place-items:center;font-weight:700;font-size:max(calc(var(--u)*1),11px);color:#FFFFFF;transition:background-color 0.2s ease-in-out"><i class="a2">↗</i><i class="a2 a2d">↗</i></span></NuxtLink>
          <div class="offices fade-up zh" style="display:grid;grid-template-columns:repeat(3,1fr);gap:calc(var(--u)*2);margin-top:calc(var(--u)*5);max-width:1078px">
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Launcher Taichung</h5><p style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;line-height:1.7;margin:0">台中市 [地址]</p></div>
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Launcher New York</h5><p style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;line-height:1.7;margin:0">New York, NY [地址]</p></div>
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1)">Contact Daniel</h5><a class="flink" href="mailto:hello@launcher.tw" style="font-size:max(calc(var(--u)*1.15),12px);color:#ABA192;text-decoration:none;line-height:1.7">hello@launcher.tw</a></div>
          </div>
        </div>
        <footer>
          <div class="zh" style="display:flex;justify-content:space-between;gap:calc(var(--u)*3);flex-wrap:wrap;padding:calc(var(--u)*5) calc(var(--u)*5) calc(var(--u)*3);border-top:1px solid rgba(246,240,231,0.16)">
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">服務</h5><NuxtLink class="flink" to="/services/market-analysis" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">市場分析與定位</NuxtLink><NuxtLink class="flink" to="/services/search-visibility" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">搜尋與能見度</NuxtLink><NuxtLink class="flink" to="/services/social-content" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">社群與內容經營</NuxtLink><NuxtLink class="flink" to="/start" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">市場進入診斷</NuxtLink><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">90 天登陸計畫</a><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">Launcher Retainer</a></div>
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">產業</h5><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">DTC 消費品牌</a><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">B2B SaaS</a><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">專業服務</a></div>
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">資源</h5><NuxtLink class="flink" to="/cases/medical-aesthetics" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">實績</NuxtLink><NuxtLink class="flink" to="/insights" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">洞察</NuxtLink></div>
            <div><h5 style="font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.9),10px);text-transform:uppercase;color:#F6F0E7;margin:0 0 calc(var(--u)*1.4)">公司</h5><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">關於</a><a class="flink" href="#" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">團隊</a><NuxtLink class="flink" to="/start" style="color:#ABA192;text-decoration:none;display:block;margin-bottom:calc(var(--u)*0.8);font-size:max(calc(var(--u)*1.1),12px)">聯絡</NuxtLink></div>
          </div>
          <div style="padding:0 calc(var(--u)*5) calc(var(--u)*2.5);font-family:'Space Mono',monospace;font-size:max(calc(var(--u)*0.85),10px);display:flex;justify-content:space-between;color:#ABA192"><span>© 2026 LAUNCHER</span><span>繁中 / EN</span></div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useLauncherSeo({
  title: 'Launcher — 亞洲品牌的市場進入合夥人',
  description: '我們為亞洲品牌打造進入北美市場的在地行銷引擎。市場分析與定位、英文 SEO、社群與內容經營——你在北美的第一個成員。',
  path: '/'
})
useLauncherMotion()

// 首頁專屬互動(移植自 DCLogic:bindRails / bindDrag / deck scrub / chips)
let gsapRef: any = null
let chipTweens: any[] = []
let deckTargets: HTMLElement[] = []
let inertiaTweens: any[] = []

onMounted(async () => {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger')
  ])
  gsap.registerPlugin(ScrollTrigger)
  gsapRef = gsap

  // ===== 滑軌箭頭(左灰=到頭) =====
  const bindArrows = (railEl: HTMLElement | null, prevEl: HTMLElement | null, nextEl: HTMLElement | null, step: number) => {
    if (!railEl || !prevEl || !nextEl) return
    const upd = () => {
      prevEl.classList.toggle('dim', railEl.scrollLeft < 10)
      nextEl.classList.toggle('dim', railEl.scrollLeft > railEl.scrollWidth - railEl.clientWidth - 10)
    }
    ;[prevEl, nextEl].forEach((b) => {
      b.addEventListener('click', () => {
        railEl.scrollBy({ left: step * +(b.dataset.dir || 0), behavior: 'smooth' })
      })
    })
    railEl.addEventListener('scroll', upd, { passive: true })
    upd()
  }
  // 實績滑軌
  bindArrows(
    document.getElementById('rail'),
    document.getElementById('ar-prev'),
    document.getElementById('ar-next'),
    466
  )
  // 證言滑軌
  bindArrows(
    document.querySelector<HTMLElement>('.t-rail'),
    document.getElementById('t-prev'),
    document.getElementById('t-next'),
    820
  )

  // ===== 拖曳滑軌(僅桌機;手機維持原生觸控捲動) =====
  if (!window.matchMedia('(max-width:900px)').matches) {
    document.querySelectorAll<HTMLElement>('.page-home .norail').forEach((rail) => {
      let down = false
      let dragging = false
      let startX = 0
      let startSL = 0
      let lastX = 0
      let lastT = 0
      let vel = 0
      let inertia: any = null

      function snapTargets() {
        const padLeft = parseFloat(getComputedStyle(rail).paddingLeft) || 0
        const pts: number[] = []
        for (let i = 0; i < rail.children.length; i++) {
          pts.push((rail.children[i] as HTMLElement).offsetLeft - padLeft)
        }
        return pts
      }
      function nearestSnap(x: number) {
        const pts = snapTargets()
        let best = x
        let d = Infinity
        for (let i = 0; i < pts.length; i++) {
          const dd = Math.abs(pts[i]! - x)
          if (dd < d) {
            d = dd
            best = pts[i]!
          }
        }
        return best
      }
      function endDrag() {
        rail.classList.remove('is--dragging')
      }

      rail.addEventListener('pointerdown', (e: PointerEvent) => {
        if (e.button !== 0) return
        down = true
        dragging = false
        startX = e.clientX
        startSL = rail.scrollLeft
        lastX = e.clientX
        lastT = performance.now()
        vel = 0
        if (inertia) {
          inertia.kill()
          inertia = null
        }
      })
      rail.addEventListener('pointermove', (e: PointerEvent) => {
        if (!down) return
        const dx = e.clientX - startX
        if (!dragging && Math.abs(dx) > 8) {
          dragging = true
          rail.classList.add('is--dragging')
          try {
            rail.setPointerCapture(e.pointerId)
          } catch {}
        }
        if (dragging) {
          rail.scrollLeft = startSL - dx // 1:1 黏手跟隨
          const now = performance.now()
          const dt = now - lastT
          if (dt > 0) {
            vel = (e.clientX - lastX) / dt
            lastX = e.clientX
            lastT = now
          }
        }
      })
      function up() {
        if (!down) return
        down = false
        if (!dragging) return // <8px 視為點擊,連結正常運作
        const maxSL = rail.scrollWidth - rail.clientWidth
        const raw = rail.scrollLeft - vel * 1000 * 0.35 // 慣性目標 = 速度 × 0.35s
        const target = nearestSnap(Math.max(0, Math.min(maxSL, raw))) // 落點對齊卡片邊界
        const o = { v: rail.scrollLeft }
        inertia = gsap.to(o, {
          v: target,
          duration: 0.8,
          ease: 'power3.out',
          onUpdate: () => {
            rail.scrollLeft = o.v
          },
          onComplete: endDrag,
          onInterrupt: endDrag
        })
        inertiaTweens.push(inertia)
      }
      rail.addEventListener('pointerup', up)
      rail.addEventListener('pointercancel', up)
    })
  }

  // ===== 團隊卡組 scrub + 技能標籤動態(與 initAnims 相同,待字型就緒) =====
  const fanSpec = () => {
    // 以 #deck 實測寬度換算 1u(deck 寬 14u/手機 16.2u),不受 --u 單位影響
    const mob = window.matchMedia('(max-width:900px)').matches
    const deck = document.getElementById('deck')
    const u = deck ? deck.offsetWidth / (mob ? 16.2 : 14) : 12.25
    return { off: (mob ? 2.4 : 5.2) * u, rot: mob ? 3 : 5 }
  }

  const initHomeAnims = () => {
    // 團隊照片卡:捲動連動扇形(scrub 1 雙向可逆)——x 疊合位→0(自己版位)、rotation 0→∓5°(手機 ∓3°)
    const itemL = document.querySelector<HTMLElement>('.deck-item-l')
    const itemR = document.querySelector<HTMLElement>('.deck-item-r')
    if (itemL && itemR) {
      deckTargets = [itemL, itemR]
      const fs = fanSpec()
      gsap.fromTo(itemL, { x: fs.off, rotation: 0 }, {
        x: 0,
        rotation: -fs.rot,
        ease: 'none',
        scrollTrigger: { trigger: '.team-stage', start: 'top 75%', end: 'center 40%', scrub: 1 }
      })
      gsap.fromTo(itemR, { x: -fs.off, rotation: 0 }, {
        x: 0,
        rotation: fs.rot,
        ease: 'none',
        scrollTrigger: { trigger: '.team-stage', start: 'top 75%', end: 'center 40%', scrub: 1 }
      })
    }
    // 技能標籤:進場 stagger + 無限 yoyo 漂浮 + 滾動視差
    document.querySelectorAll<HTMLElement>('.chip').forEach((c, i) => {
      chipTweens.push(
        gsap.fromTo(c, { y: 20, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: i * 0.06,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.team-stage', start: 'top 85%', once: true }
        })
      )
      // 保底:無論 ScrollTrigger 是否觸發,3 秒後確保可見
      chipTweens.push(
        gsap.delayedCall(3, () => {
          gsap.to(c, { opacity: 1, y: 0, duration: 0.4, overwrite: 'auto' })
        })
      )
      chipTweens.push(
        gsap.to(c, { y: '+=8', duration: 1.8 + +(c.dataset.f || 0) * 0.8, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: i * 0.3 })
      )
      if (!window.matchMedia('(max-width:900px)').matches) {
        chipTweens.push(
          gsap.to(c, {
            yPercent: +(c.dataset.f || 0) * 8 - 16,
            ease: 'none',
            scrollTrigger: { trigger: '.team-stage', start: 'top bottom', end: 'bottom top', scrub: 1 }
          })
        )
      }
    })
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(initHomeAnims)
  else initHomeAnims()
})

onBeforeUnmount(() => {
  if (!gsapRef) return
  chipTweens.forEach((t) => t && t.kill && t.kill())
  inertiaTweens.forEach((t) => t && t.kill && t.kill())
  deckTargets.forEach((el) => gsapRef.killTweensOf(el))
  document.querySelectorAll('.page-home .chip').forEach((c) => gsapRef.killTweensOf(c))
})
</script>

<style>
/* 概念清單藍色小方塊(原 style-before) */
.page-home .li-dot::before{content:'';width:calc(var(--u)*1);height:calc(var(--u)*1);background:#3A78FF;border-radius:calc(var(--u)*0.25);transform:rotate(-8deg);flex:0 0 auto}
/* 實績卡 hover:數字磚左移收縮、右側滑出箭頭磚 */
.page-home .case .stat{flex:1 1 0;min-width:0;transition:flex-basis .5s cubic-bezier(.625,.05,0,1)}
.page-home .case .stat b,.page-home .case .stat span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block}
.page-home .case .go-tile{order:1;flex:0 0 0px;width:0;opacity:0;overflow:hidden;display:grid;place-items:center;transition:flex-basis .5s cubic-bezier(.625,.05,0,1),opacity .3s ease-in-out}
@media(min-width:901px){.page-home .case:hover .go-tile{flex-basis:calc(var(--u)*6.3);opacity:1}.page-home .case:hover .go-tile .ga1{animation:home-meteorOut .55s cubic-bezier(.625,.05,0,1) .3s both}.page-home .case:hover .go-tile .ga2{animation:home-meteorIn .55s cubic-bezier(.625,.05,0,1) .3s both}}
@keyframes home-meteorOut{0%{transform:translate(0,0)}100%{transform:translate(170%,-170%)}}
@keyframes home-meteorIn{0%{transform:translate(-170%,170%)}100%{transform:translate(0,0)}}
/* 團隊卡組:CSS 基礎態=疊合置中;GSAP scrub 展開至自己版位 */
.page-home .deck-item-l{transform:translateX(calc(var(--u)*5.2))}
.page-home .deck-item-r{transform:translateX(calc(var(--u)*-5.2))}
@media(min-width:901px){
.page-home #deck:hover .deck-card-l{transform:rotate(-3deg) translateX(calc(var(--u)*-1.5))}
.page-home #deck:hover .deck-card-r{transform:rotate(3deg) translateX(calc(var(--u)*1.5))}
.page-home #deck:hover .deck-card-m{transform:translateY(calc(var(--u)*-0.5))}
}
/* 手機 ≤900px */
@media(max-width:900px){
.page-home .hero-grid,.page-home .res-head,.page-home .testi-head,.page-home .svc-layout,.page-home .concept-grid,.page-home .vs-grid,.page-home .team-head,.page-home .offices{grid-template-columns:1fr !important}
.page-home .h-hero{font-size:clamp(34px,9.9vw,46px) !important;line-height:1.2 !important}
.page-home .h-sec{font-size:clamp(23px,6.6vw,32px) !important;line-height:1.24 !important}
.page-home .arrows{padding-bottom:0 !important}
.page-home .case{flex-basis:82vw !important}
.page-home .svc-photo{height:calc(var(--u)*30) !important;margin-top:0 !important;order:2}
.page-home .svc-cards{grid-template-columns:1fr !important}
.page-home .svc{min-height:calc(var(--u)*18) !important}
.page-home .concept-grid.mirror .c-text{order:0 !important}
.page-home .team-stage{min-height:calc(var(--u)*56) !important;margin-top:calc(var(--u)*1) !important}
.page-home .team-word{display:none !important}
.page-home .chip{font-size:calc(var(--u)*1.1) !important}
.page-home .team-stage .chip:nth-of-type(1){margin-left:calc(var(--u)*-12.93) !important;margin-top:calc(var(--u)*-25.92) !important}
.page-home .team-stage .chip:nth-of-type(2){margin-left:calc(var(--u)*5.43) !important;margin-top:calc(var(--u)*-25.92) !important}
.page-home .team-stage .chip:nth-of-type(3){margin-left:calc(var(--u)*18.42) !important;margin-top:calc(var(--u)*-12.93) !important}
.page-home .team-stage .chip:nth-of-type(4){margin-left:calc(var(--u)*18.42) !important;margin-top:calc(var(--u)*5.43) !important}
.page-home .team-stage .chip:nth-of-type(5){margin-left:calc(var(--u)*5.43) !important;margin-top:calc(var(--u)*18.42) !important}
.page-home .team-stage .chip:nth-of-type(6){margin-left:calc(var(--u)*-12.93) !important;margin-top:calc(var(--u)*18.42) !important}
.page-home .team-stage .chip:nth-of-type(7){margin-left:calc(var(--u)*-25.92) !important;margin-top:calc(var(--u)*5.43) !important}
.page-home .team-stage .chip:nth-of-type(8){margin-left:calc(var(--u)*-25.92) !important;margin-top:calc(var(--u)*-12.93) !important}
.page-home #deck{width:calc(var(--u)*16.2) !important;height:calc(var(--u)*24.3) !important;margin-left:calc(var(--u)*-8.1) !important;margin-top:calc(var(--u)*-12.15) !important}
.page-home .deck-item{width:calc(var(--u)*16.2) !important;height:calc(var(--u)*24.3) !important;top:0 !important}
.page-home .deck-item-l{left:calc(var(--u)*-2.4) !important;transform:translateX(calc(var(--u)*2.4))}
.page-home .deck-item-r{left:calc(var(--u)*2.4) !important;transform:translateX(calc(var(--u)*-2.4))}
.page-home .deck-item-m{left:0 !important}
.page-home .quote-card{flex-basis:86vw !important}
.page-home .quote-card p{font-size:calc(var(--u)*2) !important}
.page-home .h-hero{margin-bottom:calc(var(--u)*3) !important}
.page-home .hero-card{justify-self:stretch !important;width:100% !important;padding:calc(var(--u)*1) !important}
}
</style>
