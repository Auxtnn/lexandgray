"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  link,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="bg-sky-mist p-4 rounded-full inline-block mb-6">
        <Icon className="h-8 w-8 text-deep-sea-blue" />
      </div>
      <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-desert-sand hover:text-deep-sea-blue font-proxima font-medium transition-colors duration-300"
      >
        Learn More
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
