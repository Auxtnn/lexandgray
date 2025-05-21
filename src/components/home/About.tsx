"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Scale, History, Book } from "lucide-react";

const AboutSection = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Features data
  const features = [
    {
      icon: <Briefcase className="h-8 w-8 text-desert-sand" />,
      title: "Legal Expertise",
      description:
        "Solutions to your most complex legal issues across jurisdictions.",
    },
    {
      icon: <Scale className="h-8 w-8 text-desert-sand" />,
      title: "Client-Centricity",
      description:
        "Personalized advice, delivered with attention to your unique needs.",
    },
    {
      icon: <History className="h-8 w-8 text-desert-sand" />,
      title: "Legacy of Wisdom",
      description:
        "Rooted in tradition while embracing innovative legal approaches.",
    },
    {
      icon: <Book className="h-8 w-8 text-desert-sand" />,
      title: "Sector Knowledge",
      description:
        "Deep understanding of regulatory nuances across various industries.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:gap-12 lg:grid-cols-2"
        >
          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-xl lg:h-auto order-2 lg:order-1"
          >
            <Image
              src="/images/scale.jpg"
              alt="Lex & Gray Office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-20" />
            <div className="absolute bottom-0 w-full bg-gunmetal-blue bg-opacity-80 p-4 md:p-6 text-white">
              <p className="font-serif text-base md:text-lg italic">
                "The genesis of Lex & Gray Attorneys is rooted in a nuanced
                understanding of the legal landscape."
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <motion.div variants={itemVariants} className="mb-3 md:mb-4">
              <h2 className="text-lg font-semibold uppercase tracking-wider text-desert-sand">
                About Us
              </h2>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold leading-tight text-gunmetal-blue lg:text-5xl"
            >
              Excellence in Legal Services
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="mb-6 md:mb-8 text-base md:text-lg text-gray-700"
            >
              At Lex & Gray Attorneys, we extend a warm welcome to you – our
              valued clients, partners, and friends. Step into a realm where
              legal excellence meets modern professionalism, and where the
              complexities of law are navigated with precision and innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 md:mb-10 text-base md:text-lg text-gray-700"
            >
              Our journey is rooted in a legacy of legal wisdom, and our
              commitment to clarity, reliability, and integrity forms the
              foundation of everything we do. Lex & Gray is more than a law
              firm; it is a dynamic partnership built on trust, understanding,
              and shared success.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col rounded-lg bg-white p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <div className="mb-3 md:mb-4">{feature.icon}</div>
                  <h4 className="mb-2 font-semibold text-gunmetal-blue">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
