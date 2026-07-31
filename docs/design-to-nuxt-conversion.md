# DC → Nuxt 4 頁面轉換規範(Launcher)

來源:`/home/claude/launcher/design-src/*.dc.html`
目的地:`/home/claude/launcher/site/app/pages/`

## 核心原則
**忠實轉換,不是重新設計。** 所有 inline style、文案、結構、class 名稱原封不動保留。只轉換模板語法與連結。

## 路由對照表(所有 href 依此改寫,一律用 NuxtLink + to)
| 來源檔 | 路由 |
|---|---|
| Launcher Home.dc.html | `/` |
| Service Market Analysis.dc.html | `/services/market-analysis` |
| Service Search Visibility.dc.html | `/services/search-visibility` |
| Service Social Content.dc.html | `/services/social-content` |
| Case NA SaaS.dc.html | `/cases/na-saas` |
| Case AU Social.dc.html | `/cases/au-social` |
| Case NY DTC.dc.html | `/cases/ny-dtc` |
| Case NA Ecommerce.dc.html(不存在) | 改連 `/cases/na-saas` 並留 `<!-- TODO: 案例頁未設計 -->` |
| Insights.dc.html | `/insights` |
| Insight Article Foreign Feel.dc.html | `/insights/foreign-feel` |
| Careers.dc.html | `/careers` |
| Start.dc.html | `/start` |

`mailto:` 與外部連結保留 `<a>`。

## 頁面骨架
```vue
<template>
  <div class="page-XXX"> <!-- XXX = 頁面代號,如 page-home、page-svc-seo -->
    <!-- <dc-import name="Site Nav"> 直接刪除:Nav 已在 app.vue 全域掛載 -->
    ...頁面內容...
    <SiteFooter />  <!-- 對應 <dc-import name="Site Footer" ...>,props 對照下方 -->
  </div>
</template>

<script setup lang="ts">
useHead({ title: '〈頁面標題〉 — Launcher' })
useLauncherMotion()
</script>

<style>
/* 該頁 <helmet><style> 中「頁面專屬」的規則,每條選擇器前都加 .page-XXX 前綴 */
</style>
```

## 語法轉換規則
1. `<x-dc>`、`<helmet>`、`<script src>`、font links、`data-screen-label`、`hint-size`、`data-om-id`:全部移除。
2. `<dc-import name="Site Footer" show-cta="{{ false }}">` → `<SiteFooter :show-cta="false" />`;`cta-pre="準備好" cta-em="進入市場" cta-post="了嗎?"` 是預設值可省略;Careers 的自訂文案要傳:`<SiteFooter cta-pre="或者，先跟我們" cta-em="聊一場市場" cta-post="。" />`。
3. `<sc-if value="{{ x }}">` → `v-if`。`{{ handler }}` 事件 → Vue:`onClick="{{ fn }}"` → `@click="fn"`,`onSubmit` → `@submit.prevent`。DCLogic 的 state/renderVals 轉成 `<script setup>` 的 ref/函式。多數內頁沒有互動邏輯,只有 componentDidMount 掛 LauncherMotion——那已由 `useLauncherMotion()` 取代,不用寫任何掛載程式碼。DCLogic 的 props(animations/smoothScroll/grain)全部忽略,用預設即可。
4. `style-before="..."`:若內容 = eyebrow 藍色小方塊(content:'';width:calc(var(--u)*1.15);…rotate(-8deg)),直接刪掉該屬性(全域 `.eyebrow::before` 已涵蓋,元素須有 `eyebrow` class)。其他內容:在該頁 `<style>` 建 `.page-XXX .某class::before{...}` 規則,元素掛上該 class。`style-after` 同理。
5. `.reveal` 元素若內含「烘焙進去的」`<span class="line-mask"><span class="line" style="translate: none...">` 包裝:拆掉包裝,還原為純文字 + `<br>` + 內層 `<em>/<span>`(切行由 JS 執行期重做)。烘焙的 GSAP inline style(translate/rotate/scale/transform)一律清除。
6. `required="required"` → `required`;自閉合修正(`<input ...></input>` → `<input ...>`);`class` 內殘留的 `{{ }}` 綁定 → `:class`。
7. HTML 實體(`&amp;` 等)保留原樣。

## 樣式歸屬(重要)
以下規則「已在全域 main.css」,頁面 `<style>` 一律不要重複:
`:root --u`、body 基礎、grain(body::after)、`.zh`、`.line-mask/.line/.u`、`.eyebrow::before`、`.hovcard`、`.sq/.go/.a2/.a2d/.av/.avd` 及其 hover、`.navlink`、`.norail`、`.arrow.dim`、`.flink`、`.ink-panel`、`.fld`、menu-open/burger/m-menu 顯示規則。
其餘該頁 helmet 內的規則(含 @media 手機覆寫、@keyframes、hover 效果)都算頁面專屬 → 進該頁 `<style>`,每條加 `.page-XXX ` 前綴(@keyframes 名稱改為 `XXX-原名` 避免跨頁衝突,引用處同步改)。`html{scroll-padding-top}` 這類無法加前綴的省略(全域已有)。

## 動畫紀律(不可違反)
- 初始隱藏由 GSAP(useLauncherMotion 內的 gsap.set/fromTo)處理,CSS 不得預藏內容(不寫 opacity:0 之類)。
- 禁止改動 easing/duration;禁止 bounce、elastic、旋轉入場。
- `.sq`/`.go` 雙箭頭結構(兩顆 `<i class="a2">↗</i>`,複製那顆加 `a2d`)原樣保留,嚴禁改成 rotate(45deg)。

## 完成定義
- 檔案放對路徑;`useHead` title 用該頁 `<h1>` 語意取簡短中文標題。
- 全部文案逐字保留(含 [PLACEHOLDER]、[地址])。
- 不新增、不刪減任何區塊。
