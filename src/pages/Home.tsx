import BottomNav from '../components/layout/BottomNav'
import ParticleBackground from '../components/layout/ParticleBackground'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main className="min-h-screen pb-24 md:pb-32">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <BottomNav />
    </>
  )
}
