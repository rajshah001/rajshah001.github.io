import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Briefcase, Linkedin, Mail, Github, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Consulting', icon: Briefcase, href: '/consulting' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/rajshah29', external: true },
  { name: 'Email', icon: Mail, href: 'mailto:rajshah.comps@gmail.com', external: true },
  { name: 'GitHub', icon: Github, href: 'https://github.com/rajshah001', external: true },
]

export default function BottomNav() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname === href
  }

  return (
    <>
      {/* Desktop Bottom Nav */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-8 left-0 right-0 z-50 hidden md:block"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative flex items-center justify-center gap-1 px-3 py-3">
            {/* Background */}
            <div className="absolute inset-0 bg-[color:var(--bg-card)]/90 backdrop-blur-xl rounded-full border border-[color:var(--border)]/50 shadow-2xl -z-10" />

            {navItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)

              const linkContent = (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      active ? 'text-accent' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[color:var(--bg-secondary)] rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon size={18} className="relative z-10" />

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1 bg-[color:var(--bg-card)] border border-[color:var(--border)] rounded-lg text-xs whitespace-nowrap pointer-events-none"
                        >
                          {item.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </>
              )

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    {linkContent}
                  </a>
                )
              }

              return (
                <Link key={item.name} to={item.href} className="relative">
                  {linkContent}
                </Link>
              )
            })}

            {/* Divider */}
            <div className="w-px h-6 bg-[color:var(--border)] mx-1" />

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white transition-colors relative"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Nav */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[color:var(--bg-card)]/90 backdrop-blur-xl border-t border-[color:var(--border)]/50"
      >
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            const linkContent = (
              <>
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`transition-colors ${active ? 'text-accent' : 'text-gray-400'}`}
                >
                  <Icon size={20} />
                </motion.div>
                {active && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="w-1 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </>
            )

            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center gap-1"
                >
                  {linkContent}
                </a>
              )
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className="relative flex flex-col items-center gap-1"
              >
                {linkContent}
              </Link>
            )
          })}

          {/* Theme Toggle Mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="flex flex-col items-center gap-1 text-gray-400"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </motion.nav>
    </>
  )
}
