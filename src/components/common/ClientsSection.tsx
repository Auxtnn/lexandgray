"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// Example client logos
const clients = [
  { name: "TechInnovate", logo: "/images/client-1.png" },
  { name: "Global Finance Corp", logo: "/images/client-2.png" },
  { name: "Eco Solutions", logo: "/images/client-3.png" },
  { name: "BuildWell Construction", logo: "/images/client-4.png" },
  { name: "Medica Health", logo: "/images/client-5.png" },
  { name: "InvesTrust", logo: "/images/client-6.png" },
];

export function ClientsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-proxima font-bold text-gunmetal-blue mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-700">
            We're proud to partner with diverse clients across industries,
            providing tailored legal solutions to meet their unique needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              {/* This would typically display actual client logos */}
              <div className="h-16 w-32 bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="h-8 w-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-xs text-gray-500">{client.name}</p>
                </div>
              </div>
              {/* Actual implementation would use:
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={128} 
                height={64}
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
