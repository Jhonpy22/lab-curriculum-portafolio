import { motion } from 'framer-motion'

type Props = {
    name: string
    url: string
    isDark: boolean
    className: string
}

export function TechChip({ name, url, isDark, className }: Props) {
    return (
        <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir documentación de ${name}`}
            title={`Abrir documentación de ${name}`}
            drag
            dragSnapToOrigin
            whileHover={{
                y: -4,
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.96,
            }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 22,
            }}
            className={`cursor-grab active:cursor-grabbing select-none rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition ${className} ${isDark ? 'shadow-black/20' : 'shadow-zinc-300/40'
                } shadow-sm`}
        >
            {name}
        </motion.a>
    )
}