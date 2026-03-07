import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { useTheme } from '../../hooks/useTheme'

const techColors: Record<string, { dark: string; light: string }> = {
  React: {
    dark: 'border-cyan-900 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-950/60',
    light: 'border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100',
  },
  TypeScript: {
    dark: 'border-blue-900 bg-blue-950/40 text-blue-300 hover:bg-blue-950/60',
    light: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
  },
  NestJS: {
    dark: 'border-rose-900 bg-rose-950/40 text-rose-300 hover:bg-rose-950/60',
    light: 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100',
  },
  '.NET': {
    dark: 'border-violet-900 bg-violet-950/40 text-violet-300 hover:bg-violet-950/60',
    light: 'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100',
  },
  'SQL Server': {
    dark: 'border-orange-900 bg-orange-950/40 text-orange-300 hover:bg-orange-950/60',
    light: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100',
  },
  SignalR: {
    dark: 'border-yellow-900 bg-yellow-950/40 text-yellow-300 hover:bg-yellow-950/60',
    light: 'border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
  },
  'C#': {
    dark: 'border-indigo-900 bg-indigo-950/40 text-indigo-300 hover:bg-indigo-950/60',
    light: 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
  },
  MySQL: {
    dark: 'border-emerald-900 bg-emerald-950/40 text-emerald-300 hover:bg-emerald-950/60',
    light: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
  },
  HTML: {
    dark: 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
    light: 'border-zinc-300 bg-zinc-100 text-zinc-700 hover:bg-zinc-200',
  },
  CSS: {
    dark: 'border-sky-900 bg-sky-950/40 text-sky-300 hover:bg-sky-950/60',
    light: 'border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100',
  },
  JavaScript: {
    dark: 'border-amber-900 bg-amber-950/40 text-amber-300 hover:bg-amber-950/60',
    light: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100',
  },
}

function TechChip({
  tech,
  url,
  isDark,
}: {
  tech: string
  url: string
  isDark: boolean
}) {
  const styles = techColors[tech] ?? {
    dark: 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
    light: 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200',
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir documentación de ${tech}`}
      title={`Abrir documentación de ${tech}`}
      className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition ${
        isDark ? styles.dark : styles.light
      }`}
    >
      {tech}
    </a>
  )
}

export function Project() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const featured = projects[0]
  const rest = projects.slice(1)

  return (
    <section
      id="projects"
      className={
        isDark ? 'bg-zinc-900/40 py-20 md:py-24' : 'bg-zinc-50 py-20 md:py-24'
      }
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-cyan-500">03.</span>
          <h2
            className={`text-2xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-950'
            }`}
          >
            Proyectos
          </h2>
          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
        </div>

        <p
          className={`mb-12 max-w-2xl text-base leading-8 ${
            isDark ? 'text-zinc-300' : 'text-zinc-700'
          }`}
        >
          Proyectos que muestran mi capacidad para construir soluciones
          completas, desde el frontend hasta el backend.
        </p>

        {featured && (
          <div
            className={`group mb-8 overflow-hidden rounded-3xl border ${
              isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
              <div
                className={`relative min-h-[320px] overflow-hidden ${
                  isDark
                    ? 'bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.18),transparent_35%)]'
                    : 'bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_35%)]'
                }`}
              >
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={`Vista previa de ${featured.title}`}
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div
                        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border ${
                          isDark
                            ? 'border-zinc-700 bg-zinc-950/60'
                            : 'border-zinc-300 bg-white/80'
                        }`}
                      >
                        <span className="font-mono text-xl font-black text-cyan-500">
                          01
                        </span>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                        Proyecto destacado
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-zinc-950/10 to-transparent" />

                <div className="absolute left-6 top-6">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm ${
                      isDark
                        ? 'border-zinc-700 bg-zinc-950/65'
                        : 'border-zinc-300 bg-white/80'
                    }`}
                  >
                    <span className="font-mono text-lg font-black text-cyan-500">
                      01
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/80">
                    Proyecto destacado
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-7 sm:p-8 md:p-10">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs font-semibold text-emerald-700">
                      Publicado
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      Producción
                    </span>
                  </div>

                  <h3
                    className={`mb-3 text-2xl font-black ${
                      isDark ? 'text-white' : 'text-zinc-950'
                    }`}
                  >
                    {featured.title}
                  </h3>

                  <p
                    className={`mb-6 text-sm leading-7 md:text-base ${
                      isDark ? 'text-zinc-300' : 'text-zinc-700'
                    }`}
                  >
                    {featured.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {featured.technologies.map((tech) => (
                      <TechChip
                        key={tech.name}
                        tech={tech.name}
                        url={tech.url}
                        isDark={isDark}
                      />
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
              className={`group flex flex-col overflow-hidden rounded-2xl border transition hover:-translate-y-1 ${
                isDark
                  ? 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                  : 'border-zinc-200 bg-white hover:border-zinc-300'
              }`}
            >
              <div className="relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Vista previa de ${project.title}`}
                    className="h-48 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-48 w-full items-center justify-center ${
                      isDark
                        ? 'bg-zinc-950 text-zinc-500'
                        : 'bg-zinc-100 text-zinc-400'
                    }`}
                  >
                    <div className="text-center">
                      <p className="font-mono text-xs uppercase tracking-[0.25em]">
                        Sin vista previa
                      </p>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent" />

                <div className="absolute left-4 top-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-sm ${
                      isDark
                        ? 'border-zinc-700 bg-zinc-950/65'
                        : 'border-zinc-300 bg-white/80'
                    }`}
                  >
                    <span
                      className={`font-mono text-sm font-black ${
                        isDark ? 'text-zinc-200' : 'text-zinc-700'
                      }`}
                    >
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="absolute right-4 top-4 flex items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.title} en GitHub`}
                      title={`Ver código de ${project.title} en GitHub`}
                      className={`rounded-lg p-2 backdrop-blur-sm transition ${
                        isDark
                          ? 'bg-zinc-950/65 text-zinc-200 hover:bg-zinc-800 hover:text-white'
                          : 'bg-white/80 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
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
                      className={`rounded-lg p-2 backdrop-blur-sm transition ${
                        isDark
                          ? 'bg-zinc-950/65 text-zinc-200 hover:bg-zinc-800 hover:text-white'
                          : 'bg-white/80 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950'
                      }`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3
                  className={`mb-3 text-lg font-black leading-tight transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-cyan-400'
                      : 'text-zinc-950 group-hover:text-cyan-600'
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mb-5 flex-1 text-sm leading-7 ${
                    isDark ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechChip
                      key={tech.name}
                      tech={tech.name}
                      url={tech.url}
                      isDark={isDark}
                    />
                  ))}
                </div>
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
              isDark
                ? 'text-zinc-400 hover:text-white'
                : 'text-zinc-600 hover:text-zinc-950'
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