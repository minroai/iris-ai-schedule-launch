import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-white/15 via-white/8 to-white/3 border-t border-white/20 backdrop-blur-xl relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-50/8 before:via-transparent before:to-blue-50/4 before:pointer-events-none">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/30 via-white/15 to-white/8 border border-white/25 backdrop-blur-lg flex items-center justify-center shadow-glass-subtle">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="text-2xl font-bold text-foreground">Iris</span>
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Contact</a>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for productivity</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Iris. All rights reserved. Iris is a trademark of Iris Technologies Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;