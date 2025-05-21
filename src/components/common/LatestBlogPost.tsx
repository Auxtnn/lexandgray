"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BlogPostCard } from "./BlogPostCard";
import { ArrowRight } from "lucide-react";

// Example blog post data
const blogPosts = [
  {
    title: "Navigating the New Corporate Tax Regulations",
    excerpt:
      "A comprehensive guide to the latest corporate tax changes and how they might impact your business operations.",
    image: "/images/blog-1.jpg",
    category: "Tax Law",
    author: "David Chen",
    date: new Date("2025-04-15"),
    slug: "navigating-new-corporate-tax-regulations",
  },
  {
    title: "Intellectual Property Protection in the Digital Age",
    excerpt:
      "Understanding how to safeguard your innovations and creative works in an increasingly digital marketplace.",
    image: "/images/blog-2.jpg",
    category: "Intellectual Property",
    author: "Michael Okafor",
    date: new Date("2025-04-10"),
    slug: "intellectual-property-protection-digital-age",
  },
  {
    title: "Essential Estate Planning Strategies for Young Professionals",
    excerpt:
      "Why early estate planning matters and the key components every young professional should consider.",
    image: "/images/blog-3.jpg",
    category: "Estate Planning",
    author: "Thomas Njoku",
    date: new Date("2025-04-05"),
    slug: "estate-planning-strategies-young-professionals",
  },
];

export function LatestBlogPosts() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-proxima font-bold text-gunmetal-blue mb-4">
            Latest Insights & News
          </h2>
          <div className="w-20 h-1.5 bg-desert-sand mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Stay informed with our latest articles, insights, and updates on key
            legal topics that matter to you and your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              author={post.author}
              date={post.date}
              slug={post.slug}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-primary inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
