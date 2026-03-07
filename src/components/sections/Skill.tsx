import { motion } from 'framer-motion'
import { skillCategories } from '../../data/skills'
import { useTheme } from '../../hooks/useTheme'
import { techIcons } from '../../utils/techIcons'
import { TbApi } from 'react-icons/tb'

type CategoryName = 'Frontend' | 'Backend' | 'Bases de Datos' | 'Herramientas'

const categoryStyles: Record<
  CategoryName,
  {
    dot: string
    label: string
    cardDark: string
    cardLight: string
    glow: string
  }
> = {
  Frontend: {
    dot: 'bg-cyan-500',
    label: 'text-cyan-500',
    cardDark: 'border-zinc-800 bg-zinc-900',
    cardLight: 'border-zinc-200 bg-white',
    glow: 'from-cyan-500/10 to-cyan-500/0',
  },
  Backend: {
    dot: 'bg-violet-500',
    label: 'text-violet-500',
    cardDark: 'border-zinc-800 bg-zinc-900',
    cardLight: 'border-zinc-200 bg-white',
    glow: 'from-violet-500/10 to-violet-500/0',
  },
  'Bases de Datos': {
    dot: 'bg-emerald-500',
    label: 'text-emerald-500',
    cardDark: 'border-zinc-800 bg-zinc-900',
    cardLight: 'border-zinc-200 bg-white',
    glow: 'from-emerald-500/10 to-emerald-500/0',
  },
  Herramientas: {
    dot: 'bg-orange-500',
    label: 'text-orange-500',
    cardDark: 'border-zinc-800 bg-zinc-900',
    cardLight: 'border-zinc-200 bg-white',
    glow: 'from-orange-500/10 to-orange-500/0',
  },
}

const techChipStyles: Record<
  string,
  { dark: string; light: string }
> = {
  React: {
    dark: 'border-cyan-800 bg-cyan-950/50 text-cyan-200 hover:bg-cyan-900/70',
    light: 'border-cyan-200 bg-cyan-50 text-cyan-700 hover:bg-cyan-100',
  },
  TypeScript: {
    dark: 'border-blue-800 bg-blue-950/50 text-blue-200 hover:bg-blue-900/70',
    light: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100',
  },
  JavaScript: {
    dark: 'border-amber-800 bg-amber-950/50 text-amber-200 hover:bg-amber-900/70',
    light: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100',
  },
  HTML: {
    dark: 'border-orange-800 bg-orange-950/50 text-orange-200 hover:bg-orange-900/70',
    light: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100',
  },
  CSS: {
    dark: 'border-sky-800 bg-sky-950/50 text-sky-200 hover:bg-sky-900/70',
    light: 'border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100',
  },
  Tailwind: {
    dark: 'border-teal-800 bg-teal-950/50 text-teal-200 hover:bg-teal-900/70',
    light: 'border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100',
  },
  NestJS: {
    dark: 'border-rose-800 bg-rose-950/50 text-rose-200 hover:bg-rose-900/70',
    light: 'border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100',
  },
  '.NET': {
    dark: 'border-violet-800 bg-violet-950/50 text-violet-200 hover:bg-violet-900/70',
    light: 'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100',
  },
  'Node.js': {
    dark: 'border-lime-800 bg-lime-950/50 text-lime-200 hover:bg-lime-900/70',
    light: 'border-lime-200 bg-lime-50 text-lime-700 hover:bg-lime-100',
  },
  'REST APIs': {
    dark: 'border-fuchsia-800 bg-fuchsia-950/50 text-fuchsia-200 hover:bg-fuchsia-900/70',
    light: 'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100',
  },
  SignalR: {
    dark: 'border-purple-800 bg-purple-950/50 text-purple-200 hover:bg-purple-900/70',
    light: 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100',
  },
  'SQL Server': {
    dark: 'border-emerald-800 bg-emerald-950/50 text-emerald-200 hover:bg-emerald-900/70',
    light: 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
  },
  MySQL: {
    dark: 'border-green-800 bg-green-950/50 text-green-200 hover:bg-green-900/70',
    light: 'border-green-200 bg-green-50 text-green-700 hover:bg-green-100',
  },
  Git: {
    dark: 'border-orange-800 bg-orange-950/50 text-orange-200 hover:bg-orange-900/70',
    light: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100',
  },
  GitHub: {
    dark: 'border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700',
    light: 'border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200',
  },
  Swagger: {
    dark: 'border-lime-800 bg-lime-950/50 text-lime-200 hover:bg-lime-900/70',
    light: 'border-lime-200 bg-lime-50 text-lime-700 hover:bg-lime-100',
  },
  Postman: {
    dark: 'border-orange-800 bg-orange-950/50 text-orange-200 hover:bg-orange-900/70',
    light: 'border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100',
  },
}

const defaultChipStyle = {
  dark: 'border-zinc-700 bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
  light: 'border-zinc-200 bg-zinc-100 text-zinc-700 hover:bg-zinc-200',
}

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

export function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      id="skills"
      className={isDark ? 'bg-zinc-950 py-20 md:py-24' : 'bg-white py-20 md:py-24'}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-12 flex items-center gap-4">
            <span className="font-mono text-sm font-bold text-cyan-500">02.</span>
            <h2
              className={`text-2xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}
            >
              Habilidades
            </h2>
            <div className={`h-px flex-1 ${isDark ? 'bg-zinc-800' : 'bg-zinc-300'}`} />
          </div>

          <p
            className={`mb-12 max-w-3xl text-lg leading-8 ${
              isDark ? 'text-zinc-300' : 'text-zinc-700'
            }`}
          >
            Tecnologías que uso para construir productos completos, desde la
            interfaz hasta la lógica del backend y la base de datos.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const styles = categoryStyles[category.name as CategoryName]

            return (
              <motion.div
                key={category.name}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className={`relative overflow-hidden rounded-3xl border p-6 md:p-7 min-h-[280px] ${
                  isDark ? styles.cardDark : styles.cardLight
                }`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${styles.glow}`} />

                <div className="relative mb-6 flex items-center gap-3">
                  <span className={`h-3 w-3 rounded-full ${styles.dot}`} />
                  <h3
                    className={`text-sm font-bold uppercase tracking-[0.18em] ${styles.label}`}
                  >
                    {category.name}
                  </h3>
                </div>

                <div className="relative flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => {
                    const Icon = techIcons[skill.iconKey] ?? TbApi
                    const chipStyle = techChipStyles[skill.name] ?? defaultChipStyle

                    return (
                      <motion.a
                        key={skill.name}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir documentación de ${skill.name}`}
                        title={`Abrir documentación de ${skill.name}`}
                        initial={{ y: 0 }}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 2 + index * 0.12,
                          repeat: Infinity,
                          repeatType: 'loop',
                          ease: 'easeInOut',
                          delay: index * 0.15,
                        }}
                        whileHover={{ scale: 1.08, y: -8 }}
                        whileTap={{ scale: 0.96 }}
                        className={`inline-flex min-h-[52px] items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm transition ${
                          isDark ? chipStyle.dark : chipStyle.light
                        }`}
                      >
                        <Icon className="h-5 w-5 shrink-0" />
                        <span className="leading-none">{skill.name}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}