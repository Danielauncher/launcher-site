// GA4 + Meta Pixel(client-side)。未設定 ID 時完全不載入。
// SPA 路由切換時補送 page_view / PageView。
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    _fbq: any
  }
}

export default defineNuxtPlugin(() => {
  const { ga4Id, metaPixelId } = useRuntimeConfig().public
  const router = useRouter()

  // ---- GA4 ----
  if (ga4Id) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', ga4Id, { send_page_view: true })
    useHead({
      script: [{ src: `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`, async: true }]
    })
    router.afterEach((to) => {
      window.gtag('event', 'page_view', {
        page_path: to.fullPath,
        page_location: window.location.origin + to.fullPath
      })
    })
  }

  // ---- Meta Pixel ----
  if (metaPixelId) {
    /* eslint-disable */
    ;(function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = true
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */
    window.fbq('init', metaPixelId)
    window.fbq('track', 'PageView')
    router.afterEach(() => {
      window.fbq('track', 'PageView')
    })
  }
})
