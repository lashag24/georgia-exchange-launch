import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "წარმატება! / Success!",
      description: "თქვენი მოთხოვნა მიღებულია. ჩვენ დაგიკავშირდებით დღეს. / Your request has been received. We will contact you today.",
    });
    
    setIsSubmitting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center">
            გადაიყვანეთ თქვენი გაცვლითი ონლაინზე დღესვე
          </DialogTitle>
          <DialogDescription className="text-center">
            შეავსეთ ეს ფორმა და ჩვენი გუნდი დაგიკავშირდებათ 24 საათში, რომ განიხილოს თქვენი თეთრი ეტიკეტის ვალუტის გაცვლის გადაწყვეტა.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name / სრული სახელი</Label>
            <Input 
              id="name" 
              required 
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name / კომპანიის სახელი</Label>
            <Input 
              id="company" 
              required 
              placeholder="Your exchange business name"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number / ტელეფონის ნომერი</Label>
            <Input 
              id="phone" 
              type="tel" 
              required 
              placeholder="+995 XXX XXX XXX"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              required 
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="business-type">ამჟამინდელი ბიზნესის ტიპი / Current Business Type</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="აირჩიეთ ბიზნესის ტიპი / Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="physical-exchange">ფიზიკური საცვლელი ოფისი / Physical Exchange Office</SelectItem>
                <SelectItem value="bank">ბანკი / Bank</SelectItem>
                <SelectItem value="fintech">ფინტექ კომპანია / Fintech Company</SelectItem>
                <SelectItem value="startup">ახალი ბიზნესი / New Business</SelectItem>
                <SelectItem value="other">სხვა / Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="volume">ყოველთვიური გაცვლითი მოცულობა (არასავალდებულო) / Monthly Exchange Volume (Optional)</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="აირჩიეთ ყოველთვიური მოცულობა / Select monthly volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-50k">₾50,000-ზე ნაკლები / Under ₾50,000</SelectItem>
                <SelectItem value="50k-200k">₾50,000 - ₾200,000</SelectItem>
                <SelectItem value="200k-500k">₾200,000 - ₾500,000</SelectItem>
                <SelectItem value="500k-1m">₾500,000 - ₾1,000,000</SelectItem>
                <SelectItem value="over-1m">₾1,000,000-ზე მეტი / Over ₾1,000,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">დამატებითი ინფორმაცია (არასავალდებულო) / Additional Information (Optional)</Label>
            <Textarea 
              id="message" 
              placeholder="მოგვიყევით თქვენი სპეციფიკური საჭიროებების ან კითხვების შესახებ / Tell us about your specific needs or questions"
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-primary hover:shadow-button transition-smooth"
            disabled={isSubmitting}
          >
            {isSubmitting ? "იგზავნება... / Submitting..." : "დღესვე დაგვიკავშირდით / Get In Touch Today"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            ამ ფორმის წარდგენით, თქვენ ეთანხმებით ჩვენი გუნდის მიერ კონტაქტს. ჩვენ პატივს ვცემთ თქვენს კონფიდენციალურობას და არასოდეს გავზიარებთ თქვენს ინფორმაციას. / By submitting this form, you agree to be contacted by our team. We respect your privacy and will never share your information.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}