import irisLogo from "@/assets/iris-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <img 
              src={irisLogo} 
              alt="Iris" 
              className="h-8 w-auto opacity-60"
            />
          </div>
          
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Calendar meets context. Connecting your apps to understand your life and help you get things done.
          </p>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-xs">
              © 2024 Iris Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;