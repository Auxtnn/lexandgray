"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const faqData = [
    {
      question: "What areas of law does Lex & Gray specialize in?",
      answer:
        "Lex & Gray Attorneys specializes in corporate law, litigation, intellectual property, employment law, contract law, and international law. Our firm offers comprehensive legal services to both businesses and individuals across these practice areas with particular expertise in cross-border transactions and regulatory compliance.",
    },
    {
      question: "How do I schedule an initial consultation?",
      answer:
        "You can schedule an initial consultation by calling our office, filling out the contact form on our website, or sending us an email. Our team will respond promptly to set up a meeting with the attorney best suited to your legal needs. We offer both in-person and virtual consultations for your convenience.",
    },
    {
      question: "What should I bring to my first meeting with an attorney?",
      answer:
        "For your first meeting, please bring any relevant documents related to your legal matter, such as contracts, correspondence, court papers, or other materials that will help us understand your situation. It's also helpful to prepare a timeline of events and a list of questions you'd like to discuss during the consultation.",
    },
    {
      question: "How are legal fees structured at Lex & Gray?",
      answer:
        "Our fee structures vary depending on the type of legal service required. We offer hourly billing, flat fee arrangements for specific services, contingency fees for certain cases, and retainer options for ongoing legal support. During your initial consultation, we'll discuss the most appropriate fee structure for your specific needs and provide transparent information about costs.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, Lex & Gray has extensive experience working with international clients. Our international law practice provides guidance on cross-border transactions, foreign investment, international trade regulations, and dispute resolution. We have attorneys fluent in multiple languages and maintain a network of legal partners in key jurisdictions worldwide.",
    },
    {
      question: "How long does it typically take to resolve a legal matter?",
      answer:
        "The timeline for resolving legal matters varies significantly depending on the complexity of the case, the area of law involved, and whether litigation is required. Some matters can be resolved in weeks, while others may take months or even years. During your consultation, we can provide a more specific estimate based on your particular situation and develop a strategic timeline for your case.",
    },
  ];

  return (
    <section className="pb-10 pt-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gunmetal-blue/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-desert-sand/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
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
              Frequently Asked Questions
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
            Common Legal Questions
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700"
          >
            Find answers to frequently asked questions about our services,
            processes, and what to expect when working with Lex & Gray
            Attorneys.
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4 bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <motion.button
                className={`w-full p-4 md:p-6 text-left flex justify-between items-center ${
                  activeIndex === index ? "bg-gunmetal-blue/5" : ""
                }`}
                onClick={() => toggleFaq(index)}
                whileHover={{ backgroundColor: "rgba(42, 69, 98, 0.03)" }}
              >
                <span className="font-semibold text-gunmetal-blue text-lg">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center justify-center w-6 h-6 rounded-full ${
                    activeIndex === index
                      ? "bg-desert-sand text-white"
                      : "bg-gray-100 text-gunmetal-blue"
                  }`}
                >
                  <Plus size={18} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 pt-0 md:pt-0 text-gray-700 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <p className="text-gray-700">
            Don't see your question here?
            <a
              href="/contact"
              className="text-desert-sand hover:text-deep-sea-blue ml-2 font-medium"
            >
              Contact us directly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
