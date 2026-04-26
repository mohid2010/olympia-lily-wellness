import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth bg-card ${
        scrolled
          ? "shadow-elevated border-b border-border"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="navbar.link.home"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src="/assets/logo.png"
              alt="Olympia Lily Wellness Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-display font-bold text-base leading-tight hidden sm:block text-foreground">
              <span className="text-primary">Olympia Lily</span>
              <br />
              <span className="text-muted-foreground text-sm font-medium">
                Wellness
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`navbar.link.${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary rounded-lg transition-smooth hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              data-ocid="navbar.contact_button"
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-card"
              onClick={() => scrollTo("#contact")}
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            data-ocid="navbar.mobile_menu_toggle"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-smooth"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down nav */}
      {open && (
        <div
          data-ocid="navbar.mobile_menu"
          className="md:hidden bg-card border-t border-border shadow-elevated animate-slide-down"
        >
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`navbar.mobile.link.${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                  setOpen(false);
                }}
                className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary rounded-xl transition-smooth hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <Button
              data-ocid="navbar.mobile.contact_button"
              className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
              onClick={() => {
                scrollTo("#contact");
                setOpen(false);
              }}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
