// File: src/components/case-studies/CaseStudiesSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { CaseStudyCard } from "./CaseStudyCard";
import { ArrowRight } from "lucide-react";

// Example case studies data
const caseStudies = [
  {
    title: "Successful Corporate Merger for Tech Startups",
    category: "Corporate Law",
    description:
      "Guided two innovative tech startups through a complex merger process, navigating regulatory hurdles and ensuring compliance.",
    outcome:
      "Seamless merger completed in record time, preserving jobs and enhancing market position.",
    image: "/images/case-study-1.jpg",
    slug: "corporate-merger-tech-startups",
  },
  {
    title: "Intellectual Property Protection for Software Platform",
    category: "Intellectual Property",
    description:
      "Developed a comprehensive IP protection strategy for a groundbreaking software platform, securing patents and trademarks.",
    outcome:
      "Secured 4 patents and established strong IP portfolio, attracting significant investment.",
    image: "/images/case-study-2.jpg",
    slug: "ip-protection-software-platform",
  },
  {
    title: "Commercial Dispute Resolution for Manufacturing Company",
    category: "Litigation",
    description:
      "Represented a mid-sized manufacturing company in a complex contract dispute with a major supplier, avoiding costly litigation.",
    outcome:
      "Negotiated favorable settlement, recovering 85% of claimed damages without trial.",
    image: "/images/case-study-3.jpg",
    slug: "commercial-dispute-resolution",
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-gunmetal-blue mb-4">
            Case Studies
          </h2>
          <div className="w-20 h-1.5 bg-desert-sand mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Explore how we've helped clients overcome legal challenges and
            achieve their objectives with strategic legal solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              category={study.category}
              description={study.description}
              outcome={study.outcome}
              image={study.image}
              slug={study.slug}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/case-studies"
            className="btn-primary inline-flex items-center"
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
