"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Shield,
  Lock,
  Eye,
  Globe,
  CheckCircle,
  ArrowRight,
  Building2,
  Factory,
  Landmark,
  Stethoscope,
  School,
  Store,
} from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      {/* <nav className="relative z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/50 border-b border-cyan-500/20">
        <Link href="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-cyan-400 animate-pulse" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CyberShield
          </span>
        </Link>
        <div className="hidden md:flex space-x-8">
          {["Services", "Solutions", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:glow-text relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 glow-button">
          Get Started
        </Button>
      </nav> */}

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
            Industry Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tailored Security Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Industry-specific cybersecurity solutions designed to address unique challenges and compliance requirements.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Enterprise",
                description: "Comprehensive security solutions for large organizations",
                features: ["Advanced Threat Protection", "Compliance Management", "24/7 Monitoring"],
              },
              {
                icon: Factory,
                title: "Manufacturing",
                description: "Protect your industrial systems and production lines",
                features: ["OT Security", "Supply Chain Protection", "Asset Management"],
              },
              {
                icon: Landmark,
                title: "Financial Services",
                description: "Secure your financial operations and customer data",
                features: ["Fraud Prevention", "Transaction Security", "Regulatory Compliance"],
              },
              {
                icon: Stethoscope,
                title: "Healthcare",
                description: "Protect patient data and medical systems",
                features: ["HIPAA Compliance", "Medical Device Security", "Patient Data Protection"],
              },
              {
                icon: School,
                title: "Education",
                description: "Secure learning environments and student information",
                features: ["Student Data Protection", "Campus Network Security", "Research Security"],
              },
              {
                icon: Store,
                title: "Retail",
                description: "Protect customer data and payment systems",
                features: ["Payment Security", "Customer Data Protection", "Supply Chain Security"],
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Our team of experts can help you develop a tailored security solution for your specific needs.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button group"
          >
            Contact Our Team
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
} 