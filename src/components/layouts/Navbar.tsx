import { useEffect, useState } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const isDark = theme === 'dark'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const headerClass = scrolled
    ? isDark
      ? 'border-b border-zinc-800 bg-zinc-950/85 backdrop-blur-xl'
      : 'border-b border-zinc-200 bg-white/85 backdrop-blur-xl'
    : 'bg-transparent'

  const navLinkClass = isDark
    ? 'rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white'
    : 'rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950'

  const iconButtonClass = isDark
    ? 'flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white'
    : 'flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 transition hover:border-zinc-400 hover:bg-zinc-100 hover:text-zinc-950'

  const downloadClass = isDark
    ? 'inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-zinc-800'
    : 'inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-400 hover:bg-zinc-100'

  const mobilePanelClass = isDark
    ? 'border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-xl md:hidden'
    : 'border-t border-zinc-200 bg-white/95 backdrop-blur-xl md:hidden'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="hidden w-24 md:block" />

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={navLinkClass}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button onClick={toggleTheme} aria-label="Cambiar tema" className={iconButtonClass}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a href="/cv.pdf" download className={downloadClass}>
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          <div className="flex w-full items-center justify-between md:hidden">
            <button onClick={toggleTheme} aria-label="Cambiar tema" className={iconButtonClass}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className={iconButtonClass}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={mobilePanelClass}>
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={navLinkClass}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="/cv.pdf"
              download
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  )
}