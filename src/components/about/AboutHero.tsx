"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const AboutHero = () => {
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
    <section className="pt-32 pb-10 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-sky-mist rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-desert-sand/10 rounded-full"
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
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <nav className="flex" aria-label="Breadcrumb">
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
                        About Us
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>

            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block py-1 px-3 bg-desert-sand/10 text-desert-sand rounded-full text-sm font-medium">
                Our Story
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gunmetal-blue"
              variants={itemVariants}
            >
              A Legacy of Legal
              <br />
              <span className="text-desert-sand">Excellence & Integrity</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-700 mb-8 max-w-xl"
              variants={itemVariants}
            >
              Founded on principles of excellence and integrity, Lex & Gray
              Attorneys has established itself as a trusted legal partner for
              businesses and individuals seeking sophisticated counsel and
              strategic advocacy.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap md:flex-row flex-col gap-4"
            >
              <div className="flex items-center gap-4 ">
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="/images/chisom.jpg"
                    alt="Victoria Adeyemi"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md -ml-4">
                  <Image
                    src="/images/somto.jpg"
                    alt="Michael Okafor"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md -ml-4">
                  <Image
                    src="/images/chisom.jpg"
                    alt="Sarah Mensah"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <motion.div className="" variants={itemVariants}>
                <Link href="#team">
                  <motion.button
                    className="bg-gunmetal-blue text-white px-8 py-4 rounded-md font-semibold relative overflow-hidden group"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Meet Our Team</span>
                    <motion.span
                      className="absolute inset-0 bg-deep-sea-blue"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/law.jpg"
                alt="Lex & Gray Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gunmetal-blue/20" />
              <div className="absolute bottom-0 left-0 right-0 bg-gunmetal-blue/70 backdrop-blur-sm p-6 text-white">
                <p className="text-lg font-serif italic">
                  "Excellence in the law is not merely about knowing legal
                  principles, but about applying them with wisdom and
                  integrity."
                </p>
                <p className="mt-2 text-sm text-white/80">
                  — Victoria Adeyemi, Managing Partner
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-desert-sand/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gunmetal-blue/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
