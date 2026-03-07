import { useState } from 'react'
import { Send, ArrowUpRight } from 'lucide-react'
import { contactSocialLinks as socialLinks } from '../../data/socialLinks'
import { useTheme } from '../../hooks/useTheme'

export function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className={isDark ? 'bg-zinc-950 py-20 md:py-24' : 'bg-white py-20 md:py-24'}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-cyan-500">04.</span>
          <h2 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Contacto
          </h2>
          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
        </div>

        <div className="mb-12">
          <h3 className={`mb-4 text-4xl font-black leading-tight tracking-tight md:text-5xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Trabajemos
            <br />
            <span className="text-cyan-500">juntos.</span>
          </h3>

          <p className={`max-w-xl text-base leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
            Estoy abierto a nuevas oportunidades, colaboraciones y proyectos.
            Puedes escribirme por cualquiera de estos medios.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Canales de contacto
            </p>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between rounded-2xl border p-4 transition ${
                    isDark
                      ? 'border-zinc-800 bg-zinc-900 hover:border-cyan-500/40'
                      : 'border-zinc-200 bg-white hover:border-cyan-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                        isDark
                          ? 'border-zinc-700 bg-zinc-950'
                          : 'border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      <link.icon className={`h-4 w-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`} />
                    </div>

                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        {link.name}
                      </p>
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                        {link.label}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className={`h-4 w-4 transition ${isDark ? 'text-zinc-600 group-hover:text-cyan-400' : 'text-zinc-400 group-hover:text-cyan-600'}`} />
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`rounded-3xl border p-6 sm:p-8 ${
              isDark
                ? 'border-zinc-800 bg-zinc-900'
                : 'border-zinc-200 bg-zinc-50'
            }`}
          >
            <p className={`mb-6 text-xs font-semibold uppercase tracking-[0.25em] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
              Envía un mensaje
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-950 text-white focus:border-cyan-500'
                      : 'border-zinc-300 bg-white text-zinc-950 focus:border-cyan-500'
                  }`}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-950 text-white focus:border-cyan-500'
                      : 'border-zinc-300 bg-white text-zinc-950 focus:border-cyan-500'
                  }`}
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Cuéntame sobre tu proyecto o idea..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition ${
                  isDark
                    ? 'border-zinc-700 bg-zinc-950 text-white focus:border-cyan-500'
                    : 'border-zinc-300 bg-white text-zinc-950 focus:border-cyan-500'
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              {sent ? '¡Mensaje enviado! ✓' : 'Enviar mensaje'}
              {!sent && <Send className="h-4 w-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}