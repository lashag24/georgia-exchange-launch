export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">ExchangeGeorgia</span>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              The leading whitelabel currency exchange solution for Georgian businesses. 
              Transform your physical exchange into a thriving online platform.
            </p>
            <div className="text-background/60">
              <div>📧 info@exchangegeorgia.com</div>
              <div>📞 +995 XXX XXX XXX</div>
              <div>📍 Tbilisi, Georgia</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-background/80">
              <li>Whitelabel Platform</li>
              <li>GEL-USD Exchange</li>
              <li>GEL-EUR Exchange</li>
              <li>Mobile App</li>
              <li>API Integration</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-background/80">
              <li>About Us</li>
              <li>Security</li>
              <li>Compliance</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60">
              © 2024 ExchangeGeorgia. All rights reserved.
            </div>
            <div className="flex gap-6 text-background/60">
              <a href="#" className="hover:text-background transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-background transition-smooth">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}