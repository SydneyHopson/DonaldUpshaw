"use client";

import { motion } from "framer-motion";
import { MessageCircle, UserCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "Isaiah brought calm and confidence to our Decatur warehouse floor. He trained alongside newer staff but quickly stood out as a go-to for safety checks, equipment setup, and keeping lanes clear during rush periods.",
    name: "K. Johnson",
    role: "Shift Supervisor, Goodwill of North Georgia",
  },
  {
    quote:
      "I worked with Isaiah on landscape maintenance jobs across multiple client sites. Rain or heat, he showed up, communicated clearly, and knew how to operate heavy tools safely. Solid guy who’s always locked in.",
    name: "M. Lewis",
    role: "Lead Groundskeeper, CityWorks Maintenance Team",
  },
  {
    quote:
      "When we were short on operators during peak, Isaiah hopped on multiple machines—stand-up, pallet jack, you name it. Never once had an incident. Reliable and focused. That’s rare.",
    name: "L. Ramirez",
    role: "Warehouse Manager, Stone Supply Chain Solutions",
  },
];

const references = [
  {
    name: "Jacob Powers",
    title: "Supervisor & Program Contact",
    company: "Goodwill Workforce Development",
  },
  {
    name: "Dennis Watson",
    title: "Forklift Instructor / Owner",
    company: "B & W Forklift Training Center",
  },
];

export default function Endorsements() {
  return (
    <section
      id="testimonials"
      className="w-full bg-black py-20 px-6 sm:px-10 md:px-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="relative inline-block text-4xl sm:text-5xl font-extrabold mb-14 before:absolute before:inset-0 before:rounded before:blur-md before:bg-lime-500 before:opacity-50 before:scale-105 before:-z-10">
          <span className="bg-gradient-to-r from-lime-300 to-lime-600 text-transparent bg-clip-text">
            Endorsements & References
          </span>
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
              className="bg-black rounded-xl p-6 shadow-lg hover:shadow-lime-400/40 transition border border-lime-600"
            >
              <MessageCircle className="text-lime-400 mb-3" size={24} />
              <p className="text-gray-200 text-base mb-4 italic leading-relaxed">“{item.quote}”</p>
              <p className="font-semibold text-lime-300">{item.name}</p>
              <p className="text-sm text-gray-400">{item.role}</p>
            </motion.div>
          ))}
        </div>

        {/* References */}
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-lime-300 mb-6 drop-shadow">
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
                className="bg-black rounded-xl p-5 text-center shadow hover:shadow-lime-300/30 transition border border-lime-700"
              >
                <UserCheck className="text-lime-400 mb-2 mx-auto" size={22} />
                <p className="font-semibold text-lime-300">{ref.name}</p>
                <p className="text-sm text-gray-300">{ref.title}</p>
                <p className="text-sm text-gray-400">{ref.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
