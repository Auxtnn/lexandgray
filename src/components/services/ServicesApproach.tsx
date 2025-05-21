"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  LightbulbIcon,
  UserCheck,
  BookOpen,
  MessageSquare,
  ShieldCheck,
  Clock,
} from "lucide-react";

const ServiceApproach = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const steps = [
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Initial Consultation",
      description:
        "We begin with a thorough consultation to understand your specific legal needs, objectives, and concerns. This foundational step establishes the framework for our tailored approach.",
    },
    {
      icon: <LightbulbIcon className="h-10 w-10" />,
      title: "Strategic Analysis",
      description:
        "Our team conducts an in-depth analysis of your situation, examining legal precedents, regulations, and potential outcomes to develop a strategic roadmap.",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Comprehensive Research",
      description:
        "We perform extensive legal research specific to your case, ensuring we have the most current and relevant information to support your position.",
    },
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "Clear Communication",
      description:
        "Throughout our engagement, we maintain transparent and accessible communication, providing clear explanations of complex legal concepts and regular updates on your case.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10" />,
      title: "Proactive Representation",
      description:
        "We represent your interests with strategic advocacy, anticipating challenges and opportunities to position you for the best possible outcome.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Ongoing Support",
      description:
        "Our commitment extends beyond the immediate legal matter, providing continuous guidance and support to help you navigate future legal considerations.",
    },
  ];

  const features = [
    {
      title: "Client-Centric Focus",
      description:
        "We place your needs at the center of our approach, developing strategies that align with your specific objectives and circumstances.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our team combines traditional legal wisdom with innovative thinking to develop creative solutions to complex challenges.",
    },
    {
      title: "Collaborative Partnership",
      description:
        "We view our client relationships as partnerships, working collaboratively to achieve your goals with shared purpose.",
    },
    {
      title: "Industry Knowledge",
      description:
        "Our specialized sector expertise allows us to provide insights and strategies tailored to the unique dynamics of your industry.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-2 text-lg font-semibold uppercase tracking-wider text-desert-sand"
          >
            Our Approach
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gunmetal-blue"
          >
            How We Deliver Legal Excellence
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            At Lex & Gray Attorneys, our methodical approach combines rigorous
            legal analysis with practical strategy to deliver results that
            matter. We're committed to providing clear, strategic counsel at
            every stage of your legal journey.
          </motion.p>
        </motion.div>

        {/* Service Process Steps */}
        <motion.div
          variants={containerVariants}
          className="mx-auto mb-14 max-w-5xl rounded-lg bg-white px-3 py-6 shadow-lg"
        >
          <div className="mb-8 text-center">
            <h4 className="text-2xl font-bold text-gunmetal-blue">
              Our Service Process
            </h4>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col rounded-lg p-4 transition-all duration-300 hover:bg-gray-50"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-desert-sand bg-opacity-20 text-desert-sand">
                  {step.icon}
                </div>
                <h5 className="mb-3 text-xl font-bold text-gunmetal-blue">
                  {step.title}
                </h5>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Approach Philosophy Section */}
        <div className="grid gap-16 lg:grid-cols-2 lg:py-10">
          {/* Image Column */}
          <motion.div
            variants={itemVariants}
            className="relative min-h-[500px] md:min-h-[450px] overflow-hidden rounded-lg shadow-lg lg:h-auto"
          >
            <Image
              src="/images/chisom.jpg"
              alt="Lex & Gray legal team in discussion"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full max-w-sm sm:max-w-md rounded-lg bg-white bg-opacity-90 p-4 shadow-lg"
              >
                <h4 className="mb-4 text-xl sm:text-2xl font-bold text-gunmetal-blue">
                  Our Philosophy
                </h4>
                <p className="italic text-xs sm:text-sm text-gray-700">
                  "At Lex & Gray, we believe that exceptional legal service
                  begins with understanding—not just the law, but our clients'
                  unique challenges and aspirations. We approach each case with
                  intellectual rigor, strategic creativity, and unwavering
                  dedication to your success."
                </p>
                <div className="mt-3 sm:mt-4 text-right">
                  <p className="text-sm sm:text-base font-semibold text-desert-sand">
                    — Chisom Gemmaclaire Ezekwesili, Esq
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-desert-sand">
                    Managing Partner
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Column */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col justify-center"
          >
            <motion.h4
              variants={itemVariants}
              className="mb-8 text-2xl font-bold text-gunmetal-blue"
            >
              What Sets Us Apart
            </motion.h4>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex"
                >
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-desert-sand text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="mb-2 text-xl font-semibold text-gunmetal-blue">
                      {feature.title}
                    </h5>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;
