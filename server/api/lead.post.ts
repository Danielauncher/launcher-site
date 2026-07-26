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

  // TODO(gen2): Email 通知 + GA4 conversion event
  return { ok: true }
})
