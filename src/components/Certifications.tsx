import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Filter, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      category: "Cloud",
      issueDate: "2023-08-15",
      expiryDate: "2026-08-15",
      credentialId: "AWS-PSA-123456789",
      credentialUrl: "https://aws.amazon.com/verification",
      description: "Advanced certification demonstrating expertise in designing distributed applications and systems on AWS.",
      icon: "🔶",
      skills: ["AWS Architecture", "Cloud Security", "Cost Optimization", "Disaster Recovery"]
    },
    {
      id: 2,
      title: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      category: "ML/AI",
      issueDate: "2023-06-20",
      expiryDate: "2025-06-20",
      credentialId: "GCP-MLE-987654321",
      credentialUrl: "https://cloud.google.com/certification",
      description: "Professional certification for designing and implementing ML solutions using Google Cloud technologies.",
      icon: "🤖",
      skills: ["Machine Learning", "TensorFlow", "BigQuery ML", "AutoML"]
    },
    {
      id: 3,
      title: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      category: "DevOps",
      issueDate: "2023-04-10",
      expiryDate: "2026-04-10",
      credentialId: "CKA-567890123",
      credentialUrl: "https://training.linuxfoundation.org/certification",
      description: "Demonstrates skills in deploying, managing, and troubleshooting Kubernetes clusters.",
      icon: "⚙️",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Networking"]
    },
    {
      id: 4,
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      category: "Security",
      issueDate: "2022-11-15",
      expiryDate: "2025-11-15",
      credentialId: "CEH-234567890",
      credentialUrl: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      description: "Validates skills in identifying vulnerabilities and weaknesses in target systems.",
      icon: "🔒",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Web Security"]
    },
    {
      id: 5,
      title: "Microsoft Azure AI Engineer Associate",
      issuer: "Microsoft",
      category: "ML/AI",
      issueDate: "2023-03-08",
      expiryDate: "2025-03-08",
      credentialId: "AZURE-AI-345678901",
      credentialUrl: "https://docs.microsoft.com/en-us/learn/certifications/",
      description: "Demonstrates ability to implement AI solutions on Microsoft Azure platform.",
      icon: "🧠",
      skills: ["Azure AI", "Cognitive Services", "Bot Framework", "Computer Vision"]
    },
    {
      id: 6,
      title: "React Developer Certification",
      issuer: "Meta",
      category: "Web Dev",
      issueDate: "2023-01-20",
      expiryDate: "2025-01-20",
      credentialId: "META-REACT-456789012",
      credentialUrl: "https://developers.facebook.com/certification/",
      description: "Professional certification demonstrating advanced React development skills.",
      icon: "⚛️",
      skills: ["React", "JSX", "Hooks", "State Management", "Testing"]
    },
    {
      id: 7,
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      category: "DevOps",
      issueDate: "2022-09-12",
      expiryDate: "2024-09-12",
      credentialId: "DOCKER-DCA-567890123",
      credentialUrl: "https://training.mirantis.com/dca-certification-exam/",
      description: "Validates skills in containerization and Docker ecosystem technologies.",
      icon: "🐳",
      skills: ["Docker", "Containerization", "Docker Compose", "Container Security"]
    },
    {
      id: 8,
      title: "CISSP - Certified Information Systems Security Professional",
      issuer: "(ISC)² - International Information Systems Security Certification Consortium",
      category: "Security",
      issueDate: "2022-07-25",
      expiryDate: "2025-07-25",
      credentialId: "CISSP-678901234",
      credentialUrl: "https://www.isc2.org/Certifications/CISSP",
      description: "Advanced certification for experienced security professionals demonstrating expertise across 8 domains.",
      icon: "🛡️",
      skills: ["Security Architecture", "Risk Management", "Identity Management", "Cryptography"]
    }
  ]

  const categories = ['All', ...Array.from(new Set(certifications.map(cert => cert.category)))]

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    return expiry <= sixMonthsFromNow
  }

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional <span className="hero-gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating expertise across cloud platforms, 
              AI/ML technologies, cybersecurity, and modern development practices.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            <Filter className="w-5 h-5 text-muted-foreground mr-2 mt-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="card-elegant p-6 rounded-xl group relative overflow-hidden"
              >
                {/* Certificate Icon/Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge variant="outline" className="text-xs">
                      {cert.category}
                    </Badge>
                    {isExpiringSoon(cert.expiryDate) && (
                      <Badge variant="destructive" className="text-xs">
                        Expiring Soon
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-muted-foreground text-sm mb-3 font-medium">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {cert.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{cert.skills.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Dates */}
                <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Issued: {formatDate(cert.issueDate)}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Expires: {formatDate(cert.expiryDate)}</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId.slice(-6)}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    asChild
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-ai/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/sai-vamsi-ch/" target="_blank" rel="noopener noreferrer">
                <Award className="w-5 h-5 mr-2" />
                View All Certifications on LinkedIn
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications