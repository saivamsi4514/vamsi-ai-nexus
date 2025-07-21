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

  // Full-Stack Projects
  const fullStackProjects = [
    {
      id: 1,
      name: "Student Management System",
      description: "Comprehensive student management platform with user authentication, grade tracking, course management, and administrative dashboard. Built with modern full-stack technologies for seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "TailwindCSS"],
      stars: 12,
      forks: 5,
      language: "JavaScript",
      updated_at: "2024-11-15",
      html_url: "https://github.com/saivamsi4514/empower-student-path",
      homepage: "https://lovable.dev/projects/c2d2475a-4384-4044-9f56-dc0a1fc2fe80",
      featured: true,
      date: "2024",
      role: "Full-Stack Developer"
    },
    {
      id: 2,
      name: "Task Management System",
      description: "Feature-rich task management application with real-time collaboration, project tracking, team management, and analytics dashboard. Includes drag-and-drop functionality and notification system.",
      technologies: ["React", "TypeScript", "Node.js", "Socket.io", "PostgreSQL", "Redux"],
      stars: 18,
      forks: 8,
      language: "TypeScript",
      updated_at: "2024-10-20",
      html_url: "https://github.com/saivamsi4514/agenda-swift-sync",
      homepage: "https://lovable.dev/projects/cdd7ffba-2410-41ba-b47b-f169c8524466",
      featured: true,
      date: "2024",
      role: "Full-Stack Developer"
    },
    {
      id: 3,
      name: "Resume Builder",
      description: "Interactive resume builder with multiple templates, real-time preview, PDF export, and ATS optimization. Features drag-and-drop sections and professional formatting options.",
      technologies: ["React", "CSS3", "jsPDF", "HTML2Canvas", "LocalStorage", "Responsive Design"],
      stars: 25,
      forks: 12,
      language: "JavaScript",
      updated_at: "2024-09-30",
      html_url: "https://github.com/saivamsi4514/resume-builder",
      homepage: "https://lovable.dev/projects/a4c1b391-89fe-4316-8360-d333fedbfb1c",
      featured: true,
      date: "2024",
      role: "Frontend Developer"
    },
    {
      id: 4,
      name: "Crypto Dashboard",
      description: "Real-time cryptocurrency tracking dashboard with market analytics, portfolio management, price alerts, and historical data visualization. Integrates with multiple crypto APIs.",
      technologies: ["React", "Chart.js", "REST APIs", "WebSocket", "Context API", "Material-UI"],
      stars: 20,
      forks: 10,
      language: "JavaScript",
      updated_at: "2024-08-15",
      html_url: "https://github.com/saivamsi4514/crypto-dashborad",
      homepage: "https://lovable.dev/projects/c268d8e9-3c67-4f47-ae56-4ff286eb0c56",
      featured: true,
      date: "2024",
      role: "Frontend Developer"
    }
  ]

  // Research Projects
  const researchProjects = [
    {
      id: 5,
      name: "Automated Detection of Structural Anomalies Using Object Tracking Techniques",
      description: "Research Project Lead - Developed an automated system for early detection of structural anomalies using advanced image segmentation techniques. Implemented YOLO model for object detection, tracking, and segmentation of cracks, potholes, and corrosion.",
      technologies: ["Python", "YOLO", "Computer Vision", "Object Detection", "Image Segmentation"],
      stars: 8,
      forks: 3,
      language: "Python",
      updated_at: "2024-12-01",
      html_url: "https://github.com/saivamsi4514/structural-anomaly-detection",
      homepage: null,
      featured: false,
      date: "2024",
      role: "Research Project Lead"
    },
    {
      id: 6,
      name: "Diabetes Prediction System",
      description: "Project Lead - Developed an integrated ensemble model (XNN + LGBM) for diabetes prediction. Built backend powered by Flask API with HTML, CSS, and PHP frontend. Created comprehensive health metrics dashboard.",
      technologies: ["Python", "XNN", "LGBM", "Flask", "HTML", "CSS", "PHP"],
      stars: 6,
      forks: 2,
      language: "Python",
      updated_at: "2024-05-01",
      html_url: "https://github.com/saivamsi4514/diabetes-prediction",
      homepage: null,
      featured: false,
      date: "Feb 2024 - May 2024",
      role: "Project Lead"
    },
    {
      id: 7,
      name: "Amazon Sales Data Analysis",
      description: "Comprehensive analysis of Amazon sales data including units sold and revenue generated. Performed actionable analysis for market information, product details in categories, and preview feedbacks to derive business insights.",
      technologies: ["Python", "Pandas", "Data Analysis", "Market Research"],
      stars: 4,
      forks: 1,
      language: "Python",
      updated_at: "2024-04-01",
      html_url: "https://github.com/saivamsi4514/amazon-sales-analysis",
      homepage: null,
      featured: false,
      date: "April 2024",
      role: "Data Analyst"
    }
  ]

  const projects = [...fullStackProjects, ...researchProjects]

  const featuredProjects = fullStackProjects
  const otherProjects = researchProjects

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
              My <span className="hero-gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work spanning full-stack development, AI/ML research, 
              and data analysis across various domains.
            </p>
          </motion.div>

          {/* Full-Stack Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">🚀 Full-Stack Projects</h3>
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

          {/* Research Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">🔬 Research Projects</h3>
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
