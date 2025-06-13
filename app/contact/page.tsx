"use client"

import React from "react"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
} from "lucide-react"

export default function ContactPage() {
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
            Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Have questions about our cybersecurity solutions? Our team is here to help you find the perfect security fit for your needs.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                    ></textarea>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-3 glow-button group"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", content: "contact@cybershield.com" },
                    { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
                    { icon: MapPin, title: "Address", content: "123 Security Street, Cyber City, 12345" },
                    { icon: Clock, title: "Business Hours", content: "Monday - Friday: 9:00 AM - 6:00 PM" },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-cyan-500/20 rounded-lg">
                        <info.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-gray-400">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Chat */}
              <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Live Chat Support</h4>
                      <p className="text-gray-400">Available 24/7 for immediate assistance</p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 glow-button group"
                  >
                    Start Chat
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 