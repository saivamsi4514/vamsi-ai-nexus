import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/saivamsi4514/",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sai-vamsi-ch/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:sai.vamsi.cheekati@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SV</span>
                </div>
                <span className="text-xl font-bold hero-gradient-text">Sai Vamsi Cheekati</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Full-Stack Developer passionate about bridging cutting-edge technology with practical applications. 
                Specializing in AI/ML, cybersecurity, and building scalable real-time systems.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 bg-card rounded-lg border hover:border-primary/50 hover:text-primary transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Vizianagaram, India</p>
                <p>saivamsicheekati@gmail.com</p>
                <p>+91 7093798378</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Currently Available</p>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  <span className="text-xs text-green-600 dark:text-green-400">Open for opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Sai Vamsi Cheekati. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>using React & TailwindCSS</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-accent-ai/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}

export default Footer