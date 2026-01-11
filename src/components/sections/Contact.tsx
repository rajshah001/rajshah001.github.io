import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Contact() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Get In Touch</h2>

        <div className="max-w-2xl">
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities, consulting projects, or just having a chat about DevOps and cloud technologies.
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${resumeData.email}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <Mail className="text-accent" size={24} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-400">{resumeData.email}</p>
              </div>
            </a>

            <a
              href={`tel:${resumeData.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-accent transition-colors"
            >
              <Phone className="text-accent" size={24} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">{resumeData.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <MapPin className="text-accent" size={24} />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">{resumeData.location}</p>
              </div>
            </div>
          </div>

          {/* Consulting CTA */}
          <div className="mt-12 p-6 bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 rounded-xl">
            <h3 className="text-xl font-semibold mb-2">Need DevOps Consulting?</h3>
            <p className="text-gray-300 mb-4">
              Get expert help with your infrastructure, CI/CD pipelines, cloud migration, and more.
            </p>
            <a
              href="/consulting"
              className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-colors"
            >
              View Consulting Services
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
