"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
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
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const blogPosts = [
    {
      title: "Key Legal Considerations for Startups in Nigeria",
      excerpt:
        "Navigating the legal landscape as a startup can be challenging. Here are the essential legal aspects every Nigerian entrepreneur should consider.",
      date: "May 8, 2025",
      author: "Victoria Adeyemi",
      image: "/images/law.jpg",
      category: "Business Law",
      slug: "legal-considerations-startups",
    },
    {
      title:
        "Understanding Intellectual Property Protection in the Digital Age",
      excerpt:
        "Digital transformation brings new challenges for IP protection. Learn how to safeguard your intellectual assets in an increasingly digital world.",
      date: "April 22, 2025",
      author: "Sarah Mensah",
      image: "/images/law.jpg",
      category: "Intellectual Property",
      slug: "ip-protection-digital-age",
    },
    {
      title:
        "Recent Developments in Employment Law: What Employers Need to Know",
      excerpt:
        "Stay updated on the latest employment law changes and ensure your business remains compliant with current regulations.",
      date: "April 10, 2025",
      author: "Michael Okafor",
      image: "/images/law.jpg",
      category: "Employment Law",
      slug: "employment-law-updates",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-desert-sand/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-2 relative"
          >
            <h2 className="text-lg font-semibold uppercase tracking-wider text-desert-sand relative z-10">
              Legal Insights
            </h2>
            <motion.div
              className="absolute -bottom-1 left-0 h-3 w-full bg-desert-sand/20 -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.div>

          <motion.h3
            variants={itemVariants}
            className="mb-6 text-3xl md:text-4xl font-bold text-gunmetal-blue"
          >
            Latest From Our Blog
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-700"
          >
            Stay informed with the latest legal developments, insights, and
            practical advice from our experienced team of attorneys.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gunmetal-blue text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>

                <h4 className="text-xl font-bold text-gunmetal-blue mb-3">
                  {post.title}
                </h4>

                <p className="text-gray-700 mb-4 flex-grow">{post.excerpt}</p>

                <Link
                  href={`/blog`}
                  // href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-desert-sand hover:text-deep-sea-blue font-medium transition-colors mt-auto group"
                >
                  Read more
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <Link href="/blog">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-desert-sand text-desert-sand hover:bg-desert-sand hover:text-white px-6 py-3 rounded-md font-medium transition-all duration-300"
            >
              View All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
