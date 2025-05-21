"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Building,
  User,
  Briefcase,
  Scale,
  Globe,
  ChevronRight,
  Download,
  BookOpen,
} from "lucide-react";

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");

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
    "All",
    "Technology",
    "Finance",
    "Healthcare",
    "Manufacturing",
    "Energy",
    "Real Estate",
  ];

  const practiceAreas = [
    "All",
    "Corporate Law",
    "Litigation",
    "Employment Law",
    "Intellectual Property",
    "International Law",
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Successful Cross-Border Merger in the Technology Sector",
      excerpt:
        "How Lex & Gray helped a leading technology company navigate complex regulatory challenges during a multi-jurisdictional merger, resulting in a seamless integration and significant market expansion.",
      industry: "Technology",
      practiceArea: "Corporate Law",
      client: "Global Tech Solutions Inc.",
      image: "/images/case-studies/tech-merger.jpg",
      results: [
        "Successfully completed $500M merger across 5 jurisdictions",
        "Secured regulatory approvals in all markets",
        "Completed transaction 2 months ahead of schedule",
        "Protected critical intellectual property assets",
      ],
      featured: true,
    },
    {
      id: 2,
      title: "Landmark Employment Dispute Resolution for Healthcare Provider",
      excerpt:
        "A strategic approach to resolving a complex class action employment dispute for a major healthcare provider, resulting in a favorable settlement and implementation of improved workplace policies.",
      industry: "Healthcare",
      practiceArea: "Employment Law",
      client: "National Healthcare Network",
      image: "/images/case-studies/healthcare-employment.jpg",
      results: [
        "Negotiated settlement 40% below initial claim amount",
        "Avoided protracted litigation and negative publicity",
        "Developed comprehensive compliance program",
        "Implemented training for 5,000+ employees",
      ],
      featured: false,
    },
    {
      id: 3,
      title: "International IP Protection Strategy for Manufacturing Innovator",
      excerpt:
        "Development of a comprehensive global intellectual property strategy for a manufacturing company, securing patent protections across multiple markets and establishing a framework for ongoing innovation.",
      industry: "Manufacturing",
      practiceArea: "Intellectual Property",
      client: "Precision Manufacturing Technologies",
      image: "/images/case-studies/manufacturing-ip.jpg",
      results: [
        "Secured patent protection in 28 countries",
        "Successfully defended against 3 infringement claims",
        "Established licensing program generating $12M annually",
        "Created IP strategy that supported 30% company growth",
      ],
      featured: false,
    },
    {
      id: 4,
      title: "Regulatory Compliance Overhaul for Financial Institution",
      excerpt:
        "A comprehensive review and redesign of compliance frameworks for a financial services provider facing increased regulatory scrutiny, resulting in enhanced compliance posture and regulatory approval.",
      industry: "Finance",
      practiceArea: "Corporate Law",
      client: "Atlantic Investment Partners",
      image: "/images/case-studies/finance-compliance.jpg",
      results: [
        "Achieved full compliance with new regulatory requirements",
        "Reduced compliance risk exposure by 65%",
        "Streamlined reporting processes, saving 120 staff hours monthly",
        "Secured approval for new service offerings",
      ],
      featured: true,
    },
    {
      id: 5,
      title: "Complex Litigation Victory for Energy Project",
      excerpt:
        "Successful defense of a major energy company in high-stakes litigation related to a significant infrastructure project, overcoming multiple legal challenges and securing the project's continuation.",
      industry: "Energy",
      practiceArea: "Litigation",
      client: "Sustainable Energy Developers",
      image: "/images/case-studies/energy-litigation.jpg",
      results: [
        "Secured dismissal of all claims against the client",
        "Saved an estimated $75M in project delays",
        "Established favorable legal precedent",
        "Protected 1,200 jobs related to the project",
      ],
      featured: false,
    },
    {
      id: 6,
      title: "Strategic Real Estate Development Advisory",
      excerpt:
        "Comprehensive legal guidance for a complex mixed-use development project, navigating zoning challenges, environmental considerations, and financing structures to ensure project success.",
      industry: "Real Estate",
      practiceArea: "Corporate Law",
      client: "Urban Renaissance Developers",
      image: "/images/case-studies/real-estate-development.jpg",
      results: [
        "Secured zoning variances for innovative design elements",
        "Negotiated $250M in favorable financing terms",
        "Resolved environmental compliance challenges",
        "Project completed on schedule with 100% occupancy within 6 months",
      ],
      featured: false,
    },
  ];

  // Filter case studies based on search term and selected industry
  const filteredCaseStudies = caseStudies.filter((caseStudy) => {
    const matchesSearch =
      caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      caseStudy.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "All" || caseStudy.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  // Get featured case studies
  const featuredCaseStudies = caseStudies.filter(
    (caseStudy) => caseStudy.featured
  );

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gunmetal-blue py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/images/pattern.svg')] bg-cover bg-center"></div>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Success Stories
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-gray-300">
              Explore how Lex & Gray Attorneys has helped clients overcome
              complex legal challenges and achieve their business objectives
              through strategic legal guidance.
            </p>
            <div className="mx-auto flex max-w-2xl flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-lg bg-white bg-opacity-10 px-6 py-4 pl-12 text-white placeholder-gray-400 outline-none backdrop-blur-sm transition-all focus:bg-opacity-20 focus:ring-2 focus:ring-desert-sand"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              </div>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="rounded-lg bg-white bg-opacity-10 px-6 py-4 text-white outline-none backdrop-blur-sm transition-all focus:bg-opacity-20 focus:ring-2 focus:ring-desert-sand"
              >
                {industries.map((industry) => (
                  <option
                    key={industry}
                    value={industry}
                    className="bg-gunmetal-blue text-white"
                  >
                    {industry === "All" ? "All Industries" : industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-2xl font-bold text-gunmetal-blue md:text-3xl"
            >
              Featured Success Stories
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-10 text-lg text-gray-700"
            >
              Explore our most impactful client successes that showcase our
              strategic approach to complex legal challenges.
            </motion.p>

            <div className="grid gap-10 lg:grid-cols-2">
              {featuredCaseStudies.map((caseStudy) => (
                <motion.div
                  key={caseStudy.id}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Image Column */}
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-30"></div>
                      <div className="absolute left-4 top-4 rounded-full bg-desert-sand px-4 py-1 text-sm font-medium text-white">
                        {caseStudy.industry}
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex flex-col p-6">
                      <h3 className="mb-3 text-xl font-bold text-gunmetal-blue md:text-2xl">
                        {caseStudy.title}
                      </h3>
                      <div className="mb-3 flex items-center text-sm text-gray-500">
                        <Briefcase className="mr-2 h-4 w-4 text-desert-sand" />
                        <span className="font-medium">
                          {caseStudy.practiceArea}
                        </span>
                      </div>
                      <p className="mb-4 text-gray-600">{caseStudy.excerpt}</p>

                      {/* Client */}
                      <div className="mb-4 rounded-md bg-gray-50 p-3">
                        <div className="flex items-center">
                          <Building className="mr-2 h-5 w-5 text-desert-sand" />
                          <span className="font-medium text-gunmetal-blue">
                            {caseStudy.client}
                          </span>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <Link
                          href={`/case-studies/${caseStudy.id}`}
                          className="inline-flex items-center rounded-md bg-gunmetal-blue px-4 py-2 font-medium text-white transition-colors hover:bg-deep-sea-blue"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Case Studies Section */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-2xl font-bold text-gunmetal-blue md:text-3xl"
            >
              {selectedIndustry === "All"
                ? "All Case Studies"
                : `${selectedIndustry} Case Studies`}
            </motion.h2>

            {filteredCaseStudies.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredCaseStudies.map((caseStudy) => (
                  <motion.div
                    key={caseStudy.id}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>

                      {/* Badges */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-desert-sand px-3 py-1 text-xs font-medium text-white">
                          {caseStudy.industry}
                        </span>
                        <span className="rounded-full bg-gunmetal-blue px-3 py-1 text-xs font-medium text-white">
                          {caseStudy.practiceArea}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="mb-3 text-lg font-bold text-gunmetal-blue transition-colors duration-300 group-hover:text-desert-sand">
                        {caseStudy.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                        {caseStudy.excerpt}
                      </p>

                      {/* Client */}
                      <div className="mb-4 flex items-center text-sm text-gray-700">
                        <Building className="mr-2 h-4 w-4 text-desert-sand" />
                        <span>{caseStudy.client}</span>
                      </div>

                      {/* Key Results */}
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-semibold text-gunmetal-blue">
                          Key Results:
                        </h4>
                        <ul className="text-sm text-gray-600">
                          {caseStudy.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="mb-1 flex items-start">
                              <span className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-desert-sand bg-opacity-20 text-desert-sand">
                                <ChevronRight className="h-3 w-3" />
                              </span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`/case-studies/${caseStudy.id}`}
                        className="inline-flex items-center text-sm font-medium text-desert-sand transition-colors hover:text-gunmetal-blue"
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="rounded-lg bg-white p-8 text-center shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gunmetal-blue">
                  No Case Studies Found
                </h3>
                <p className="text-gray-600">
                  We couldn't find any case studies matching your search
                  criteria. Try adjusting your filters or search term.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedIndustry("All");
                  }}
                  className="mt-6 rounded-md bg-desert-sand px-6 py-2 font-medium text-white hover:bg-opacity-90"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-2xl font-bold text-gunmetal-blue md:text-3xl"
            >
              Our Industry Expertise
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mx-auto mb-12 max-w-3xl text-lg text-gray-700"
            >
              We bring sector-specific knowledge to every legal challenge,
              understanding the unique regulatory landscapes and strategic
              considerations of your business.
            </motion.p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.slice(1).map((industry) => (
                <motion.div
                  key={industry}
                  variants={itemVariants}
                  className="rounded-lg bg-gray-50 p-6 text-left shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <h3 className="mb-3 text-xl font-bold text-gunmetal-blue">
                    {industry}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Specialized legal guidance for {industry.toLowerCase()}{" "}
                    companies navigating complex regulatory environments and
                    business challenges.
                  </p>
                  <button
                    onClick={() => setSelectedIndustry(industry)}
                    className="inline-flex items-center text-desert-sand hover:text-gunmetal-blue"
                  >
                    View {industry} Case Studies
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="bg-gunmetal-blue bg-opacity-95 py-20 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="mb-4 text-2xl font-bold md:text-3xl"
            >
              Download Our Case Study Resources
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mb-12 text-lg text-gray-300"
            >
              Access our detailed case studies and industry reports to gain
              deeper insights into our approach and results.
            </motion.p>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white bg-opacity-10 p-6 text-left backdrop-blur-sm"
              >
                <BookOpen className="mb-4 h-10 w-10 text-desert-sand" />
                <h3 className="mb-2 text-xl font-bold">
                  2025 Legal Strategies for Tech Companies
                </h3>
                <p className="mb-4 text-gray-300">
                  An in-depth report on navigating the evolving legal landscape
                  for technology companies, with case studies and actionable
                  insights.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-desert-sand px-4 py-2 font-medium text-white transition-all hover:bg-opacity-90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Report (PDF)
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="rounded-lg bg-white bg-opacity-10 p-6 text-left backdrop-blur-sm"
              >
                <Scale className="mb-4 h-10 w-10 text-desert-sand" />
                <h3 className="mb-2 text-xl font-bold">
                  Cross-Border Compliance Guide
                </h3>
                <p className="mb-4 text-gray-300">
                  A comprehensive guide to navigating multi-jurisdictional
                  compliance requirements, featuring real-world case examples.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-md bg-desert-sand px-4 py-2 font-medium text-white transition-all hover:bg-opacity-90"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide (PDF)
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-xl bg-white p-10 shadow-xl">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-gunmetal-blue">
                Ready to Discuss Your Legal Challenges?
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Contact us to schedule a consultation with our experienced legal
                team. We'll help you navigate your complex legal challenges with
                clarity and strategic insight.
              </p>
              <Link href="/contact">
                <button className="rounded-md bg-gunmetal-blue px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-deep-sea-blue">
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
