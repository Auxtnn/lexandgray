"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const decorationVariants = {
    hidden: { opacity: 10, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const buttonHoverVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    tap: { scale: 0.98 },
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-br from-desert-sand to-desert-sand/90 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/pattern-dark.png")',
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      />
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 border border-white/10 rounded-full"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.4 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
        variants={decorationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.5 }}
      />

      {/* Moving Particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full"
        animate={{
          y: [0, 100, 0],
          x: [0, 50, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full"
        animate={{
          y: [0, -80, 0],
          x: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block">
              Take Action Today
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-proxima font-bold text-white mb-6"
          >
            Ready to Navigate the Legal Landscape with Confidence?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-white/90 mb-10"
          >
            Let's embark on this journey together. Schedule a consultation with
            our expert legal team and discover how Lex & Gray Attorneys can
            provide clarity and strategic solutions for your legal needs.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="bg-gunmetal-blue text-white px-8 py-4 rounded-md font-proxima font-semibold transition-colors duration-300 flex items-center justify-center group overflow-hidden relative"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <motion.span
                  className="ml-2 relative z-10"
                  variants={arrowVariants}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-deep-sea-blue opacity-0"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>

            <motion.div
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/services"
                className="bg-white text-gunmetal-blue px-8 py-4 rounded-md font-proxima font-semibold transition-all duration-300 flex items-center justify-center relative overflow-hidden"
              >
                <span className="relative z-10">Explore Our Services</span>
                <motion.div
                  className="absolute inset-0 bg-sky-mist opacity-0"
                  initial={{ opacity: 0, x: "-100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/10"
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
    </section>
  );
}
