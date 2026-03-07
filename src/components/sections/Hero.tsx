import { Github, Linkedin, ArrowRight, Download } from 'lucide-react'
import profileImage from '../../assets/images/profile.jpeg'
import { useTheme } from '../../hooks/useTheme';
import cvPdf from '../../assets/portafolio/CV-Jhonn-Granados-Rojas.pdf'


const stats = [
  { value: '4+', label: 'Proyectos construidos' },
  { value: 'IV Año', label: 'Ingeniería en Sistemas' },
  { value: 'Full Stack', label: 'Enfoque principal' },
]

export function Hero() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="home"
      className={`relative overflow-hidden border-b ${
        isDark ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'
      }`}
    >
      <div
        className={`absolute inset-0 bg-size-[48px_48px] ${
          isDark
            ? 'bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] opacity-30'
            : 'bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] opacity-40'
        }`}
      />
      <div className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-14 sm:px-6 md:pt-28 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="max-w-3xl">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900/80'
                  : 'border-zinc-300 bg-white/80'
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className={`font-mono text-xs ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Disponible para nuevas oportunidades
              </span>
            </div>

            <h1
              className={`text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}
            >
              Jhonn
              <span className="block text-cyan-500">Rojas</span>
            </h1>

            <p className={`mt-5 font-mono text-sm sm:text-base ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Full Stack Developer · Ingeniería en Sistemas
            </p>

            <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
              Construyo aplicaciones web modernas, APIs robustas y sistemas en
              tiempo real. Apasionado por arquitecturas limpias y código que escala.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={cvPdf}
                download="CV-Jhonn-Granados-Rojas.pdf"
                className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                  isDark
                    ? 'border-zinc-700 bg-zinc-900 text-white hover:border-zinc-500 hover:bg-zinc-800'
                    : 'border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100'
                }`}
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <a
                href="https://github.com/Jhonpy22"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm transition ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jhonn-rojas-0457952a1/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm transition ${
                  isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="relative">
              <div className="absolute -inset-3 rounded-4xl bg-cyan-500/10 blur-2xl" />
              <div
                className={`relative overflow-hidden rounded-4xl border shadow-2xl ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-900'
                    : 'border-zinc-300 bg-zinc-100'
                }`}
              >
                <img
                  src={profileImage}
                  alt="Foto de perfil de Jhonn Rojas"
                  className="h-96 w-full object-cover object-top sm:h-125 lg:h-140"
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 grid gap-6 border-t pt-8 sm:grid-cols-3 ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className={`text-2xl font-black md:text-3xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                {stat.value}
              </p>
              <p className={`mt-1 text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}