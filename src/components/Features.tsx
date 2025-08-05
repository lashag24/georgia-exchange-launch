import fastSetupIcon from "@/assets/fast-setup-icon.jpg";
import securityIcon from "@/assets/security-icon.jpg";
import profitIcon from "@/assets/profit-icon.jpg";

const features = [
  {
    icon: fastSetupIcon,
    title: "ელვისებრ სწრაფი დაყენება",
    description: "გაუშვით თქვენი ონლაინ გაცვლითი პლატფორმა მხოლოდ 3 დღეში. ჩვენი თეთრი ეტიკეტის გადაწყვეტა მინიმალურ ტექნიკურ ცოდნას საჭიროებს.",
    stats: "3 დღე დაყენება"
  },
  {
    icon: securityIcon,
    title: "ბანკური ხარისხის უსაფრთხოება",
    description: "გაძლიერებული დაშიფვრა, თაღლითობის აღმოჩენა და ქართული ფინანსური რეგულაციების დაცვა. თქვენი მომხმარებლების თანხები ყოველთვის დაცულია.",
    stats: "99.9% უსაფრთხოება"
  },
  {
    icon: profitIcon,
    title: "მაქსიმალიზირებული მოგება",
    description: "მოქნილი მარჟის კონტროლი, რეალურ დროში კურსების მართვა და ავტომატური საკომისიო შეგროვება. ყოველი ტრანზაქცია იქცევა შემოსავლად.",
    stats: "მაღალი ROI"
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            ყველაფერი, რაც გჭირდებათ
            <span className="block text-primary">ონლაინ წარმატებისთვის</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ჩვენი ყოვლისმომცველი თეთრი ეტიკეტის გადაწყვეტა უზრუნველყოფს ყველა იმ ხელსაწყოს, რაც ქართულ საცვლელ ბიზნესებს ეჭირვებათ ციფრული ეკონომიკის წარმატებისთვის.
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
                სპეციალიზირებული ქართული ბაზრისთვის
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  ლარი-დოლარის გაცვლა რეალურ დროში კურსებით
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  ლარი-ევროს გაცვლის ოპტიმიზაცია
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  ქართული ბანკების ინტეგრაცია
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  ადგილობრივი რეგულაციების დაცვა
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">წარმატებული იმპლემენტაცია</div>
              <div className="text-2xl font-bold text-secondary mt-4 mb-2">₾2M+</div>
              <div className="text-muted-foreground">ყოველთვიური მოცულობა</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}