import { motion } from 'framer-motion'
import { resumeData, journeyData } from '../../data/resume'

export default function About() {
  const totalCerts = journeyData.milestones.reduce((sum, m) => sum + m.count, 0)

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">About</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {resumeData.about}
            </p>
          </div>

          {/* Journey Tracker */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">{journeyData.title}</h3>
              <p className="text-gray-400">{journeyData.subtitle}</p>
            </div>

            {/* Progress Stats */}
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">{totalCerts}</span>
                <span className="text-gray-400">Certifications Earned</span>
              </div>

              {/* Platform Breakdown */}
              <div className="space-y-4">
                {journeyData.milestones.map((milestone) => (
                  <div key={milestone.platform}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{milestone.platform}</span>
                      <span className="text-gray-400">
                        {milestone.count}/{milestone.total}
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(milestone.count / milestone.total) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: milestone.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteering */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold mb-3">Community Involvement</h4>
              <div className="space-y-3">
                {resumeData.volunteering.map((vol, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{vol.role}</p>
                    <p className="text-gray-400">{vol.organization} • {vol.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
