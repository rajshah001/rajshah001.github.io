import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="section-compact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-[color:var(--text-secondary)]">Let's connect</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <motion.a
            href={`mailto:${resumeData.email}`}
            whileHover={{ y: -5 }}
            className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all text-center"
          >
            <Mail className="text-accent mx-auto mb-3" size={24} />
            <p className="font-medium text-sm">Email</p>
            <p className="text-xs text-[color:var(--text-secondary)] mt-1">{resumeData.email}</p>
          </motion.a>

          <motion.a
            href={`tel:${resumeData.phone.replace(/\s/g, '')}`}
            whileHover={{ y: -5 }}
            className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all text-center"
          >
            <Phone className="text-accent mx-auto mb-3" size={24} />
            <p className="font-medium text-sm">Phone</p>
            <p className="text-xs text-[color:var(--text-secondary)] mt-1">{resumeData.phone}</p>
          </motion.a>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] transition-all text-center"
          >
            <MapPin className="text-accent mx-auto mb-3" size={24} />
            <p className="font-medium text-sm">Location</p>
            <p className="text-xs text-[color:var(--text-secondary)] mt-1">{resumeData.location}</p>
          </motion.div>
        </div>

        {/* Consulting CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative p-6 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
          <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
          <div className="relative">
            <h3 className="text-xl font-bold mb-2">Need DevOps Consulting?</h3>
            <p className="text-[color:var(--text-secondary)] mb-4 text-sm">
              Expert guidance for your infrastructure, CI/CD pipelines, and cloud migration needs.
            </p>
            <a
              href="/consulting"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
            >
              <Send size={16} />
              View Consulting Services
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
