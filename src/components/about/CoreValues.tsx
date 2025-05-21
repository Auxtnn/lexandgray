"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Users, Lightbulb, BookOpen, Scale } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We adhere unwaveringly to the highest ethical standards, ensuring transparency, honesty, and reliability in every interaction. Our dedication to integrity forms the bedrock of trust with our clients, peers, and the communities we serve.",
  },
  {
    icon: BookOpen,
    title: "Clarity",
    description:
      "Our commitment to clarity extends beyond the intricacies of legal complexities. We prioritize delivering straightforward and comprehensible solutions to our clients, empowering them with knowledge for informed decisions.",
  },
  {
    icon: Users,
    title: "Professionalism",
    description:
      "Lex & Gray embodies professionalism in every aspect, from the expertise of our legal professionals to the delivery of our services. Shared values and processes unite our team, providing a consistent, high-quality service wherever and whenever our clients need us.",
  },
  {
    icon: Scale,
    title: "Sector Knowledge",
    description:
      "We pride ourselves on offering sector-specific insights and knowledge of regulatory nuances to provide excellent legal services. Our lawyers are equipped to navigate industry-specific challenges, contributing to the success of our clients in diverse sectors.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "In a dynamic legal landscape, innovation is key. Our clients, independent legal guides, and leading industry awards consistently recognize us for quality and innovation. Lex & Gray Attorneys embraces innovative approaches to deliver cutting-edge legal solutions.",
  },
];

export function CoreValues() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + index * 0.1,
      },
    }),
    hover: {
      y: -12,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    hover: {
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We adhere unwaveringly to the highest ethical standards, ensuring transparency, honesty, and reliability in every interaction. Our dedication to integrity forms the bedrock of trust with our clients, peers, and the communities we serve.",
    },
    {
      icon: BookOpen,
      title: "Clarity",
      description:
        "Our commitment to clarity extends beyond the intricacies of legal complexities. We prioritize delivering straightforward and comprehensible solutions to our clients, empowering them with knowledge for informed decisions.",
    },
    {
      icon: Users,
      title: "Professionalism",
      description:
        "Lex & Gray embodies professionalism in every aspect, from the expertise of our legal professionals to the delivery of our services. Shared values and processes unite our team, providing a consistent, high-quality service wherever and whenever our clients need us.",
    },
    {
      icon: Scale,
      title: "Sector Knowledge",
      description:
        "We pride ourselves on offering sector-specific insights and knowledge of regulatory nuances to provide excellent legal services. Our lawyers are equipped to navigate industry-specific challenges, contributing to the success of our clients in diverse sectors.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "In a dynamic legal landscape, innovation is key. Our clients, independent legal guides, and leading industry awards consistently recognize us for quality and innovation. Lex & Gray Attorneys embraces innovative approaches to deliver cutting-edge legal solutions.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="core-values"
    >
      {/* Background pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: 'url("/images/pattern-bg.png")',
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-desert-sand/5 blur-3xl -z-10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gunmetal-blue/5 blur-3xl -z-10"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={titleVariants}
            className="inline-block text-desert-sand text-lg font-semibold uppercase tracking-wider mb-2"
          >
            Our Foundation
          </motion.span>

          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gunmetal-blue mb-4"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            variants={titleVariants}
            className="w-20 h-1.5 bg-desert-sand mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.p variants={titleVariants} className="text-lg text-gray-700">
            These fundamental principles guide our approach to legal practice
            and define the essence of Lex & Gray Attorneys.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              className="bg-white rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <motion.div
                className="bg-sky-mist p-4 rounded-full inline-block mb-6 self-start"
                variants={iconVariants}
                whileHover="hover"
              >
                <value.icon className="h-7 w-7 text-deep-sea-blue" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold text-gunmetal-blue mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {value.title}
              </motion.h3>

              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {value.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
