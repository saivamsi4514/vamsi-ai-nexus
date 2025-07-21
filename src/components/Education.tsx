import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const education = [
    {
      id: 1,
      degree: "B.Tech in Computer Science - Artificial Intelligence and Data Science",
      specialization: "Artificial Intelligence and Data Science",
      institution: "GMR Institute of Technology Srikakulam",
      location: "Srikakulam, India",
      startDate: "2021-07",
      endDate: "2025-06",
      gpa: "8.5/10.0",
      achievements: [
        "Current GPA: 8.5/10.0",
        "Research Project Lead in Structural Anomaly Detection",
        "Active participant in technical projects and internships"
      ],
      coursework: [
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Software Engineering",
        "Database Management",
        "Algorithms"
      ],
      thesis: "Automated Detection of Structural Anomalies Using Object Tracking Techniques"
    },
    {
      id: 2,
      degree: "Class XII - High School Certification",
      specialization: "Narayana Junior College",
      institution: "Andhra Pradesh Board",
      location: "Andhra Pradesh, India",
      startDate: "2019-06",
      endDate: "2020-05",
      gpa: "8.38 GPA",
      achievements: [
        "Scored 8.38 GPA in Class XII",
        "Merit student at Narayana Junior College",
        "Strong foundation in Mathematics and Physics"
      ],
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "Computer Science",
        "English"
      ],
      thesis: null
    },
    {
      id: 3,
      degree: "Class X - Secondary School Certification",
      specialization: "MPEV School",
      institution: "CBSE Board",
      location: "India",
      startDate: "2017-04",
      endDate: "2018-05",
      gpa: "8.0 CGPA",
      achievements: [
        "Scored 8.0 CGPA in Class X",
        "All-round excellence in academics",
        "Strong performance in Mathematics and Science"
      ],
      coursework: [
        "Mathematics",
        "Science",
        "Social Studies",
        "English",
        "Hindi"
      ],
      thesis: null
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "2023-08",
      credentialId: "AWS-PSA-123456"
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      date: "2023-06",
      credentialId: "GCP-MLE-789012"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2023-04",
      credentialId: "CKA-345678"
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2022-11",
      credentialId: "CEH-901234"
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const formatDate = (date: string) => {
    const [year, month] = date.split('-')
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }

  return (
    <section id="education" className="py-20">
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
              Education & <span className="hero-gradient-text">Qualifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and professional certifications that have shaped my expertise 
              in computer science, AI/ML, and cybersecurity.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <GraduationCap className="w-6 h-6 mr-2" />
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="card-elegant p-8 rounded-xl"
                >
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-2">{edu.degree}</h4>
                          <p className="text-lg text-muted-foreground font-medium mb-2">
                            {edu.specialization}
                          </p>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>

                      {/* Thesis */}
                      {edu.thesis && (
                        <div className="mb-4">
                          <h5 className="font-semibold mb-2">Thesis:</h5>
                          <p className="text-muted-foreground italic">{edu.thesis}</p>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h5 className="font-semibold mb-3">Relevant Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="secondary" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
              <Award className="w-6 h-6 mr-2" />
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="card-elegant p-6 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-primary mb-2">{cert.name}</h4>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(cert.date)}
                      </div>
                    </div>
                    <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Credential ID: {cert.credentialId}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education