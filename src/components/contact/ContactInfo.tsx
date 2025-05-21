"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
import Image from "next/image";

export function ContactInfo() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: [
        {
          label: "Main Office",
          value: "+234 812 345 6789",
          link: "tel:+2348123456789",
        },
        {
          label: "Client Support",
          value: "+234 807 683 2192",
          link: "tel:+2348076832192",
        },
        {
          label: "Emergency Legal Assistance",
          value: "+234 905 123 4567",
          link: "tel:+2349051234567",
        },
      ],
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        {
          label: "General Inquiries",
          value: "info@lexgrayattorneys.com",
          link: "mailto:info@lexgrayattorneys.com",
        },
        {
          label: "Client Support",
          value: "support@lexgrayattorneys.com",
          link: "mailto:support@lexgrayattorneys.com",
        },
        {
          label: "Career Opportunities",
          value: "careers@lexgrayattorneys.com",
          link: "mailto:careers@lexgrayattorneys.com",
        },
      ],
    },
    {
      icon: MapPin,
      title: "Office Locations",
      details: [
        {
          label: "Headquarters",
          value: "15 Marina Street, Victoria Island, Lagos, Nigeria",
          link: "https://maps.google.com/?q=15+Marina+Street+Victoria+Island+Lagos+Nigeria",
        },
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        {
          label: "Monday - Friday",
          value: "8:00 AM - 6:00 PM",
          link: "",
        },
        {
          label: "Saturday",
          value: "9:00 AM - 1:00 PM",
          link: "",
        },
        {
          label: "Sunday",
          value: "Closed",
          link: "",
        },
      ],
    },
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg overflow-hidden max-w-full"
    >
      <h3 className="text-xl sm:text-2xl font-proxima font-bold text-gunmetal-blue mb-4 sm:mb-6">
        Contact Information
      </h3>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        Reach out to us through any of the following channels. Our team is ready
        to assist you with your legal inquiries and needs.
      </p>

      <div className="space-y-6 sm:space-y-8">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-0"
          >
            <div className="sm:mr-4 mt-1 flex sm:block justify-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sky-mist text-deep-sea-blue">
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>
            <div className="flex-1 sm:max-w-[calc(100%-4rem)]">
              <h4 className="text-base sm:text-lg font-proxima font-bold text-gunmetal-blue mb-2 sm:mb-3 text-center sm:text-left">
                {item.title}
              </h4>
              <div className="space-y-2 sm:space-y-3">
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex flex-col">
                    <span className="text-desert-sand font-medium text-xs sm:text-sm">
                      {detail.label}
                    </span>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className="text-gray-700 hover:text-deep-sea-blue transition-colors text-sm sm:text-base break-words"
                        target={
                          detail.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          detail.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className="text-gray-700 text-sm sm:text-base">
                        {detail.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 border-t border-gray-100 pt-6 sm:pt-8">
        <h3 className="text-lg sm:text-xl font-proxima font-bold text-gunmetal-blue mb-4 text-center sm:text-left">
          Connect With Us
        </h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a
              href="https://facebook.com"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gunmetal-blue text-white hover:bg-desert-sand transition-colors duration-300"
              aria-label="Visit our Facebook page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://twitter.com"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gunmetal-blue text-white hover:bg-desert-sand transition-colors duration-300"
              aria-label="Visit our Twitter page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gunmetal-blue text-white hover:bg-desert-sand transition-colors duration-300"
              aria-label="Visit our LinkedIn page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://instagram.com"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gunmetal-blue text-white hover:bg-desert-sand transition-colors duration-300"
              aria-label="Visit our Instagram page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>

          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
              <Image
                src="/images/flag.jpg"
                alt="Nigeria Flag"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <p className="font-proxima font-medium text-gunmetal-blue">
                Nigeria
              </p>
              <p className="text-xs sm:text-sm text-gray-500">West Africa</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
