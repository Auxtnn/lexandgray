"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  position: string;
  specialty: string;
  bio: string;
  image: string;
  social: {
    email: string;
    linkedin: string;
    twitter: string;
  };
  delay?: number;
}

export function TeamMemberCard({
  name,
  position,
  specialty,
  bio,
  image,
  social,
  delay = 0,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-[3/4]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gunmetal-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex space-x-4">
            <a
              href={`mailto:${social.email}`}
              className="bg-white text-gunmetal-blue p-2 rounded-full hover:bg-desert-sand hover:text-white transition-colors duration-300"
              aria-label={`Email ${name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={social.linkedin}
              className="bg-white text-gunmetal-blue p-2 rounded-full hover:bg-desert-sand hover:text-white transition-colors duration-300"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={social.twitter}
              className="bg-white text-gunmetal-blue p-2 rounded-full hover:bg-desert-sand hover:text-white transition-colors duration-300"
              aria-label={`${name}'s Twitter`}
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-1">
          {name}
        </h3>
        <p className="text-desert-sand font-medium mb-1">{position}</p>
        <p className="text-gray-600 text-sm mb-4">Specializes in {specialty}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </motion.div>
  );
}
