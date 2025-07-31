import { Heart, Sparkles } from "lucide-react";
const Footer = () => {
  return <footer className="py-16 bg-gradient-to-br from-white/12 via-purple-50/8 to-white/6 border-t border-white/25 backdrop-blur-xl relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_-4px_16px_rgba(139,92,246,0.1)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-200/10 before:via-pink-200/5 before:to-cyan-200/8 before:pointer-events-none after:absolute after:inset-[1px] after:bg-gradient-to-b after:from-white/8 after:to-transparent after:pointer-events-none">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-white/25 via-purple-50/15 to-white/12 border border-white/35 backdrop-blur-lg flex items-center justify-center shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.3),0_8px_24px_rgba(139,92,246,0.15)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-200/20 before:via-pink-200/8 before:to-transparent before:rounded-2xl">
                <Sparkles className="w-5 h-5 text-primary relative z-10" />
              </div>
              <span className="text-2xl font-bold text-foreground">Iris</span>
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5 relative group">
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5 relative group">
                <span className="relative z-10">Terms of Service</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-0.5 relative group">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current animate-pulse" />
              <span>for productivity</span>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/15 text-center relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <p className="text-sm text-muted-foreground">© 2024 Iris. All rights reserved. Iris is a trademark of Minro Inc.</p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;