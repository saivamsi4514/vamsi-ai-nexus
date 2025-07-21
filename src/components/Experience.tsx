import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const experiences = [
    {
      id: 1,
      title: "Intern",
      company: "NIT Warangal",
      location: "Warangal, India",
      type: "Internship",
      startDate: "2024-12",
      endDate: "2025-04",
      description: "LDoS Attack Detection and Mitigation Using Deep Learning in SDN - Implementation of deep learning models to detect and mitigate low-rate DDoS attacks in Software-Defined Networks. Used tools including Python, TensorFlow/Keras, and SDN frameworks.",
      technologies: ["Python", "TensorFlow", "Keras", "SDN", "Deep Learning", "Network Security"],
      website: "https://www.nitw.ac.in"
    },
    {
      id: 2,
      title: "Intern",
      company: "WISENET Automation Private Limited",
      location: "India",
      type: "Internship",
      startDate: "2023-07",
      endDate: "2023-08",
      description: "4G GPS ASSET TRACKER WEBSITE - Developed a website for a tracker and performed comprehensive website and server testing. Applied expertise in Web Development, Web Design, Data Analytics, and Testing methodologies.",
      technologies: ["Web Development", "Web Design", "Data Analytics", "Testing", "GPS Tracking"],
      website: "https://wisenet.com"
    }
  ]

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
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  }

  const formatDate = (date: string) => {
    if (date === "Present") return date
    const [year, month] = date.split('-')
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
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
              Professional <span className="hero-gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A journey through my career in technology, showcasing growth from web development 
              to AI/ML engineering and cybersecurity expertise.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="card-elegant p-6 rounded-xl"
                  >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-muted-foreground">
                          <span className="font-semibold">{exp.company}</span>
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    {/* Location & Date */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience