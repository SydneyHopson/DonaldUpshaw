"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "../components/ui/Modal";
import Image from "next/image";
import {
  GraduationCap,
  Laptop,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

// Modal types
type ModalKey = "degree" | "bloom" | null;

interface EducationItem {
  title: string;
  subtitle: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  action?: ModalKey;
  link?: string;
}

export default function Education() {
  const [showModal, setShowModal] = useState<ModalKey>(null);

  useEffect(() => {
    if (showModal === "bloom") {
      const script = document.createElement("script");
      script.src = "//cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showModal]);

  const items: EducationItem[] = [
    {
      title: "Full Sail University",
      subtitle: "B.S. – Production & Computer Science",
      date: "2015 – 2018",
      icon: GraduationCap,
      action: "degree",
    },
    {
      title: "BloomTech University",
      subtitle: "Web & Software Developer Certificate",
      date: "2023",
      icon: Laptop,
      action: "bloom",
    },
    {
      title: "ITT Tech (Legacy)",
      subtitle: "Certificate listed on record. Physical copy unavailable.",
      date: "Archived",
      icon: ShieldCheck,
    },
    {
      title: "Skillsoft Certifications",
      subtitle: "30+ micro-certifications in JS, APIs, QA, and DevOps.",
      date: "2023",
      icon: BookOpen,
      link: "https://skillsoft.digitalbadges.skillsoft.com/profile/sydneyhopson389842/wallet",
    },
    {
      title: "Ongoing Oracle Study",
      subtitle: "Self-guided cloud infra + CI/CD mastery.",
      date: "Present",
      icon: BookOpen,
    },
  ];

  return (
    <section className="w-full bg-white text-black py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight text-black">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {items.map(({ title, subtitle, date, icon: Icon, action, link }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-black text-white rounded-2xl p-6 h-[300px] shadow-xl hover:shadow-[0_0_40px_rgba(0,255,180,0.3)] border border-white/10 transition-all duration-300 flex flex-col justify-between"

            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white/10 rounded-full transition-all group-hover:shadow-md group-hover:bg-emerald-600/30">
                    <Icon className="w-7 h-7 text-white group-hover:text-emerald-300 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-tight">
                      {title}
                    </h3>
                    <span className="text-xs text-gray-400 italic">{date}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-snug">{subtitle}</p>
              </div>

              {action && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setShowModal(action)}
                    className="text-xs bg-white/10 hover:bg-emerald-500/20 text-white px-4 py-1.5 rounded-full transition"
                  >
                    {action === "degree" ? "View Degree" : "View Certificate"}
                  </button>
                </div>
              )}

              {!action && link && (
                <div className="flex justify-center mt-4">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-white/10 hover:bg-emerald-500/20 text-white px-4 py-1.5 rounded-full transition text-center"
                  >
                    View Credentials
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-500 mt-10 italic">
          Additional certifications and legacy records available upon request.
        </p>
      </div>

      {/* Full Sail Degree Modal */}
      <Modal isOpen={showModal === "degree"} onClose={() => setShowModal(null)}>
        <div className="w-full flex justify-center">
          <Image
            src="/images/full-sail-diploma-rotated.png"
            alt="Full Sail Degree"
            width={1000}
            height={600}
            className="rounded-lg object-contain w-full h-auto"
          />
        </div>
      </Modal>

      {/* BloomTech Credly Embed */}
      <Modal isOpen={showModal === "bloom"} onClose={() => setShowModal(null)}>
        <div className="w-full flex justify-center">
          <div
            className="credly-badge"
            dangerouslySetInnerHTML={{
              __html: `
                <div data-iframe-width="350" data-iframe-height="300" data-share-badge-id="03580790-6f71-484d-ae76-bd93a9ef3151" data-share-badge-host="https://www.credly.com"></div>
                <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
              `,
            }}
          />
        </div>
      </Modal>
    </section>
  );
}
