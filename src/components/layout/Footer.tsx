"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gunmetal-blue text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and about */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo2.jpg"
                alt="Lex & Gray Attorneys"
                width={180}
                height={50}
                className="h-12 w-auto mb-6"
              />
            </Link>
            <p className="text-gray-300 mb-6">
              At Lex & Gray Attorneys, we stand at the intersection of legal
              excellence and modern professionalism, providing clear, reliable,
              and strategic legal solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-desert-sand transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-desert-sand transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-desert-sand transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-desert-sand transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-6 text-desert-sand">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-6 text-desert-sand">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services#corporate-law"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services#intellectual-property"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Intellectual Property
                </Link>
              </li>
              <li>
                <Link
                  href="/services#litigation"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Litigation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#estate-planning"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#tax-law"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Tax Law
                </Link>
              </li>
              <li>
                <Link
                  href="/services#real-estate"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xl font-proxima font-bold mb-6 text-desert-sand">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-desert-sand mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  15 Victoria Island Expressway,
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-desert-sand mr-3 flex-shrink-0" />
                <a
                  href="tel:+234812345678"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  +234 812 345 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-desert-sand mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@lexgrayattorneys.com"
                  className="text-gray-300 hover:text-desert-sand transition-colors"
                >
                  info@lexgrayattorneys.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-desert-sand mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Lex & Gray Attorneys. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-desert-sand text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-desert-sand text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-desert-sand text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* "Back to top" button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.a
          href="https://wa.me/1234567890" // Replace with your actual WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-desert-sand hover:bg-ash-gray rounded-full p-4 shadow-lg z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
