import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Projects from "./components/Projects";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <Projects />
   
      <About />
      <Contact />
      <WhatsApp />
      <Footer />
   
      
    </div>
  );
}