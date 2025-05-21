"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface CaseResultCardProps {
  title: string;
  area: string;
  result: string;
  description: string;
  delay?: number;
}

export function CaseResultCard({
  title,
  area,
  result,
  description,
  delay = 0,
}: CaseResultCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-lg p-6 shadow-md border-l-4 border-desert-sand hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-1">
            {title}
          </h3>
          <p className="text-gray-500 text-sm">{area}</p>
        </div>
        <div className="bg-sky-mist p-2 rounded-full">
          <Award className="h-6 w-6 text-deep-sea-blue" />
        </div>
      </div>
      <div className="mb-4">
        <span className="text-desert-sand font-proxima font-bold text-lg">
          {result}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
