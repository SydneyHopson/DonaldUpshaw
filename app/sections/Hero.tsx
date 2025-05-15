export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#fdfaf7] via-white to-slate-100 py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Full Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
          Sydney L. Hopson Jr.
        </h1>

        {/* Professional Summary */}
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto">
          Full-Stack Developer & Systems Architect specializing in scalable platforms for public sector, healthcare, and community organizations.
        </p>

        {/* Technical & Strategic Summary */}
        <p className="text-base text-gray-600 italic mb-8 max-w-xl mx-auto">
          I develop secure, accessible, and high-performance web systems using Next.js, WordPress (custom + headless), Sanity, Stripe, and Oracle. Skilled in designing end-to-end CI/CD pipelines, API integrations, and infrastructure solutions that meet the demands of civic, enterprise, and government platforms.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="mailto:SydneyHopsonJr@outlook.com"
            className="inline-block px-6 py-3 border border-black text-black text-sm font-medium rounded-md hover:bg-black hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
