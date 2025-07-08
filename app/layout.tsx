import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inland Computers - Reliable Laptop Repairs, Quality Accessories & Expert Training",
  description:
    "Professional computer repair, virus removal, data recovery, and IT services. Fast, reliable, and affordable solutions for homes and businesses. Plus quality accessories and hands-on computer training.",
  keywords:
    "computer repair, laptop repair, virus removal, data recovery, IT services, computer accessories, computer training, hardware repair, software troubleshooting",
  authors: [{ name: "Inland Computers Team" }],
  openGraph: {
    title: "Inland Computers - Reliable Laptop Repairs, Quality Accessories & Expert Training",
    description: "Professional computer repair and IT services with quality accessories and expert training.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inland Computers - Reliable Laptop Repairs, Quality Accessories & Expert Training",
    description: "Professional computer repair and IT services with quality accessories and expert training.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
