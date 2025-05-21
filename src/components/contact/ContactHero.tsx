"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-desert-sand" />,
      title: "Call Us",
      details: ["+234 1 234 5678", "+234 9 876 5432"],
      action: "Call now",
      link: "tel:+2341234567",
    },
    {
      icon: <Mail className="h-6 w-6 text-desert-sand" />,
      title: "Email Us",
      details: ["info@lexgray.com", "inquiries@lexgray.com"],
      action: "Send email",
      link: "mailto:info@lexgray.com",
    },
    {
      icon: <MapPin className="h-6 w-6 text-desert-sand" />,
      title: "Visit Us",
      details: ["15 Victoria Island Expressway", "Lagos, Nigeria"],
      action: "Get directions",
      link: "https://maps.google.com/?q=15+Victoria+Island+Expressway+Lagos+Nigeria",
    },
    {
      icon: <Clock className="h-6 w-6 text-desert-sand" />,
      title: "Working Hours",
      details: ["Monday-Friday: 8am - 6pm", "Saturday: 9am - 1pm"],
      action: "Book appointment",
      link: "#contact-form",
    },
  ];

  return (
    <section className="pt-32 pb-6 md:pb-10 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-grid-pattern" />
        </div>

        {/* Abstract shapes */}
        <motion.div
          className="absolute -top-20 -right-20 w-80 h-80 bg-gunmetal-blue/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-desert-sand/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 lg:w-11/12 relative z-10">
        <motion.div
          className=" mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-6">
            <nav className="flex justify-center" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-desert-sand text-sm transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-500 ml-1 md:ml-2 text-sm font-medium">
                      Contact Us
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block py-1 px-3 bg-desert-sand/10 text-desert-sand rounded-full text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gunmetal-blue"
            variants={itemVariants}
          >
            Contact <span className="text-desert-sand">Lex & Gray</span>{" "}
            Attorneys
          </motion.h1>

          <motion.p
            className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our team of legal experts is ready to assist you with any inquiries.
            Reach out today to schedule a consultation or learn more about our
            services.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-lg p-4 shadow flex flex-col items-center text-center"
              >
                <div className="bg-gunmetal-blue/5 p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gunmetal-blue mb-3">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
                <span className="mt-4 text-desert-sand font-medium inline-flex items-center">
                  {item.action}
                  <svg
                    className="w-4 h-4 ml-1 group-hover:ml-2 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gunmetal-blue/5 p-6 rounded-lg inline-block mx-auto"
          >
            <h3 className="text-xl font-semibold text-gunmetal-blue mb-2">
              Ready to discuss your legal needs?
            </h3>
            <p className="text-gray-600 mb-4">
              Fill out the form below, and our team will get back to you
              promptly.
            </p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8 text-desert-sand mx-auto animate-bounce"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
