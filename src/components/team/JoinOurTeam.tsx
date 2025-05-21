"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  BookOpen,
  Target,
  GraduationCap,
} from "lucide-react";

export function JoinOurTeam() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Award,
      title: "Professional Growth",
      description:
        "Work on challenging cases alongside experienced attorneys who are leaders in their respective practice areas.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Join a supportive team that values diverse perspectives and fosters a collegial work environment.",
    },
    {
      icon: BookOpen,
      title: "Continued Learning",
      description:
        "Access to ongoing education, professional development, and mentorship opportunities.",
    },
    {
      icon: Target,
      title: "Work-Life Balance",
      description:
        "We prioritize well-being and offer flexible arrangements to help you thrive both professionally and personally.",
    },
    {
      icon: GraduationCap,
      title: "Competitive Benefits",
      description:
        "Comprehensive benefits package including health insurance, retirement plans, and performance-based incentives.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gunmetal-blue text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'url("/images/pattern-light.png")',
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-proxima font-bold text-white mb-4">
              Join Our Team
            </h2>
            <div className="w-20 h-1.5 bg-desert-sand mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Lex & Gray Attorneys is always looking for talented professionals
              who share our commitment to legal excellence and client service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <div className="mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-desert-sand text-white">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-proxima font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white/10 rounded-lg p-8 border border-white/20 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-proxima font-bold text-white mb-4">
              Current Openings
            </h3>
            <p className="text-gray-300 mb-6">
              We're currently seeking qualified candidates for the following
              positions:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3 text-desert-sand">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Corporate Law Associate</span>{" "}
                  - 3-5 years of experience in corporate transactions
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3 text-desert-sand">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">Litigation Paralegal</span> -
                  Experienced paralegal with strong research and organizational
                  skills
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mt-1 mr-3 text-desert-sand">
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <span className="font-semibold">
                    Intellectual Property Attorney
                  </span>{" "}
                  - 2+ years of experience in IP law, tech background preferred
                </div>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/careers"
                className="bg-desert-sand text-white px-6 py-3 rounded font-proxima font-semibold hover:bg-ash-gray transition-colors duration-300 flex items-center justify-center"
              >
                View All Openings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact?subject=Career%20Inquiry"
                className="bg-transparent border border-white text-white px-6 py-3 rounded font-proxima font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center"
              >
                Submit Your Resume
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
