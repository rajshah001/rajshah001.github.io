import { motion } from 'framer-motion'
import { Check, ArrowRight, Mail } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
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
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps & Cloud Consulting</h1>
              <p className="text-xl text-gray-400">
                Expert guidance to help you build, scale, and optimize your infrastructure
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Pricing */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative bg-card border rounded-xl p-8 ${
                    plan.popular ? 'border-accent' : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="text-accent flex-shrink-0 mt-1" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="mailto:rajshah.comps@gmail.com?subject=Consulting Inquiry"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-accent hover:bg-accent-hover text-white'
                        : 'bg-secondary hover:bg-border text-white'
                    }"
                  >
                    Get Started <ArrowRight size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
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
                    <p className="px-6 pb-4 text-gray-400">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-12">
              <Mail className="text-accent mx-auto mb-4" size={48} />
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8">
                Send me an email and let's discuss how I can help you achieve your DevOps goals.
              </p>
              <a
                href="mailto:rajshah.comps@gmail.com?subject=Consulting Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-colors"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
