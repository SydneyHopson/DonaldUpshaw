"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  HeartPulse,
  ShieldCheck,
  Wrench,
  Truck,
  Users,
  Warehouse,
  ClipboardList,
} from "lucide-react";

const skillSections = {
  "Equipment Operation & Safety": {
    icon: Truck,
    description:
      "Certified in multiple forklift types and trained in OSHA safety standards. Over 60 hours of hands-on training plus real-world experience.",
    items: [
      "Certified: Sit Down, Stand Up, Reach Truck, Electric Pallet Jack",
      "OSHA 10 Certified – Safety first in all operations",
      "First Aid & CPR Certified (2025)",
      "Operated forklifts for stocking and materials handling",
      "Loaded/unloaded trailers and job site equipment",
      "Performed daily equipment safety inspections",
    ],
    icons: [Truck, ShieldCheck, HeartPulse, ClipboardList, Truck, ShieldCheck],
  },
  "Tools & Technical Systems": {
    icon: Wrench,
    description:
      "Experienced with HVAC systems, pipefitting tools, and job site operations including landscaping and road maintenance.",
    items: [
      "17+ years of HVAC installation, repair, and maintenance",
      "Pipe fitting experience: cutting, testing, and welding systems",
      "Power tool operation: saws, welders, brazers, and torches",
      "Job site prep including bobcat usage, clearing and loading",
      "Handled job site equipment for county beautification projects",
      "Experience with warehouse tools, scanners, and lifts",
    ],
    icons: [Wrench, Wrench, Wrench, Wrench, Wrench, ClipboardList],
  },
  "Warehouse & Utility Work": {
    icon: Warehouse,
    description:
      "Hands-on experience in warehousing, order picking, general maintenance, and event setup tasks.",
    items: [
      "Worked as an order picker in shipping & receiving",
      "Loaded/unloaded trucks and organized warehouse inventory",
      "Assisted with cleaning sidewalks and public beautification",
      "Set up and broke down event materials and work zones",
      "Maintained tools, vehicles, and warehouse equipment",
      "Kept job sites clean and operational daily",
    ],
    icons: [ClipboardList, Truck, ClipboardList, ClipboardList, Wrench, ClipboardList],
  },
  "Communication & Soft Skills": {
    icon: Users,
    description:
      "Team player with strong communication, reliability, and flexibility across job types and shift needs.",
    items: [
      "Strong communicator with supervisors and team leads",
      "Able to follow instructions and complete jobs with minimal oversight",
      "Reliable and consistent across long-term projects",
      "Adaptable between warehouse, field, and maintenance tasks",
      "Collaborated in team environments for public works",
      "Committed to punctuality and workplace professionalism",
    ],
    icons: [Users, ClipboardList, ClipboardList, ClipboardList, Users, ClipboardList],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-white py-16 px-6 sm:px-10 md:px-20 text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-700 to-cyan-500 text-transparent bg-clip-text">
          Skills & Accomplishments
        </h2>

        {Object.entries(skillSections).map(([section, data]) => {
          const Icon = data.icon;
          return (
            <div key={section} className="mb-20">
              <div className="flex justify-center items-center gap-3 mb-4">
                <Icon className="text-blue-600" size={28} />
                <h3 className="text-2xl font-bold text-center text-gray-900">
                  {section}
                </h3>
              </div>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                {data.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.items.map((skill, index) => {
                  const IconInside = data.icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="group flex flex-col items-center justify-center bg-black text-white border border-blue-500 rounded-xl p-5 h-[200px] sm:h-[220px] shadow-md hover:shadow-lg hover:scale-[1.03] transition-all text-center ring-2 ring-blue-500"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <BadgeCheck className="text-blue-400 mb-2" size={22} />
                      <IconInside className="text-cyan-400 mb-3" size={38} />
                      <p className="text-sm font-medium leading-snug">
                        {skill}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
