import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

const Index = () => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onLeadFormOpen={() => setIsLeadFormOpen(true)} />
      <Hero onLeadFormOpen={() => setIsLeadFormOpen(true)} />
      <Features />
      <Benefits onLeadFormOpen={() => setIsLeadFormOpen(true)} />
      <Footer />
      <LeadForm 
        isOpen={isLeadFormOpen} 
        onClose={() => setIsLeadFormOpen(false)} 
      />
    </div>
  );
};

export default Index;
