"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Scale, Globe, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ServicesList = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const services = [
    {
      id: "litigation",
      title: "Litigation & Dispute Resolution",
      icon: <Scale className="h-12 w-12 text-desert-sand" />,
      description:
        "Our litigation team provides comprehensive representation at all stages of disputes, from pre-litigation negotiation through trial and appeal.",
      image: "/images/law.jpg",
      subservices: [
        "Civil Litigation",
        "Commercial Disputes",
        "Alternative Dispute Resolution",
        "Class Action Defense",
        "Appellate Advocacy",
      ],
    },
    {
      id: "corporate",
      title: "Corporate & Commercial",
      icon: <Briefcase className="h-12 w-12 text-desert-sand" />,
      description:
        "We guide businesses through complex transactions and provide ongoing legal support for commercial operations and governance.",
      image: "/images/law.jpg",
      subservices: [
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Private Equity",
        "Joint Ventures",
        "Corporate Restructuring",
      ],
    },
    {
      id: "employment",
      title: "Employment & Labor",
      icon: <Users className="h-12 w-12 text-desert-sand" />,
      description:
        "Our employment lawyers help organizations navigate workforce challenges while minimizing legal risks and promoting best practices.",
      image: "/images/law.jpg",
      subservices: [
        "Employment Contracts",
        "Workplace Policies",
        "Discrimination Claims",
        "Executive Compensation",
        "Labor Relations",
      ],
    },
    {
      id: "international",
      title: "International Trade & Compliance",
      icon: <Globe className="h-12 w-12 text-desert-sand" />,
      description:
        "We advise on cross-border matters, helping clients navigate the complexities of international business and regulatory compliance.",
      image: "/images/law.jpg",
      subservices: [
        "Cross-Border Transactions",
        "Trade Regulations",
        "Foreign Investment",
        "Customs Compliance",
        "Sanctions Advisory",
      ],
    },
  ];

  return (
    <section className="bg-white pb-24 pt-8" id="services-list">
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
            Our Services
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gunmetal-blue"
          >
            Comprehensive Legal Solutions
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            Lex & Gray Attorneys offers a comprehensive suite of legal services
            designed to address our clients' most complex challenges with
            clarity and strategic insight.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center">{service.icon}</div>
                    <h4 className="mt-4 px-4 text-2xl font-bold text-white">
                      {service.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-6 text-gray-700">{service.description}</p>

                <h5 className="mb-4 font-semibold text-gunmetal-blue">
                  Our Capabilities:
                </h5>

                <ul className="mb-6 space-y-2">
                  {service.subservices.map((subservice, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-desert-sand bg-opacity-20 text-desert-sand">
                        <ChevronRight className="h-3 w-3" />
                      </span>
                      {subservice}
                    </li>
                  ))}
                </ul>

                <Link
                  // href={`/services/${service.id}`}
                  href={`/services`}
                  className="inline-flex items-center font-medium text-desert-sand transition-colors hover:text-gunmetal-blue"
                >
                  Learn more about this service
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services List */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-10 max-w-4xl rounded-lg bg-gray-50 px-3 py-6 shadow-sm"
        >
          <h4 className="mb-6 text-center text-2xl font-bold text-gunmetal-blue">
            Additional Practice Areas
          </h4>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Intellectual Property
              </h5>
              <p className="text-sm text-gray-600">
                Protection and enforcement of patents, trademarks, and
                copyrights.
              </p>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Banking & Finance
              </h5>
              <p className="text-sm text-gray-600">
                Financial regulations, lending transactions, and compliance.
              </p>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Real Estate
              </h5>
              <p className="text-sm text-gray-600">
                Property acquisitions, development, and commercial leasing.
              </p>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Energy & Resources
              </h5>
              <p className="text-sm text-gray-600">
                Legal support for energy projects, mining, and natural
                resources.
              </p>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Technology & Data
              </h5>
              <p className="text-sm text-gray-600">
                Digital regulations, data privacy, and technology agreements.
              </p>
            </div>

            <div className="rounded-md bg-white p-4 shadow-sm">
              <h5 className="mb-2 font-semibold text-gunmetal-blue">
                Tax Advisory
              </h5>
              <p className="text-sm text-gray-600">
                Strategic tax planning, compliance, and dispute resolution.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-20 max-w-4xl rounded-lg bg-gunmetal-blue bg-opacity-95 p-10 text-center shadow-xl"
        >
          <h4 className="mb-4 text-2xl font-bold text-white">
            Need Legal Guidance?
          </h4>
          <p className="mb-8 text-lg text-gray-200">
            Our team of experienced attorneys is ready to help you navigate
            complex legal challenges with clarity and confidence.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-desert-sand px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-white hover:text-gunmetal-blue"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
