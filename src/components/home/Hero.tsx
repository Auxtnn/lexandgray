"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Scale,
  Briefcase,
  Shield,
  ChevronDown,
  GraduationCap,
} from "lucide-react";

const Hero = () => {
  // Animation variants
  const leftContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const rightContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const decorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, rotate: -10 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section className="relative overflow-hidden bg-gunmetal-blue pt-20 lg:pt-32">
      {/* Main Content Container */}
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        {/* Left Content Side */}
        <motion.div
          variants={leftContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col justify-center px-6 py-16 md:px-12 lg:w-1/2 lg:py-0"
        >
          {/* Heading with Decorative Element */}
          <div className="relative mb-6">
            <motion.div
              variants={decorationVariants}
              className="absolute -left-8 top-0 h-16 w-2 bg-desert-sand md:h-20"
            />
            <motion.h1
              variants={itemVariants}
              className="mb-2 font-sans text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              LEX & GRAY
              <span className="mt-1 block text-desert-sand">ATTORNEYS</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-lg text-lg font-light text-gray-300 md:text-xl"
          >
            Where legal excellence meets modern professionalism in the heart of
            Port Harcourt
          </motion.p>

          {/* Latin Quote with decorative elements */}
          <motion.div
            variants={itemVariants}
            className="relative mb-10 rounded-sm border-l-4 border-desert-sand bg-white bg-opacity-5 px-6 py-4"
          >
            <p className="font-serif italic text-desert-sand md:text-lg">
              "Actus non facit reum nisi mens sit rea"
            </p>
            <p className="mt-1 text-sm text-gray-400">
              The act does not make one guilty unless the mind is guilty
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="mb-10 grid grid-cols-3 gap-4"
          >
            <motion.div
              className="flex flex-col items-center text-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="mb-2 rounded-full bg-desert-sand bg-opacity-20 p-3">
                <Scale className="h-6 w-6 text-desert-sand" />
              </div>
              <span className="text-xs text-gray-300 md:text-sm">
                Justice Driven
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="mb-2 rounded-full bg-desert-sand bg-opacity-20 p-3">
                <Briefcase className="h-6 w-6 text-desert-sand" />
              </div>
              <span className="text-xs text-gray-300 md:text-sm">
                Professional
              </span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center"
              variants={iconVariants}
              whileHover="hover"
            >
              <div className="mb-2 rounded-full bg-desert-sand bg-opacity-20 p-3">
                <GraduationCap className="h-6 w-6 text-desert-sand" />
              </div>
              <span className="text-xs text-gray-300 md:text-sm">
                Expert Team
              </span>
            </motion.div>
          </motion.div>

          {/* Call to action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
          >
            <Link href="/contact">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group flex items-center justify-center rounded-md bg-desert-sand px-6 py-3 font-medium text-gunmetal-blue transition-all duration-300 hover:bg-opacity-90"
              >
                <span>Consult Now</span>
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 font-medium text-white transition-all duration-300 hover:border-desert-sand hover:text-desert-sand"
              >
                <span>Our Services</span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Image & Decorative Elements */}
        <motion.div
          variants={rightContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative flex w-full items-center justify-center bg-desert-sand bg-opacity-10 lg:w-1/2"
        >
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/home.jpg"
              alt="Courthouse pillars"
              className="h-full w-full object-cover opacity-20"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-80" />
          </div>

          {/* Decorative Elements */}
          <div className="relative z-10 mx-auto flex h-full max-w-lg flex-col items-center justify-center px-8 py-12 text-center lg:py-0">
            {/* Shield Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.8,
                  ease: "easeOut",
                },
              }}
              className="relative mb-8"
            >
              <div className="absolute -inset-4 rounded-full border-2 border-desert-sand border-opacity-30" />
              <div className="rounded-full bg-desert-sand bg-opacity-20 p-6">
                <Shield className="h-16 w-16 text-desert-sand" />
              </div>
            </motion.div>

            {/* Timeless Values Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.7,
                  duration: 0.7,
                  ease: "easeOut",
                },
              }}
              className="text-center"
            >
              <h3 className="mb-4 font-serif text-2xl text-white md:text-3xl">
                <span className="text-desert-sand">Timeless</span> Legal
                <span className="block">Excellence</span>
              </h3>
              <p className="mb-8 text-gray-300">
                Providing distinguished legal expertise with a modern approach
                to law in Nigeria and across Africa.
              </p>

              {/* Decorative line */}
              <div className="mx-auto mb-8 h-0.5 w-16 bg-desert-sand"></div>

              {/* Timeless Principles */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col items-center">
                  <div className="mb-3 rounded-full border border-desert-sand p-3">
                    <Scale className="h-5 w-5 text-desert-sand" />
                  </div>
                  <p className="text-sm font-medium text-white md:text-base">
                    Integrity
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 rounded-full border border-desert-sand p-3">
                    <Briefcase className="h-5 w-5 text-desert-sand" />
                  </div>
                  <p className="text-sm font-medium text-white md:text-base">
                    Expertise
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 rounded-full border border-desert-sand p-3">
                    <GraduationCap className="h-5 w-5 text-desert-sand" />
                  </div>
                  <p className="text-sm font-medium text-white md:text-base">
                    Knowledge
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="mb-3 rounded-full border border-desert-sand p-3">
                    <Shield className="h-5 w-5 text-desert-sand" />
                  </div>
                  <p className="text-sm font-medium text-white md:text-base">
                    Protection
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Abstract Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.3,
              transition: { delay: 1.2, duration: 1 },
            }}
            className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4"
          >
            <div className="absolute h-full w-full rounded-full border-2 border-desert-sand"></div>
            <div className="absolute h-3/4 w-3/4 rounded-full border-2 border-desert-sand translate-x-1/8 translate-y-1/8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.2,
              transition: { delay: 1.4, duration: 1 },
            }}
            className="absolute left-0 top-0 h-48 w-48 -translate-x-1/3 -translate-y-1/4"
          >
            <div className="absolute h-full w-full rounded-full border-2 border-desert-sand"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, 8, 0],
          transition: {
            delay: 2,
            y: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
            opacity: { duration: 1 },
          },
        }}
        className="absolute hidden md:block bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-xs uppercase tracking-wider text-gray-400 md:text-sm">
            Scroll Down
          </span>
          <ChevronDown className="h-6 w-6 text-desert-sand" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
