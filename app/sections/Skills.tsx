"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  ShieldCheck,
  Wrench,
  Truck,
  Users,
  ClipboardList,
} from "lucide-react";

const skillSections = {
  "Equipment Operation & Safety": {
    icon: Truck,
    description:
      "Certified in forklift operation and OSHA safety protocols with recent hands-on training through Goodwill of North Georgia.",
    items: [
      { icon: Truck, text: "Certified: Sit Down, Stand Up, Reach Truck, Electric Pallet Jack" },
      { icon: ShieldCheck, text: "OSHA 10 Certified" },
      { icon: HeartPulse, text: "First Aid & CPR Certified (2025)" },
      { icon: Truck, text: "Loaded and unloaded trailers using forklifts" },
      { icon: ClipboardList, text: "Performed daily equipment safety inspections" }
    ],
  },
  "Machine Operation & Food Production": {
    icon: Wrench,
    description:
      "Operated industrial tortilla machinery and managed food production lines at La Chiquita Tortilla in Atlanta.",
    items: [
      { icon: Wrench, text: "Operated machines for shaping and cooking tortillas" },
      { icon: Wrench, text: "Mixed flour and ingredients to produce dough" },
      { icon: Wrench, text: "Maintained packaging lines for speed and accuracy" },
      { icon: ClipboardList, text: "Monitored corn cooking tanks during full shift operations" }
    ],
  },
  "Sanitation & Equipment Cleaning": {
    icon: ClipboardList,
    description:
      "Performed thorough sanitation of food processing equipment and used forklifts to relocate cleaned machinery.",
    items: [
      { icon: ClipboardList, text: "Cleaned mixers, pipes, and prep areas in food plant" },
      { icon: Truck, text: "Used forklifts to move heavy cleaned equipment" },
      { icon: Wrench, text: "Sanitized cooking trays and utensils regularly" }
    ],
  },
  "Shift Management & Customer Service": {
    icon: Users,
    description:
      "Led overnight shifts and supported team members during busy service hours at McDonald’s in Douglasville.",
    items: [
      { icon: Users, text: "Managed second and overnight shifts" },
      { icon: ClipboardList, text: "Prepared meals with team during high-volume hours" },
      { icon: Users, text: "Maintained positive customer interactions" },
      { icon: ClipboardList, text: "Promoted teamwork and workplace communication" }
    ],
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-neutral-900 py-20 px-6 sm:px-10 md:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="relative inline-block text-5xl sm:text-6xl font-extrabold mb-16 text-white before:absolute before:inset-0 before:rounded before:blur-md before:bg-lime-500 before:opacity-40 before:scale-105 before:-z-10">
          <span className="bg-gradient-to-r from-lime-500 to-lime-700 text-transparent bg-clip-text">
            Skills & Experience
          </span>
        </h2>

        <div className="space-y-24">
          {Object.entries(skillSections).map(([section, data], index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="flex flex-col items-center mb-6 max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="text-lime-600" size={28} />
                    <h3 className="text-2xl font-semibold text-white">
                      {section}
                    </h3>
                  </div>
                  <p className="relative inline-block text-sm md:text-base px-4 py-2 rounded-xl bg-white/10 backdrop-blur drop-shadow-[0_0_8px_rgba(132,204,22,0.4)]">
                    <span className="relative z-10 text-gray-100">
                      {data.description}
                    </span>
                  </p>
                </div>

                <ul className="space-y-4 max-w-3xl">
                  {data.items.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.li
                        key={idx}
                        className="flex items-start justify-center gap-3 text-gray-200 text-sm md:text-base"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <ItemIcon className="text-lime-500 mt-1" size={18} />
                        <span>{item.text}</span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
