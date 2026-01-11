import { motion } from 'framer-motion'
import { resumeData, journeyData } from '../../data/resume'

export default function About() {
  const totalCerts = journeyData.milestones.reduce((sum, m) => sum + m.count, 0)

  return (
    <section id="about" className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <p className="text-[color:var(--text-secondary)]">A bit about me and my journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bio - takes 2 columns */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[color:var(--text-secondary)] leading-relaxed"
            >
              {resumeData.about}
            </motion.p>
          </div>

          {/* Journey Tracker - takes 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-3xl font-bold gradient-text">{totalCerts}</span>
                <span className="text-sm text-[color:var(--text-secondary)]">Certifications</span>
              </div>

              {journeyData.milestones.map((milestone) => (
                <div key={milestone.platform} className="mb-3 last:mb-0">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium">{milestone.platform}</span>
                    <span className="text-[color:var(--text-secondary)]">
                      {milestone.count}/{milestone.total}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[color:var(--bg-secondary)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(milestone.count / milestone.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: milestone.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Community Badge */}
            <div className="p-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <span className="text-lg">☁️</span>
                </div>
                <div>
                  <p className="font-medium text-sm">AWS Community Builder</p>
                  <p className="text-xs text-[color:var(--text-secondary)]">Since Feb 2023</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
