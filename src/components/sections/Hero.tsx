import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-2xl bg-accent flex items-center justify-center text-white font-bold text-4xl mb-8"
          >
            RS
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-xl text-gray-400 mb-4">Hi, I'm</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            {resumeData.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-8"
          >
            {resumeData.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-card hover:bg-border border border-border rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            onClick={scrollToNext}
            className="mt-16 text-gray-500 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  )
}
