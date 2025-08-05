import { Button } from "@/components/ui/button";

interface HeaderProps {
  onLeadFormOpen: () => void;
}

export default function Header({ onLeadFormOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">ExchangeGeorgia</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-smooth">
              Benefits
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
          </nav>
          
          <Button onClick={onLeadFormOpen} className="bg-gradient-primary hover:shadow-button transition-smooth">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}