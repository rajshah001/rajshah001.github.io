import { motion } from 'framer-motion'
import { Check, Mail, Send } from 'lucide-react'
import BottomNav from '../components/layout/BottomNav'
import ParticleBackground from '../components/layout/ParticleBackground'
import { useState } from 'react'

const services = [
  {
    icon: '🏗️',
    title: 'Infrastructure as Code',
    description: 'Terraform, CloudFormation - Build scalable, reproducible infrastructure',
  },
  {
    icon: '🔄',
    title: 'CI/CD Pipelines',
    description: 'Jenkins, GitHub Actions - Automate your deployment workflows',
  },
  {
    icon: '☁️',
    title: 'Cloud Migration',
    description: 'AWS, Azure - Migrate and optimize your cloud infrastructure',
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Implement best practices for cloud security and compliance',
  },
  {
    icon: '🐳',
    title: 'Kubernetes & Containers',
    description: 'Docker, K8s - Orchestrate and scale containerized applications',
  },
  {
    icon: '📊',
    title: 'Observability',
    description: 'DataDog, CloudWatch - Monitor and optimize system performance',
  },
]

const pricing = [
  {
    name: 'Single Session',
    price: '$150',
    period: 'per session',
    description: 'Perfect for tackling a specific challenge or getting quick feedback.',
    features: [
      '60-minute video call',
      'Screen sharing & code review',
      'Actionable recommendations',
      'Follow-up notes',
    ],
    popular: false,
  },
  {
    name: 'Unlimited Sessions',
    price: '$1,000',
    period: 'per year',
    description: 'For ongoing support throughout your project lifecycle.',
    features: [
      'Unlimited 30-minute calls',
      'Priority email support',
      'Architecture reviews',
      'Best practices guidance',
      'Access to my knowledge base',
    ],
    popular: true,
  },
]

const faqs = [
  {
    question: 'How do I book a session?',
    answer: 'After purchasing, you\'ll receive a private booking link to schedule your call at a time that works for you.',
  },
  {
    question: 'What can we discuss?',
    answer: 'Anything related to DevOps and cloud: infrastructure design, CI/CD pipelines, cloud migration, Kubernetes, security best practices, observability, and more.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes! The Unlimited Sessions plan is designed for ongoing support throughout your project. You can book as many calls as you need.',
  },
  {
    question: 'What\'s your refund policy?',
    answer: 'All plans come with a satisfaction guarantee. If you\'re not happy with the value from your first session, email me within 24 hours for a full refund.',
  },
  {
    question: 'Can you help with implementation?',
    answer: 'Yes, I can provide guidance and code examples during our calls. For full implementation, we can discuss a separate engagement.',
  },
]

export default function Consulting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <ParticleBackground />
      <main className="min-h-screen pb-24 md:pb-32">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps & Cloud Consulting</h1>
              <p className="text-xl text-[color:var(--text-secondary)]">
                Expert guidance to help you build, scale, and optimize your infrastructure
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="section-compact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Services</h2>
              <p className="text-[color:var(--text-secondary)]">What I can help you with</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-5 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] hover:border-accent/50 transition-all"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-[color:var(--text-secondary)]">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="section-compact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Pricing</h2>
              <p className="text-[color:var(--text-secondary)]">Choose the plan that works for you</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative p-6 rounded-xl border transition-all ${
                    plan.popular
                      ? 'border-accent bg-[color:var(--bg-card)] shadow-lg shadow-accent/10'
                      : 'border-[color:var(--border)] bg-[color:var(--bg-card)]'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-sm text-[color:var(--text-secondary)] ml-2">{plan.period}</span>
                  </div>
                  <p className="text-sm text-[color:var(--text-secondary)] mb-4">{plan.description}</p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="text-accent flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:rajshah.comps@gmail.com?subject=Consulting Inquiry"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: plan.popular ? 'var(--accent)' : 'var(--bg-secondary)',
                    }}
                  >
                    <Send size={16} />
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="section-compact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">FAQ</h2>
              <p className="text-[color:var(--text-secondary)]">Common questions</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-card)] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-[color:var(--text-secondary)]"
                    >
                      ▼
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaq === index ? 'auto' : 0,
                      opacity: openFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm text-[color:var(--text-secondary)]">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="section-compact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative p-8 rounded-2xl overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20" />
              <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
              <div className="relative">
                <Mail className="text-accent mx-auto mb-4" size={40} />
                <h2 className="text-3xl font-bold mb-3">Ready to Get Started?</h2>
                <p className="text-[color:var(--text-secondary)] mb-6">
                  Send me an email and let's discuss how I can help you achieve your DevOps goals.
                </p>
                <a
                  href="mailto:rajshah.comps@gmail.com?subject=Consulting Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-all hover:scale-105 active:scale-95"
                >
                  <Mail size={18} />
                  Get In Touch
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <BottomNav />
    </>
  )
}
