import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Brain, Shield, Zap, Server, Database } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const skills = [
    {
      category: "Programming Languages",
      icon: Code,
      technologies: ["C", "Python", "Java", "SQL", "Swift"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Web Development",
      icon: Server,
      technologies: ["HTML", "CSS", "JavaScript", "Flask", "PHP", "Node.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Data Analysis & ML",
      icon: Brain,
      technologies: ["NumPy", "Pandas", "Seaborn", "Scikit-learn", "TensorFlow", "Keras", "PyTorch", "SciPy"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Testing Tools",
      icon: Shield,
      technologies: ["JMeter", "Postman"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "Project Management",
      icon: Zap,
      technologies: ["Agile Methodologies"],
      color: "from-indigo-500 to-purple-500"
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

  return (
    <section id="about" className="py-20 bg-muted/30">
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
              About <span className="hero-gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions that bridge the gap between 
              cutting-edge technology and practical applications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative mx-auto lg:mx-0 w-80 h-80">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="/lovable-uploads/f9093db6-53ed-4cc3-907c-e5aa214db6a8.png"
                    alt="Sai Vamsi Cheekati"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold">B.Tech Student & AI Research Enthusiast</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Motivated and adaptable engineering student with a strong foundation in core 
                engineering principles, analytical skills, and problem-solving ability. Proficient in applying 
                theoretical knowledge to practical challenges and eager to tackle hands-on experience in 
                dynamic work environments.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Committed to accessing best practices, embracing continuous learning to deliver 
                impactful results through collaboration, data-driven insights, and technical expertise. 
                Currently pursuing B.Tech in Computer Science - Artificial Intelligence and Data Science 
                at GMR Institute of Technology.
              </p>
              
               {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">8.5</div>
                  <div className="text-sm text-muted-foreground">Current GPA</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.category}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="card-elegant p-6 rounded-xl"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-lg">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About