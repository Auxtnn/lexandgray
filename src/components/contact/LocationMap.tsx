"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function LocationMap() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="pb-16 pt-6">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-proxima font-bold text-gunmetal-blue mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-gray-700">
            Located in the heart of Abuja, our office is easily accessible and
            ready to welcome you for in-person consultations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="relative  rounded-lg overflow-hidden h-[500px]"
        >
          {/* This would typically be an iframe with Google Maps, but we'll use an image placeholder */}
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63435.329220619125!2d3.3812127527977545!3d6.431534040490756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1747654030396!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Lex & Gray Attorneys Office Location"
            ></iframe>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-3">
              Directions
            </h3>
            <p className="text-gray-600">
              Our office is located 10 minutes from the city center, with easy
              access from major highways. Convenient parking is available
              on-site.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-3">
              Public Transportation
            </h3>
            <p className="text-gray-600">
              Bus routes 15, 23, and 42 stop within a 5-minute walk. The nearest
              transit station is Central Station, a 12-minute walk away.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-3">
              Accessibility
            </h3>
            <p className="text-gray-600">
              Our office is fully accessible, with wheelchair ramps, elevator
              access, and accessible restrooms. Please contact us if you require
              any additional accommodations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
