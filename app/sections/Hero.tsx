"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { IconForklift } from "@tabler/icons-react";
import robot from "../../public/images/robot.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row pt-24 md:pt-32 pb-12 px-6 md:px-16 bg-black text-white">
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-start items-start">
        {/* Tagline */}
        <div className="flex items-center bg-gradient-to-r from-blue-700 to-cyan-500 rounded-md py-1 px-3 mb-4">
          <IconForklift className="w-5 h-5 text-cyan-200 animate-pulse" />
          <p className="ml-2 text-sm text-white">
            Certified Forklift Operator & General Labor Specialist
          </p>
        </div>

        {/* Name + Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-2 tracking-tight">
          Isaiah Harris
        </h1>
        <h2 className="text-5xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-6">
          Hands-On, All-In
        </h2>

        {/* Extended Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
          Seasoned professional with two decades of experience across warehouse operations, logistics, 
          and field labor. Proficient in forklift operation, heavy machinery, HVAC systems, and landscape 
          maintenance. OSHA 10 certified and recently trained through Goodwill of North Georgia’s safety program. 
          Known for reliability, precision, and leadership in fast-paced environments—from distribution centers 
          to industrial sites. Committed to excellence and ready to bring high-impact support to any team.
        </p>

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-cyan-300" />
            <span>689-325-1699</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-cyan-300" />
            <span>ZAYKINGQUAN107@gmail.com</span>
          </div>
          <p className="text-gray-400">Based in Lithonia, GA</p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative">
        <Image
          src={robot}
          alt="Warehouse illustration"
          width={500}
          height={500}
          className="w-full max-w-[400px] md:max-w-[500px] drop-shadow-[0_0_80px_rgba(0,212,255,0.2)]"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
