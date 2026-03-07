import { footerSocialLinks as socialLinks } from '../../data/socialLinks'
import { useTheme } from '../../hooks/useTheme'

export function Footer() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const footerClass = isDark
    ? 'border-t border-zinc-800 bg-zinc-950 py-10'
    : 'border-t border-zinc-200 bg-zinc-50 py-10'

  const textMain = isDark ? 'text-sm text-zinc-500' : 'text-sm text-zinc-600'
  const navClass = isDark
    ? 'text-sm text-zinc-500 transition hover:text-white'
    : 'text-sm text-zinc-600 transition hover:text-zinc-950'

  const iconClass = isDark
    ? 'flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:border-zinc-600 hover:text-white'
    : 'flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-950'

  const bottomText = isDark ? 'text-xs text-zinc-600' : 'text-xs text-zinc-500'
  const divider = isDark ? 'mt-6 border-t border-zinc-800 pt-6 text-center' : 'mt-6 border-t border-zinc-200 pt-6 text-center'

  return (
    <footer className={footerClass}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className={textMain}>© 2026 Jhonn Rojas. Todos los derechos reservados.</p>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={navClass}>
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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

        <div className={divider}>
          <p className={bottomText}>Construido con React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}