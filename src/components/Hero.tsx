import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-exchange.jpg";

interface HeroProps {
  onLeadFormOpen: () => void;
}

export default function Hero({ onLeadFormOpen }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Launch Your Online
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Currency Exchange
              </span>
              <span className="block text-2xl md:text-3xl font-medium text-white/90 mt-2">
                in Georgia
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
              Transform your physical exchange business into a thriving online platform. 
              Start offering GEL-USD and GEL-EUR exchanges to Georgian customers in just days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onLeadFormOpen}
                className="bg-white text-primary hover:bg-white/90 shadow-button transition-smooth text-lg px-8 py-6"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white transition-smooth text-lg px-8 py-6"
              >
                View Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-white/70">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3 Days</div>
                <div className="text-sm">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Currency Exchange Platform" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-12 h-12 bg-secondary/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-5 w-8 h-8 bg-white/5 rounded-full"></div>
    </section>
  );
}