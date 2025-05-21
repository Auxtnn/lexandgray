"use client";

import { motion } from "framer-motion";

interface AnimatedLogoProps {
  className?: string;
}

export function AnimatedLogo({ className = "h-12 w-auto" }: AnimatedLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        {/* Sword stem/handle */}
        <motion.path
          d="M60,20 L60,100"
          fill="none"
          stroke="#B2906A"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Left L - Lex */}
        <motion.path
          d="M40,40 L40,70 L55,70"
          fill="none"
          stroke="#B2906A"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Right G - Gray */}
        <motion.path
          d="M80,40 L80,70 L65,70 L65,55 L75,55"
          fill="none"
          stroke="#B2906A"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Sword guard - horizontal lines */}
        <motion.path
          d="M45,80 L75,80"
          fill="none"
          stroke="#B2906A"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Sword guard - horizontal lines */}
        <motion.path
          d="M45,85 L75,85"
          fill="none"
          stroke="#B2906A"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* Sword tip */}
        <motion.path
          d="M60,20 L55,25 L65,25 Z"
          fill="#B2906A"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
      </svg>
    </motion.div>
  );
}
