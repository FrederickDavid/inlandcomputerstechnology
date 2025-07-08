"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Beginner", "Intermediate", "Advanced"]

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description:
        "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB. Build 15+ projects and become a full-stack developer.",
      price: "₦89,000",
      originalPrice: "₦120,000",
      level: "Beginner",
      hours: "65 hours",
      students: "12,450",
      rating: 4.8,
      color: "#3B82F6",
      icon: "💻",
    },
    {
      id: 2,
      title: "Machine Learning & AI Fundamentals",
      description:
        "Learn Python, TensorFlow, and scikit-learn. Build real ML models and understand AI concepts from scratch.",
      price: "₦129,000",
      originalPrice: "₦180,000",
      level: "Intermediate",
      hours: "45 hours",
      students: "8,920",
      rating: 4.9,
      color: "#8B5CF6",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Data Science & Analytics Mastery",
      description:
        "Master data analysis, visualization, and statistical modeling. Work with real datasets and build a portfolio.",
      price: "₦149,000",
      originalPrice: "₦200,000",
      level: "Advanced",
      hours: "55 hours",
      students: "6,780",
      rating: 4.7,
      color: "#10B981",
      icon: "📊",
    },
    {
      id: 4,
      title: "UI/UX Design Complete Course",
      description:
        "Learn design thinking, prototyping, user research, and create stunning interfaces with Figma and Adobe XD.",
      price: "₦99,000",
      originalPrice: "₦140,000",
      level: "Beginner",
      hours: "40 hours",
      students: "9,340",
      rating: 4.6,
      color: "#F59E0B",
      icon: "🎨",
    },
    {
      id: 5,
      title: "Mobile App Development with React Native",
      description:
        "Build cross-platform mobile apps for iOS and Android. Deploy to app stores and monetize your applications.",
      price: "₦159,000",
      originalPrice: "₦220,000",
      level: "Advanced",
      hours: "50 hours",
      students: "5,670",
      rating: 4.8,
      color: "#EC4899",
      icon: "📱",
    },
    {
      id: 6,
      title: "Digital Marketing & Growth Hacking",
      description:
        "Master SEO, social media marketing, content strategy, and analytics. Grow businesses and personal brands.",
      price: "₦79,000",
      originalPrice: "₦110,000",
      level: "Beginner",
      hours: "35 hours",
      students: "11,200",
      rating: 4.5,
      color: "#EF4444",
      icon: "📈",
    },
  ]

  const filteredCourses =
    selectedCategory === "All" ? courses : courses.filter((course) => course.level === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/20">🎓 Explore Our Courses</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              All <span className="text-cyan-300">Courses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Discover our comprehensive collection of courses designed to accelerate your career growth and skill
              development in today's competitive market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-500 text-white" : ""}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div
                    className="h-48 flex items-center justify-center text-6xl relative"
                    style={{ backgroundColor: course.color }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                      {course.icon}
                    </motion.div>
                    <Badge
                      className="absolute top-4 left-4 text-white"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      {course.level}
                    </Badge>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {course.hours}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {course.students}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-gray-600">{course.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold" style={{ color: course.color }}>
                          {course.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                      </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link href={`/courses/${course.id}`}>
                        <Button className="w-full text-white" style={{ backgroundColor: course.color }}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're constantly adding new courses. Contact us to suggest a course or get personalized recommendations.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-blue-500 text-white">
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
