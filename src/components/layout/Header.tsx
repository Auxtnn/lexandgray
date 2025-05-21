"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * custom,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Determine header styles based on scroll position and page
  const isHomePage = pathname === "/";
  const headerBg = scrolled
    ? "bg-white shadow-md"
    : isHomePage
    ? "bg-transparent"
    : "bg-white bg-opacity-95";

  const textColor = scrolled
    ? "text-gunmetal-blue"
    : isHomePage
    ? "text-white"
    : "text-gunmetal-blue";

  const activeTextColor = scrolled
    ? "text-desert-sand"
    : isHomePage && !scrolled
    ? "text-desert-sand font-medium"
    : "text-desert-sand";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBg} ${
        scrolled ? "py-4" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <div className="relative h-12 w-12 overflow-hidden">
                <div
                  className={`absolute inset-0 flex items-center justify-center rounded-md ${scrolled} transition-colors duration-300`}
                >
                  <Image
                    className="h-12 w-auto"
                    src="/images/logo.png"
                    alt="Lex and Gray Logo"
                    width={180}
                    height={60}
                    unoptimized
                  />
                </div>
              </div>
              <div className="">
                <h1
                  className={`text-lg font-bold uppercase tracking-wider transition-colors duration-300 ${textColor}`}
                >
                  Lex & Gray
                </h1>
                <p
                  className={`text-xs tracking-wider transition-colors duration-300 ${
                    scrolled || !isHomePage
                      ? "text-desert-sand"
                      : "text-gray-200"
                  }`}
                >
                  ATTORNEYS
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center lg:flex">
            <ul className="mr-6 flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <Link
                    href={item.path}
                    className={`relative inline-block py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-desert-sand ${
                      pathname === item.path ? activeTextColor : textColor
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-desert-sand"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group flex items-center rounded-md ${
                  scrolled || !isHomePage
                    ? "bg-desert-sand text-white hover:bg-opacity-90"
                    : "bg-white bg-opacity-10 text-white backdrop-blur-sm hover:bg-opacity-20"
                } px-5 py-2 text-sm font-medium transition-all duration-300`}
              >
                <span>Consult Now</span>
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="relative z-50 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-md">
              <motion.div
                animate={{
                  rotate: isOpen ? 0 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gunmetal-blue" />
                ) : (
                  <Menu className={`h-6 w-6 ${textColor}`} />
                )}
              </motion.div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col overflow-hidden bg-white"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="container mx-auto flex-grow px-6 pb-8 pt-24">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    custom={index}
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    className="border-b border-gray-100 py-3"
                  >
                    <Link
                      href={item.path}
                      className={`block text-lg font-medium ${
                        pathname === item.path
                          ? "text-desert-sand"
                          : "text-gunmetal-blue"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {pathname === item.path && (
                          <span className="text-desert-sand">
                            <ArrowRight size={16} />
                          </span>
                        )}
                      </div>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
              >
                <Link
                  href="/contact"
                  className="block w-full rounded-md bg-desert-sand py-3 text-center text-base font-medium text-white shadow-md transition-all hover:bg-opacity-90"
                  onClick={() => setIsOpen(false)}
                >
                  Consult Now
                </Link>

                <div className="mt-8 flex items-center justify-center space-x-6 border-t border-gray-100 pt-6">
                  <div className="text-center">
                    <p className="mb-1 text-xs font-medium uppercase text-gray-500">
                      Email
                    </p>
                    <a
                      href="mailto:info@lexgray.com"
                      className="text-sm text-gunmetal-blue"
                    >
                      info@lexgray.com
                    </a>
                  </div>
                  <div className="text-center">
                    <p className="mb-1 text-xs font-medium uppercase text-gray-500">
                      Phone
                    </p>
                    <a
                      href="tel:+2348000000000"
                      className="text-sm text-gunmetal-blue"
                    >
                      +234 800 000 0000
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
