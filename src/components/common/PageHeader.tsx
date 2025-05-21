"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative py-32 bg-gunmetal-blue">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gunmetal-blue/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-proxima font-bold text-white mb-4">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xl text-gray-200">{subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 left-0 w-full h-16 bg-white"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
          opacity: 0.1,
        }}
      ></div>
    </section>
  );
}
