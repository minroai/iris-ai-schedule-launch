import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Early access signup:", email);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">You're in!</h2>
              <p className="text-xl text-muted-foreground">
                We'll notify you as soon as Iris is ready. Get ready to transform how you manage your time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="premium" 
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl"
                onClick={() => setIsSubmitted(false)}
              >
                Sign up another email
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Be among the first to experience
              <span className="bg-gradient-primary bg-clip-text text-transparent"> the future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who are already transforming their productivity with Iris.
            </p>
          </div>
          
          {/* Early Access Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Free Beta Access", description: "Complete access during our beta period" },
              { title: "Exclusive Features", description: "Early access to premium AI capabilities" },
              { title: "Shape the Future", description: "Your feedback directly influences development" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border shadow-card">
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          {/* Signup Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-6 text-lg rounded-2xl bg-card border-border shadow-card focus:shadow-soft transition-all duration-300"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                variant="hero" 
                size="lg"
                className="w-full text-lg px-8 py-6 rounded-2xl"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;