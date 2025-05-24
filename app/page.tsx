import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Header from "./sections/Header";
import Endorsements from "./sections/Endorsements";
import Footer from "./sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Endorsements />
      <Contact />
      <Footer />
      
    </main>
  );
}
