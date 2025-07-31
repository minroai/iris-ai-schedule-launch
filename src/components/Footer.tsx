import irisLogo from "@/assets/iris-logo.png";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-24 bg-background border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src={irisLogo} 
                alt="Iris" 
                className="h-8 w-auto opacity-90"
              />
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Contact
              </a>
            </div>
            
            {/* CTA */}
            <Button 
              size="sm"
              className="rounded-full bg-white text-black hover:bg-white/90 transition-all duration-300"
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Waitlist
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-muted-foreground/60">© 2024 Iris. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;