import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { useTheme } from '../../hooks/useTheme'

const techColors: Record<
  string,
  { dark: string; light: string }
> = {
  React: {
    dark: 'border-cyan-900 bg-cyan-950/40 text-cyan-300',
    light: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  TypeScript: {
    dark: 'border-blue-900 bg-blue-950/40 text-blue-300',
    light: 'border-blue-200 bg-blue-50 text-blue-700',
  },
  NestJS: {
    dark: 'border-rose-900 bg-rose-950/40 text-rose-300',
    light: 'border-rose-200 bg-rose-50 text-rose-700',
  },
  '.NET': {
    dark: 'border-violet-900 bg-violet-950/40 text-violet-300',
    light: 'border-violet-200 bg-violet-50 text-violet-700',
  },
  'SQL Server': {
    dark: 'border-orange-900 bg-orange-950/40 text-orange-300',
    light: 'border-orange-200 bg-orange-50 text-orange-700',
  },
  SignalR: {
    dark: 'border-yellow-900 bg-yellow-950/40 text-yellow-300',
    light: 'border-yellow-200 bg-yellow-50 text-yellow-700',
  },
  'C#': {
    dark: 'border-indigo-900 bg-indigo-950/40 text-indigo-300',
    light: 'border-indigo-200 bg-indigo-50 text-indigo-700',
  },
  MySQL: {
    dark: 'border-emerald-900 bg-emerald-950/40 text-emerald-300',
    light: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  CSS: {
    dark: 'border-sky-900 bg-sky-950/40 text-sky-300',
    light: 'border-sky-200 bg-sky-50 text-sky-700',
  },
  JavaScript: {
    dark: 'border-amber-900 bg-amber-950/40 text-amber-300',
    light: 'border-amber-200 bg-amber-50 text-amber-700',
  },
}

function TechChip({ tech, isDark }: { tech: string; isDark: boolean }) {
  const styles = techColors[tech] ?? {
    dark: 'border-zinc-700 bg-zinc-800 text-zinc-300',
    light: 'border-zinc-200 bg-zinc-100 text-zinc-700',
  }

  return (
    <span
      className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium ${
        isDark ? styles.dark : styles.light
      }`}
    >
      {tech}
    </span>
  )
}

export function Project() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section id="projects" className={isDark ? 'bg-zinc-900/40 py-20 md:py-24' : 'bg-zinc-50 py-20 md:py-24'}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-cyan-500">03.</span>
          <h2 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Proyectos
          </h2>
          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
        </div>

        <p className={`mb-12 max-w-2xl text-base leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          Proyectos que muestran mi capacidad para construir soluciones
          completas, desde el frontend hasta el backend.
        </p>

        {featured && (
          <div
            className={`mb-8 overflow-hidden rounded-3xl border ${
              isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div
                className={`flex min-h-60 items-center justify-center p-10 ${
                  isDark
                    ? 'bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]'
                    : 'bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_35%)]'
                }`}
              >
                <div className="text-center">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border ${
                      isDark
                        ? 'border-zinc-700 bg-zinc-950/60'
                        : 'border-zinc-300 bg-white/80'
                    }`}
                  >
                    <span className="font-mono text-xl font-black text-cyan-500">01</span>
                  </div>
                  <p className={`font-mono text-xs uppercase tracking-[0.25em] ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    Proyecto destacado
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-8 md:p-10">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">
                      Live
                    </span>
                    <span className={`font-mono text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Producción
                    </span>
                  </div>

                  <h3 className={`mb-3 text-2xl font-black ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    {featured.title}
                  </h3>

                  <p className={`mb-6 text-sm leading-7 md:text-base ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {featured.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <TechChip key={tech} tech={tech} isDark={isDark} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {featured.demo && (
                    <a
                      href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${featured.title}`}
                      title={`Ver demo de ${featured.title}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
                    >
                      Ver más
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}

                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${featured.title} en GitHub`}
                      title={`Ver código de ${featured.title} en GitHub`}
                      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
                        isDark
                          ? 'border-zinc-700 bg-zinc-950 text-white hover:border-zinc-500 hover:bg-zinc-800'
                          : 'border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-100'
                      }`}
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, i) => (
            <article
              key={project.title}
              className={`group flex flex-col rounded-2xl border p-6 transition hover:-translate-y-1 ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                  : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
            >
              <div className="mb-5 flex items-start justify-between">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-950'
                      : 'border-zinc-300 bg-zinc-50'
                  }`}
                >
                  <span className={`font-mono text-sm font-black ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.title} en GitHub`}
                      title={`Ver código de ${project.title} en GitHub`}
                      className={`rounded-lg p-2 transition ${
                        isDark
                          ? 'text-zinc-500 hover:bg-zinc-800 hover:text-white'
                          : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demo de ${project.title}`}
                      title={`Ver demo de ${project.title}`}
                      className={`rounded-lg p-2 transition ${
                        isDark
                          ? 'text-zinc-500 hover:bg-zinc-800 hover:text-white'
                          : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <h3
                className={`mb-3 text-lg font-black leading-tight transition-colors ${
                  isDark
                    ? 'text-white group-hover:text-cyan-400'
                    : 'text-zinc-950 group-hover:text-cyan-600'
                }`}
              >
                {project.title}
              </h3>

              <p className={`mb-5 flex-1 text-sm leading-7 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechChip key={tech} tech={tech} isDark={isDark} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Jhonpy22"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition ${
              isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            <Github className="h-4 w-4" />
            Ver más proyectos en GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}