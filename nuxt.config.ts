export default defineNuxtConfig({
  compatibilityDate: '2026-07-26',
  modules: ['@nuxthub/core'],
  hub: {
    database: true
  },
  runtimeConfig: {
    // Meta Conversions API token(建置時由 CI secret 注入;未設定則不送 CAPI)
    metaCapiToken: process.env.META_CAPI_TOKEN || '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://launcher.tw',
      ga4Id: process.env.NUXT_PUBLIC_GA4_ID || '',
      metaPixelId: process.env.NUXT_PUBLIC_META_PIXEL_ID || ''
    }
  },
  routeRules: {
    '/cases/na-saas': { redirect: { to: '/cases/medical-aesthetics', statusCode: 301 } },
    '/cases/au-social': { redirect: { to: '/cases/tobi-pearce', statusCode: 301 } },
    '/cases/ny-dtc': { redirect: { to: '/cases/level-up-tv', statusCode: 301 } }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant-TW' },
      title: 'Launcher — 亞洲品牌的市場進入合夥人',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            '我們為亞洲品牌打造進入北美市場的在地行銷引擎。市場分析與定位、英文 SEO、社群與內容經營——你在北美的第一個成員。'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,500;0,700;1,500&family=Instrument+Serif:ital@0;1&family=Noto+Sans+TC:wght@400;500;700;900&family=Noto+Serif+TC:wght@600&family=Space+Mono:wght@400;700&display=swap'
        }
      ]
    }
  }
})
