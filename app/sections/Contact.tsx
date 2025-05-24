"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, FileText, X } from "lucide-react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="contact"
      className="w-full bg-gray-50 py-20 px-6 sm:px-10 md:px-20 text-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Looking for a dependable, certified warehouse professional? Let’s connect.
          </p>

          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2 text-gray-800">
              <Phone size={18} />
              <span className="text-base font-medium">770-294-1987</span>
            </div>

            <div className="flex justify-center items-center gap-2 text-gray-800">
              <Mail size={18} />
              <a
                href="mailto:SydneyHopsonJr@outlook.com"
                className="text-base font-medium hover:underline"
              >
                SydneyHopsonJr@outlook.com
              </a>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
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
        className="fixed bottom-6 right-6 bg-blue-700 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
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
              src="/images/SydneyLHopsonJr_resume.pdf"
              title="Resume Preview"
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center pb-3">
              <a
                href="/images/SydneyLHopsonJr_resume.pdf"
                download
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
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
