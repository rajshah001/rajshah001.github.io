import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Education() {
  return (
    <section className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
          <p className="text-[color:var(--text-secondary)]">My academic background</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-accent" size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-1">{resumeData.education[0].degree}</h3>
                <p className="text-accent text-sm mb-2">{resumeData.education[0].institution}</p>
                <p className="text-xs text-[color:var(--text-secondary)]">{resumeData.education[0].score}</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Award className="text-purple-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">11 Certifications</h3>
                <p className="text-xs text-[color:var(--text-secondary)] mb-3">AWS, Azure & Kubernetes</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[color:var(--bg-secondary)] rounded text-xs">AWS (2)</span>
                  <span className="px-2 py-1 bg-[color:var(--bg-secondary)] rounded text-xs">Azure (6)</span>
                  <span className="px-2 py-1 bg-[color:var(--bg-secondary)] rounded text-xs">K8s (2)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
