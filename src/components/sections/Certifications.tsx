import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Certifications() {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <Award className="text-accent flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                  <p className="text-gray-400 text-xs mt-1">{cert.issuer}</p>
                  {cert.code && (
                    <span className="inline-block mt-2 px-2 py-1 bg-secondary rounded text-xs text-gray-400">
                      {cert.code}
                    </span>
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
