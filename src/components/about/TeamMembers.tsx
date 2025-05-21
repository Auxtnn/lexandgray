"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";

const team = [
  {
    name: "Chisom Gemmaclaire Ezekwesili, Esq",
    position: "Managing Partner, Lex & Gray Attorneys",
    specialty: "Corporate and Compliance Law",
    bio: "Chisom Gemmaclaire Ezekwesili leads Lex & Gray Attorneys with a focus on Corporate and Compliance Law, Intellectual Property, Artificial Intelligence Law, and Litigation. Her approach combines strategic insight with a commitment to ethical practice, providing clients with tailored legal solutions. A graduate of the Nigerian Law School, Abuja, Chisom is admitted to the Nigerian Bar and is an active member of the Nigerian Bar Association, Compliance Institute of Nigeria, and the Nigerian Institute of Chartered Arbitrators. Beyond her legal practice, she has spearheaded initiatives aimed at prison decongestion and legal education, and served as an observer and interpreter for the Judicial Panel of Inquiry on Police Brutality in Ebonyi State.",
    image: "/images/chisom.jpg",
    social: {
      email: "chisom@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Somtochukwu D. Okoli, Esq",
    position: "Partner, Lex & Gray Attorneys",
    specialty: "Corporate Law",
    bio: "Somtochukwu Diana Okoli is a Partner at Lex & Gray Attorneys, where she combines legal precision with analytical insight to deliver high-impact solutions across Corporate & Commercial Law, Litigation, Intellectual Property, and Criminal Justice. She brings to the firm not only her legal expertise but also her training as a Business Analyst, equipping clients with both strategic legal counsel and data-informed decision-making. Known for her ethical rigour and results-oriented mindset, Somtochukwu advises a broad spectrum of clients from entrepreneurs to institutions with clarity, diligence, and unwavering client focus. Her work extends beyond the courtroom, reflecting a deep commitment to justice through prison decongestion initiatives and pro bono legal engagement.",
    image: "/images/somto.jpg",
    social: {
      email: "somto@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamMembers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 bg-white" id="team">
      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-gunmetal-blue mb-4">
            Meet Our Legal Team
          </h2>
          <div className="w-20 h-1.5 bg-desert-sand mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Our talented attorneys bring diverse expertise and a shared
            commitment to excellence, ensuring comprehensive legal support for
            all your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-desert-sand font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Specializes in {member.specialty}
                </p>
                <p className="text-gray-600 mb-6 flex-grow">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-desert-sand transition-colors duration-300"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-desert-sand transition-colors duration-300"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-desert-sand transition-colors duration-300"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            Join Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
