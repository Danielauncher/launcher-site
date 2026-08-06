const ROUTES = [
  '/',
  '/services/market-analysis',
  '/services/search-visibility',
  '/services/social-content',
  '/cases/medical-aesthetics',
  '/cases/tobi-pearce',
  '/cases/level-up-tv',
  '/insights',
  '/insights/foreign-feel',
  '/careers',
  '/start'
]

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  const urls = ROUTES.map(
    (p) => `  <url><loc>${siteUrl}${p === '/' ? '/' : p}</loc></url>`
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`
})
