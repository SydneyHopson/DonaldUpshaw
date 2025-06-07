"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, X } from "lucide-react";
import Image from "next/image";

const education = [
  {
    title: "Forklift Operations Training Program",
    institution: "Goodwill of North Georgia via B&W Fork Training Center",
    location: "Decatur, GA",
    dates: "May 2025 – Present",
    description: "Hands-on training with real-world forklifts and OSHA-aligned instruction.",
    certImage: "/certs/forklift-training.webp",
    icon: <GraduationCap className="text-lime-400 mb-4 mx-auto" size={30} />,
  },
  {
    title: "OSHA 10 General Industry Training",
    institution: "Authorized Provider",
    location: "Decatur, GA",
    dates: "Completed 2024",
    description: "Covers workplace safety fundamentals for industrial environments.",
    certImage: "/certs/osha-cert.webp",
    icon: <GraduationCap className="text-lime-400 mb-4 mx-auto" size={30} />,
  },
  {
    title: "CPR & First Aid Certification",
    institution: "Red Cross / Goodwill",
    location: "Decatur, GA",
    dates: "Valid through 2026",
    description: "Emergency response skills including CPR, AED use, and basic first aid.",
    certImage: "/certs/cpr-cert.webp",
    icon: <GraduationCap className="text-lime-400 mb-4 mx-auto" size={30} />,
  },
];

const certPills = [
  "60+ Hours of Equipment Training",
  "Certified: Stand Up, Sit Down, Reach Truck, Electric Pallet Jack",
];

export default function Education() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section
      id="education"
      className="w-full border-y-4 border-lime-500 bg-neutral-900 py-20 px-6 sm:px-10 md:px-20 text-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-semibold relative inline-block before:absolute before:inset-0 before:rounded before:blur-md before:bg-lime-500 before:opacity-40 before:scale-105 before:-z-10">
            <span className="bg-gradient-to-r from-lime-300 to-lime-600 text-transparent bg-clip-text">
              Certified & Prepared
            </span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            All certifications shown below are verified and current, reflecting hands-on training,
            safety compliance, and job-readiness for industrial environments.
          </p>
        </div>

        <div className="w-full overflow-x-auto flex gap-4 pb-4 snap-x snap-mandatory scroll-smooth min-h-[450px]">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="snap-center flex-shrink-0 w-64 md:w-72 rounded-none p-4 text-center shadow-md bg-black flex flex-col justify-between"
            >
              <div className="flex flex-col items-center mb-3">{item.icon}</div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.institution}</p>
                  <p className="text-sm text-gray-400">{item.location}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.dates}</p>
                  <p className="text-xs text-gray-400 mt-2">{item.description}</p>
                </div>

                {item.certImage && (
                  <button
                    onClick={() => setModalImage(item.certImage)}
                    className="mt-4 inline-block text-sm text-white bg-lime-600 px-3 py-1.5 rounded hover:bg-lime-700 transition"
                  >
                    View Certificate
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <h4 className="text-lg font-semibold text-gray-200 mb-4">
            Additional Certifications
          </h4>
          <ul className="flex flex-wrap justify-center gap-3 text-sm text-gray-100">
            {certPills.map((cert, i) => (
              <li
                key={i}
                className="bg-lime-100 text-lime-800 px-4 py-2 rounded-full font-medium whitespace-nowrap"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

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
