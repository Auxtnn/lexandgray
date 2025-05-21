"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gavel,
  Building,
  Users,
  FileText,
  ShieldCheck,
  Globe,
  DollarSign,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("litigation");
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const iconFloatVariants = {
    initial: { y: 0 },
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const benefitItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  };

  // Services data
  const services = [
    {
      id: "litigation",
      title: "Litigation",
      icon: <Gavel className="h-10 w-10 text-desert-sand" />,
      description:
        "Our litigation team provides strategic representation across a wide range of disputes, from complex commercial matters to specialized industry conflicts. We combine meticulous preparation with skilled advocacy to protect your interests at every stage of dispute resolution.",
      benefits: [
        "Expert courtroom representation",
        "Strategic case development",
        "Alternative dispute resolution",
        "Appellate advocacy",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Law",
      icon: <Building className="h-10 w-10 text-desert-sand" />,
      description:
        "Our corporate practice guides businesses through formation, governance, transactions, and compliance. We provide specialized expertise across various corporate structures and industries, supporting your business goals with legal clarity and strategic insight.",
      benefits: [
        "Mergers and acquisitions",
        "Corporate governance",
        "Regulatory compliance",
        "Corporate restructuring",
      ],
    },
    {
      id: "employment",
      title: "Employment Law",
      icon: <Users className="h-10 w-10 text-desert-sand" />,
      description:
        "We help employers navigate the complex landscape of employment regulations while protecting their business interests. Our team provides practical guidance on employment policies, dispute resolution, and compliance to minimize legal risks.",
      benefits: [
        "Employment contracts and policies",
        "Dispute resolution",
        "Compliance programs",
        "Training and prevention",
      ],
    },
    {
      id: "contracts",
      title: "Contract Law",
      icon: <FileText className="h-10 w-10 text-desert-sand" />,
      description:
        "Our contract experts provide comprehensive services from drafting and negotiation to enforcement and dispute resolution. We ensure your agreements are clear, enforceable, and designed to protect your interests in every business relationship.",
      benefits: [
        "Contract drafting and review",
        "Negotiation support",
        "Risk mitigation strategies",
        "Breach of contract resolution",
      ],
    },
    {
      id: "ip",
      title: "Intellectual Property",
      icon: <ShieldCheck className="h-10 w-10 text-desert-sand" />,
      description:
        "We safeguard your intellectual assets through comprehensive IP services, from registration and protection to enforcement and monetization strategies. Our team helps you build and maintain a strong IP portfolio that enhances your competitive advantage.",
      benefits: [
        "Patent, trademark, and copyright services",
        "IP portfolio management",
        "Licensing agreements",
        "Infringement actions",
      ],
    },
    {
      id: "international",
      title: "International Law",
      icon: <Globe className="h-10 w-10 text-desert-sand" />,
      description:
        "Our international law practice bridges legal systems and jurisdictions to provide seamless support for cross-border matters. We combine global perspective with local expertise to navigate the complexities of international business, trade, and dispute resolution.",
      benefits: [
        "Cross-border transactions",
        "International dispute resolution",
        "Trade and customs compliance",
        "Foreign investment guidance",
      ],
    },
  ];

  const activeService = services.find((service) => service.id === activeTab);

  return (
    <section className="bg-gradient-to-b from-gunmetal-blue/5 to-gunmetal-blue/15 py-10 overflow-hidden relative">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-40 left-0 w-64 h-64 rounded-full bg-desert-sand/10 -z-10"
        animate={{
          x: [-20, 20, -20],
          y: [-20, 20, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gunmetal-blue/10 -z-10"
        animate={{
          x: [20, -20, 20],
          y: [20, -20, 20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="container mx-auto px-4 lg:w-11/12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-2 inline-block relative"
          >
            <h2 className="text-lg font-semibold uppercase tracking-wider text-desert-sand relative z-10">
              Our Services
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
            Comprehensive Legal Solutions
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="mb-12 text-base md:text-lg text-gray-700"
          >
            Lex & Gray Attorneys offers a suite of specialized legal services to
            meet the diverse needs of our clients. From litigation to corporate
            law, our expertise spans multiple practice areas.
          </motion.p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:gap-12 lg:grid-cols-12">
          {/* Service Tabs - Desktop */}
          <motion.div
            variants={itemVariants}
            className="hidden flex-col space-y-2 lg:col-span-4 lg:flex"
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center rounded-lg p-4 text-left transition-all ${
                  activeTab === service.id
                    ? "bg-gunmetal-blue text-white shadow-lg"
                    : "bg-white text-gunmetal-blue hover:bg-gray-100"
                }`}
                whileHover={{
                  x: activeTab === service.id ? 0 : 5,
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="mr-3"
                  variants={iconFloatVariants}
                  initial="initial"
                  animate={activeTab === service.id ? "float" : "initial"}
                >
                  {service.icon}
                </motion.span>
                <span className="font-medium">{service.title}</span>
                {activeTab === service.id && (
                  <motion.span
                    className="ml-auto"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Service Tabs - Mobile */}
          <motion.div
            variants={itemVariants}
            className="scrollbar-hide flex overflow-x-auto pb-4 lg:hidden"
          >
            <div className="flex space-x-3 whitespace-nowrap">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`flex flex-col items-center rounded-lg p-3 transition-all ${
                    activeTab === service.id
                      ? "bg-gunmetal-blue text-white shadow-md"
                      : "bg-white text-gunmetal-blue"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="mb-2"
                    variants={iconFloatVariants}
                    initial="initial"
                    animate={activeTab === service.id ? "float" : "initial"}
                  >
                    {service.icon}
                  </motion.span>
                  <span className="text-sm font-medium">{service.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Service Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col rounded-lg bg-white p-6 shadow-lg lg:col-span-8 backdrop-blur-sm bg-white/95"
            >
              <div className="mb-6 flex items-center">
                <motion.span
                  className="mr-4 relative"
                  variants={iconFloatVariants}
                  initial="initial"
                  animate="float"
                >
                  {activeService?.icon}
                  <motion.div
                    className="absolute -inset-2 rounded-full bg-desert-sand/10 -z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </motion.span>
                <h4 className="text-xl sm:text-2xl font-bold text-gunmetal-blue">
                  {activeService?.title}
                </h4>
              </div>

              <p className="mb-6 text-gray-700">{activeService?.description}</p>

              <h5 className="mb-4 font-semibold text-gunmetal-blue flex items-center">
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-desert-sand/20 h-6 w-1 mr-2 rounded-full"
                />
                Key Benefits
              </h5>

              <ul className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {activeService?.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    custom={index}
                    variants={benefitItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center text-gray-700"
                  >
                    <motion.span
                      className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-desert-sand bg-opacity-20 text-desert-sand"
                      whileHover={{
                        scale: 1.2,
                        backgroundColor: "rgba(190, 149, 124, 0.4)",
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.span>
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link
                  // href={`/services/${activeService?.id}`}
                  href={`#`}
                  className="group inline-flex items-center font-medium text-desert-sand hover:text-deep-sea-blue transition-colors duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {/* Learn more about our {activeService?.title} services */}
                  Learn more about our services
                  <motion.span
                    animate={isHovering ? { x: 5 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="ml-1"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-12 md:mt-16 text-center"
        >
          <Link href="/services">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-md bg-gunmetal-blue px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-deep-sea-blue"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-desert-sand/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <span className="relative z-10">Explore All Services</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
