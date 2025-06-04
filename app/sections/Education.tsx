"use client";

import { useState,  } from "react";
import { motion } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import Image from "next/image";

const education = [
  {
    title: "Forklift Operations Training Program",
    institution: "Goodwill of North Georgia via B&W Fork Training Center",
    location: "Decatur, GA",
    dates: "May 2025 – Present",
    certImage: "/certs/forklift-training.webp",
    icon: <GraduationCap className="text-cyan-400 mb-3 mx-auto" size={40} />,
  },
  {
    title: "OSHA 10 General Industry Training",
    institution: "Authorized Provider",
    location: "Decatur, GA",
    dates: "Completed 2024",
    certImage: "/certs/osha-cert.webp",
    icon: <GraduationCap className="text-cyan-400 mb-3 mx-auto" size={40} />,
  },
  {
    title: "CPR & First Aid Certification",
    institution: "Red Cross / Goodwill",
    location: "Decatur, GA",
    dates: "Valid through 2026",
    certImage: "/certs/cpr-cert.webp",
    icon: <GraduationCap className="text-cyan-400 mb-3 mx-auto" size={40} />,
  },
];

const certPills = [
  "60+ Hours of Equipment Training",
  "Certified: Stand Up, Sit Down, Reach Truck, Electric Pallet Jack",
];

export default function Education() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section id="education" className="w-full bg-white py-20 px-6 sm:px-10 md:px-20 text-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-14 text-center">
          Certified & Prepared
        </h2>

        <div className="overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory scroll-smooth">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="snap-center flex-shrink-0 w-80 md:w-[30rem] lg:w-[36rem] rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-300/40 transition-all bg-black ring-2 ring-blue-500"
            >
              <div className="flex flex-col items-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mt-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-400">{item.location}</p>
              <p className="text-sm text-gray-500 mt-1">{item.dates}</p>

              {item.certImage && (
                <button
                  onClick={() => setModalImage(item.certImage)}
                  className="mt-4 inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  View Certificate
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            Additional Certifications
          </h4>
          <ul className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
            {certPills.map((cert, i) => (
              <li
                key={i}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium whitespace-nowrap"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden relative max-w-2xl w-full">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <Image
              src={modalImage}
              alt="Certificate Preview"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
