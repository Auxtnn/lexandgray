"use client";

import React from "react";
import { BlogHero, CTAServices, BlogMain } from "@/components";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title:
        "Understanding the New Data Protection Act: Implications for Businesses",
      excerpt:
        "An analysis of the recently enacted Data Protection Act and how it affects business operations, data management practices, and compliance requirements for companies across various sectors.",
      category: "Corporate Law",
      author: "Ngozi Okonkwo",
      date: "May 10, 2025",
      readTime: "8 min read",
      image: "/images/scale.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Landmark Case Reshapes Employment Contract Interpretation",
      excerpt:
        "A deep dive into the recent Supreme Court decision that has significantly altered how employment contracts are interpreted, with important takeaways for both employers and employees.",
      category: "Employment Law",
      author: "Daniel Adeyemi",
      date: "May 3, 2025",
      readTime: "6 min read",
      image: "/images/scale.jpg",
      featured: false,
    },
    {
      id: 3,
      title:
        "Navigating Cross-Border Mergers: Legal Challenges and Best Practices",
      excerpt:
        "Exploring the complex legal considerations involved in cross-border mergers and acquisitions, including regulatory compliance, due diligence, and post-merger integration issues.",
      category: "Corporate Law",
      author: "Amina Ibrahim",
      date: "April 28, 2025",
      readTime: "10 min read",
      image: "/images/scale.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Intellectual Property Protection in the Digital Age",
      excerpt:
        "How businesses can safeguard their intellectual property assets in an increasingly digital environment, with strategies for copyright enforcement, trademark protection, and patent security.",
      category: "Intellectual Property",
      author: "Chidi Okafor",
      date: "April 21, 2025",
      readTime: "7 min read",
      image: "/images/scale.jpg",
      featured: false,
    },
    {
      id: 5,
      title:
        "The Evolution of Alternative Dispute Resolution in Commercial Litigation",
      excerpt:
        "An examination of how alternative dispute resolution methods are transforming commercial litigation, offering faster, more cost-effective solutions for business disputes.",
      category: "Litigation",
      author: "Ngozi Okonkwo",
      date: "April 15, 2025",
      readTime: "9 min read",
      image: "/images/scale.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Legal Implications of AI Integration in Business Operations",
      excerpt:
        "A comprehensive overview of the legal considerations businesses should address when implementing artificial intelligence solutions, from liability concerns to regulatory compliance.",
      category: "Legal Insights",
      author: "Daniel Adeyemi",
      date: "April 8, 2025",
      readTime: "11 min read",
      image: "/images/scale.jpg",
      featured: true,
    },
  ];

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <BlogHero />

      <div className="container pb-10 mx-auto px-4 md:px-6 lg:w-11/12">
        {/* Main Blog Content using the new BlogMain component */}
        <BlogMain blogPosts={blogPosts} />

        {/* CTA Section */}
        <CTAServices />
      </div>
    </div>
  );
};

export default BlogPage;
