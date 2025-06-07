"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Forklift Operator",
    company: "B&W Forklift",
    location: "Conyers, GA",
    dates: "May 2025 – Jun 2025",
    responsibilities: [
      "Operated forklifts for material movement and pallet organization.",
      "Adhered to safety procedures while loading and unloading materials."
    ],
    skillsUsed: [
      "Forklift Operation", "Pallet Loading", "Safety Compliance"
    ],
  },
  {
    title: "Machine Operator / Packer",
    company: "La Chiquita Tortilla",
    location: "Atlanta, GA",
    dates: "Dec 2021 – Sep 2023",
    responsibilities: [
      "Packed tortillas into shrink-wrapped pallets stacked 8–10 high.",
      "Mixed flour pallets and ingredients to create dough for production.",
      "Operated machines forming various tortilla shapes and sizes.",
      "Cooked corn in multiple industrial tanks throughout the shift."
    ],
    skillsUsed: [
      "Machine Operation", "Food Packaging", "Industrial Cooking", "Dough Mixing"
    ],
  },
  {
    title: "Sanitation Worker",
    company: "Dessert Intervention",
    location: "Atlanta, GA",
    dates: "Aug 2019 – Mar 2020",
    responsibilities: [
      "Sanitized mixing machines, piping systems, and baking trays.",
      "Used forklifts to relocate cleaned equipment as needed."
    ],
    skillsUsed: [
      "Equipment Sanitation", "Food Safety", "Forklift Handling"
    ],
  },
  {
    title: "Crew Member / Shift Manager",
    company: "McDonald's",
    location: "Douglasville, GA",
    dates: "Feb 2018 – Jul 2021",
    responsibilities: [
      "Led overnight shifts and ensured smooth kitchen operations.",
      "Maintained high standards of customer service and cleanliness."
    ],
    skillsUsed: [
      "Shift Management", "Customer Service", "Team Leadership"
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-black text-white min-h-screen py-24 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500 mb-16 text-center">
          Work Experience
        </h1>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/80 rounded-2xl border border-lime-400 hover:border-lime-300 transition-all p-8 md:p-10 flex flex-col items-center text-center shadow-lg"
            >
              <Briefcase className="text-lime-300 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white">
                {job.title}
              </h3>
              <p className="text-sm text-gray-300 font-medium">
                {job.company}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-400 mt-1 mb-6">
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
                <h4 className="text-lg font-semibold text-lime-100 mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="max-w-xl">
                <h4 className="text-lg font-semibold text-lime-100 mb-2">
                  Tools & Skills Used:
                </h4>
                <ul className="flex flex-wrap justify-center gap-2 text-sm text-lime-100">
                  {job.skillsUsed.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-lime-800/30 text-lime-200 px-3 py-1 rounded-full font-medium whitespace-nowrap border border-lime-400"
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
