"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/helpers";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: Date;
  slug: string;
  delay?: number;
}

export function BlogPostCard({
  title,
  excerpt,
  image,
  category,
  author,
  date,
  slug,
  delay = 0,
}: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-desert-sand text-white text-sm font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-proxima font-bold text-gunmetal-blue mb-2 group-hover:text-desert-sand transition-colors duration-300">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{author}</span>
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </motion.div>
  );
}
