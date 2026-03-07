import { GraduationCap, MapPin, Code2, Layers } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Universidad Nacional de Costa Rica',
    subtitle: 'Ingeniería en Sistemas · IV Año',
  },
  {
    icon: MapPin,
    title: 'Costa Rica',
    subtitle: 'Disponible para remoto y presencial',
  },
  {
    icon: Code2,
    title: 'Full Stack Developer',
    subtitle: 'Frontend · Backend · Bases de Datos',
  },
  {
    icon: Layers,
    title: 'Sistemas en Tiempo Real',
    subtitle: 'SignalR · WebSockets · REST APIs',
  },
]

export function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" className={isDark ? 'bg-zinc-900/40 py-20 md:py-24' : 'bg-zinc-50 py-20 md:py-24'}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-cyan-500">01.</span>
          <h2 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Sobre mí
          </h2>
          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className={`mb-8 text-3xl font-black leading-tight tracking-tight md:text-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Construyo productos
              <br />
              <span className="text-cyan-500">digitales que funcionan</span>
              <br />
              y se ven bien.
            </p>

            <div className={`space-y-5 text-base leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              <p>
                Soy estudiante de último año de{' '}
                <strong className={isDark ? 'font-semibold text-white' : 'font-semibold text-zinc-950'}>
                  Ingeniería en Sistemas
                </strong>{' '}
                en la Universidad Nacional de Costa Rica. Me especializo en el
                desarrollo de aplicaciones web modernas y APIs backend robustas.
              </p>

              <p>
                Tengo experiencia construyendo{' '}
                <strong className={isDark ? 'font-semibold text-white' : 'font-semibold text-zinc-950'}>
                  sistemas full stack
                </strong>
                , aplicaciones en tiempo real y soluciones escalables. Me
                interesa crear productos con una arquitectura sólida y una
                interfaz clara.
              </p>

              <p>
                Actualmente me enfoco en mejorar mis conocimientos en
                arquitectura de software, patrones de diseño y buenas prácticas
                de desarrollo.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-12 bg-cyan-500" />
              <p className={`font-mono text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                jhonngranadosrojas@gmail.com
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-900 hover:border-cyan-500/40'
                    : 'border-zinc-200 bg-white hover:border-cyan-300'
                }`}
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${isDark ? 'bg-zinc-800' : 'bg-zinc-100'}`}>
                  <item.icon className="h-5 w-5 text-cyan-500" />
                </div>

                <p className={`mb-1 text-sm font-semibold leading-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  {item.title}
                </p>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}