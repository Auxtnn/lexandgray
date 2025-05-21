"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroServices = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="pt-32 pb-16 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-desert-sand/10 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gunmetal-blue/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-6">
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-desert-sand text-sm transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 ml-1 md:ml-2 text-sm font-medium">
                      Services
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 bg-desert-sand/10 text-desert-sand rounded-full text-sm font-medium">
              Our Legal Services
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gunmetal-blue"
            variants={itemVariants}
          >
            Comprehensive Legal
            <br />
            <span className="text-desert-sand">Solutions for Your Needs</span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            At Lex & Gray Attorneys, we provide expert legal representation
            across a wide range of practice areas, tailored to meet your
            specific requirements with precision and excellence.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link href="/contact">
              <motion.button
                className="bg-gunmetal-blue text-white px-8 py-4 rounded-md font-semibold relative overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Schedule a Consultation</span>
                <motion.span
                  className="absolute inset-0 bg-deep-sea-blue"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>

            <Link href="#services-list">
              <motion.button
                className="border-2 border-gunmetal-blue bg-transparent px-8 py-4 rounded-md font-semibold text-gunmetal-blue hover:bg-gunmetal-blue hover:text-white transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Our Services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroServices;
