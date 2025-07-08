"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
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
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Need Computer Help?
              <span className="block text-cyan-300">We're Here to Help</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Get in touch with our expert technicians. Fast response times,
              friendly service, and solutions that work for your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule a Repair</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 2
                  hours during business hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="deviceType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Device Type
                    </label>
                    <Input
                      id="deviceType"
                      placeholder="Desktop, Laptop, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="issue"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Describe the Problem *
                    </label>
                    <Textarea
                      id="issue"
                      placeholder="Please describe what's wrong with your computer..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      How urgent is this repair?
                    </label>
                    <select
                      id="urgency"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option>Not urgent - within a week is fine</option>
                      <option>Somewhat urgent - within 2-3 days</option>
                      <option>Urgent - within 24 hours</option>
                      <option>Emergency - ASAP</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 text-white"
                  >
                    Submit Repair Request
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Multiple ways to reach us for your convenience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600 text-lg font-medium">
                        (+234) 8038417214
                      </p>
                      <p className="text-sm text-gray-500">
                        24/7 Emergency Line Available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">
                        info@inlandcomputerstechnology.com
                      </p>
                      <p className="text-sm text-gray-500">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Visit Our Shop
                      </h3>
                      <p className="text-gray-600">
                        17 Mba Street
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 text-sm">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 8:00 PM</p>
                        <p>Sunday: 11:00 AM - 8:00 PM</p>
                      </div>
                      <p className="text-sm font-medium text-orange-600">
                        24/7 Emergency Service
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle>Quick Service Options</CardTitle>
                  <CardDescription>
                    Choose the service option that works best for you.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <div>
                      <h4 className="font-medium">Drop-off Service</h4>
                      <p className="text-sm text-gray-600">
                        Bring your computer to our shop
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="font-medium">On-site Service</h4>
                      <p className="text-sm text-gray-600">
                        We come to your home or office
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple-600" />
                    <div>
                      <h4 className="font-medium">Remote Support</h4>
                      <p className="text-sm text-gray-600">
                        Fix software issues remotely
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Computer Emergency?
            </h2>
            <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Don't panic! Our emergency technicians are available 24/7 for
              critical computer issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-8 bg-white text-red-600 hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency: (+234) 8038417214
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
