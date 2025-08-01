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
    <div className="min-h-screen bg-gradient-hero relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-md w-full space-y-8 text-center">
          

          {!isSubmitted ? (
            <>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-foreground">Your day.</span>{" "}
                  <span
                    className="bg-clip-text text-transparent font-bold"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #a855f7, #3b82f6, #10b981, #8b5cf6, #06b6d4)",
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Designed for you.
                  </span>
                </h1>

                <p className="text-foreground/80 text-lg lg:text-xl">
                  Releasing a beta version of Iris soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 text-lg bg-black border-none rounded-md text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />

                  {/* Sleek Glowing Button */}
                  <button
                    type="submit"
                    disabled={!email}
                    className="w-full relative overflow-hidden rounded-xl border border-white/10 bg-[#0f0f0f] text-white px-8 py-4 text-lg font-medium transition duration-300 ease-out hover:scale-[1.02] focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Get early access
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-yellow-400 opacity-20 blur-2xl animate-pulse" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 mx-auto text-primary" />
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                  You're In!
                </h1>
                <p className="text-foreground/80 text-lg lg:text-xl">
                  Thank you for joining our early access program. We'll notify
                  you when Iris is ready for you to try.
                </p>
                <div className="pt-6">
                  <Link to="/">
                    <button className="text-lg px-8 py-4 rounded-xl border border-white/10 bg-transparent hover:bg-white/10 transition">
                      Back to Home
                    </button>
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
