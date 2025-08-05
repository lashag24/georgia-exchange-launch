import businessProfessional from "@/assets/business-professional.jpg";
import { Button } from "@/components/ui/button";

interface BenefitsProps {
  onLeadFormOpen: () => void;
}

export default function Benefits({ onLeadFormOpen }: BenefitsProps) {
  const benefits = [
    {
      title: "Increase Revenue by 300%",
      description: "Expand your customer base beyond physical location limitations. Serve customers 24/7 across Georgia."
    },
    {
      title: "Reduce Operating Costs",
      description: "Automate exchange processes, reduce staff requirements, and eliminate physical infrastructure costs."
    },
    {
      title: "Real-Time Rate Management",
      description: "Update exchange rates instantly, set custom markups, and maximize profit margins on every transaction."
    },
    {
      title: "Compliance & Reporting",
      description: "Automated regulatory reporting, transaction monitoring, and compliance with Georgian financial laws."
    },
    {
      title: "Mobile-First Experience",
      description: "Your customers can exchange currencies from anywhere using their smartphones or computers."
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated Georgian support team to help you grow your business and resolve any technical issues."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Transform Your Business
              <span className="block text-primary">In Days, Not Years</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join the digital economy and compete with international exchanges. 
              Our Georgian-focused platform helps traditional exchange businesses 
              thrive in the online marketplace.
            </p>
            <Button 
              size="lg" 
              onClick={onLeadFormOpen}
              className="bg-gradient-primary hover:shadow-button transition-smooth"
            >
              Start Your Transformation
            </Button>
          </div>
          <div className="relative">
            <img 
              src={businessProfessional} 
              alt="Business Professional" 
              className="w-full h-auto rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-card border border-border">
              <div className="text-2xl font-bold text-success">+300%</div>
              <div className="text-sm text-muted-foreground">Revenue Growth</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/20 transition-smooth group"
            >
              <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-smooth">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Go Digital?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't let competitors get ahead. Start your online currency exchange platform today 
            and capture the growing Georgian digital market.
          </p>
          <Button 
            size="lg" 
            onClick={onLeadFormOpen}
            className="bg-white text-primary hover:bg-white/90 shadow-button transition-smooth"
          >
            Get Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}