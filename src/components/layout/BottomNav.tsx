import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Briefcase, Award, User, Mail, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Projects', icon: Award, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
]

export default function BottomNav() {
  const [activeSection, setActiveSection] = useState('Home')
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1))
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname !== '/' && href.startsWith('#')) {
      e.preventDefault()
      window.location.href = `/${href}`
    }
  }

  return (
    <>
      {/* Desktop Bottom Nav */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="relative">
          {/* Background blur */}
          <div className="absolute inset-0 bg-[color:var(--bg-card)]/80 backdrop-blur-xl rounded-full border border-[color:var(--border)]/50 shadow-2xl" />

          <div className="relative flex items-center gap-1 px-2 py-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.name || (item.href === '/' && location.pathname === '/')

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive ? 'text-accent' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[color:var(--bg-secondary)] rounded-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon size={18} className="relative z-10" />
                    <span className="relative z-10 text-sm font-medium hidden lg:block">
                      {item.name}
                    </span>
                  </motion.div>
                </Link>
              )
            })}

            {/* Divider */}
            <div className="w-px h-6 bg-[color:var(--border)] mx-2" />

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white transition-colors"
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
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[color:var(--bg-card)]/80 backdrop-blur-xl border-t border-[color:var(--border)]/50"
      >
        <div className="flex items-center justify-around px-4 py-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.name || (item.href === '/' && location.pathname === '/')

            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative flex flex-col items-center gap-1"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`transition-colors ${isActive ? 'text-accent' : 'text-gray-400'}`}
                >
                  <Icon size={20} />
                </motion.div>
                {isActive && (
                  <motion.div
                    layoutId="activeMobileTab"
                    className="w-1 h-1 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
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
