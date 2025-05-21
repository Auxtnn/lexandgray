"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  // Enhanced animation variants
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
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const quoteVariants = {
    initial: {
      opacity: 0,
      x: direction > 0 ? 80 : -80,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      x: direction > 0 ? -80 : 80,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    initial: {
      opacity: 0.5,
      scale: 1.05,
    },
    animate: {
      opacity: 0.8,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: {
      opacity: 0.5,
      scale: 1.1,
      transition: { duration: 0.4 },
    },
  };

  const quoteIconVariants = {
    initial: { opacity: 0, scale: 0.7, rotate: -10 },
    animate: {
      opacity: 0.3,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const testimonials = [
    {
      id: 1,
      name: "Olabisi Johnson",
      position: "CEO, TechGro Nigeria",
      image: "/images/scale.jpg",
      quote:
        "Lex & Gray Attorneys provided exceptional legal guidance during our company's expansion into international markets. Their expertise in cross-border regulations and meticulous attention to detail gave us confidence to pursue our global strategy.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emmanuel Osei",
      position: "Founder, Innovate Hub",
      image: "/images/scale.jpg",
      quote:
        "As a tech startup, protecting our intellectual property was crucial. The team at Lex & Gray delivered strategic IP protection strategies that secured our innovations while allowing us to grow. Their modern approach to legal services perfectly complemented our business model.",
      rating: 5,
    },
    {
      id: 3,
      name: "Fatima Diallo",
      position: "CFO, Sahel Resources",
      image: "/images/scale.jpg",
      quote:
        "The corporate law team at Lex & Gray demonstrated exceptional expertise during our complex merger negotiations. Their ability to navigate legal complexities while maintaining a clear vision of our business objectives was instrumental to our success.",
      rating: 5,
    },
    {
      id: 4,
      name: "Kwame Mensah",
      position: "Managing Director, Atlantic Ventures",
      image: "/images/scale.jpg",
      quote:
        "When faced with a challenging litigation case, Lex & Gray's strategic approach and thorough preparation made all the difference. Their combination of traditional legal wisdom and innovative thinking resulted in a favorable outcome that exceeded our expectations.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > activeTestimonial ? 1 : -1);
    setActiveTestimonial(index);
  };

  const RenderStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <motion.svg
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.3 + index * 0.1,
                duration: 0.5,
                ease: "backOut",
              },
            }}
            className={`h-5 w-5 ${
              index < rating ? "text-desert-sand" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-desert-sand/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gunmetal-blue/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:w-11/12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-4xl text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-2 relative"
          >
            <h2 className="text-lg font-semibold uppercase tracking-wider text-desert-sand relative z-10">
              Client Testimonials
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
            What Our Clients Say
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="mb-12 md:mb-16 text-base md:text-lg text-gray-700"
          >
            Our clients' success stories reflect our commitment to excellence
            and client-centric approach. Here's what they have to say about
            their experience with Lex & Gray Attorneys.
          </motion.p>
        </motion.div>

        <motion.div
          className="mx-auto max-w-6xl"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
            {/* Desktop Layout */}
            <div className="hidden md:block">
              <div className="grid grid-cols-2">
                {/* Image Column */}
                <div className="relative h-full min-h-[500px] bg-gunmetal-blue overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`image-${activeTestimonial}`}
                      className="absolute inset-0"
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <Image
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-blue/10 via-gunmetal-blue/60 to-gunmetal-blue/90" />

                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/20"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <motion.div
                      key={`info-${activeTestimonial}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <h4 className="text-xl font-bold">
                        {testimonials[activeTestimonial].name}
                      </h4>
                      <p className="text-gray-200">
                        {testimonials[activeTestimonial].position}
                      </p>
                      <div className="mt-3">
                        <RenderStars
                          rating={testimonials[activeTestimonial].rating}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex flex-col justify-center p-8 md:p-12 relative">
                  <motion.div
                    variants={quoteIconVariants}
                    initial="initial"
                    animate="animate"
                    key={`quote-icon-${activeTestimonial}`}
                    className="absolute top-8 right-8"
                  >
                    <Quote className="h-16 w-16 text-desert-sand opacity-10" />
                  </motion.div>

                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={`quote-${activeTestimonial}`}
                      variants={quoteVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="mb-8 min-h-[180px] flex items-center"
                    >
                      <p className="text-xl italic leading-relaxed text-gray-700">
                        "{testimonials[activeTestimonial].quote}"
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {testimonials.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => goToTestimonial(index)}
                          className="relative h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"
                          style={{
                            width:
                              activeTestimonial === index
                                ? "1.5rem"
                                : "0.75rem",
                          }}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Go to testimonial ${index + 1}`}
                        >
                          {activeTestimonial === index && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-desert-sand"
                              layoutId="activeDot"
                              transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                              }}
                            />
                          )}
                        </motion.button>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={prevTestimonial}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gunmetal-blue hover:text-white"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#2A4562",
                          color: "#ffffff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={18} />
                      </motion.button>
                      <motion.button
                        onClick={nextTestimonial}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gunmetal-blue hover:text-white"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "#2A4562",
                          color: "#ffffff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={18} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden">
              <div className="relative h-64 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`mobile-image-${activeTestimonial}`}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      sizes="100vw"
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-gunmetal-blue/30 to-gunmetal-blue/80" />
              </div>

              <div className="p-6">
                <motion.div
                  className="mb-6 flex items-center justify-between"
                  key={`mobile-info-${activeTestimonial}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h4 className="text-lg font-bold text-gunmetal-blue">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeTestimonial].position}
                    </p>
                  </div>
                  <RenderStars
                    rating={testimonials[activeTestimonial].rating}
                  />
                </motion.div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`mobile-quote-${activeTestimonial}`}
                    variants={quoteVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative mb-8 min-h-[150px]"
                  >
                    <motion.div
                      variants={quoteIconVariants}
                      initial="initial"
                      animate="animate"
                      className="absolute -top-4 -left-2"
                    >
                      <Quote className="h-8 w-8 text-desert-sand opacity-30" />
                    </motion.div>
                    <p className="pt-4 text-gray-700">
                      "{testimonials[activeTestimonial].quote}"
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Mobile Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className="relative h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all"
                        style={{
                          width:
                            activeTestimonial === index ? "1.25rem" : "0.5rem",
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Go to testimonial ${index + 1}`}
                      >
                        {activeTestimonial === index && (
                          <motion.div
                            className="absolute inset-0 rounded-full bg-desert-sand"
                            layoutId="mobileActiveDot"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <motion.button
                      onClick={prevTestimonial}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gunmetal-blue hover:text-white"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#2A4562",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={16} />
                    </motion.button>
                    <motion.button
                      onClick={nextTestimonial}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all hover:bg-gunmetal-blue hover:text-white"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#2A4562",
                        color: "#ffffff",
                      }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
