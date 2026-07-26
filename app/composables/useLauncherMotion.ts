// Launcher — 全站共用動態引擎(GSAP + ScrollTrigger + Lenis)
// 各頁面於 <script setup> 直接呼叫 useLauncherMotion()
import { onMounted, onBeforeUnmount } from 'vue'

interface MotionOptions {
  animations?: boolean
  smoothScroll?: boolean
  grain?: boolean
}

function splitLines(el: HTMLElement): NodeListOf<HTMLElement> {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')
  const units: { html: string; sp: boolean }[] = []
  el.childNodes.forEach((n) => {
    if (n.nodeType === 3) {
      const re = /([A-Za-z0-9+%#$.,\-]+|\s+|[^\sA-Za-z0-9])/g
      let m: RegExpExecArray | null
      while ((m = re.exec(n.textContent || ''))) {
        if (/^\s+$/.test(m[0])) {
          if (units.length) units[units.length - 1]!.sp = true
        } else {
          units.push({ html: '<span class="u">' + esc(m[0]) + '</span>', sp: false })
        }
      }
    } else if (n.nodeType === 1) {
      units.push({ html: '<span class="u">' + (n as HTMLElement).outerHTML + '</span>', sp: false })
    }
  })
  el.innerHTML = units.map((u) => u.html + (u.sp ? ' ' : '')).join('')
  const spans = Array.from(el.querySelectorAll(':scope > .u')) as HTMLElement[]
  const lines: string[][] = []
  let cur: string[] | null = null
  let top: number | null = null
  spans.forEach((s, i) => {
    const t = s.offsetTop
    if (top === null || Math.abs(t - top) > 3) {
      cur = []
      lines.push(cur)
      top = t
    }
    cur!.push(s.innerHTML + (units[i] && units[i]!.sp ? ' ' : ''))
  })
  el.innerHTML = lines
    .map((l) => '<span class="line-mask"><span class="line">' + l.join('') + '</span></span>')
    .join('')
  return el.querySelectorAll('.line')
}

export function useLauncherMotion(options: MotionOptions = {}) {
  const { animations = true, smoothScroll = true, grain = true } = options

  let lenis: any = null
  let tick: ((t: number) => void) | null = null
  let gsapRef: any = null
  let stRef: any = null

  onMounted(async () => {
    document.body.classList.toggle('no-grain', grain === false)

    const [{ gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('lenis')
    ])
    gsapRef = gsap
    stRef = ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    if (smoothScroll) {
      try {
        lenis = new Lenis({ lerp: 0.1 })
        lenis.on('scroll', ScrollTrigger.update)
        tick = (t: number) => lenis.raf(t * 1000)
        gsap.ticker.add(tick)
        gsap.ticker.lagSmoothing(0)
        document.documentElement.classList.add('lenis')
      } catch {
        lenis = null
      }
    }

    if (animations) {
      const init = () => {
        document.querySelectorAll<HTMLElement>('.reveal').forEach((h) => {
          const lines = h.querySelector('.line-mask') ? h.querySelectorAll('.line') : splitLines(h)
          gsap.set(lines, { yPercent: 110 })
          gsap.to(lines, {
            yPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: { trigger: h, start: 'top 85%', once: true }
          })
        })
        document.querySelectorAll<HTMLElement>('.fade-up').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%', once: true }
            }
          )
        })
        document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
          const end = +(el.dataset.count || 0)
          const suf = el.dataset.suf || ''
          const pre = el.dataset.pre || ''
          ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => {
              const o = { v: 0 }
              gsap.to(o, {
                v: end,
                duration: 1.2,
                ease: 'expo.out',
                onUpdate: () => {
                  el.textContent = pre + Math.round(o.v) + suf
                }
              })
            }
          })
        })
      }
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(init)
      else init()
    }
  })

  onBeforeUnmount(() => {
    if (stRef) stRef.getAll().forEach((t: any) => t.kill())
    if (tick && gsapRef) gsapRef.ticker.remove(tick)
    if (lenis) {
      lenis.destroy()
      document.documentElement.classList.remove('lenis')
    }
    document.body.classList.remove('menu-open')
  })
}
