// File: src/components/home/AppointmentSection.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { useState } from "react";

export function AppointmentSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        notes: "",
      });

      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 1500);
  };

  const services = [
    { value: "", label: "Select a service" },
    { value: "Corporate Law", label: "Corporate Law" },
    { value: "Intellectual Property", label: "Intellectual Property" },
    { value: "Litigation", label: "Litigation" },
    { value: "Estate Planning", label: "Estate Planning" },
    { value: "Tax Law", label: "Tax Law" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Other", label: "Other" },
  ];

  const timeSlots = [
    { value: "", label: "Select a time" },
    { value: "09:00", label: "9:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "1:00 PM" },
    { value: "14:00", label: "2:00 PM" },
    { value: "15:00", label: "3:00 PM" },
    { value: "16:00", label: "4:00 PM" },
    { value: "17:00", label: "5:00 PM" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="appointment">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-proxima font-bold text-gunmetal-blue mb-4">
              Schedule a Consultation
            </h2>
            <div className="w-20 h-1.5 bg-desert-sand mb-6"></div>

            <p className="text-lg text-gray-700 mb-6">
              Take the first step towards resolving your legal matters. Schedule
              a consultation with one of our experienced attorneys to discuss
              your specific needs and explore solutions.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-proxima font-semibold text-gunmetal-blue mb-4">
                Why Schedule a Consultation?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-desert-sand mr-2">●</span>
                  <span className="text-gray-700">
                    Receive personalized legal advice tailored to your situation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-sand mr-2">●</span>
                  <span className="text-gray-700">
                    Understand your legal options and potential strategies
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-sand mr-2">●</span>
                  <span className="text-gray-700">
                    Get answers to your specific questions from experienced
                    attorneys
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-desert-sand mr-2">●</span>
                  <span className="text-gray-700">
                    Establish a framework for how we can work together moving
                    forward
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-desert-sand mr-2" />
                <span className="text-gray-700">
                  Available Monday to Friday
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-desert-sand mr-2" />
                <span className="text-gray-700">9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-2xl font-proxima font-bold text-gunmetal-blue mb-4">
              Book Your Appointment
            </h3>
            <p className="text-gray-600 mb-6">
              Please fill in the form below and we'll confirm your appointment
              within 24 hours.
            </p>

            {formStatus === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                <p className="font-medium">Appointment request submitted!</p>
                <p>
                  We will confirm your appointment shortly via email or phone.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <User className="h-4 w-4 mr-2 text-desert-sand" />
                    Your Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2 text-desert-sand" />
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <Phone className="h-4 w-4 mr-2 text-desert-sand" />
                    Phone Number <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                    placeholder="+234 (012) 345-6789"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent bg-white"
                  >
                    {services.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <Calendar className="h-4 w-4 mr-2 text-desert-sand" />
                    Preferred Date <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]} // Today's date as minimum
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-gray-700 font-medium mb-2 flex items-center"
                  >
                    <Clock className="h-4 w-4 mr-2 text-desert-sand" />
                    Preferred Time <span className="text-red-500 ml-1">*</span>
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent bg-white"
                  >
                    {timeSlots.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="notes"
                  className="block text-gray-700 font-medium mb-2 flex items-center"
                >
                  <MessageSquare className="h-4 w-4 mr-2 text-desert-sand" />
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                  placeholder="Please provide any additional information relevant to your appointment..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="w-full bg-desert-sand text-white py-3 px-6 rounded-md hover:bg-ash-gray transition-colors duration-300 font-proxima font-semibold disabled:opacity-70 flex items-center justify-center"
              >
                {formStatus === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Booking Appointment...
                  </>
                ) : (
                  "Book Consultation"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
