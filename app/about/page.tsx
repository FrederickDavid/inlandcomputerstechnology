"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function AboutPage() {
  const whyChooseFeatures = [
    {
      icon: "👨‍💻",
      title: "Certified Experts",
      description:
        "All our technicians are certified professionals with years of real-world experience and hands-on expertise.",
      color: "#3B82F6",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description: "Most repairs completed within 24-48 hours. Emergency service available.",
      color: "#10B981",
    },
    {
      icon: "🛡️",
      title: "90-Day Warranty",
      description: "All repairs come with our comprehensive 90-day warranty for your peace of mind.",
      color: "#8B5CF6",
    },
    {
      icon: "🏠",
      title: "Local Service",
      description: "Proudly serving our local community with personalized, friendly service.",
      color: "#F59E0B",
    },
  ]

  const testimonials = [
    {
      name: "Jennifer Smith",
      role: "Small Business Owner",
      content:
        "Inland Computers saved my business! When our main computer crashed, they had us back up and running within hours. Professional, fast, and affordable.",
      rating: 5,
    },
    {
      name: "Robert Wilson",
      role: "Home User",
      content:
        "I thought my laptop was beyond repair, but Mike and his team worked miracles. It's running better than ever now. Highly recommend!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Freelance Designer",
      content:
        "Excellent service! They explained everything clearly, fixed my computer quickly, and the price was very reasonable. Will definitely use them again.",
      rating: 5,
    },
  ]

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
            <Badge className="mb-4 bg-white/20 text-white border-white/20">About Inland Computers</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              15+ Years of
              <span className="block text-cyan-300">Expert Computer Service</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Your trusted local computer repair specialists, providing fast, reliable, and affordable technology
              solutions for homes and businesses since 2008.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2008 by certified technician Mike Johnson, Inland Computers started as a small computer
                repair shop with a simple mission: provide honest, reliable, and affordable computer services to our
                local community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Over the years, we've grown from a one-person operation to a team of certified professionals, but our
                commitment to personalized service and technical excellence remains unchanged. We've successfully
                repaired over 5,000 computers and helped countless customers get back online.
              </p>
              <Button size="lg" className="bg-blue-600 text-white">
                Learn More About Our Services
              </Button>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Inland Computers team"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Inland Computers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Inland Computers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're not just another computer repair shop. Here's what sets us apart from the competition.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full text-center border-0 shadow-lg">
                  <CardHeader>
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Customers Say */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
