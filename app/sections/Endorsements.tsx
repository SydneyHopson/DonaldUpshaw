"use client";

import { motion } from "framer-motion";
import { MessageCircle, UserCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Sydney played a critical role on a DECOM project where we had to recover and relabel over 32,000 serialized tech assets. Not only did he physically locate and scan items across the warehouse floor, he also collaborated with our tech team to build a custom database that tracked missing and outbound units. It was intense, and he never backed down.",
    name: "K Parks",
    role: "Supervisor, GXO Logistics",
  },
  {
    quote:
      "I watched Sydney knock out a massive cycle count on short notice hundreds of pallets in one shift. Not only was he accurate, but he flagged mislabels and corrected zones in the system in real-time. His speed and detail orientation are unmatched.",
    name: "L. Baker",
    role: "DECOM Systems Coordinator",
  },
  {
    quote:
      "Sydney is that rare mix of calm under pressure and hustle when it counts. He kept our pick line moving and always had the zones clean and stocked for the next shift.",
    name: "M. Hart",
    role: "Receiving Manager, Central Garden & Pet",
  },
  {
    quote:
      "He made onboarding smooth for new hires and helped boost efficiency by suggesting improvements to our pallet flow setup. He leads by example and keeps things moving.",
    name: "S. Grant",
    role: "Floor Supervisor, GXO Logistics",
  },
  {
    quote:
      "Sydney isn’t just a forklift operator he’s a problem solver. When our label printer went down, he hand-tagged and organized an entire outbound section without delay.",
    name: "D. Simmons",
    role: "Operations Coordinator",
  },
  {
    quote:
      "During peak season, Sydney floated between departments without missing a beat. He kept RF scanners synced, organized staging zones, and handled double loads like a pro.",
    name: "D. Vaughn",
    role: "Logistics Manager",
  },
];

const references = [
  {
    name: "Kenya Parks",
    title: "Supervisor",
    company: "GXO Logistics",
  },
  {
    name: "Tiffany Farr",
    title: "Supervisor",
    company: "Emory Hospital (Legacy)",
  },
  {
    name: "Jacob Powers",
    title: "Advisor",
    company: "Goodwill Training Center",
  },
  {
    name: "Darrel Simmons",
    title: "Lead",
    company: "Central Garden & Pet",
  },
];

export default function Endorsements() {
  return (
    <section
      id="testimonials"
      className="w-full bg-white py-20 px-6 sm:px-10 md:px-20 text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-14">
          Endorsements & References
        </h2>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <MessageCircle className="text-blue-600 mb-3" size={24} />
              <p className="text-gray-800 text-base mb-4 italic leading-relaxed">“{item.quote}”</p>
              <p className="font-semibold text-blue-700">{item.name}</p>
              <p className="text-sm text-gray-500">{item.role}</p>
            </motion.div>
          ))}
        </div>

        {/* References */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-blue-700 mb-6">
            Professional References Available Upon Request
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {references.map((ref, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-100 rounded-xl p-5 text-center shadow hover:shadow-md transition"
              >
                <UserCheck className="text-blue-600 mb-2 mx-auto" size={22} />
                <p className="font-semibold text-blue-800">{ref.name}</p>
                <p className="text-sm text-gray-600">{ref.title}</p>
                <p className="text-sm text-gray-500">{ref.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
