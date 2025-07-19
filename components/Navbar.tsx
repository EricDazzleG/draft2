"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/hooks/useTheme"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              ResumeForge
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/features" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Features
            </Link>
            <Link
              href="/templates"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
            >
              Templates
            </Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors">
              Pricing
            </Link>

            <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>

            <Link href="/auth/login">
              <Button variant="ghost" className="clay-button-secondary">
                Login
              </Button>
            </Link>

            <Link href="/auth/signup">
              <Button className="clay-button-primary">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            <Link href="/features" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
              Features
            </Link>
            <Link href="/templates" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
              Templates
            </Link>
            <Link href="/pricing" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600">
              Pricing
            </Link>
            <div className="flex space-x-4 pt-4">
              <Link href="/auth/login">
                <Button variant="ghost" className="clay-button-secondary">
                  Login
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="clay-button-primary">Get Started</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
