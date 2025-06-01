"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Shield,
  Users,
  Award,
  Clock,
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Zap,
  Star,
} from "lucide-react"

export default function AboutPage() {
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
      <nav className="relative z-50 p-6 flex justify-between items-center backdrop-blur-sm bg-black/50 border-b border-cyan-500/20">
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
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
            Our Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Protecting Digital Futures
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            We're a team of cybersecurity experts dedicated to making the digital world safer for businesses and individuals alike.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                To provide cutting-edge cybersecurity solutions that empower organizations to operate securely in an increasingly complex digital landscape.
              </p>
              <div className="space-y-4">
                {[
                  "Innovation in security technology",
                  "Customer-centric approach",
                  "Continuous improvement",
                  "Global security standards",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4 animate-pulse"></div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl"></div>
              <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Target, title: "Excellence", description: "Striving for the highest standards in everything we do" },
                      { icon: Heart, title: "Integrity", description: "Building trust through honest and ethical practices" },
                      { icon: Lightbulb, title: "Innovation", description: "Continuously evolving our solutions to stay ahead of threats" },
                      { icon: Zap, title: "Agility", description: "Quick response to emerging security challenges" },
                    ].map((value, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 bg-cyan-500/20 rounded-lg">
                          <value.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                          <p className="text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "100+", label: "Security Experts" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Star, value: "500+", label: "Enterprise Clients" },
              { icon: Clock, value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Be part of a team that's making the digital world safer for everyone.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button group"
          >
            Join Our Team
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
} 