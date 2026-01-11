import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-accent" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{resumeData.education[0].degree}</h3>
              <p className="text-accent text-lg">{resumeData.education[0].institution}</p>
              <p className="text-gray-400 mt-2">{resumeData.education[0].score}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
