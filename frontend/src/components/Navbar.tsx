import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  Menu, 
  X, 
  Home, 
  Info, 
  BarChart3, 
  LogIn, 
  AlertCircle,
  type LucideIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about", label: "About", href: "#about", icon: Info },
  { id: "insights", label: "Insights", href: "#insights", icon: BarChart3 },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection for active link and navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => {
        const element = document.querySelector(link.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: link.id,
            top: rect.top + scrollY,
            bottom: rect.bottom + scrollY,
          };
        }
        return null;
      }).filter(Boolean);

      const currentScroll = scrollY + 100; // Offset for better UX
      const active = sections.find(
        (section) =>
          currentScroll >= section!.top && currentScroll < section!.bottom
      );
      
      if (active) {
        setActiveSection(active.id);
      } else if (scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed z-[100] transition-all duration-500",
        "isolate",
        scrolled
          ? "top-4 left-1/2 -translate-x-1/2 max-w-xl w-full mx-auto rounded-full bg-background/95 backdrop-blur-md shadow-2xl shadow-black/10 border border-border/50"
          : "top-0 left-0 right-0 w-full bg-background/80 backdrop-blur-sm shadow-lg shadow-black/5"
      )}
    >
      {/* Animated bottom border with gradient glow - only show when not scrolled */}
      {!scrolled && (
        <>
          <div className={cn(
            "absolute inset-x-0 bottom-0 h-[2px] transition-all duration-500",
            "bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-60"
          )} />
          <div className={cn(
            "absolute inset-x-0 -bottom-[1px] h-[1px] transition-all duration-500",
            "bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-40 blur-[1px]"
          )} />
        </>
      )}
      
      {/* Enhanced highlight effects when scrolled */}
      {scrolled && (
        <>
          {/* Outer glow ring with pulse - no background, just glow */}
          <div className="absolute -inset-1 rounded-full opacity-60 blur-md animate-pulse" 
            style={{
              boxShadow: '0 0 20px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.2)',
            }}
          />
          
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.3)]" />
          
          {/* Shimmer effect - light reflection only, no background */}
          <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0"
              style={{
                boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)',
                animation: 'shimmer 3s ease-in-out infinite',
                transform: 'translateX(-100%)',
              }}
            />
          </div>
          
          {/* Enhanced shadow with primary tint - shadow only */}
          <div className="absolute -inset-2 rounded-full blur-2xl opacity-50" 
            style={{
              boxShadow: '0 0 30px hsl(var(--primary) / 0.3)',
            }}
          />
        </>
      )}
      
      <div className={cn(
        "relative z-10 transition-all duration-500",
        scrolled 
          ? "px-3 sm:px-4" 
          : "container mx-auto px-4 sm:px-6 lg:px-8"
      )}>
        <div className={cn(
          "flex items-center transition-all duration-500 relative",
          scrolled ? "justify-center h-12 lg:h-14" : "justify-between h-16 lg:h-20"
        )}>
          {/* Logo - Hidden when scrolled */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className={cn(
              "flex items-center gap-2.5 group cursor-pointer transition-all duration-500",
              scrolled 
                ? "absolute opacity-0 -translate-x-full pointer-events-none w-0 overflow-hidden scale-0" 
                : "relative opacity-100 translate-x-0 pointer-events-auto scale-100"
            )}
          >
            <div className="relative">
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300 group-hover:scale-110">
                <span className="text-primary-foreground font-bold text-lg lg:text-xl">
                  C
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
              CivicLens
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium",
                    scrolled 
                      ? "px-3 py-1.5" 
                      : "px-4 py-2",
                    activeSection === link.id
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-primary/10 rounded-lg -z-10 animate-in fade-in duration-200" />
                  )}
                  <Icon className={cn(
                    "w-4 h-4 transition-all duration-200",
                    activeSection === link.id ? "text-primary" : "text-muted-foreground"
                  )} />
                  <span className="relative z-10">{link.label}</span>
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-in zoom-in duration-200" />
                  )}
                </a>
              );
            })}
            <div className={cn(
              "w-px bg-border transition-all duration-500",
              scrolled ? "mx-1.5 h-5" : "mx-2 h-6"
            )} />
            <Button
              variant="ghost"
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-200 flex items-center gap-2",
                scrolled ? "px-3 py-1.5 h-8" : "px-4 py-2"
              )}
            >
              <LogIn className="w-4 h-4 transition-all duration-200" />
              Login
            </Button>
            <Button
              asChild
              className={cn(
                "text-sm bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2",
                scrolled ? "ml-1.5 px-3 py-1.5 h-8" : "ml-2 px-4 py-2"
              )}
            >
              <Link to="/complaint">
                <AlertCircle className="w-4 h-4 transition-all duration-200" />
                {scrolled ? "Raise" : "Raise Complaint"}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  "md:hidden rounded-lg hover:bg-accent transition-all duration-500",
                  scrolled 
                    ? "absolute right-3 p-1.5" 
                    : "p-2"
                )}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={cn(
                    "text-foreground transition-all duration-200",
                    scrolled ? "w-5 h-5" : "w-6 h-6"
                  )} />
                ) : (
                  <Menu className={cn(
                    "text-foreground transition-all duration-200",
                    scrolled ? "w-5 h-5" : "w-6 h-6"
                  )} />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                    <span className="text-primary-foreground font-bold text-xl">C</span>
                  </div>
                  <span className="text-2xl font-bold">CivicLens</span>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 flex items-center gap-3",
                        activeSection === link.id
                          ? "bg-primary/10 text-foreground border-l-4 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      <Icon className={cn(
                        "w-5 h-5 transition-all duration-200",
                        activeSection === link.id ? "text-primary" : "text-muted-foreground"
                      )} />
                      {link.label}
                    </a>
                  );
                })}
                <div className="my-4 h-px bg-border" />
                <Button
                  variant="ghost"
                  className="w-full justify-start text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-5 h-5" />
                  Login
                </Button>
                <Button
                  asChild
                  className="w-full mt-2 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link to="/complaint">
                    <AlertCircle className="w-5 h-5" />
                    Raise Complaint
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
