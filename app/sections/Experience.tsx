"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Shipping Clerk / Forklift Operator",
    company: "GXO Logistics",
    location: "Lithia Springs, GA",
    dates: "June 2022 – February 2024",
    responsibilities: [
      "Promoted for leadership and reliability in high-volume DECOM operations.",
      "Operated reach trucks and stand-up forklifts to manage serialized tech inventory.",
      "Processed shipping documents and outbound prep with zero error rate.",
      "Maintained OSHA-compliant zones and cross-trained team members.",
    ],
    skillsUsed: [
      "GWMS", "SAP", "BOL processing", "Inventory accuracy (100%)",
      "Reverse logistics", "Forklift safety protocols",
    ],
  },
  {
    title: "Receiving Clerk / Order Picker",
    company: "Central Garden & Pet",
    location: "Atlanta, GA",
    dates: "March 2024 – February 2025",
    responsibilities: [
      "Operated sit-down forklifts, reach trucks, and pallet jacks in tight spaces.",
      "Used RF scanners and Vocallect with 98%+ order picking accuracy.",
      "Performed cycle counts and managed zone organization during peak seasons.",
      "Prepped outbound shipments and verified incoming stock for accuracy.",
    ],
    skillsUsed: [
      "Vocallect system", "RF scanners", "Cycle counts", "Order staging",
      "Zone clarity protocols",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-gray-50 py-20 px-6 sm:px-10 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-14">
          Work Experience
        </h2>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 md:p-10 border border-blue-100 flex flex-col items-center text-center"
            >
              <Briefcase className="text-blue-600 mb-4" size={28} />
              <h3 className="text-2xl font-bold text-blue-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                {job.company}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-500 mt-1 mb-6">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays size={16} />
                  {job.dates}
                </span>
              </div>

              <div className="mb-5 max-w-xl">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="max-w-xl">
                <h4 className="text-lg font-semibold text-gray-700 mb-2">
                  Tools & Skills Used:
                </h4>
                <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-600">
                  {job.skillsUsed.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium whitespace-nowrap"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
