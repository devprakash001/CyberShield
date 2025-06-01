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
  Server,
  Code,
  Database,
  Cloud,
  Key,
  Fingerprint,
} from "lucide-react"

export default function ServicesPage() {
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
            Our Services
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Comprehensive Security Solutions
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Protect your digital assets with our enterprise-grade security services, designed to keep your business safe in an ever-evolving threat landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Endpoint Protection",
                description: "Advanced malware detection and real-time threat prevention across all devices",
                features: ["AI-Powered Detection", "Zero-Day Protection", "Behavioral Analysis"],
              },
              {
                icon: Eye,
                title: "Security Monitoring",
                description: "24/7 surveillance with instant alerts and automated response systems",
                features: ["Real-time Alerts", "Threat Intelligence", "Incident Response"],
              },
              {
                icon: Globe,
                title: "Network Security",
                description: "Comprehensive network protection with advanced firewall and intrusion detection",
                features: ["Firewall Management", "VPN Solutions", "Network Segmentation"],
              },
              {
                icon: Server,
                title: "Cloud Security",
                description: "Secure your cloud infrastructure with advanced protection and monitoring",
                features: ["Cloud Access Security", "Data Protection", "Compliance Management"],
              },
              {
                icon: Database,
                title: "Data Protection",
                description: "Safeguard your sensitive data with encryption and access controls",
                features: ["Data Encryption", "Access Control", "Data Loss Prevention"],
              },
              {
                icon: Fingerprint,
                title: "Identity Management",
                description: "Secure authentication and authorization for your users and systems",
                features: ["Multi-factor Auth", "Single Sign-On", "Access Management"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
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
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get started with our comprehensive security solutions today and protect your digital assets.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg px-8 py-4 glow-button group"
          >
            Contact Sales
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
    </div>
  )
} 