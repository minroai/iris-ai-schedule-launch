import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Back to Home Link */}
          <Link 
            to="/" 
            className="inline-flex items-center text-foreground/60 hover:text-foreground transition-colors mb-8"
          >
            ← Back to Home
          </Link>

          {!isSubmitted ? (
            <>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-foreground">Join</span>{" "}
                  <span className="text-primary bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent" style={{
                    backgroundSize: '200% 200%',
                    backgroundImage: 'linear-gradient(45deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    Early Access
                  </span>
                </h1>
                
                <p className="text-foreground/80 text-lg lg:text-xl">
                  Be among the first to experience Iris and shape the future of intelligent productivity.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg border-primary/20 focus:border-primary/50 bg-background/50 backdrop-blur-sm"
                    required
                  />
                  
                  <Button 
                    type="submit" 
                    variant="iridescent" 
                    size="lg" 
                    className="w-full text-lg px-8 py-6 rounded-2xl"
                    disabled={!email}
                  >
                    Join Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>

              <div className="space-y-3 text-sm text-foreground/60">
                <p>✨ Get exclusive early access</p>
                <p>📱 Shape the future of AI-powered productivity</p>
                <p>🎯 No spam, just updates on your early access</p>
              </div>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 mx-auto text-primary" />
                
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  You're In!
                </h1>
                
                <p className="text-foreground/80 text-lg lg:text-xl">
                  Thank you for joining our early access program. We'll notify you when Iris is ready for you to try.
                </p>
                
                <div className="pt-6">
                  <Link to="/">
                    <Button variant="outline" size="lg" className="text-lg px-8 py-4 rounded-2xl">
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;