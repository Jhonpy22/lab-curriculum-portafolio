import { useEffect, useRef } from 'react'
import { footerSocialLinks as socialLinks } from '../../data/socialLinks'
import { useTheme } from '../../hooks/useTheme'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const navItems = [
  { label: 'Inicio', href: '#home' },
  { label: 'Acerca de', href: '#about' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const PATH_A =
  'M0,100 C220,155 470,180 760,160 C1030,142 1270,82 1510,74 C1760,66 2020,106 2278,128 L2278,240 L0,240 Z'

const PATH_B =
  'M0,118 C250,95 510,88 760,102 C1040,118 1280,138 1510,134 C1790,130 2040,120 2278,112 L2278,240 L0,240 Z'

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const footerRef = useRef<HTMLElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)

  useEffect(() => {
    if (!footerRef.current || !pathRef.current) return

    const ctx = gsap.context(() => {
      gsap.set(pathRef.current, {
        attr: { d: PATH_A },
      })

      gsap.to(pathRef.current, {
        attr: { d: PATH_B },
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.fromTo(
        footerRef.current,
        { opacity: 0.85, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  const wrapperClass = isDark
    ? 'relative overflow-hidden border-t border-zinc-800 bg-zinc-950'
    : 'relative overflow-hidden border-t border-zinc-200 bg-zinc-50'

  const titleColor = isDark ? 'text-white' : 'text-zinc-950'
  const textColor = isDark ? 'text-zinc-400' : 'text-zinc-600'
  const softText = isDark ? 'text-zinc-500' : 'text-zinc-500'
  const navClass = isDark
    ? 'text-sm text-zinc-400 transition hover:text-white'
    : 'text-sm text-zinc-600 transition hover:text-zinc-950'
  const iconClass = isDark
    ? 'flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-600 hover:text-white'
    : 'flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-950'

  return (
    <footer ref={footerRef} className={wrapperClass}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24">
        <svg
          className="block h-full w-full"
          viewBox="0 0 2278 240"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="footer-wave-gradient"
              x1="0"
              y1="0"
              x2="2278"
              y2="240"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={isDark ? '#22d3ee' : '#67e8f9'} />
              <stop offset="50%" stopColor={isDark ? '#8b5cf6' : '#a78bfa'} />
              <stop offset="100%" stopColor={isDark ? '#f97316' : '#fb923c'} />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            fill="url(#footer-wave-gradient)"
            opacity={isDark ? 0.18 : 0.16}
            d={PATH_A}
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-cyan-500">
              Jhonn Rojas
            </p>
            <h3 className={`mb-3 text-2xl font-black ${titleColor}`}>
              Full Stack Developer
            </h3>
            <p className={`max-w-sm leading-7 ${textColor}`}>
              Construyo experiencias web modernas, APIs robustas y soluciones
              escalables con enfoque en calidad, diseño limpio y arquitectura sólida.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-500">
              Navegación
            </p>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className={navClass}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-500">
              Este sitio fue hecho con
            </p>

            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP'].map((item) => (
                <span
                  key={item}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                      : 'border-zinc-300 bg-white text-zinc-700'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className={iconClass}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center sm:flex-row sm:text-left ${
            isDark ? 'border-zinc-800' : 'border-zinc-200'
          }`}
        >
          <p className={textColor}>© 2026 Jhonn Rojas.</p>
          <p className={softText}>Diseñado y desarrollado por Jhonn Rojas</p>
        </div>
      </div>
    </footer>
  )
}