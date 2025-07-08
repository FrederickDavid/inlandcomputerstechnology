"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id;

  // Mock course data - in real app, fetch based on courseId
  const course= {
    id: 3,
    title: "Programming",
    description:
      "Learn to code with modern programming languages and frameworks that power today’s web and mobile applications. Master essential skills in HTML, CSS, JavaScript, and React while gaining hands-on experience building real-world projects. Whether you're starting from scratch or upskilling, this course equips you with practical tools and current industry standards needed to thrive in today’s fast-moving tech landscape. You'll also develop problem-solving techniques and learn how to collaborate using version control systems like Git. Stay ahead with the latest trends in frontend development, responsive design, and component-based architectures.",
    price: "Starting Price: ₦89,000",
    level: "Advance",
    duration: "6-12 Months",
    color: "#3B82F6",
    features: ["Certificate of completion"],
    learningOutcomes: [
      "Understand the structure of web pages using HTML5",
      "Create headings, paragraphs, lists, forms, tables, and semantic tags",
      "Learn best practices for clean, accessible markup",
      "Embed images, videos, and iframes",
      "Build the foundation of every web page",

      "Style web pages with colors, layouts, fonts, and animations using CSS",
      "Master Flexbox and Grid for responsive design",
      "Create interactive effects with transitions and hover states",
      "Organize styles using classes, IDs, and pseudo-selectors",
      "Learn media queries for mobile-first development",

      "Add interactivity and logic to web pages using JavaScript",
      "Understand variables, data types, loops, functions, and events",
      "Manipulate the DOM to create dynamic pages",
      "Use Fetch API to load and send data",
      "Learn debugging techniques and JS best practices",

      "Build dynamic, reusable components with React",
      "Understand JSX, state, props, and component lifecycles",
      "Manage application state using hooks like useState and useEffect",
      "Route pages with React Router",
      "Build single-page applications (SPAs)",
      "Integrate APIs and handle async data",

      "Develop real web apps like portfolios, dashboards, and blogs",
      "Use version control with Git & GitHub",
      "Deploy projects online using Netlify or Vercel",
      "Practice problem-solving and responsive design",

      "Build and deploy complete frontend web applications",
      "Create modern, mobile-friendly websites",
      "Build a portfolio of projects showcasing frontend development skills",
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Courses
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Badge className="mb-4 bg-purple-500 text-white">
                  {course.level}
                </Badge>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {course.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 text-gray-600">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mb-8">
                  {course.description}
                </p>
              </div>

              {/* Enrollment Card */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8 shadow-xl">
                  <CardHeader className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {course.price}
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-purple-600 text-white mb-4"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us to Enroll
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What You'll Learn
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {course.learningOutcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have already started their journey
              in machine learning and AI.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Enroll Now via WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
