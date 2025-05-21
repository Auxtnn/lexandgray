"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function MissionVision() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16 bg-gunmetal-blue text-white"
    >
      <div className="container mx-auto px-4 lg:w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="p-6 border border-desert-sand/30 rounded-lg"
          >
            <h2 className="text-3xl font-proxima font-bold text-desert-sand mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              "At Lex & Gray Attorneys, our mission is to stand at the
              intersection of legal excellence and modern professionalism. We
              provide a comprehensive suite of legal services anchored in
              integrity, clarity, and unwavering commitment."
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              "With a legacy of legal prowess, our brand essence is rooted in a
              deep understanding of the law, coupled with a contemporary
              approach to meet the evolving needs of our clients. Beyond
              delivering excellent legal services, our strength lies in our
              people and sector knowledge."
            </p>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 border border-desert-sand/30 rounded-lg"
          >
            <h2 className="text-3xl font-proxima font-bold text-desert-sand mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              "To be the premier legal partner for businesses and individuals
              navigating complex legal landscapes, recognized for our innovative
              solutions, unwavering integrity, and client-centered approach."
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              "We envision a future where legal expertise is accessible,
              understandable, and empowering, enabling our clients to achieve
              their goals with confidence. With Africa as our market, our focus
              is solely on you, ensuring our partnership is built on trust,
              understanding, and shared success."
            </p>
          </motion.div>
        </div>

        {/* Latin Legal Phrase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-3xl font-proxima italic text-desert-sand mb-4">
            "Actus non facit reum nisi mens sit rea."
          </p>
          <p className="text-lg text-gray-300">
            "The act does not make a person guilty unless the mind is also
            guilty."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
