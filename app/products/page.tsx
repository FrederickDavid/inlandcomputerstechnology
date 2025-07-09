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
  Star,
  MessageCircle,
  Monitor,
  Keyboard,
  Mouse,
  HardDrive,
  Cpu,
  MemoryStick,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Description } from "@radix-ui/react-toast";
import Image from "next/image";
import data from "../data.json";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  const categories = [
    "All Products",
    "Monitors",
    "Keyboards",
    "Mice",
    "Storage",
    "Memory",
    "Processors",
  ];

  console.log(data.products);

  const products = [
    {
      id: 1,
      name: "Keyboard",
      description: "",
      image: "/placeholder.svg?height=300&width=300",
      category: "Keyboards",
      icon: Keyboard,
      features: ["RGB Backlit", "Cherry MX Switches", "Anti-Ghosting", "USB-C"],
    },
    {
      id: 2,
      name: "Wireless Gaming Mouse",
      price: "₦79,000",
      originalPrice: "₦99,000",
      rating: 4.7,
      reviews: 189,
      image: "/placeholder.svg?height=300&width=300",
      category: "Mice",
      icon: Mouse,
      features: ["12000 DPI", "Wireless", "RGB Lighting", "Ergonomic"],
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 3,
      name: '4K Gaming Monitor 27"',
      price: "₦399,000",
      originalPrice: "₦499,000",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=300",
      category: "Monitors",
      icon: Monitor,
      features: ["4K UHD", "144Hz", "HDR10", "USB-C Hub"],
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 4,
      name: "1TB NVMe SSD",
      price: "₦89,000",
      originalPrice: "₦119,000",
      rating: 4.6,
      reviews: 312,
      image: "/placeholder.svg?height=300&width=300",
      category: "Storage",
      icon: HardDrive,
      features: ["PCIe 4.0", "3500 MB/s", "5-Year Warranty", "Heat Spreader"],
      inStock: true,
      badge: "Best Seller",
    },
    {
      id: 5,
      name: "32GB DDR4 RAM Kit",
      price: "₦149,000",
      originalPrice: "₦199,000",
      rating: 4.8,
      reviews: 98,
      image: "/placeholder.svg?height=300&width=300",
      category: "Memory",
      icon: MemoryStick,
      features: ["3200MHz", "RGB Lighting", "Low Latency", "Dual Channel"],
      inStock: false,
      badge: "Out of Stock",
    },
    {
      id: 6,
      name: "AMD Ryzen 7 Processor",
      price: "₦299,000",
      originalPrice: "₦349,000",
      rating: 4.9,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      category: "Processors",
      icon: Cpu,
      features: ["8 Cores", "16 Threads", "4.4GHz Boost", "AM4 Socket"],
      inStock: true,
      badge: "Best Seller",
    },
  ];

  const filteredProducts =
    selectedCategory === "All Products"
      ? data.products
      : data.products.filter(
          (product) => product.category === selectedCategory
        );

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
              Computer Accessories
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Premium Computer
              <span className="block text-cyan-300">Accessories & Parts</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 px-4 sm:px-0">
              High-quality computer accessories, components, and peripherals.
              Everything you need to upgrade and enhance your computing
              experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : ""
                  }
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our carefully selected range of computer accessories and
              components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product, index) => {
              // const IconComponent = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                    <div className="relative">
                      <div className="h-48 bg-gray-100 flex items-center justify-center">
                        {" "}
                        <div className="w-52 h-52  rounded-lg flex items-center justify-center">
                          <Image
                            src={product.image}
                            width={170}
                            height={170}
                            alt="product images"
                          />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {/* <IconComponent className="h-3 w-3 mr-1" /> */}
                          {product.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                        {product.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                        <MessageCircle className="h-4 w-4 mr-2" />
                         <a href="https://wa.me/+2348038417214">WhatsApp Us</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Special Offers
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Limited time deals on popular computer accessories and components.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-cyan-500 text-white border-0">
              <CardHeader>
                <Badge className="w-fit bg-white/20 text-white border-white/30">
                  Limited Time
                </Badge>
                <CardTitle className="text-2xl text-white">
                  Gaming Bundle Deal
                </CardTitle>
                <CardDescription className="text-cyan-100">
                  Get a gaming keyboard, mouse, and headset together
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold">₦199,000</span>
                  <span className="text-lg line-through text-cyan-200">
                    ₦299,000
                  </span>
                  <Badge className="bg-red-500">Save ₦100,000</Badge>
                </div>
                <Button className="w-full bg-white text-cyan-600 hover:bg-gray-100">
                  Shop Bundle
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-purple-500 text-white border-0">
              <CardHeader>
                <Badge className="w-fit bg-white/20 text-white border-white/30">
                  Best Seller
                </Badge>
                <CardTitle className="text-2xl text-white">
                  Upgrade Kit
                </CardTitle>
                <CardDescription className="text-purple-100">
                  SSD + RAM upgrade kit for better performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl font-bold">₦179,000</span>
                  <span className="text-lg line-through text-purple-200">
                    ₦229,000
                  </span>
                  <Badge className="bg-red-500">Save ₦50,000</Badge>
                </div>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Shop Kit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Shop With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best products and service for all
              your computer needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🚚",
                title: "Free Shipping",
                description: "Free shipping on orders over ₦50,000",
                color: "#3B82F6",
              },
              {
                icon: "✅",
                title: "Quality Guaranteed",
                description: "All products come with manufacturer warranty",
                color: "#10B981",
              },
              {
                icon: "🎧",
                title: "Expert Support",
                description: "Technical support from certified professionals",
                color: "#8B5CF6",
              },
              {
                icon: "🔧",
                title: "Installation Service",
                description: "Professional installation available",
                color: "#F59E0B",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-3xl"
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts can help you find the perfect accessories for your
              computer setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-base px-8 bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                Get Expert Advice
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 text-white border-white/30 hover:bg-white/10 bg-transparent"
              >
                Browse Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
