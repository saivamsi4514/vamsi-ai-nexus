import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Clock, Tag, ArrowRight, Calendar, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [selectedTag, setSelectedTag] = useState('All')

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable AI Applications with React and TensorFlow.js",
      excerpt: "Learn how to integrate machine learning models directly into React applications for real-time AI-powered user experiences.",
      content: "In this comprehensive guide, we'll explore how to build scalable AI applications...",
      featuredImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      tags: ["AI/ML", "React", "TensorFlow", "Web Development"],
      category: "AI/ML",
      featured: true,
      views: 1247,
      likes: 89
    },
    {
      id: 2,
      title: "Implementing Zero-Trust Security in SDN Architectures",
      excerpt: "A deep dive into implementing zero-trust security models in Software-Defined Networks for enhanced cybersecurity.",
      content: "Zero-trust security has become a cornerstone of modern cybersecurity...",
      featuredImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2024-01-10",
      readTime: "12 min read",
      tags: ["Cybersecurity", "SDN", "Network Security", "Zero Trust"],
      category: "Cybersecurity",
      featured: true,
      views: 892,
      likes: 67
    },
    {
      id: 3,
      title: "Real-time Data Processing with Node.js and WebSockets",
      excerpt: "Building high-performance real-time applications using Node.js, WebSockets, and modern streaming technologies.",
      content: "Real-time applications are becoming increasingly important in today's digital landscape...",
      featuredImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2024-01-05",
      readTime: "10 min read",
      tags: ["Node.js", "Real-time", "WebSockets", "Performance"],
      category: "Full Stack",
      featured: false,
      views: 654,
      likes: 45
    },
    {
      id: 4,
      title: "Deploying ML Models at Scale with Kubernetes and Docker",
      excerpt: "A comprehensive guide to containerizing and orchestrating machine learning models for production deployment.",
      content: "Machine learning model deployment can be challenging at scale...",
      featuredImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2023-12-28",
      readTime: "15 min read",
      tags: ["ML/AI", "Kubernetes", "Docker", "DevOps"],
      category: "DevOps",
      featured: false,
      views: 1156,
      likes: 78
    },
    {
      id: 5,
      title: "Advanced React Patterns for Large-Scale Applications",
      excerpt: "Exploring advanced React patterns and architectural decisions for building maintainable large-scale applications.",
      content: "As React applications grow in complexity, proper architecture becomes crucial...",
      featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2023-12-20",
      readTime: "11 min read",
      tags: ["React", "Architecture", "JavaScript", "Frontend"],
      category: "Frontend",
      featured: false,
      views: 789,
      likes: 56
    },
    {
      id: 6,
      title: "Microservices Architecture with GraphQL Federation",
      excerpt: "Designing and implementing microservices architectures using GraphQL Federation for improved developer experience.",
      content: "GraphQL Federation allows you to compose multiple GraphQL services...",
      featuredImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      author: "Sai Vamsi Cheekati",
      publishDate: "2023-12-15",
      readTime: "13 min read",
      tags: ["GraphQL", "Microservices", "Backend", "API Design"],
      category: "Backend",
      featured: false,
      views: 923,
      likes: 62
    }
  ]

  const allTags = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))]

  const filteredPosts = selectedTag === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedTag))

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="blog" className="py-20">
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
              Tech <span className="hero-gradient-text">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on full-stack development, AI/ML, cybersecurity, 
              and the latest trends in technology.
            </p>
          </motion.div>

          {/* Tag Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            <Tag className="w-5 h-5 text-muted-foreground mr-2 mt-2" />
            {allTags.slice(0, 8).map((tag) => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="mb-2"
              >
                {tag}
              </Button>
            ))}
          </motion.div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <motion.div variants={itemVariants} className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">✨ Featured Articles</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="card-elegant rounded-xl overflow-hidden group cursor-pointer"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishDate)}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{post.views} views</span>
                          <span>{post.likes} likes</span>
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:text-primary">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Posts */}
          {regularPosts.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8 text-center">📚 Latest Articles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="card-elegant rounded-xl overflow-hidden group cursor-pointer"
                  >
                    {/* Featured Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-xs"
                      >
                        {post.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>{formatDate(post.publishDate)}</span>
                        <span>{post.readTime}</span>
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{post.views}</span>
                          <span>•</span>
                          <span>{post.likes} ❤️</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-xs group-hover:text-primary">
                          Read
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline">
              <BookOpen className="w-5 h-5 mr-2" />
              View All Blog Posts
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog