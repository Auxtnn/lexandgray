"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  Search,
  ChevronRight,
} from "lucide-react";

const BlogMain = ({ blogPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const categories = [
    "All",
    "Corporate Law",
    "Litigation",
    "Employment Law",
    "Intellectual Property",
    "Legal Insights",
    "Case Studies",
  ];

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured);

  return (
    <div className="py-8 md:py-16 overflow-x-hidden">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Main Content Column */}
        <div className="lg:col-span-8 max-w-full overflow-hidden">
          {/* Search Section */}
          <div className="mb-6 rounded-lg bg-white p-3 shadow-md sm:p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-desert-sand focus:outline-none focus:ring-1 focus:ring-desert-sand"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6 md:mb-8 overflow-hidden">
            <div className="flex w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              <div className="flex min-w-max gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`snap-start whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all md:px-4 md:py-2 ${
                      selectedCategory === category
                        ? "bg-desert-sand text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Articles Section */}
          {selectedCategory === "All" && searchTerm === "" && (
            <div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-xl font-bold text-gunmetal-blue md:mb-6 md:text-2xl">
                Featured Articles
              </h2>
              <div className="space-y-4 md:space-y-6">
                {featuredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl w-full"
                  >
                    <div className="grid md:grid-cols-5 w-full">
                      <div className="relative h-48 w-full md:col-span-2 md:h-auto min-h-[200px]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-auto rounded-tr-lg bg-desert-sand px-3 py-1 text-xs font-medium text-white md:px-4 md:py-2 md:text-sm">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-4 md:col-span-3 md:p-6">
                        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500 md:mb-3 md:gap-4 md:text-sm">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                            <span className="whitespace-nowrap">
                              {post.date}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <User className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                            <span className="whitespace-nowrap">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                            <span className="whitespace-nowrap">
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-gunmetal-blue transition-colors duration-300 group-hover:text-desert-sand md:mb-3 md:text-xl">
                          {post.title}
                        </h3>
                        <p className="mb-3 text-sm text-gray-600 line-clamp-2 md:mb-4 md:text-base md:line-clamp-none">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center text-sm font-medium text-desert-sand transition-colors hover:text-gunmetal-blue md:text-base"
                        >
                          Read more
                          <ArrowRight className="ml-1 h-3 w-3 md:ml-2 md:h-4 md:w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="mb-4 text-xl font-bold text-gunmetal-blue md:mb-6 md:text-2xl">
              {selectedCategory === "All"
                ? "Latest Articles"
                : selectedCategory}
            </h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:gap-6"
            >
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg w-full"
                  >
                    <div className="relative h-40 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gunmetal-blue bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
                      <div className="absolute bottom-0 left-0 w-auto rounded-tr-lg bg-desert-sand px-2 py-1 text-xs font-medium text-white">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex flex-grow flex-col p-4">
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h3 className="mb-2 text-base font-bold text-gunmetal-blue transition-colors duration-300 group-hover:text-desert-sand md:text-lg">
                        {post.title}
                      </h3>
                      <p className="mb-3 flex-grow text-xs text-gray-600 line-clamp-2 md:text-sm">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          By {post.author}
                        </span>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-xs font-medium text-desert-sand transition-colors hover:text-gunmetal-blue md:text-sm"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-6 text-center md:py-8">
                  <p className="text-base text-gray-600 md:text-lg">
                    No articles found matching your criteria. Try adjusting your
                    search or filters.
                  </p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 md:mt-10 max-w-full overflow-x-auto">
              <button className="flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gunmetal-blue shadow-sm hover:bg-gray-50 md:px-4 md:py-2 md:text-sm">
                <ArrowLeft className="mr-1 h-3 w-3 md:mr-2 md:h-4 md:w-4" />
                Previous
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-desert-sand text-sm text-white md:h-10 md:w-10">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm text-gunmetal-blue hover:bg-gray-50 md:h-10 md:w-10">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm text-gunmetal-blue hover:bg-gray-50 md:h-10 md:w-10">
                3
              </button>
              <span className="text-gray-500">...</span>
              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-sm text-gunmetal-blue hover:bg-gray-50 md:h-10 md:w-10">
                8
              </button>
              <button className="flex items-center justify-center rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gunmetal-blue shadow-sm hover:bg-gray-50 md:px-4 md:py-2 md:text-sm">
                Next
                <ArrowRight className="ml-1 h-3 w-3 md:ml-2 md:h-4 md:w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Sidebar Column */}
        <div className="mt-8 lg:col-span-4 lg:mt-0">
          {/* Sidebar Container */}
          <div className="space-y-6 md:space-y-8 lg:sticky lg:top-8">
            {/* Categories Widget */}
            <div className="rounded-lg bg-white p-4 shadow-md md:p-6">
              <h3 className="mb-3 border-b border-gray-200 pb-2 text-lg font-bold text-gunmetal-blue md:mb-4 md:text-xl">
                Categories
              </h3>
              <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:gap-2 lg:grid-cols-1">
                {categories.slice(1).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`flex w-full items-center justify-between rounded-md p-2 text-left text-sm transition-all md:text-base ${
                        selectedCategory === category
                          ? "bg-gray-100 font-medium text-desert-sand"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="truncate">{category}</span>
                      <ChevronRight className="h-4 w-4 flex-shrink-0 text-desert-sand" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Widget */}
            <div className="rounded-lg bg-gunmetal-blue p-4 text-white shadow-md md:p-6">
              <h3 className="mb-3 border-b border-gray-700 pb-2 text-lg font-bold md:mb-4 md:text-xl">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-3 text-sm text-gray-300 md:mb-4 md:text-base">
                Stay updated with our latest legal insights and industry news.
              </p>
              <form className="space-y-3">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-md bg-white bg-opacity-10 px-3 py-2 text-sm text-white placeholder-gray-400 outline-none backdrop-blur-sm transition-all focus:ring-2 focus:ring-desert-sand md:px-4 md:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-desert-sand px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-opacity-90 md:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMain;
