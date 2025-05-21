"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const TeamSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const teamMembers = [
    {
      name: "Ngozi Okonkwo",
      position: "Managing Partner",
      specialty: "Corporate Law",
      image: "/images/team/ngozi.jpg",
      bio: "With over 15 years of experience in corporate law, Ngozi leads our firm with precision and strategic vision. Her expertise in mergers and acquisitions has been instrumental in securing favorable outcomes for our high-profile clients.",
      education: "LLB, University of Lagos | LLM, Harvard Law School",
      linkedin: "#",
      email: "ngozi@lexgray.com",
      phone: "+234 801 234 5678",
    },
    {
      name: "Daniel Adeyemi",
      position: "Senior Partner",
      specialty: "Litigation",
      image: "/images/team/daniel.jpg",
      bio: "Daniel brings formidable courtroom expertise to complex litigation matters. His analytical approach and persuasive advocacy have resulted in landmark decisions that have shaped legal precedent in commercial disputes.",
      education: "LLB, University of Ibadan | LLM, London School of Economics",
      linkedin: "#",
      email: "daniel@lexgray.com",
      phone: "+234 802 345 6789",
    },
    {
      name: "Amina Ibrahim",
      position: "Partner",
      specialty: "Intellectual Property",
      image: "/images/team/amina.jpg",
      bio: "Amina specializes in intellectual property protection for tech startups and established enterprises. Her forward-thinking strategies help clients protect their innovations and creative assets in rapidly evolving markets.",
      education: "LLB, Ahmadu Bello University | MSc, Oxford University",
      linkedin: "#",
      email: "amina@lexgray.com",
      phone: "+234 803 456 7890",
    },
    {
      name: "Chidi Okafor",
      position: "Partner",
      specialty: "International Law",
      image: "/images/team/chidi.jpg",
      bio: "Chidi's expertise in international law and cross-border transactions makes him an invaluable asset for clients with global operations. His multilingual capabilities and cultural acumen facilitate smooth international negotiations.",
      education: "LLB, University of Nigeria | LLM, Columbia Law School",
      linkedin: "#",
      email: "chidi@lexgray.com",
      phone: "+234 804 567 8901",
    },
    {
      name: "Chidi Okafor",
      position: "Partner",
      specialty: "International Law",
      image: "/images/team/chidi.jpg",
      bio: "Chidi's expertise in international law and cross-border transactions makes him an invaluable asset for clients with global operations. His multilingual capabilities and cultural acumen facilitate smooth international negotiations.",
      education: "LLB, University of Nigeria | LLM, Columbia Law School",
      linkedin: "#",
      email: "chidi@lexgray.com",
      phone: "+234 804 567 8901",
    },
    {
      name: "Chidi Okafor",
      position: "Partner",
      specialty: "International Law",
      image: "/images/team/chidi.jpg",
      bio: "Chidi's expertise in international law and cross-border transactions makes him an invaluable asset for clients with global operations. His multilingual capabilities and cultural acumen facilitate smooth international negotiations.",
      education: "LLB, University of Nigeria | LLM, Columbia Law School",
      linkedin: "#",
      email: "chidi@lexgray.com",
      phone: "+234 804 567 8901",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-2 text-lg font-semibold uppercase tracking-wider text-desert-sand"
          >
            Meet Our Team
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gunmetal-blue"
          >
            Legal Professionals with Purpose
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="mb-16 text-lg text-gray-700"
          >
            Our team of seasoned legal professionals is dedicated to providing
            comprehensive legal services tailored to your unique needs. We
            thrive on the intersection of tradition and contemporary approaches,
            ensuring strategic counsel that stands the test of time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-40" />

                {/* Social Icons Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gunmetal-blue shadow-md transition-all duration-300 hover:bg-desert-sand hover:text-white"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gunmetal-blue shadow-md transition-all duration-300 hover:bg-desert-sand hover:text-white"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, "")}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gunmetal-blue shadow-md transition-all duration-300 hover:bg-desert-sand hover:text-white"
                    >
                      <Phone size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="mb-1 text-xl font-bold text-gunmetal-blue">
                  {member.name}
                </h4>
                <p className="mb-2 text-desert-sand">{member.position}</p>
                <p className="mb-4 text-sm font-medium text-gray-500">
                  Specialty: {member.specialty}
                </p>
                <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                  {member.bio}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500">{member.education}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team CTA */}
        <motion.div
          variants={itemVariants}
          className="mx-auto mt-16 max-w-2xl rounded-lg bg-gunmetal-blue bg-opacity-95 p-8 text-center shadow-xl"
        >
          <h4 className="mb-4 text-2xl font-bold text-white">
            Join Our Growing Team
          </h4>
          <p className="mb-6 text-gray-200">
            We're always looking for talented legal professionals who are
            passionate about excellence and innovation in the practice of law.
          </p>
          <Link href="/careers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-desert-sand px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-white hover:text-gunmetal-blue"
            >
              View Career Opportunities
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
