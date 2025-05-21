"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Scale,
  History,
  Clock,
  Star,
  Award,
  Globe,
  Cpu,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

const OurStory = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const timelineEvents = [
    {
      year: "2004",
      title: "The Founding",
      description:
        "Lex & Gray Attorneys was established by a group of visionary legal professionals who saw an opportunity to bridge the gap between traditional legal practices and the evolving needs of clients in a rapidly changing world.",
      icon: <History className="h-6 w-6" />,
    },
    {
      year: "2008",
      title: "Expansion of Practice Areas",
      description:
        "We expanded our expertise to include specialized practice areas, bringing on board industry experts to provide comprehensive legal solutions across multiple sectors.",
      icon: <Star className="h-6 w-6" />,
    },
    {
      year: "2012",
      title: "African Expansion",
      description:
        "Recognizing the growing importance of cross-border legal services, we established our presence across key African markets, building a network of legal professionals with deep local knowledge.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2016",
      title: "Technology Integration",
      description:
        "We embraced technological innovation, implementing advanced legal tech solutions to enhance our service delivery and provide more efficient, transparent, and accessible legal services.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      year: "2020",
      title: "Industry Recognition",
      description:
        "Our commitment to excellence was recognized with multiple prestigious legal awards, affirming our position as a leading law firm committed to innovative and client-centered approaches.",
      icon: <Award className="h-6 w-6" />,
    },
    {
      year: "Present",
      title: "Continued Evolution",
      description:
        "Today, Lex & Gray Attorneys continues to evolve, balancing our legacy of legal expertise with forward-thinking approaches to address the complex challenges of the modern legal landscape.",
      icon: <Clock className="h-6 w-6" />,
    },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We adhere unwaveringly to the highest ethical standards, ensuring transparency, honesty, and reliability in every interaction.",
      icon: <Scale className="h-10 w-10 text-desert-sand" />,
    },
    {
      title: "Clarity",
      description:
        "We prioritize delivering straightforward and comprehensible solutions, empowering clients with knowledge for informed decisions.",
      icon: <BookOpen className="h-10 w-10 text-desert-sand" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace innovative approaches to deliver cutting-edge legal solutions that address evolving challenges in a dynamic legal landscape.",
      icon: <Lightbulb className="h-10 w-10 text-desert-sand" />,
    },
  ];

  return (
    <section className="bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4 max-w-full lg:w-11/12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="mb-2 text-lg font-semibold uppercase tracking-wider text-desert-sand"
          >
            Our Story
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="mb-6 text-4xl font-bold text-gunmetal-blue"
          >
            The Journey of Lex & Gray Attorneys
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 px-4"
          >
            The genesis of Lex & Gray Attorneys is rooted in a nuanced
            understanding of the legal landscape and the intricate dynamics of
            the attorney-client relationship. Our journey reflects our
            commitment to bridging tradition with innovation in the pursuit of
            legal excellence.
          </motion.p>
        </motion.div>

        {/* Brand Story Section */}
        <motion.div
          variants={containerVariants}
          className="mb-20 grid gap-8 lg:grid-cols-2"
        >
          {/* Image Column */}
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] overflow-hidden rounded-lg shadow-xl lg:h-auto"
          >
            <Image
              src="/images/partners.jpeg"
              alt="Lex & Gray Founding Partners"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-40" />

            {/* Image Caption */}
            <div className="absolute bottom-0 w-full bg-gunmetal-blue bg-opacity-80 p-6 text-white">
              <h4 className="mb-2 text-xl text-white font-bold">
                The Founding Vision
              </h4>
              <p className="text-sm text-gray-200">
                Our founding partners established Lex & Gray with a vision to
                create a legal practice that honors tradition while embracing
                innovation.
              </p>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h4 className="mb-6 text-3xl font-bold text-gunmetal-blue">
              Our Brand Essence & Story
            </h4>
            <div className="space-y-6 text-gray-700">
              <p>
                At Lex & Gray Attorneys, our brand essence is a tapestry woven
                with threads of tradition, legal acumen, and a commitment to
                modern professionalism. Our story unfolds in the careful
                selection of our name—LEX, representing the timeless foundation
                of "Law," and GRAY, an embodiment of navigating the
                uncertainties in the "Gray Area" of legal complexities.
              </p>
              <p>
                This duality encapsulates our dedication to providing clarity
                amid ambiguity, blending the wisdom of tradition with the
                precision demanded by the modern legal landscape. Our journey
                began with the recognition that clients often seek legal counsel
                when faced with the unknown, represented by the "Gray" in our
                name.
              </p>
              <p>
                As legal practitioners, we aspire to be more than just advisors;
                we aim to be companions guiding our clients through intricate
                legal matters. Lex & Gray Attorneys stands as a compendium of
                legal expertise, harmonizing tradition with innovation. Our
                story is one of transcending conventional boundaries, offering a
                seamless integration of time-honored legal wisdom and
                contemporary solutions.
              </p>
              <blockquote className="border-l-4 border-desert-sand pl-4 italic text-gray-600">
                "In every case we handle, we embody the essence of our brand,
                providing clear, reliable, and strategic legal solutions. Lex &
                Gray Attorneys isn't just a law firm; it's a narrative of trust,
                expertise, and the pursuit of excellence in every legal
                endeavor."
              </blockquote>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div variants={containerVariants} className="mb-16">
          <motion.h4
            variants={itemVariants}
            className="mb-12 text-center text-3xl font-bold text-gunmetal-blue"
          >
            Our Journey Through Time
          </motion.h4>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200 md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute  hidden left-0 md:flex h-8 w-8 items-center justify-center rounded-full bg-desert-sand text-white md:left-1/2 md:-ml-4">
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div
                    className={` w-full md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="rounded-lg bg-white p-4 md:p-6 shadow">
                      <div className="mb-2 inline-block rounded-md bg-gunmetal-blue px-3 py-1 text-sm font-bold text-white">
                        {event.year}
                      </div>
                      <h5 className="mb-3 text-xl font-bold text-gunmetal-blue">
                        {event.title}
                      </h5>
                      <p className="text-gray-700 text-sm md:text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          variants={containerVariants}
          className="mx-auto text-center"
        >
          <motion.h4
            variants={itemVariants}
            className="mb-2 text-lg font-semibold uppercase tracking-wider text-desert-sand"
          >
            Our Foundation
          </motion.h4>
          <motion.h3
            variants={itemVariants}
            className="mb-12 text-3xl font-bold text-gunmetal-blue"
          >
            Core Values That Guide Us
          </motion.h3>

          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-lg bg-white p-6 md:p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gunmetal-blue bg-opacity-10">
                    {value.icon}
                  </div>
                </div>
                <h5 className="mb-4 text-xl font-bold text-gunmetal-blue">
                  {value.title}
                </h5>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;
