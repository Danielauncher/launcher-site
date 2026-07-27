// 每頁 SEO:title / description / canonical / Open Graph
export function useLauncherSeo(opts: { title: string; description: string; path: string }) {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
  const url = siteUrl + (opts.path === '/' ? '' : opts.path)

  useHead({
    title: opts.title,
    link: [{ rel: 'canonical', href: url || siteUrl + '/' }]
  })
  useSeoMeta({
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: url || siteUrl + '/',
    ogType: 'website',
    ogSiteName: 'Launcher',
    ogLocale: 'zh_TW',
    twitterCard: 'summary_large_image'
  })
}
