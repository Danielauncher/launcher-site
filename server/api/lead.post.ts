export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const required = ['name', 'company', 'email', 'market', 'budget', 'goal'] as const
  for (const key of required) {
    if (!body?.[key] || typeof body[key] !== 'string' || !body[key].trim()) {
      throw createError({ statusCode: 400, statusMessage: `Missing field: ${key}` })
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email' })
  }

  const db = hubDatabase()
  await db
    .prepare(
      'INSERT INTO leads (name, company, email, site, market, budget, goal, source) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)'
    )
    .bind(
      body.name.trim().slice(0, 200),
      body.company.trim().slice(0, 200),
      body.email.trim().slice(0, 200),
      (body.site || '').trim().slice(0, 500),
      body.market.trim().slice(0, 100),
      body.budget.trim().slice(0, 100),
      body.goal.trim().slice(0, 4000),
      (body.source || '').trim().slice(0, 100)
    )
    .run()

  // Meta Conversions API(伺服器端 Lead 事件,與前端 Pixel 以 event_id 去重)
  const config = useRuntimeConfig()
  if (config.metaCapiToken && config.public.metaPixelId) {
    try {
      const email = body.email.trim().toLowerCase()
      const data = new TextEncoder().encode(email)
      const digest = await crypto.subtle.digest('SHA-256', data)
      const hashedEmail = [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('')
      await $fetch(`https://graph.facebook.com/v21.0/${config.public.metaPixelId}/events`, {
        method: 'POST',
        body: {
          access_token: config.metaCapiToken,
          data: [
            {
              event_name: 'Lead',
              event_time: Math.floor(Date.now() / 1000),
              event_id: typeof body.event_id === 'string' ? body.event_id.slice(0, 64) : undefined,
              action_source: 'website',
              event_source_url: config.public.siteUrl + '/start',
              user_data: {
                em: [hashedEmail],
                client_ip_address: getRequestIP(event, { xForwardedFor: true }),
                client_user_agent: getHeader(event, 'user-agent')
              }
            }
          ]
        }
      })
    } catch (e) {
      // 追蹤失敗不影響收單
      console.error('Meta CAPI error:', e)
    }
  }

  // TODO(gen2): Email 通知
  return { ok: true }
})
