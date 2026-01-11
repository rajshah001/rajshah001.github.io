import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white font-bold text-3xl shadow-2xl shadow-accent/25"
          >
            RS
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-lg text-[color:var(--text-secondary)]">Hi, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            {resumeData.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-[color:var(--text-secondary)] max-w-2xl"
          >
            {resumeData.tagline}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href={resumeData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[color:var(--bg-secondary)] hover:bg-accent transition-colors group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-[color:var(--text-secondary)] group-hover:text-white" />
            </a>
            <a
              href={resumeData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-[color:var(--bg-secondary)] hover:bg-accent transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-[color:var(--text-secondary)] group-hover:text-white" />
            </a>
            <a
              href={`mailto:${resumeData.email}`}
              className="p-3 rounded-xl bg-[color:var(--bg-secondary)] hover:bg-accent transition-colors group"
              aria-label="Email"
            >
              <Mail size={20} className="text-[color:var(--text-secondary)] group-hover:text-white" />
            </a>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-accent hover:bg-accent-hover rounded-xl font-medium transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[color:var(--bg-secondary)] hover:bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-xl font-medium transition-all hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </motion.button>
    </section>
  )
}
