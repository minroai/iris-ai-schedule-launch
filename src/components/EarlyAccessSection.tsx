import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const EarlyAccessSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    
    if (!email) {
      setEmailError("Email address is required");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    console.log("Early access signup:", email);
  };

  if (isSubmitted) {
    return (
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/25 via-white/10 to-white/5 border border-white/30 shadow-glass-elegant backdrop-blur-xl flex items-center justify-center relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-100/20 before:via-green-100/10 before:to-emerald-200/15 before:rounded-full after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/10 after:to-white/20 after:rounded-full after:pointer-events-none">
              <CheckCircle className="w-10 h-10 text-emerald-400 relative z-10 drop-shadow-lg" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground">You're in!</h2>
              <p className="text-xl text-muted-foreground">
                We'll notify you as soon as Iris is ready. Get ready to transform how you manage your time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/25 shadow-glass-crystal hover:shadow-glass-crystal-hover backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-100/10 before:via-transparent before:to-blue-100/8 before:rounded-2xl after:absolute after:inset-[1px] after:bg-gradient-to-t after:from-transparent after:via-white/8 after:to-white/15 after:rounded-2xl after:pointer-events-none hover:scale-105 transition-all duration-300"
                onClick={() => setIsSubmitted(false)}
              >
                <span className="relative z-10">Sign up another email</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="early-access" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          {/* Signup Form */}
          <form id="early-access-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="relative">
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className="w-full px-6 py-4 text-lg rounded-2xl bg-transparent border border-white/20 text-white placeholder:text-white/60 focus:border-white/40 focus:ring-0"
              />
              {emailError && (
                <div className="mt-2 p-3 rounded-xl bg-gradient-to-br from-red-500/10 via-red-400/5 to-red-500/5 border border-red-400/20 backdrop-blur-sm">
                  <p className="text-sm text-red-400 text-center">{emailError}</p>
                </div>
              )}
            </div>
            
            <div className="relative">
              <Button 
                type="submit"
                className="w-full text-white/80 px-6 py-4 rounded-2xl bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get early access
                  <ArrowRight className="w-4 h-4" />
                </span>
                {/* Subtle gradient glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessSection;