// File: src/components/case-studies/CaseStudyCard.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  description: string;
  outcome: string;
  image: string;
  slug: string;
  delay?: number;
}

export function CaseStudyCard({
  title,
  category,
  description,
  outcome,
  image,
  slug,
  delay = 0,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-desert-sand text-white text-sm font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-3 group-hover:text-desert-sand transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <span className="block text-sm font-medium text-gunmetal-blue mb-1">
            Outcome:
          </span>
          <p className="text-desert-sand font-semibold">{outcome}</p>
        </div>
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center text-desert-sand hover:text-deep-sea-blue font-proxima font-medium transition-colors duration-300"
        >
          Read Full Case Study
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </motion.div>
  );
}
