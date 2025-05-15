import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";



export default function HomePage() {
  return (
    <main className="...">
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      {/* etc */}
    </main>
  );
}
