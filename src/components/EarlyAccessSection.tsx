import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setIsSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 md:w-80 md:h-80 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-md w-full space-y-8 text-center">

          {!isSubmitted ? (
            <>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-sf font-bold tracking-tight">
                  <div className="text-black mb-2 md:mb-3">Your day.</div>
                  <div className="bg-gradient-primary bg-clip-text text-transparent font-bold mt-1 md:mt-2">
                    Designed for you.
                  </div>
                </h1>
                
                {/* Updated margin here */}
                <p className="text-gray-700 text-lg lg:text-xl font-sf font-light leading-relaxed mt-10 md:mt-14">
                  Private beta releasing soon. 
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg bg-gray-100 border border-gray-200 rounded-md text-black placeholder:text-gray-500 focus-visible:ring-1 focus-visible:ring-primary/30 focus-visible:ring-offset-0"
                    required
                  />

                  <button
                    type="submit"
                    disabled={!email}
                    className="w-full relative overflow-hidden rounded-2xl text-black backdrop-blur-md bg-primary/10 border border-primary/30 shadow-[0_8px_32px_rgba(139,92,246,0.25)] hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(139,92,246,0.35)] px-8 py-4 text-lg font-sf font-medium transition duration-300 ease-out hover:scale-[1.02] focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Join Early Access
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                    <span className="absolute inset-0 z-0 bg-gradient-primary opacity-10 blur-2xl animate-pulse" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 mx-auto text-primary" />
                <h1 className="text-4xl lg:text-5xl font-sf font-bold tracking-tight text-black">
                  You're In!
                </h1>
                <p className="text-gray-700 text-lg lg:text-xl font-sf font-light leading-relaxed">
                  Thank you for joining our early access program. We'll notify
                  you when Iris is ready for you to try.
                </p>
                <div className="pt-6">
                  <Link to="/">
                    <button className="text-lg px-8 py-4 rounded-2xl text-black backdrop-blur-md bg-primary/10 border border-primary/30 shadow-[0_8px_32px_rgba(139,92,246,0.25)] hover:bg-primary/15 hover:border-primary/40 hover:shadow-[0_12px_48px_rgba(139,92,246,0.35)] transition font-sf font-medium">
                      Back to Home
                    </button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
