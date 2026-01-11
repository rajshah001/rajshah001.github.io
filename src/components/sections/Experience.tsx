import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Experience() {
  return (
    <section id="experience" className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <p className="text-[color:var(--text-secondary)]">Where I've worked</p>
        </div>

        <div className="space-y-4">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-accent">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-1 text-xs text-[color:var(--text-secondary)] sm:text-right">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-1.5 text-sm text-[color:var(--text-secondary)]">
                {exp.description.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
