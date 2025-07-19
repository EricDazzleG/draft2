"use client"

import { motion } from "framer-motion"
import { Palette, Download, Zap, Shield, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Beautiful Templates",
    description:
      "Choose from professionally designed templates with modern claymorphic styling that makes you stand out.",
  },
  {
    icon: Zap,
    title: "AI-Powered Suggestions",
    description:
      "Get intelligent recommendations for content, formatting, and design to optimize your resume's impact.",
  },
  {
    icon: Download,
    title: "Instant Export",
    description: "Download your resume in multiple formats including PDF, Word, and share-ready links instantly.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your personal information with third parties.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share drafts with mentors, friends, or career counselors for feedback and suggestions.",
  },
  {
    icon: Sparkles,
    title: "Real-time Preview",
    description: "See your changes instantly with our live preview feature as you build your perfect resume.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Why Choose </span>
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ResumeForge?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our platform combines cutting-edge design with powerful functionality to help you create professional
            documents that get results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="clay-card p-8 group hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
