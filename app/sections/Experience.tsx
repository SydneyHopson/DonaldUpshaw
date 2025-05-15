"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Server,
  Globe,
  Laptop,
  GraduationCap,
} from "lucide-react"; // using ShadCN/Lucide icons

const experiences = [
  {
    title: "GXO Logistics (Google Client) – IT Systems & Operations",
    description:
      "Supported logistics infrastructure and hardware for a Google-operated warehouse. Oversaw server rack installs, asset scanning systems, networking setups, and emergency technical response. Worked closely with corporate Google IT standards.",
    icon: Server,
    date: "2022 – 2024",
  },
  {
    title: "Reign Mobile LLC – Founder & Lead Developer",
    description:
      "Led development of government and civic platforms using modern tech stacks. Oversaw full product lifecycles, implemented APIs, and deployed scalable platforms used by thousands. Focused on secure authentication, CMS workflows, and real-time dashboards.",
    icon: Globe,
    date: "Present • Active",
  },
  {
    title: "Freelance Developer – Government & Real Estate",
    description:
      "Built ADA-compliant websites for municipalities, energy agencies, and real estate firms. Integrated WordPress, Sanity CMS, and CRM systems for non-technical clients. Delivered branded, accessible, and SEO-optimized builds with rapid turnaround.",
    icon: Laptop,
    date: "Present • Active",
  },
  {
    title: "ITT Tech – Software Intern (R&D)",
    description:
      "Contributed to R&D lab tooling and code refactoring at ITT Tech during early career. Supported classroom apps, file-sharing utilities, and assisted instructors with tech support and student system builds.",
    icon: GraduationCap,
    date: "Early Career",
  },
  {
    title: "Full-Stack Intern – Self-Led Projects & E-Commerce Builds",
    description:
      "Engineered e-commerce and client dashboard platforms from scratch. Used Clerk for auth, Zustand for state, and Stripe for checkout. Emphasized modular architecture, performance tuning, and pixel-perfect frontend delivery.",
    icon: Briefcase,
    date: "Present • Active",
  },
];

export default function Experience() {
  return (
    <section className="w-full bg-black text-white py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">
          Experience
        </h2>

        <div className="space-y-20">
          {experiences.map(({ title, description, icon: Icon, date }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-lg transition duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:ring-1 hover:ring-white/20 hover:scale-[1.015]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/10 rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <span className="text-xs text-gray-400 italic">{date}</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
