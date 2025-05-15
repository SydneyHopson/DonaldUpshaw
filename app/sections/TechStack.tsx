"use client";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiSanity,
  SiStripe,
  SiPostgresql,
  SiVercel,
  SiPython,
  SiNodedotjs,
  SiSentry,
  SiWordpress,
  SiOracle,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { motion } from "framer-motion";

const tools = [
  { name: "React", icon: SiReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Sanity CMS", icon: SiSanity, color: "text-red-500" },
  { name: "Stripe", icon: SiStripe, color: "text-indigo-500" },
  { name: "Clerk Auth", icon: BsTools, color: "text-gray-500" },
  { name: "Zustand", icon: BsTools, color: "text-yellow-500" },
  { name: "ShadCN UI", icon: BsTools, color: "text-slate-600" },
  { name: "Framer Motion", icon: BsTools, color: "text-pink-500" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "Vercel", icon: SiVercel, color: "text-black" },
  { name: "Sentry", icon: SiSentry, color: "text-red-600" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-700" },
  { name: "Oracle", icon: SiOracle, color: "text-[#F80000]" },
  { name: "CI/CD (GitHub Actions)", icon: SiGithubactions, color: "text-gray-800" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
];

export default function TechStack() {
  return (
    <section className="max-w-6xl mx-auto pt-36 pb-24 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
          Tech Stack & Tools
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
        >
          A curated stack of frameworks, tools, and systems I use to build fast,
          accessible, and production-ready platforms.
        </motion.p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        }}
      >
        {tools.map(({ name, icon: Icon, color }) => (
          <motion.div
            key={name}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="flex items-center gap-3 px-4 py-3 bg-white text-gray-800 rounded-lg w-full max-w-xs shadow-sm hover:shadow-lg hover:bg-indigo-50 hover:ring-2 hover:ring-indigo-300 transition-all duration-300"
          >
            <Icon className={`w-5 h-5 shrink-0 ${color}`} />
            <span className="text-sm font-medium">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
