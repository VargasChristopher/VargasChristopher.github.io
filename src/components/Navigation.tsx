import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  // ── Theme toggle state ───────────────────────────────────────
  const [isLight, setIsLight] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return true;
    if (saved === "dark") return false;
    return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isLight) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(v => !v);
  // ─────────────────────────────────────────────────────────────

  const NAV_OFFSET = 80;

  useEffect(() => {
  const handleScroll = () => {
  setScrolled(window.scrollY > 20);

  const sections = navItems.map(item => item.path.substring(1));
  const probeY = window.scrollY + NAV_OFFSET + 1; // where we consider the “current” line
  let currentSection = "home";

  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    if (probeY >= top && probeY < bottom) {
      currentSection = id;
      break;
    }
  }
  setActiveSection(currentSection);
  };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
  
    // Respect reduced-motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const behavior: ScrollBehavior = reduce ? "auto" : "smooth";
  
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior });
      return;
    }
  
    const el = document.getElementById(sectionId);
    if (!el) return;
  
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    window.scrollTo({ top: Math.max(0, y), behavior });
  };


  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "glass shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-bold gradient-text focus-ring"
          >
            Christopher Vargas
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.path.substring(1))}
                className={`nav-link text-sm font-medium outline-none ${
                  activeSection === item.path.substring(1) ? "active text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1fb6nPLtFDqmK3q-bjQJaJPzWHh8_NBT1/view?usp=sharing" 
                download
                className="focus-ring"
              >
                View Resume
              </a>
            </Button>

            {/* Theme toggle (desktop) */}
            <Button
              variant="ghost"
              size="icon"
              className="focus-ring"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
              variant="ghost"
              size="icon"
              className="focus-ring"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={isLight ? "Switch to dark mode" : "Switch to light mode"}
          >
              {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden focus-ring"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass border-t border-border/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.path.substring(1))}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors outline-none ${
                    activeSection === item.path.substring(1)
                      ? "text-primary"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1fb6nPLtFDqmK3q-bjQJaJPzWHh8_NBT1/view?usp=sharing">
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
