"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronRight,
  Building,
  Users,
  Briefcase,
  Globe,
  Lightbulb,
  Cpu,
  Landmark,
  DollarSign,
  Zap,
  Leaf,
} from "lucide-react";
import Link from "next/link";

const IndustriesServed = () => {
  const [activeIndustry, setActiveIndustry] = useState("technology");

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const industries = [
    {
      id: "technology",
      title: "Technology & Innovation",
      icon: <Cpu className="h-6 w-6" />,
      image: "/images/industries/technology.jpg",
      description:
        "We guide technology companies through the complex legal landscape of digital innovation, from startups to established enterprises. Our attorneys understand the unique challenges facing tech businesses, providing specialized counsel on intellectual property protection, data privacy, regulatory compliance, and emerging technologies.",
      expertise: [
        "Software Licensing & Development",
        "Data Privacy & Protection",
        "Tech Startups & Venture Capital",
        "AI & Machine Learning Legal Frameworks",
        "E-commerce & Digital Marketplace Regulations",
      ],
      clients: [
        "Tech startups",
        "Software companies",
        "Digital platforms",
        "Fintech enterprises",
        "E-commerce businesses",
      ],
    },
    {
      id: "financial",
      title: "Financial Services",
      icon: <DollarSign className="h-6 w-6" />,
      image: "/images/industries/financial.jpg",
      description:
        "Our financial services team provides comprehensive legal support to banks, investment firms, and fintech companies navigating a highly regulated environment. We combine deep industry knowledge with strategic legal counsel to help financial institutions manage risk, maintain compliance, and pursue growth opportunities.",
      expertise: [
        "Banking Regulations & Compliance",
        "Investment Management",
        "Financial Technology (Fintech)",
        "Securities & Capital Markets",
        "Consumer Financial Services",
      ],
      clients: [
        "Banks & credit unions",
        "Investment funds",
        "Insurance companies",
        "Fintech startups",
        "Asset managers",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      icon: <Landmark className="h-6 w-6" />,
      image: "/images/industries/healthcare.jpg",
      description:
        "We serve healthcare providers, pharmaceutical companies, and medical technology developers with specialized legal expertise in this highly regulated and rapidly evolving sector. Our attorneys navigate complex regulatory requirements while supporting innovation and operational excellence in healthcare delivery.",
      expertise: [
        "Healthcare Regulatory Compliance",
        "Pharmaceutical & Medical Device Law",
        "Healthcare Transactions & Joint Ventures",
        "Digital Health & Telemedicine",
        "Clinical Research & Development",
      ],
      clients: [
        "Hospitals & health systems",
        "Pharmaceutical companies",
        "Biotechnology firms",
        "Medical device manufacturers",
        "Healthcare startups",
      ],
    },
    {
      id: "energy",
      title: "Energy & Natural Resources",
      icon: <Zap className="h-6 w-6" />,
      image: "/images/industries/energy.jpg",
      description:
        "Our energy practice supports clients across traditional and renewable energy sectors with specialized legal guidance on regulatory compliance, project development, and complex transactions. We help energy companies navigate evolving regulations while pursuing operational and strategic objectives.",
      expertise: [
        "Renewable Energy Projects",
        "Oil & Gas Transactions",
        "Mining & Natural Resources",
        "Energy Regulatory Compliance",
        "Project Finance & Development",
      ],
      clients: [
        "Renewable energy developers",
        "Oil & gas companies",
        "Mining operations",
        "Utilities & power generators",
        "Energy investors",
      ],
    },
    {
      id: "manufacturing",
      title: "Manufacturing & Industrial",
      icon: <Building className="h-6 w-6" />,
      image: "/images/industries/manufacturing.jpg",
      description:
        "We provide comprehensive legal support to manufacturing and industrial businesses, addressing the complex regulatory, operational, and commercial challenges facing the sector. Our attorneys help manufacturers optimize operations while managing risk and regulatory compliance.",
      expertise: [
        "Supply Chain Management",
        "Product Liability & Safety",
        "Manufacturing Regulations",
        "Industrial Real Estate",
        "Environmental Compliance",
      ],
      clients: [
        "Consumer goods manufacturers",
        "Industrial equipment producers",
        "Automotive companies",
        "Textile manufacturers",
        "Food & beverage producers",
      ],
    },
    {
      id: "agribusiness",
      title: "Agribusiness & Food",
      icon: <Leaf className="h-6 w-6" />,
      image: "/images/industries/agribusiness.jpg",
      description:
        "Our agribusiness team provides specialized legal counsel to agricultural producers, food processors, and related businesses throughout the food supply chain. We understand the unique regulatory and operational challenges of the agricultural sector, delivering practical solutions that support business objectives.",
      expertise: [
        "Agricultural Land & Water Rights",
        "Food Safety & Regulatory Compliance",
        "Agricultural Technology & Innovation",
        "Sustainable & Organic Certification",
        "Supply Chain & Distribution Agreements",
      ],
      clients: [
        "Agricultural producers",
        "Food processors",
        "Agtech companies",
        "Distribution businesses",
        "Commodity traders",
      ],
    },
  ];

  const currentIndustry = industries.find((ind) => ind.id === activeIndustry);

  return (
    <section className="bg-white py-14">
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
            Industries We Serve
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gunmetal-blue"
          >
            Specialized Expertise for Your Sector
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-gray-700">
            Lex & Gray Attorneys brings industry-specific knowledge to every
            legal challenge. We understand the unique regulatory landscapes,
            operational contexts, and strategic considerations of your business
            sector.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Industry Navigation Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <div className="sticky top-24 overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <h4 className="border-b border-gray-200 bg-gunmetal-blue p-5 text-xl font-bold text-white">
                Industry Sectors
              </h4>
              <div className="flex flex-col">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`flex items-center border-b border-gray-200 p-4 text-left transition-all hover:bg-gray-100 ${
                      activeIndustry === industry.id
                        ? "bg-desert-sand bg-opacity-10 font-medium text-desert-sand"
                        : "text-gunmetal-blue"
                    }`}
                  >
                    <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gunmetal-blue bg-opacity-10">
                      {industry.icon}
                    </span>
                    <span>{industry.title}</span>
                    {activeIndustry === industry.id && (
                      <ChevronRight className="ml-auto h-5 w-5" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Industry Content */}
          <motion.div
            key={activeIndustry}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              {/* Industry Image */}
              <div className="relative h-64 w-full overflow-hidden lg:h-80">
                <Image
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-center text-3xl font-bold text-white">
                    {currentIndustry.title}
                  </h3>
                </div>
              </div>

              {/* Industry Content */}
              <div className="p-8">
                <p className="mb-8 text-lg leading-relaxed text-gray-700">
                  {currentIndustry.description}
                </p>

                {/* Areas of Expertise */}
                <div className="mb-8">
                  <h4 className="mb-4 text-xl font-bold text-gunmetal-blue">
                    Areas of Expertise
                  </h4>
                  <ul className="grid gap-3 md:grid-cols-2">
                    {currentIndustry.expertise.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-desert-sand bg-opacity-20 text-desert-sand">
                          <ChevronRight className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Clients We Serve */}
                <div>
                  <h4 className="mb-4 text-xl font-bold text-gunmetal-blue">
                    Clients We Serve
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {currentIndustry.clients.map((client, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gunmetal-blue"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 border-t border-gray-100 pt-6">
                  <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-gray-700">
                      Need specialized legal guidance for your{" "}
                      {currentIndustry.title.toLowerCase()} business?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded bg-gunmetal-blue px-4 py-2 font-medium text-white transition-colors hover:bg-deep-sea-blue"
                    >
                      Schedule a Consultation
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Industries Grid */}
        <motion.div variants={containerVariants} className="mt-20">
          <motion.h4
            variants={itemVariants}
            className="mb-8 text-center text-2xl font-bold text-gunmetal-blue"
          >
            Additional Industries We Serve
          </motion.h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="rounded-lg bg-gray-50 p-6 shadow-sm"
            >
              <h5 className="mb-3 text-xl font-semibold text-gunmetal-blue">
                Real Estate & Construction
              </h5>
              <p className="mb-3 text-gray-700">
                Legal support for property development, transactions, and
                construction projects.
              </p>
              <Link
                href="/industries/real-estate"
                className="text-desert-sand hover:text-deep-sea-blue"
              >
                Learn more <ChevronRight className="ml-1 inline h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-lg bg-gray-50 p-6 shadow-sm"
            >
              <h5 className="mb-3 text-xl font-semibold text-gunmetal-blue">
                Media & Entertainment
              </h5>
              <p className="mb-3 text-gray-700">
                Specialized legal services for content creators, media
                companies, and entertainment businesses.
              </p>
              <Link
                href="/industries/media"
                className="text-desert-sand hover:text-deep-sea-blue"
              >
                Learn more <ChevronRight className="ml-1 inline h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-lg bg-gray-50 p-6 shadow-sm"
            >
              <h5 className="mb-3 text-xl font-semibold text-gunmetal-blue">
                Retail & Consumer Goods
              </h5>
              <p className="mb-3 text-gray-700">
                Comprehensive legal guidance for retailers and consumer products
                companies.
              </p>
              <Link
                href="/industries/retail"
                className="text-desert-sand hover:text-deep-sea-blue"
              >
                Learn more <ChevronRight className="ml-1 inline h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesServed;
