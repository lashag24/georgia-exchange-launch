import businessProfessional from "@/assets/business-professional.jpg";
import { Button } from "@/components/ui/button";

interface BenefitsProps {
  onLeadFormOpen: () => void;
}

export default function Benefits({ onLeadFormOpen }: BenefitsProps) {
  const benefits = [
    {
      title: "გაზარდეთ შემოსავალი 300%-ით",
      description: "გააფართოვეთ მომხმარებელთა ბაზა ფიზიკური ლოკაციის შეზღუდვების გარეშე. მომსახურეთ მომხმარებლები 24/7 მთელ საქართველოში."
    },
    {
      title: "შეამცირეთ ოპერაციული ხარჯები",
      description: "ავტომატიზირებული გაცვლითი პროცესები, შემცირებული პერსონალი და ფიზიკური ინფრასტრუქტურის ხარჯების გამორიცხვა."
    },
    {
      title: "რეალურ დროში კურსების მართვა",
      description: "მყისიერად განაახლეთ სავალუტო კურსები, დააყენეთ ინდივიდუალური მარჟა და მაქსიმალიზირებული მოგება."
    },
    {
      title: "შესაბამისობა და რეპორტინგი",
      description: "ავტომატური რეგულატორული რეპორტინგი, ტრანზაქციების მონიტორინგი და საქართველოს ფინანსური კანონმდებლობის დაცვა."
    },
    {
      title: "მობილური პრიორიტეტი",
      description: "თქვენი მომხმარებლები შეძლებენ ვალუტის გაცვლას ნებისმიერი ადგილიდან სმარტფონი ან კომპიუტერის გამოყენებით."
    },
    {
      title: "24/7 ექსპერტი მხარდაჭერა",
      description: "ქართული მხარდაჭერის გუნდი თქვენი ბიზნესის ზრდაში დახმარებისა და ტექნიკური პრობლემების მოგვარებისთვის."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              გადააქციეთ თქვენი ბიზნესი
              <span className="block text-primary">დღეებში, არა წლებში</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              შეუერთდით ციფრულ ეკონომიკას და კონკურენცია გაუწიეთ საერთაშორისო ბირჟებს. 
              ჩვენი საქართველოზე ორიენტირებული პლატფორმა ტრადიციულ საცვლელ ბიზნესებს 
              ეხმარება წარმატებას ონლაინ ბაზარზე.
            </p>
            <Button 
              size="lg" 
              onClick={onLeadFormOpen}
              className="bg-gradient-primary hover:shadow-button transition-smooth"
            >
              დაიწყეთ ტრანსფორმაცია
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
            მზად ხართ ციფრულისთვის?
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            ნუ დაუტოვებთ კონკურენტებს წინ გადაგიდგნენ. დღესვე დაიწყეთ თქვენი ონლაინ ვალუტის გაცვლის პლატფორმა 
            და დაიპყროთ მზარდი ქართული ციფრული ბაზარი.
          </p>
          <Button 
            size="lg" 
            onClick={onLeadFormOpen}
            className="bg-white text-primary hover:bg-white/90 shadow-button transition-smooth"
          >
            მიიღეთ უფასო კონსულტაცია
          </Button>
        </div>
      </div>
    </section>
  );
}