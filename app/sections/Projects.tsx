"use client";

import { motion } from "framer-motion";
import { PinContainer } from "@/app/components/ui/3d-pin";
import Image from "next/image";

const projects = [
  {
    title: "SOPEC Public Site",
    url: "https://tinyurl.com/SopecEnergy",
    image: "/images/sopec-public.png",
    desc: "Public-facing site for Southeast Ohio Public Energy Council, with high-contrast accessibility and animated homepage.",
  },
  {
    title: "SOPEC Admin Dashboard",
    url: "https://tinyurl.com/SopecAdmin",
    image: "/images/sopec-admin.png",
    desc: "Internal dashboard with Sanity CMS and Clerk for managing forms, teams, and multilingual content.",
  },
  {
    title: "Wood County EDC – Premium V2",
    url: "https://tinyurl.com/wcedc-demo-v2",
    image: "/images/wood-v2.png",
    desc: "High-end civic redesign with dynamic content, seal overlays, and CMS for public programs.",
  },
  {
    title: "Wood County EDC – Basic V1",
    url: "https://wcedc-frontend-demo-v1.vercel.app/",
    image: "/images/wood-v1.png",
    desc: "Simple economic dev demo with key content blocks, mobile-ready nav, and clean branding.",
  },
  {
    title: "Health District of Northern Larimer",
    url: "https://tinyurl.com/hdnlc-demo1",
    image: "/images/hdnlc.png",
    desc: "Health platform with form systems, Sanity CMS backend, and accessibility overlays.",
  },
  {
    title: "Fayette County Government Portal",
    url: "https://tinyurl.com/FayetteCountyGov",
    image: "/images/fayette.png",
    desc: "Mobile-first redesign with clean search UX, department index, and WCAG-friendly layout.",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-white text-gray-900 py-36 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of civic, healthcare, and public-sector platforms built with precision and scalability.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-48">

          {projects.map(({ title, url, image, desc }) => (
            <div key={title} className="w-full flex justify-center">
              <PinContainer title={title} href={url}>
              <div className="w-80 flex flex-col items-center justify-start text-gray-800 pb-10 shadow-lg bg-white/5 rounded-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:ring-1 hover:ring-emerald-400/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-emerald-500/5">


                  {/* Title */}
                  <h3 className="text-md font-semibold text-center text-white bg-black/80 rounded px-3 py-1 mb-3">
                    {title}
                  </h3>

                  {/* Screenshot */}
                  <Image
                    src={image}
                    alt={title}
                    width={320}
                    height={180}
                    className="rounded-md shadow-md object-cover mb-4"
                  />

                  {/* Description */}
                  <p className="text-sm text-gray-500 text-center leading-relaxed px-2">
                    {desc}
                  </p>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
