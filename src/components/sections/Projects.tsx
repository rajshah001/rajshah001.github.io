import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { resumeData } from '../../data/resume'
import { useState } from 'react'

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-[color:var(--text-secondary)]">Some things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all duration-300 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-[color:var(--bg-secondary)] rounded-lg transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-[color:var(--bg-secondary)] rounded-lg transition-colors"
                        aria-label="View GitHub repo"
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[color:var(--text-secondary)] mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.slice(0, 4).map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-2 py-1 bg-[color:var(--bg-secondary)] rounded-md text-xs font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs text-[color:var(--text-secondary)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Footer with date */}
                <div className="flex items-center justify-between">
                  {project.period && (
                    <span className="text-xs text-[color:var(--text-secondary)]">{project.period}</span>
                  )}
                  {project.link && (
                    <motion.a
                      whileHover={{ x: 3 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-accent hover:text-accent-hover"
                    >
                      View <ArrowUpRight size={14} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
