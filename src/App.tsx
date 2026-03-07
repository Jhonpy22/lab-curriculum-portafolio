import { Navbar } from './components/layouts/Navbar'
import { Footer } from './components/layouts/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skill'
import { Project } from './components/sections/Project'
import { Contact } from './components/sections/Contact'
import { useTheme } from './hooks/useTheme'
import { useLenis } from './hooks/useLenis'

function App() {
  const { theme } = useTheme()
  useLenis()

  const appClasses =
    theme === 'dark'
      ? 'bg-zinc-950 text-white transition-colors duration-300'
      : 'bg-white text-zinc-900 transition-colors duration-300'

  return (
    <div className={appClasses}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App