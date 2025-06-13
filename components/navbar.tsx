"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItemProps {
  title: string
  href: string
  items?: { title: string; description?: string; href: string }[]
}

const navItems: NavItemProps[] = [
  {
    title: "Services",
    href: "/services",
    items: [
      {
        title: "Endpoint Protection",
        description: "Advanced malware detection and real-time threat prevention",
        href: "/services/endpoint-protection",
      },
      {
        title: "Security Monitoring",
        description: "24/7 surveillance with instant alerts and response systems",
        href: "/services/security-monitoring",
      },
      {
        title: "Network Security",
        description: "Comprehensive protection with advanced firewall systems",
        href: "/services/network-security",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        title: "Threat Detection",
        description: "AI-powered threat detection and analysis",
        href: "/solutions/threat-detection",
      },
      {
        title: "Vulnerability Assessment",
        description: "Identify and address security vulnerabilities",
        href: "/solutions/vulnerability-assessment",
      },
      {
        title: "Incident Response",
        description: "Rapid response to security incidents and breaches",
        href: "/solutions/incident-response",
      },
    ],
  },
  { title: "About", href: "/about" },
  {
    title: "Contact",
    href: "/contact",
    items: [
      {
        title: "Sales Inquiry",
        description: "Talk to our sales team about your security needs",
        href: "/contact/sales",
      },
      {
        title: "Technical Support",
        description: "Get help with your existing security solutions",
        href: "/contact/support",
      },
      {
        title: "Partnerships",
        description: "Explore partnership opportunities with us",
        href: "/contact/partnerships",
      },
    ],
  },
]

const NavItem = ({ title, href, items }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link
        href={href}
        className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group flex items-center"
      >
        {title}
        {items && <ChevronDown className="ml-1 h-4 w-4" />}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {items && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-900/95 backdrop-blur-sm border border-cyan-500/20 z-50"
            >
              <div className="py-2">
                {items.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-3 hover:bg-cyan-500/10 transition-colors duration-200"
                  >
                    <div className="text-white font-medium">{item.title}</div>
                    {item.description && <div className="text-gray-400 text-sm mt-1">{item.description}</div>}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we're at the top of the page
      setIsAtTop(currentScrollY < 10)

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY.current || currentScrollY < 10) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : -100,
        backgroundColor: isAtTop ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.9)",
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-sm border-b transition-all duration-300 ${
        isAtTop ? "border-transparent" : "border-cyan-500/20"
      }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          CyberShield
        </span>
      </Link>
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <NavItem key={item.title} {...item} />
        ))}
      </div>
      <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 glow-button">
        Get Started
      </Button>
    </motion.nav>
  )
}
