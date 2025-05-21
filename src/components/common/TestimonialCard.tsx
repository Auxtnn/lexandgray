"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

export function TestimonialCard({
  name,
  role,
  image,
  quote,
  rating,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-lg shadow-xl p-8 md:p-10"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/3">
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-desert-sand">
            <Image
              src={image}
              alt={name}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <div className="flex justify-center mb-2">
              {[...Array(rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-500 fill-current"
                />
              ))}
            </div>
            <h3 className="text-xl font-proxima font-bold text-gunmetal-blue">
              {name}
            </h3>
            <p className="text-desert-sand">{role}</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <svg
            className="h-10 w-10 text-desert-sand/30 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
          <p className="text-lg text-gray-700 italic mb-4">{quote}</p>
        </div>
      </div>
    </motion.div>
  );
}
