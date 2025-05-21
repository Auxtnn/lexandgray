// File: src/components/contact/ContactForm.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [activeTab, setActiveTab] = useState<"contact" | "appointment">(
    "contact"
  );
  const [formData, setFormData] = useState({
    // Contact form
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    // Appointment form
    appointmentName: "",
    appointmentEmail: "",
    appointmentPhone: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentService: "",
    appointmentNotes: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (
    e: React.FormEvent,
    type: "contact" | "appointment"
  ) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");

      // Reset form fields based on type
      if (type === "contact") {
        setFormData((prev) => ({
          ...prev,
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          appointmentName: "",
          appointmentEmail: "",
          appointmentPhone: "",
          appointmentDate: "",
          appointmentTime: "",
          appointmentService: "",
          appointmentNotes: "",
        }));
      }

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
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      {/* Form Type Tabs */}
      <div className="flex mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("contact")}
          className={`pb-3 px-4 font-proxima font-medium text-sm border-b-2 transition-colors ${
            activeTab === "contact"
              ? "border-desert-sand text-desert-sand"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Us
          </div>
        </button>
        <button
          onClick={() => setActiveTab("appointment")}
          className={`pb-3 px-4 font-proxima font-medium text-sm border-b-2 transition-colors ${
            activeTab === "appointment"
              ? "border-desert-sand text-desert-sand"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Appointment
          </div>
        </button>
      </div>

      <h3 className="text-2xl font-proxima font-bold text-gunmetal-blue mb-4">
        {activeTab === "contact" ? "Get in Touch" : "Schedule a Consultation"}
      </h3>
      <p className="text-gray-600 mb-8">
        {activeTab === "contact"
          ? "Fill out the form below to inquire about our services. Our team will respond promptly to address your legal needs."
          : "Select your preferred date and time for a consultation with one of our legal experts. We'll confirm your appointment via email."}
      </p>

      {/* Success/Error Messages */}
      {formStatus === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6 flex">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Thank you for contacting us!</p>
            <p>
              {activeTab === "contact"
                ? "Your message has been received. One of our team members will get back to you shortly."
                : "Your appointment request has been received. We will send you a confirmation email with all the details."}
            </p>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6 flex">
          <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">
              There was an error submitting your form.
            </p>
            <p>Please try again or contact us directly by phone.</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {activeTab === "contact" && (
        <form onSubmit={(e) => handleSubmit(e, "contact")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-desert-sand" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                placeholder="+234 (012) 345-6789"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <FileText className="h-4 w-4 mr-2 text-desert-sand" />
                Service of Interest <span className="text-red-500 ml-1">*</span>
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

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2 flex items-center"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-desert-sand" />
              Your Message <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
              placeholder="Please describe your legal needs or inquiry in detail..."
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="consent"
              required
              className="h-4 w-4 text-desert-sand focus:ring-desert-sand border-gray-300 rounded"
            />
            <label
              htmlFor="consent"
              className="ml-2 block text-sm text-gray-600"
            >
              I consent to having my data processed according to the{" "}
              <a
                href="/privacy-policy"
                className="text-desert-sand hover:underline"
              >
                Privacy Policy
              </a>{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full bg-gunmetal-blue text-white py-3 px-6 rounded-md hover:bg-deep-sea-blue transition-colors duration-300 font-proxima font-semibold disabled:opacity-70 flex items-center justify-center"
          >
            {formStatus === "submitting" ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      )}

      {/* Appointment Form */}
      {activeTab === "appointment" && (
        <form onSubmit={(e) => handleSubmit(e, "appointment")}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="appointmentName"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <User className="h-4 w-4 mr-2 text-desert-sand" />
                Your Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="appointmentName"
                name="appointmentName"
                value={formData.appointmentName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="appointmentEmail"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <Mail className="h-4 w-4 mr-2 text-desert-sand" />
                Email Address <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="appointmentEmail"
                name="appointmentEmail"
                value={formData.appointmentEmail}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="appointmentPhone"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <Phone className="h-4 w-4 mr-2 text-desert-sand" />
                Phone Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                id="appointmentPhone"
                name="appointmentPhone"
                value={formData.appointmentPhone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
                placeholder="+234 (012) 345-6789"
              />
            </div>
            <div>
              <label
                htmlFor="appointmentService"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <FileText className="h-4 w-4 mr-2 text-desert-sand" />
                Service of Interest <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="appointmentService"
                name="appointmentService"
                value={formData.appointmentService}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="appointmentDate"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <Calendar className="h-4 w-4 mr-2 text-desert-sand" />
                Preferred Date <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split("T")[0]} // Today's date as minimum
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="appointmentTime"
                className="block text-gray-700 font-medium mb-2 flex items-center"
              >
                <Clock className="h-4 w-4 mr-2 text-desert-sand" />
                Preferred Time <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
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
              htmlFor="appointmentNotes"
              className=" text-gray-700 font-medium mb-2 flex items-center"
            >
              <MessageSquare className="h-4 w-4 mr-2 text-desert-sand" />
              Additional Notes
            </label>
            <textarea
              id="appointmentNotes"
              name="appointmentNotes"
              value={formData.appointmentNotes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-desert-sand focus:border-transparent"
              placeholder="Please provide any additional information relevant to your appointment request..."
            ></textarea>
          </div>

          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="appointmentConsent"
              required
              className="h-4 w-4 text-desert-sand focus:ring-desert-sand border-gray-300 rounded"
            />
            <label
              htmlFor="appointmentConsent"
              className="ml-2 block text-sm text-gray-600"
            >
              I consent to having my data processed according to the{" "}
              <a
                href="/privacy-policy"
                className="text-desert-sand hover:underline"
              >
                Privacy Policy
              </a>{" "}
              <span className="text-red-500">*</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full bg-gunmetal-blue text-white py-3 px-6 rounded-md hover:bg-deep-sea-blue transition-colors duration-300 font-proxima font-semibold disabled:opacity-70 flex items-center justify-center"
          >
            {formStatus === "submitting" ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Scheduling...
              </>
            ) : (
              "Schedule Consultation"
            )}
          </button>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              We'll confirm your appointment within 24 hours via email or phone.
            </p>
          </div>
        </form>
      )}
    </motion.div>
  );
}
