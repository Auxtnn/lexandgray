"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Brief loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-gunmetal-blue flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col items-center">
            {/* Simple, elegant logo */}
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-white text-3xl font-serif">
                <span className="font-medium">LEX</span>
                <span className="text-desert-sand mx-1">&</span>
                <span className="font-light text-desert-sand">GRAY</span>
              </h1>
            </motion.div>
            <div className="font-medium pb-4 text-white">ATTORNEYS</div>

            {/* Simple loader line */}
            <div className="w-48 h-0.5 bg-white/20 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-desert-sand"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
