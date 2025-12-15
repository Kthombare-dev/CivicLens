import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">CivicLens</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering citizens to build accountable cities through smart technology and transparency.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#insights" className="text-muted-foreground hover:text-primary transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#api" className="text-muted-foreground hover:text-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CivicLens. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:contact@civiclens.com" 
              className="w-9 h-9 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://twitter.com/civiclens" 
              className="w-9 h-9 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://linkedin.com/company/civiclens" 
              className="w-9 h-9 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
            <a 
              href="https://github.com/civiclens" 
              className="w-9 h-9 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
