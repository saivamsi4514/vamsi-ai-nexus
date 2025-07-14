import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useInView } from 'react-intersection-observer'


const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-ai/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground font-medium"
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
          >
            <span className="hero-gradient-text">Sai Vamsi Cheekati</span>
          </motion.h1>

          {/* Slogan */}
          <motion.div variants={itemVariants} className="flex items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-muted-foreground text-center leading-relaxed">
              Bridging Full-Stack Engineering with <br />
              <span className="hero-gradient-text">Artificial Intelligence & Data Science</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Full-Stack Developer passionate about creating innovative solutions that merge cutting-edge 
            technology with practical applications. Specializing in AI/ML integration, cybersecurity, 
            and building scalable real-time systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="btn-glow bg-gradient-primary hover:opacity-90 text-white px-8 py-3"
              onClick={scrollToAbout}
            >
              <span className="mr-2">Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 hover:bg-muted"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6 pt-8"
          >
            <motion.a
              href="https://github.com/saivamsi4514/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/sai-vamsi-ch/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground cursor-pointer"
            onClick={scrollToAbout}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero