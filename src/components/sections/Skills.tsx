import { motion } from 'framer-motion'
import { resumeData } from '../../data/resume'

export default function Skills() {
  return (
    <section id="skills" className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-[color:var(--text-secondary)]">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all"
            >
              <h3 className="text-xs font-semibold mb-3 text-[color:var(--text-secondary)] uppercase tracking-wide">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-[color:var(--bg-secondary)] rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
