"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, X } from "lucide-react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="contact"
      className="w-full bg-neutral-900 py-20 px-6 sm:px-10 md:px-20 text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6 relative inline-block before:absolute before:inset-0 before:rounded before:blur-md before:bg-lime-500 before:opacity-40 before:scale-105 before:-z-10">
            <span className="bg-gradient-to-r from-lime-300 to-lime-600 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            Looking for a dependable, certified warehouse professional? Let’s connect with Donald.
          </p>

          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2 text-gray-200">
              <Phone size={18} />
              <span className="text-base font-medium">470-499-7949</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-gray-200">
              <Mail size={18} />
              <a
                href="mailto:donaldjupshaw@gmail.com"
                className="text-base font-medium hover:underline"
              >
                donaldjupshaw@gmail.com
              </a>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-black border-2 border-lime-500 text-white px-6 py-2 rounded-full font-medium hover:bg-neutral-800 transition"
              >
                <FileText size={18} />
                View Resume
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 bg-lime-600 text-black p-3 rounded-full shadow-lg hover:bg-lime-500 transition z-50"
        aria-label="Back to top"
        title="Back to top"
      >
        ↑
      </a>

      {/* Resume PDF Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden relative max-w-3xl w-full h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10"
            >
              <X size={24} />
            </button>
            <iframe
              src="/images/Donald_Upshaw_Resume.pdf"
              title="Resume Preview"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center pb-3">
              <a
                href="/images/Donald_Upshaw_Resume.pdf"
                download
                className="inline-block bg-lime-600 text-black px-4 py-2 rounded-full hover:bg-lime-500 transition"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
