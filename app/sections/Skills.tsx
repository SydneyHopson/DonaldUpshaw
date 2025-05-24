"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skillSections = {
  "✅ Equipment & Operations": {
    description:
      "Certified and experienced in safely operating major lift types with precision in high-volume environments.",
    items: [
      "Certified: Stand Up, Sit Down, Reach Truck, Electric Pallet Jack",
      "Operated forklifts in narrow aisles with zero safety incidents",
      "Loaded and unloaded trailers with balanced weight distribution",
      "Moved sensitive, high-value inventory with care and precision",
      "Completed over 60 hours of hands-on equipment training",
      "Passed practical driving tests for all major warehouse lifts",
    ],
  },
  "🧠 Software & Systems": {
    description:
      "Proficient in logistics and warehouse software systems for inventory control, voice picking, and digital tracking.",
    items: [
      "Fluent in GWMS, WMS, SAP, and Vocellect voice-pick systems",
      "Used RF scanners to manage serialized product inventory",
      "Logged and labeled all shipments digitally with 100% accuracy",
      "Processed BOLs, packing slips, and digital shipping docs",
      "Experienced with Microsoft Excel, Outlook, and data entry systems",
      "Comfortable with inventory systems and digital workflow platforms",
    ],
  },
  "🛡️ Safety & Compliance": {
    description:
      "Trained and certified in OSHA safety, CPR, and First Aid, with a track record of zero incidents.",
    items: [
      "OSHA 10 Certified (2024)",
      "CPR & First Aid Certified (2025)",
      "Performed daily forklift safety checks and zone inspections",
      "Maintained OSHA-compliant warehouse zones at all times",
      "Trained in emergency response and clean zone enforcement",
      "Supported safe handling protocols for tech and fragile goods",
    ],
  },
  "🤝 Teamwork & Soft Skills": {
    description:
      "Reliable, adaptable, and team-focused with strong communication and leadership on the warehouse floor.",
    items: [
      "Cross-trained team members on warehouse protocols",
      "Recognized for reliability and accuracy under pressure",
      "Adapted quickly to seasonal spikes and high-volume workflows",
      "Communicated clearly with leads, drivers, and teammates",
      "Maintained professionalism and calm in fast-paced environments",
      "Motivated and team-first in high-stakes shift work",
    ],
  },
  "🧹 Warehouse Upkeep & Utility": {
    description:
      "Hands-on with all aspects of warehouse maintenance, equipment cleaning, and zone organization.",
    items: [
      "Operated ride-on floor cleaner and industrial sweeper",
      "Mopped, swept, and organized aisles between shifts",
      "Managed trash compactors and cardboard balers",
      "Kept work zones stocked, clear, and ready for next shift",
      "Followed warehouse hygiene and food safety protocols",
      "Assisted in stock rotation, labeling, and zone staging",
    ],
  },
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-white py-16 px-6 sm:px-10 md:px-20 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-blue-700">
          Skills & Accomplishments
        </h2>

        {Object.entries(skillSections).map(([section, data]) => (
          <div key={section} className="mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-center text-blue-700 mb-2">
              {section}
            </h3>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto px-4">
              {data.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {data.items.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group flex items-start space-x-3 bg-gray-100 rounded-lg p-4 transition duration-300 shadow-sm hover:shadow-xl hover:bg-blue-50 hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-blue-600 group-hover:text-blue-800 mt-1 shrink-0 transition-colors duration-300" size={20} />
                  <p className="text-base font-medium group-hover:text-blue-800 transition-colors duration-300">
                    {skill}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
