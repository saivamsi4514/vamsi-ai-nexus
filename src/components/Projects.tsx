import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Calendar, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Mock GitHub repositories data
  const projects = [
    {
      id: 1,
      name: "AI-Powered Web Analytics",
      description: "A full-stack analytics platform that uses machine learning to provide intelligent insights on web traffic patterns and user behavior.",
      technologies: ["React", "Python", "TensorFlow", "Node.js", "MongoDB"],
      stars: 124,
      forks: 32,
      language: "TypeScript",
      updated_at: "2024-01-15",
      html_url: "https://github.com/saivamsi4514/ai-web-analytics",
      homepage: "https://ai-analytics-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      name: "SDN Security Framework",
      description: "An advanced Software-Defined Networking security framework with real-time threat detection and automated response mechanisms.",
      technologies: ["Python", "OpenFlow", "Docker", "Kubernetes", "React"],
      stars: 89,
      forks: 21,
      language: "Python",
      updated_at: "2024-01-10",
      html_url: "https://github.com/saivamsi4514/sdn-security",
      homepage: null,
      featured: true
    },
    {
      id: 3,
      name: "Real-time Chat Application",
      description: "A scalable real-time messaging platform with end-to-end encryption, file sharing, and AI-powered moderation.",
      technologies: ["React", "Socket.io", "Node.js", "Redis", "PostgreSQL"],
      stars: 67,
      forks: 18,
      language: "JavaScript",
      updated_at: "2024-01-08",
      html_url: "https://github.com/saivamsi4514/realtime-chat",
      homepage: "https://chat-app-demo.netlify.app",
      featured: true
    },
    {
      id: 4,
      name: "ML Model Deployment API",
      description: "A containerized API service for deploying and managing machine learning models with auto-scaling capabilities.",
      technologies: ["FastAPI", "Docker", "MLflow", "Kubernetes", "AWS"],
      stars: 45,
      forks: 12,
      language: "Python",
      updated_at: "2024-01-05",
      html_url: "https://github.com/saivamsi4514/ml-deployment-api",
      homepage: null,
      featured: false
    },
    {
      id: 5,
      name: "Blockchain Voting System",
      description: "A secure, transparent voting system built on blockchain technology with smart contract integration.",
      technologies: ["Solidity", "React", "Web3.js", "Truffle", "IPFS"],
      stars: 78,
      forks: 25,
      language: "Solidity",
      updated_at: "2024-01-03",
      html_url: "https://github.com/saivamsi4514/blockchain-voting",
      homepage: "https://voting-dapp.vercel.app",
      featured: false
    },
    {
      id: 6,
      name: "Cybersecurity Dashboard",
      description: "A comprehensive security monitoring dashboard with threat intelligence and incident response automation.",
      technologies: ["Vue.js", "Python", "Elasticsearch", "Kibana", "Docker"],
      stars: 56,
      forks: 15,
      language: "Vue",
      updated_at: "2024-01-01",
      html_url: "https://github.com/saivamsi4514/security-dashboard",
      homepage: null,
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      Python: 'bg-green-500',
      Solidity: 'bg-purple-500',
      Vue: 'bg-emerald-500',
    }
    return colors[language] || 'bg-gray-500'
  }

  return (
    <section id="projects" className="py-20">
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
              Featured <span className="hero-gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work spanning full-stack development, AI/ML, 
              cybersecurity, and blockchain technologies.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">🌟 Featured Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card-elegant p-6 rounded-xl group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                      <span className="text-sm text-muted-foreground">{project.language}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(project.updated_at)}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">🚀 Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card-elegant p-6 rounded-xl group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                      <span className="text-sm text-muted-foreground">{project.language}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.name}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(project.updated_at)}
                    </span>
                    
                    <div className="flex items-center space-x-1">
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/saivamsi4514/" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
