import fastSetupIcon from "@/assets/fast-setup-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import profitIcon from "@/assets/profit-icon.jpg";

const features = [
  {
    icon: fastSetupIcon,
    title: "Lightning Fast Setup",
    description: "Get your online exchange platform running in just 3 days. Our whitelabel solution requires minimal technical knowledge.",
    stats: "3 Days Setup"
  },
  {
    icon: securityIcon,
    title: "Bank-Grade Security",
    description: "Advanced encryption, fraud detection, and compliance with Georgian financial regulations. Your customers' funds are always protected.",
    stats: "99.9% Security"
  },
  {
    icon: profitIcon,
    title: "Maximize Profits",
    description: "Flexible markup controls, real-time rate management, and automated fee collection. Turn every transaction into revenue.",
    stats: "Higher ROI"
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <span className="block text-primary">Succeed Online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive whitelabel solution provides all the tools Georgian exchange businesses need to thrive in the digital economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-smooth border border-border group hover:border-primary/20"
            >
              <div className="mb-6">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-16 h-16 rounded-xl group-hover:scale-110 transition-bounce"
                />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <div className="text-primary font-semibold text-lg">
                {feature.stats}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 shadow-card border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Specialized for Georgian Market
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  GEL-USD exchange with real-time rates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  GEL-EUR exchange optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Georgian banking integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  Local regulatory compliance
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Successful Implementations</div>
              <div className="text-2xl font-bold text-secondary mt-4 mb-2">₾2M+</div>
              <div className="text-muted-foreground">Monthly Volume Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}