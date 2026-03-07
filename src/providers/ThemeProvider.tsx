import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from '../contexts/ThemeContext'

type Props = {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    return savedTheme ?? 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}