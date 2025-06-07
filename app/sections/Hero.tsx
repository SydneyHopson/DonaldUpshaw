"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { IconForklift } from "@tabler/icons-react";
import robot from "../../public/images/robot.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row pt-32 md:pt-48 pb-12 px-6 md:px-16 bg-black text-white">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-start items-start">
        {/* Tagline */}
        <div className="flex items-center bg-gradient-to-r from-lime-500 to-lime-400 rounded-md py-1 px-3 mb-4">
          <IconForklift className="w-5 h-5 text-black animate-pulse" />
          <p className="ml-2 text-sm text-black">
            Forklift Operator • Machine Operator • Packaging Specialist
          </p>
        </div>

        {/* Name + Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-2 tracking-tight">
          Donald Upshaw
        </h1>
        <h2 className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500 mb-6">
          Safe. Skilled. Reliable.
        </h2>

        {/* Extended Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Reliable and safety-focused forklift operator recently certified through Goodwill of North Georgia. Brings hands-on experience in material handling, machine operation, and shift leadership across food production and logistics environments. Known for efficiency, teamwork, and dedication to workplace safety.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-lime-400" />
            <span>404-387-6921</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-lime-400" />
            <span>donaldupshaw670@gmail.com</span>
          </div>
          <p className="text-gray-400">Based in Decatur, GA</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative">
        <Image
          src={robot}
          alt="Warehouse illustration"
          width={500}
          height={500}
          className="w-full max-w-[400px] md:max-w-[500px] drop-shadow-[0_0_80px_rgba(192,255,0,0.2)]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
