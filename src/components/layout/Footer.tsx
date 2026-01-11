import { Github, Linkedin, Mail } from 'lucide-react'
import { resumeData } from '../../data/resume'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-white font-bold">
              RS
            </div>
            <div>
              <p className="font-semibold">{resumeData.name}</p>
              <p className="text-sm text-gray-400">{resumeData.tagline}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${resumeData.email}`}
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href={resumeData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={resumeData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
