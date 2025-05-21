"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Sarah Johnson",
    position: "Managing Partner",
    specialty: "Corporate Law",
    bio: "With over 15 years of experience in corporate law, Sarah leads our firm with vision and integrity. She specializes in mergers and acquisitions, corporate governance, and strategic business transactions.",
    education: [
      "J.D., Harvard Law School",
      "B.A. in Business Administration, University of Lagos",
    ],
    image: "/images/team-1.jpg",
    social: {
      email: "sarah@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Okafor",
    position: "Senior Attorney",
    specialty: "Intellectual Property",
    bio: "Michael is our intellectual property expert with a strong background in technology and creative industries. He advises clients on trademark registration, copyright protection, and IP litigation matters.",
    education: [
      "J.D., Yale Law School",
      "B.Sc. in Computer Science, University of Ibadan",
    ],
    image: "/images/team-2.jpg",
    social: {
      email: "michael@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Amina Bello",
    position: "Associate Attorney",
    specialty: "Litigation",
    bio: "Amina brings sharp analytical skills and tenacity to our litigation practice. She represents clients in complex commercial disputes, employment matters, and regulatory investigations.",
    education: [
      "J.D., University of Chicago Law School",
      "B.A. in Political Science, Ahmadu Bello University",
    ],
    image: "/images/team-3.jpg",
    social: {
      email: "amina@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Chen",
    position: "Legal Consultant",
    specialty: "Tax Law",
    bio: "David provides expert guidance on domestic and international tax matters. He helps clients navigate complex tax regulations, optimize tax strategies, and ensure compliance with changing tax laws.",
    education: [
      "LL.M. in Taxation, New York University",
      "J.D., Columbia Law School",
      "B.Sc. in Economics, London School of Economics",
    ],
    image: "/images/team-4.jpg",
    social: {
      email: "david@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Grace Adekunle",
    position: "Associate Attorney",
    specialty: "Real Estate",
    bio: "Grace specializes in commercial and residential real estate transactions. She advises clients on property acquisitions, leasing agreements, and real estate investment strategies.",
    education: [
      "J.D., Stanford Law School",
      "B.Sc. in Estate Management, University of Nigeria",
    ],
    image: "/images/team-5.jpg",
    social: {
      email: "grace@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Thomas Njoku",
    position: "Senior Attorney",
    specialty: "Estate Planning",
    bio: "Thomas helps clients secure their legacy through comprehensive estate planning. He specializes in wills, trusts, probate administration, and succession planning for high-net-worth individuals.",
    education: [
      "J.D., Georgetown University Law Center",
      "B.A. in Philosophy, University of Cape Town",
    ],
    image: "/images/team-6.jpg",
    social: {
      email: "thomas@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Olivia Mensah",
    position: "Associate Attorney",
    specialty: "Employment Law",
    bio: "Olivia advises businesses on employment matters, including compliance with labor laws, workplace policies, and employee relations. She also represents clients in employment disputes and investigations.",
    education: [
      "J.D., University of Michigan Law School",
      "B.A. in Industrial Relations, University of Ghana",
    ],
    image: "/images/team-7.jpg",
    social: {
      email: "olivia@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Robert Banda",
    position: "Associate Attorney",
    specialty: "International Law",
    bio: "Robert specializes in international business transactions, cross-border disputes, and compliance with international regulations. He helps clients navigate the complexities of global operations.",
    education: [
      "J.D., Cornell Law School",
      "LL.M. in International Law, University of Cambridge",
      "B.A. in International Relations, University of Zambia",
    ],
    image: "/images/team-8.jpg",
    social: {
      email: "robert@lexgrayattorneys.com",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export function TeamGrid() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-gunmetal-blue mb-4">
            Our Expert Legal Team
          </h2>
          <div className="w-20 h-1.5 bg-desert-sand mb-6"></div>
          <p className="text-lg text-gray-700">
            Meet the dedicated professionals who bring diverse expertise and a
            shared commitment to excellence in serving our clients. Our
            attorneys combine legal knowledge with practical insights to deliver
            effective solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white p-2 rounded-full text-gunmetal-blue hover:bg-desert-sand hover:text-white transition-colors duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="bg-white p-2 rounded-full text-gunmetal-blue hover:bg-desert-sand hover:text-white transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white p-2 rounded-full text-gunmetal-blue hover:bg-desert-sand hover:text-white transition-colors duration-300"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-desert-sand font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  Specializes in {member.specialty}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">{member.bio}</p>
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-proxima font-semibold text-gunmetal-blue mb-2">
                    Education
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {member.education.map((edu, eduIndex) => (
                      <li key={eduIndex}>{edu}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
