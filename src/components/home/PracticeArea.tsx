"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  GavelIcon,
  Building2Icon,
  Scale,
  Globe,
  FileText,
  Shield,
  ChevronRight,
} from "lucide-react";

const PracticeAreasSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Counter animation for statistics
  const Counter = ({ value, title, suffix = "+" }) => {
    return (
      <div className="text-center">
        <motion.div
          className="text-4xl md:text-5xl font-bold text-gunmetal-blue mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }
              : { opacity: 0, y: 20 }
          }
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  }
                : { opacity: 0 }
            }
          >
            {value}
          </motion.span>
          {suffix}
        </motion.div>
        <p className="text-gray-600">{title}</p>
      </div>
    );
  };

  const practiceAreas = [
    {
      title: "Corporate Law",
      icon: <Building2Icon className="h-8 w-8 text-desert-sand" />,
      description:
        "Business formation, mergers & acquisitions, corporate governance, and compliance matters.",
      link: "/practice-areas/corporate-law",
    },
    {
      title: "Litigation",
      icon: <GavelIcon className="h-8 w-8 text-desert-sand" />,
      description:
        "Strategic representation in civil litigation, dispute resolution, and appellate advocacy.",
      link: "/practice-areas/litigation",
    },
    {
      title: "Contract Law",
      icon: <FileText className="h-8 w-8 text-desert-sand" />,
      description:
        "Drafting, review, negotiation, and enforcement of all types of commercial agreements.",
      link: "/practice-areas/contract-law",
    },
    {
      title: "International Law",
      icon: <Globe className="h-8 w-8 text-desert-sand" />,
      description:
        "Cross-border transactions, international trade, investment, and regulatory compliance.",
      link: "/practice-areas/international-law",
    },
    {
      title: "Regulatory Compliance",
      icon: <Scale className="h-8 w-8 text-desert-sand" />,
      description:
        "Navigating complex regulatory frameworks and ensuring compliance across industries.",
      link: "/practice-areas/regulatory-compliance",
    },
    {
      title: "Intellectual Property",
      icon: <Shield className="h-8 w-8 text-desert-sand" />,
      description:
        "Protection, management, and enforcement of patents, trademarks, copyrights, and trade secrets.",
      link: "/practice-areas/intellectual-property",
    },
  ];

  return (
    <section className="py-20 bg-gunmetal-blue/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      ></div>

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-2 relative"
          >
            <h2 className="text-lg font-semibold uppercase tracking-wider text-desert-sand relative z-10">
              Areas of Expertise
            </h2>
            <motion.div
              className="absolute -bottom-1 left-0 h-3 w-full bg-desert-sand/20 -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="mb-6 text-3xl md:text-4xl font-bold text-gunmetal-blue"
          >
            Our Practice Areas
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700"
          >
            With specialized expertise across diverse legal disciplines, we
            deliver tailored solutions to address your most complex legal
            challenges.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {practiceAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg p-6 shadow-md flex flex-col h-full"
            >
              <div className="bg-gunmetal-blue/5 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {area.icon}
              </div>
              <h4 className="text-xl font-semibold text-gunmetal-blue mb-3">
                {area.title}
              </h4>
              <p className="text-gray-600 mb-4 flex-grow">{area.description}</p>
              <Link
                href="#"
                // href={area.link}
                className="inline-flex items-center text-desert-sand hover:text-deep-sea-blue font-medium transition-colors mt-2 group"
              >
                Learn more
                <motion.span
                  className="ml-1"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ChevronRight className="h-5 w-5" />
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <div
          ref={statsRef}
          className="mt-20 bg-white rounded-xl shadow-lg p-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <Counter value={5} title="Years of Experience" />
          <Counter value={100} title="Cases Resolved" />
          <Counter value={50} title="Corporate Clients" />
          <Counter value={8} title="Expert Attorneys" />
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
