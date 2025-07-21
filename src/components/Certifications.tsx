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
      title: "Google Advanced Data Analytics",
      issuer: "Google",
      category: "Data Analytics",
      issueDate: "2023-09-15",
      expiryDate: "2026-09-15",
      credentialId: "8UT8EQCL2KZ7",
      credentialUrl: "https://www.coursera.org/professional-certificates/google-advanced-data-analytics",
      description: "Advanced certification in data analytics, machine learning, and statistical analysis using Google tools.",
      icon: "📊",
      skills: ["Data Analytics", "Machine Learning", "Statistics", "Python", "SQL"]
    },
    {
      id: 2,
      title: "Google Data Analytics",
      issuer: "Google",
      category: "Data Analytics",
      issueDate: "2023-03-20",
      expiryDate: "2026-03-20",
      credentialId: "LZFR6TCHAA7F",
      credentialUrl: "https://www.coursera.org/professional-certificates/google-data-analytics",
      description: "Professional certification for data analysis skills using Google tools and industry best practices.",
      icon: "📈",
      skills: ["Data Analysis", "Spreadsheets", "SQL", "Tableau", "R Programming"]
    },
    {
      id: 3,
      title: "Big Data with Spark and Hadoop",
      issuer: "IBM",
      category: "Big Data",
      issueDate: "2024-07-10",
      expiryDate: "2027-07-10",
      credentialId: "833PNFE3H8B3",
      credentialUrl: "https://www.coursera.org/learn/big-data-analysis-spark-hadoop",
      description: "Comprehensive certification in big data processing using Apache Spark and Hadoop ecosystems.",
      icon: "🗄️",
      skills: ["Apache Spark", "Hadoop", "Big Data", "Scala", "Data Processing"]
    },
    {
      id: 4,
      title: "Web Development with HTML, CSS, JavaScript",
      issuer: "IBM",
      category: "Web Dev",
      issueDate: "2022-12-15",
      expiryDate: "2025-12-15",
      credentialId: "DJXBPLEE6D7L",
      credentialUrl: "https://www.coursera.org/learn/web-development-html-css-javascript",
      description: "Foundation certification in modern web development technologies and responsive design principles.",
      icon: "🌐",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation"]
    },
    {
      id: 5,
      title: "Computers and Operating Systems and Security",
      issuer: "Microsoft",
      category: "Security",
      issueDate: "2024-07-25",
      expiryDate: "2027-07-25",
      credentialId: "RZDTJLHJBVM8",
      credentialUrl: "https://docs.microsoft.com/en-us/learn/",
      description: "Comprehensive certification covering computer systems, operating systems, and cybersecurity fundamentals.",
      icon: "🔒",
      skills: ["Operating Systems", "Computer Security", "Network Security", "Windows", "Linux"]
    },
    {
      id: 6,
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      category: "AI/ML",
      issueDate: "2022-11-08",
      expiryDate: "2025-11-08",
      credentialId: "LBTSCRHHBFGB",
      credentialUrl: "https://www.coursera.org/learn/python-for-applied-data-science-ai",
      description: "Professional certification in Python programming for data science, artificial intelligence, and development.",
      icon: "🐍",
      skills: ["Python", "Data Science", "AI Development", "NumPy", "Pandas"]
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