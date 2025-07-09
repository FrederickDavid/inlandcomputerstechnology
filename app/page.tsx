"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  MessageCircle,
  Wrench,
  Monitor,
  GraduationCap,
  ShoppingBag,
  HardDrive,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Description } from "@radix-ui/react-dialog";
import data from "./data.json";

export default function HomePage() {
  const stats = [
    { number: "5000+", label: "Repairs Completed", color: "#3B82F6" },
    { number: "98%", label: "Success Rate", color: "#10B981" },
    { number: "15+", label: "Years Experience", color: "#8B5CF6" },
    { number: "24/7", label: "Support Available", color: "#F59E0B" },
  ];

  const services = [
    {
      id: 1,
      title: "Hardware Repair",
      description:
        "Complete hardware diagnosis and repair services including motherboards, hard drives, RAM, and power supplies.",
      icon: <Wrench className="h-8 w-8" />,
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Software Solutions",
      description:
        "Operating system installation, software troubleshooting, virus removal, and performance optimization services.",
      icon: <Monitor className="h-8 w-8" />,
      color: "#8B5CF6",
    },
    {
      id: 3,
      title: "Computer Training",
      description:
        "Comprehensive computer training courses designed to help you master in-demand digital skills and advance your career.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "#10B981",
    },
  ];

  const products = [
    {
      id: 1,
      title: "Accessories",
      price: "Starting at: ₦4,500",
      description:
        "Discover high-quality computer accessories including keyboards, mice, USB hubs, headsets, and more designed to boost productivity, comfort, and performance for work, study, or gaming.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#3B82F6",
    },
    {
      id: 2,
      title: "Laptops",
      price: "Starting at: ₦150,000",
      description:
        "Powerful and reliable computer laptops designed for performance, durability, and everyday productivity ideal for work, study, gaming, or creative projects with sleek design and long battery life.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#8B5CF6",
    },
    {
      id: 3,
      title: "Desktops",
      price: "Starting at: ₦80,000",
      description:
        "Powerful and reliable computer desktops built for performance, multitasking, and durability. Ideal for office work, creative projects, and everyday computing needs.",
      image: "/placeholder.svg?height=200&width=200",
      color: "#10B981",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Desktop Publishing",
      description: "Master professional document design and layout techniques",
      price: "Starting Price: ₦20,000",
      level: "Beginner",
      duration: "2-3 Months",
      color: "#10B981",
      icon: "📊",
    },
    {
      id: 2,
      title: "Graphics Design",
      description: "Create stunning visual designs for digital and print media",
      price: "Starting Price: ₦60,000",
      level: "Intermediate",
      duration: "3-4 Months",
      color: "#8B5CF6",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Programming",
      description:
        "Learn to code with modern programming languages and frameworks",
      price: "Starting Price: ₦89,000",
      level: "Advance",
      duration: "6-12 Months",
      color: "#3B82F6",
      icon: "💻",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - 100vh */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden bg-white">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-500"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-purple-500"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge className="mb-6 text-sm px-4 py-2 bg-blue-500 text-white">
                  🔧 Empowering You with Technology that Works
                </Badge>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Reliable Laptop Repairs,{" "}
                <span className="text-blue-500">Quality Accessories</span> &{" "}
                <span className="text-purple-500">Expert Training</span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600">
                  All in One Place
                </span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                From fast and affordable laptop repairs to top-quality
                accessories and hands-on computer training, we've got you
                covered. Whether you're a student, professional, or small
                business owner, our trusted team helps you stay connected,
                equipped, and ahead in a digital world.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services">
                    <Button
                      size="lg"
                      className="text-base px-8 py-4 bg-blue-500 text-white shadow-lg"
                    >
                      Our Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/products">
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-base px-8 py-4 border-2 border-blue-500 text-blue-500 bg-transparent"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Shop Products
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 px-4 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-blue-500"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5000+ Repairs</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9 Rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                  style={{ color: stat.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-blue-500 text-white">
              🛠️ Our Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="text-blue-500">Computer Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventive maintenance, we provide
              comprehensive computer services for homes and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader className="text-center">
                    <div
                      className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-4">
                      {service.description}
                    </CardDescription>
                    <div
                      className="text-2xl font-bold mb-4"
                      style={{ color: service.color }}
                    ></div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full text-white"
                        style={{ backgroundColor: service.color }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <a href="https://wa.me/+2348038417214">WhatsApp Us</a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-blue-500 text-white">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-500 text-white">
              🛒 Featured Products
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Premium Computer{" "}
              <span className="text-purple-500">Accessories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              High-quality computer accessories, components, and peripherals.
              Everything you need to upgrade and enhance your computing
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg flex items-center justify-center">
                      <HardDrive className="w-16 h-16 text-gray-500" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-column items-center">
                        <div className="text-sm text-gray-500">
                          {product.description}
                        </div>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: product.color }}
                        >
                          {product.price}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className="w-full text-white"
                        style={{ backgroundColor: product.color }}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <a href="https://wa.me/+2348038417214">WhatsApp Us</a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/products">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-purple-500 text-white">
                  View All Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-green-500 text-white">
              🎓 Computer Training
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Master <span className="text-green-500">Digital Skills</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive computer training courses designed to help you
              master in-demand skills and advance your career in today's
              competitive market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data?.courses.slice(0, 3).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                  <div
                    className="h-48 flex items-center justify-center text-6xl relative"
                    style={{ backgroundColor: course.color }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
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
                          {course.duration}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className="text-2xl font-bold"
                          style={{ color: course.color }}
                        >
                          {course.price}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          className="w-full text-white"
                          style={{ backgroundColor: course.color }}
                        >
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

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/courses">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-green-500 text-white">
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Need Computer Help Today?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let computer problems slow you down. Get expert repair
              services, quality accessories, or professional training with fast
              turnaround times.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-base px-8 py-4 bg-white text-blue-500 hover:bg-gray-100"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
