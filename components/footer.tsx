"use client"

import Link from "next/link"
import { Shield, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [language, setLanguage] = useState("English")

  return (
    <footer className="relative z-10 bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Company Info Column */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CyberShield<sup>TM</sup>
              </span>
            </Link>

            <div className="space-y-2 text-gray-400 text-sm">
              <p>contact@cybershield.com</p>
              <p>+1 (888) 123-4567</p>
              <p className="mt-4">123 Security Avenue</p>
              <p>San Francisco, California,</p>
              <p>94105</p>
            </div>

            <div className="flex space-x-4 mt-8">
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                <span className="sr-only">Vimeo</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457c1.254-1.095 2.485-2.1909 3.692-3.281 1.664-1.4409 2.919-2.1999 3.745-2.1999 1.982 0 3.2 1.2789 3.647 3.8309.493 3.089.835 5.0099 1.0219 5.7649.569 2.5649 1.189 3.8479 1.869 3.8479.529 0 1.324-.838 2.385-2.5169 1.0549-1.6729 1.6219-2.9429 1.6969-3.81.152-1.437-.395-2.1559-1.639-2.1559-.5799 0-1.18.1329-1.7899.3969 1.1899-3.8949 3.4499-5.7949 6.7999-5.7069 2.4799.0599 3.6419 1.6809 3.4899 4.8569z" />
                </svg>
              </Link>
            </div>

            <div className="mt-8">
              <button className="flex items-center space-x-2 text-sm text-gray-400 border border-gray-700 rounded px-4 py-2 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
                <span>Language</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-white font-medium mb-6">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/platform/overview" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/platform/free-trial"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-medium mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/threat-intelligence"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Cyber Threat Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fusion-center"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Cyber Fusion Center
                </Link>
              </li>
              <li>
                <Link
                  href="/products/risk-management"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Digital Risk Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products/fraud-prevention"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link
                  href="/products/identity-protection"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Identity Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/products/endpoint-protection"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Endpoint Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/products/attack-surface"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Enterprise Attack Surface Management
                </Link>
              </li>
              <li>
                <Link
                  href="/products/threat-hunting"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Threat Hunting
                </Link>
              </li>
              <li>
                <Link href="/products/vapt" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Vulnerability Assessment and Penetration Testing (VAPT)
                </Link>
              </li>
              <li>
                <Link
                  href="/products/insider-threat"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Insider Threat Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-white font-medium mb-6">About</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about/company" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/about/advisory-board"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Advisory Board
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/about/press" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/about/events" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about/resources" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about/advisories" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Advisories
                </Link>
              </li>
              <li>
                <Link href="/about/awards" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/about/insights" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/about/rss" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  RSS
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/digital-forensics"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Digital Forensics
                </Link>
              </li>
              <li>
                <Link
                  href="/services/executive-protection"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Executive Protection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/intelligence"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Intelligence Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/threat-detection"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Managed Threat Detection
                </Link>
              </li>
              <li>
                <Link
                  href="/services/red-teaming"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Red Teaming
                </Link>
              </li>
              <li>
                <Link href="/services/vciso" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  vCISO
                </Link>
              </li>
              <li>
                <Link href="/services/arbs" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  ARBS
                </Link>
              </li>
              <li>
                <Link
                  href="/services/assessment"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Counterparty Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/services/asset-tracing"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Asset Tracing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/stress-testing"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Stress Testing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-xs text-gray-600">
          <Link href="/app" className="hover:text-cyan-400 transition-colors">
            https://www.cybershield.com/app
          </Link>
        </div>
      </div>
    </footer>
  )
}
