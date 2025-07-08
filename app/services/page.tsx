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
import {
  CheckCircle,
  Monitor,
  Wrench,
  Shield,
  Wifi,
  HardDrive,
  Laptop,
  Server,
  Settings,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Hardware Repair",
      description: "Complete hardware diagnosis and repair services",
      icon: <Wrench className="h-6 w-6" />,
      color: "#3B82F6",
      price: "₦49,000",
      features: [
        "Motherboard repair & replacement",
        "RAM & storage upgrades",
        "Power supply replacement",
        "Graphics card installation",
      ],
    },
    {
      id: 2,
      title: "Software Solutions",
      description: "Operating system and software troubleshooting",
      icon: <Monitor className="h-6 w-6" />,
      color: "#8B5CF6",
      price: "₦39,000",
      features: [
        "OS installation & setup",
        "Software installation",
        "Performance optimization",
        "System updates & patches",
      ],
    },
    {
      id: 3,
      title: "Virus Removal",
      description: "Complete malware and virus elimination",
      icon: <Shield className="h-6 w-6" />,
      color: "#10B981",
      price: "₦59,000",
      features: [
        "Virus & malware removal",
        "Spyware elimination",
        "Security software setup",
        "System security audit",
      ],
    },
    {
      id: 4,
      title: "Data Recovery",
      description: "Professional data recovery services",
      icon: <HardDrive className="h-6 w-6" />,
      color: "#F59E0B",
      price: "₦99,000",
      features: [
        "Hard drive recovery",
        "Deleted file recovery",
        "Corrupted data repair",
        "Emergency recovery",
      ],
    },
    {
      id: 5,
      title: "Network Setup",
      description: "Home and office network configuration",
      icon: <Wifi className="h-6 w-6" />,
      color: "#06B6D4",
      price: "₦79,000",
      features: [
        "WiFi network setup",
        "Router configuration",
        "Network security setup",
        "Troubleshooting",
      ],
    },
    {
      id: 6,
      title: "Laptop Repair",
      description: "Specialized laptop and mobile device repair",
      icon: <Laptop className="h-6 w-6" />,
      color: "#EC4899",
      price: "₦69,000",
      features: [
        "Screen replacement",
        "Keyboard repair",
        "Battery replacement",
        "Charging port repair",
      ],
    },
  ];

  const businessServices = [
    {
      title: "Server Maintenance",
      description: "Professional server setup and maintenance",
      icon: <Server className="h-6 w-6" />,
      color: "#3B82F6",
      features: [
        "Server installation & setup",
        "Regular maintenance",
        "Security updates",
      ],
    },
    {
      title: "IT Consulting",
      description: "Strategic IT planning and consulting",
      icon: <Settings className="h-6 w-6" />,
      color: "#8B5CF6",
      features: [
        "Technology assessment",
        "Strategic planning",
        "Implementation support",
      ],
    },
    {
      title: "Managed IT",
      description: "Complete IT management services",
      icon: <Shield className="h-6 w-6" />,
      color: "#10B981",
      features: [
        "24/7 monitoring",
        "Proactive maintenance",
        "Help desk support",
      ],
    },
  ];

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
            <Badge className="mb-4 bg-white/20 text-white border-white/20">
              Professional Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Computer Services &
              <span className="block text-cyan-300">Repair Solutions</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Comprehensive computer repair and IT services for homes and
              businesses. Expert technicians, fast turnaround, and guaranteed
              results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to preventive maintenance, we offer
              complete computer solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    {/* <div className="text-2xl font-bold mb-2" style={{ color: service.color }}>
                      Starting at {service.price}
                    </div> */}
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <a href="https://wa.me/+2348038417214">WhatsApp Us</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Business Services
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Specialized IT services for businesses of all sizes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-slate-800 border-slate-700 text-white">
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-white">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-blue-100">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-blue-100"
                        >
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      <a href="https://wa.me/+2348038417214">Contact Us</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Emergency Computer Repair
            </h2>
            <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Computer crashed? Need urgent repair? We offer 24/7 emergency
              services for critical situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-8 bg-white text-red-600 hover:bg-gray-100"
              >
                Call Emergency Line: (+234) 8038417214
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 text-white border-white/30 hover:bg-white/10 bg-transparent"
              >
                <a href="https://wa.me/+2348038417214">
                  {" "}
                  Request Emergency Service{" "}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
