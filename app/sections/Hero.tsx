"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videoSources = [
  "/video/forklift-1.mp4",
  "/video/forklift-2.mp4",
  "/video/forklift-3.mp4",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videoSources.length);
    }, 15000); // Switch video every 15 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background video crossfade */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videoSources[current]}
          src={videoSources[current]}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Foreground content with glassy blue effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl px-6 sm:px-8 py-8 sm:py-10 rounded-xl bg-blue-600/50 backdrop-blur-sm shadow-lg"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Sydney L. Hopson Jr.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
          Forklift Operator & Shipping Clerk
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
          Stone Mountain, GA • 770-294-1987 • SydneyHopsonJr@outlook.com
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed">
          Certified in Stand Up, Sit Down, Reach Truck, and Electric Pallet Jack operation.
          OSHA 10 and First Aid trained. Proven leader in serialized inventory, team safety,
          and high-precision logistics using advanced warehouse systems.
        </p>
      </motion.div>
    </section>
  );
}
