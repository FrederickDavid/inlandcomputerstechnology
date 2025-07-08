"use client";
import Image from "next/image";
import logo from "../public/logo.png";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center">
                <Image src={logo} alt="logo image" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Inland Computers</span>
                <span className="text-xs text-blue-200 -mt-1">
                  Institute of Technology
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional computer repair and IT services. Fast, reliable, and
              affordable solutions for all your technology needs.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label={`Social media link ${index + 1}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-cyan-400">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "Computer Repair",
                "Virus Removal",
                "Data Recovery",
                "Network Setup",
                "Hardware Upgrades",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-purple-400">
              Products
            </h3>
            <ul className="space-y-2">
              {[
                "Computer Accessories",
                "Gaming Peripherals",
                "Storage Solutions",
                "Memory & Processors",
                "Monitors & Displays",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-green-400">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-green-400" />
                <div>
                  <p className="text-gray-300">17 Mba Street</p>
                  <p className="text-gray-300">Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <p className="text-gray-300">(+234) 8038417214</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-purple-400" />
                <p className="text-gray-300">
                  info@inlandcomputerstechnology.com
                </p>
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-white mb-2">Business Hours</h4>
                <p className="text-gray-300 text-xs">
                  Mon-Fri: 8:00 AM - 8:00 PM
                </p>
                <p className="text-gray-300 text-xs">Sat: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-300 text-xs">Sun: 11:00 AM - 8:00 PM</p>
                <p className="text-cyan-400 text-xs font-medium">
                  24/7 Emergency Service
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Inland Computers. All rights
              reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              {["Privacy Policy", "Terms of Service", "Warranty Info"].map(
                (link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
