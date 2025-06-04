"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const jobs = [
  {
    title: "Beautification Crew Worker / Forklift Operator",
    company: "Dekalb County",
    location: "Dekalb County, GA",
    dates: "May 2023 – June 2024",
    responsibilities: [
      "Loaded and unloaded equipment at various job sites.",
      "Cut grass, cleaned sidewalks, and maintained public areas.",
      "Operated forklifts and performed general road maintenance.",
      "Supported setup and breakdown of events and activities.",
    ],
    skillsUsed: [
      "Forklift Operation", "Landscaping Equipment", "Event Setup", "Public Works Maintenance",
    ],
  },
  {
    title: "Pipe Fitter",
    company: "Private Contractor",
    location: "Covington, GA",
    dates: "February 2019 – June 2021",
    responsibilities: [
      "Read blueprints and interpreted pipe layout requirements.",
      "Tested pipes for leaks using specialized tools.",
      "Maintained and replaced worn pipe systems.",
      "Fabricated and welded piping sections with precision.",
    ],
    skillsUsed: [
      "Blueprint Reading", "Pipe Testing", "Welding & Brazing", "System Fabrication",
    ],
  },
  {
    title: "HVAC Helper / Forklift Operator",
    company: "Private Contractor",
    location: "East Point, GA",
    dates: "July 1999 – December 2018",
    responsibilities: [
      "Performed HVAC installation and maintenance over a 17-year period.",
      "Used forklifts for material stocking and warehouse duties.",
      "Installed ductwork, filters, and performed equipment cleaning.",
      "Managed on-site tools and kept work areas clean and organized.",
    ],
    skillsUsed: [
      "HVAC Systems", "Forklift Operation", "Ductwork Installation", "Warehouse Tools",
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
      
        <h1 className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-16 text-center">
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
              className="bg-black/80 rounded-2xl border border-cyan-500 hover:border-blue-400 transition-all p-8 md:p-10 flex flex-col items-center text-center shadow-lg"
            >
              <Briefcase className="text-cyan-300 mb-4" size={32} />
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
                <h4 className="text-lg font-semibold text-blue-100 mb-2">
                  Key Responsibilities:
                </h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="max-w-xl">
                <h4 className="text-lg font-semibold text-blue-100 mb-2">
                  Tools & Skills Used:
                </h4>
                <ul className="flex flex-wrap justify-center gap-2 text-sm text-cyan-100">
                  {job.skillsUsed.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-cyan-800/30 text-cyan-200 px-3 py-1 rounded-full font-medium whitespace-nowrap border border-cyan-400"
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
