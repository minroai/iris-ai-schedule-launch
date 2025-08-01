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
          
          
          {/* Signup Form */}
          <div className="max-w-md mx-auto">
            <form id="early-access-form" onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  className="w-full px-6 py-6 text-lg rounded-2xl bg-black border border-gray-600/50 text-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-gray-500 hover:border-gray-500/70 shadow-none backdrop-blur-none"
                />
                {emailError && (
                  <div className="mt-2 p-3 rounded-xl bg-gradient-to-br from-red-500/10 via-red-400/5 to-red-500/5 border border-red-400/20 backdrop-blur-sm">
                    <p className="text-sm text-red-400 text-center">{emailError}</p>
                  </div>
                )}
              </div>
              
              <Button 
                type="submit"
                variant="iridescent" 
                size="default"
                className="w-full text-sm px-6 py-4 rounded-xl"
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
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