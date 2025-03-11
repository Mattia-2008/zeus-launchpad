
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Set page title
    document.title = "Zeus Energy | Efficienza Energetica Intelligente";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background wrapper */}
      <div className="zeus-backdrop" aria-hidden="true"></div>
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main content sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Team />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
