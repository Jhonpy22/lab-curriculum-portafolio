import { skillCategories } from '../../data/skills'
import { useTheme } from '../../hooks/useTheme'

type CategoryName = 'Frontend' | 'Backend' | 'Bases de Datos' | 'Herramientas'

const categoryStyles: Record<
  CategoryName,
  { dot: string; label: string; chipDark: string; chipLight: string }
> = {
  Frontend: {
    dot: 'bg-cyan-500',
    label: 'text-cyan-500',
    chipDark: 'border-cyan-900 bg-cyan-950/40 text-cyan-300',
    chipLight: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  },
  Backend: {
    dot: 'bg-violet-500',
    label: 'text-violet-500',
    chipDark: 'border-violet-900 bg-violet-950/40 text-violet-300',
    chipLight: 'border-violet-200 bg-violet-50 text-violet-700',
  },
  'Bases de Datos': {
    dot: 'bg-emerald-500',
    label: 'text-emerald-500',
    chipDark: 'border-emerald-900 bg-emerald-950/40 text-emerald-300',
    chipLight: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  Herramientas: {
    dot: 'bg-orange-500',
    label: 'text-orange-500',
    chipDark: 'border-orange-900 bg-orange-950/40 text-orange-300',
    chipLight: 'border-orange-200 bg-orange-50 text-orange-700',
  },
}

const defaultStyle = {
  dot: 'bg-zinc-400',
  label: 'text-zinc-400',
  chipDark: 'border-zinc-700 bg-zinc-800 text-zinc-300',
  chipLight: 'border-zinc-200 bg-zinc-100 text-zinc-700',
}

export function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" className={isDark ? 'bg-zinc-950 py-20 md:py-24' : 'bg-white py-20 md:py-24'}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm font-bold text-cyan-500">02.</span>
          <h2 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
            Habilidades
          </h2>
          <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
        </div>

        <p className={`mb-12 max-w-2xl text-base leading-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          Tecnologías que uso para construir productos completos, desde la
          interfaz hasta la lógica del backend y la base de datos.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const styles =
              categoryStyles[category.name as CategoryName] ?? defaultStyle

            return (
              <div
                key={category.name}
                className={`rounded-2xl border p-6 transition hover:-translate-y-1 ${
                  isDark
                    ? 'border-zinc-800 bg-zinc-900 hover:border-zinc-700'
                    : 'border-zinc-200 bg-white hover:border-zinc-300'
                }`}
              >
                <div className="mb-5 flex items-center gap-2.5">
                  <span className={`h-2.5 w-2.5 rounded-full ${styles.dot}`} />
                  <h3 className={`text-xs font-bold uppercase tracking-widest ${styles.label}`}>
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-md border px-2.5 py-1 font-mono text-xs font-medium ${
                        isDark ? styles.chipDark : styles.chipLight
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <p className={`mt-10 font-mono text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
          // Siempre aprendiendo nuevas tecnologías
        </p>
      </div>
    </section>
  )
}