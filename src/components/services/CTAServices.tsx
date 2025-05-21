"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CTAServices = () => {
  return (
    <div className="bg-gunmetal-blue">
      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container mx-auto px-4 lg:w-11/12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gunmetal-blue">
              Ready to Navigate the Legal Landscape with Confidence?
            </h2>
            <p className="mb-8 text-lg text-gray-700">
              Let's embark on this journey together. Schedule a consultation
              with our expert legal team and discover how Lex & Gray Attorneys
              can provide clarity and strategic solutions for your legal needs.
            </p>
            <Link href="/contact">
              <button className="rounded-md bg-gunmetal-blue px-8 py-3 font-medium text-white shadow-md transition-all duration-300 hover:bg-deep-sea-blue">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTAServices;
