"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, X } from "lucide-react";
import Image from "next/image";

type EducationItem = {
  title: string;
  institution: string;
  location: string;
  dates: string;
  certImage?: string;
  badgeType?: "credly";
  icon: ReactNode;
};

const education: EducationItem[] = [
  {
    title: "B.S. in Production & Computer Science",
    institution: "Full Sail University",
    location: "Online / Winter Park, FL",
    dates: "2015 – 2018",
    certImage: "/images/full-sail-diploma-rotated.png",
    icon: <GraduationCap className="text-blue-600 mb-3 mx-auto" size={32} />,
  },
  {
    title: "Web & Software Development Certificate",
    institution: "BloomTech (Lambda School)",
    location: "Remote",
    dates: "2023",
    badgeType: "credly",
    icon: <GraduationCap className="text-blue-600 mb-3 mx-auto" size={32} />,
  },
  {
    title: "Forklift Operations Training Program",
    institution: "Goodwill of North Georgia via B&W Fork Training Center",
    location: "Decatur, GA",
    dates: "May 2025 – Present",
    certImage: "/certs/forklift-training.webp",
    icon: <GraduationCap className="text-blue-600 mb-3 mx-auto" size={32} />,
  },
  {
    title: "OSHA 10 General Industry Training",
    institution: "Authorized Provider",
    location: "Decatur, GA",
    dates: "Completed 2024",
    certImage: "/certs/osha-cert.webp",
    icon: <ShieldCheck className="text-blue-600 mb-3 mx-auto" size={32} />,
  },
  {
    title: "CPR & First Aid Certification",
    institution: "Red Cross / Goodwill",
    location: "Decatur, GA",
    dates: "Valid through 2026",
    certImage: "/certs/cpr-cert.webp",
    icon: <ShieldCheck className="text-blue-600 mb-3 mx-auto" size={32} />,
  },
];

const certPills = [
  "60+ Hours of Equipment Training",
  "Certified: Stand Up, Sit Down, Reach Truck, Electric Pallet Jack",
];

export default function Education() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    if (modalImage === "bloom") {
      const script = document.createElement("script");
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.getElementById("credly-container")?.appendChild(script);
    }
  }, [modalImage]);

  return (
    <section id="education" className="w-full bg-white py-20 px-6 sm:px-10 md:px-20 text-gray-900 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-14">
          Education & Certifications
        </h2>

        <div className="overflow-x-auto flex gap-6 pb-4 snap-x snap-mandatory scroll-smooth">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="snap-center flex-shrink-0 bg-gray-100 w-80 md:w-[30rem] lg:w-[36rem] rounded-xl p-6 text-center shadow hover:shadow-lg transition-all"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.institution}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
              <p className="text-sm text-gray-500 mt-1">{item.dates}</p>

              <button
                onClick={() => setModalImage(item.badgeType === "credly" ? "bloom" : item.certImage ?? "")}
                className="mt-4 inline-block text-sm text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                View Certificate
              </button>
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
      {modalImage && modalImage !== "bloom" && (
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

      {/* BloomTech Credly Badge Modal */}
      {modalImage === "bloom" && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl overflow-hidden relative max-w-xl w-full p-6">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            <div className="w-full flex justify-center">
              <div id="credly-container">
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="03580790-6f71-484d-ae76-bd93a9ef3151" data-share-badge-host="https://www.credly.com"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
