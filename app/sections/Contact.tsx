"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Globe, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full bg-black text-white py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build What&apos;s Next?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Whether its a city website, an enterprise portal, or your next flagship product — let&apos;s collaborate and bring it to life with clean code, creative vision, and tech that performs.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto text-left">
          {[
            {
              icon: Mail,
              label: "Email",
              value: "SydneyHopsonJr@outlook.com",
              href: "mailto:SydneyHopsonJr@outlook.com",
            },
            {
              icon: Phone,
              label: "Phone",
              value: "770-294-1987",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "linkedin.com/in/sydneyhopson",
              href: "https://linkedin.com/in/sydneyhopson",
            },
            {
              icon: Globe,
              label: "Portfolio",
              value: "Reign Mobile Agency",
              href: "https://tinyurl.com/ReignMobileAgency",
            },
          ].map(({ icon: Icon, label, value, href }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className="bg-white/5 hover:bg-emerald-600/10 rounded-xl p-6 border border-white/10 transition-all group"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="w-6 h-6 text-emerald-400 group-hover:text-white transition" />
                <span className="text-sm uppercase tracking-wide text-gray-400 group-hover:text-white">
                  {label}
                </span>
              </div>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg font-semibold text-white hover:text-emerald-300 transition break-words"
                >
                  {value}
                </a>
              ) : (
                <p className="text-lg font-semibold text-white break-words">{value}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-24 text-2xl font-semibold italic text-emerald-400 tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          — Sydney L. Hopson Jr.
        </motion.p>
      </div>
    </section>
  );
}
