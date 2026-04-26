import { Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer data-ocid="footer" className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/assets/logo.png"
                alt="Olympia Lily Wellness"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-display font-bold text-primary text-base leading-tight">
                  Olympia Lily
                </p>
                <p className="text-muted-foreground text-xs font-medium">
                  Wellness Pvt. Ltd.
                </p>
              </div>
            </button>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Empowering Health, Enhancing Life. Premium nutritional supplements
              trusted across India.
            </p>
            <div className="flex items-center gap-2 text-sm text-accent font-medium">
              <MapPin size={14} className="text-primary flex-shrink-0" />
              <span>Nagaon, Assam, India 782002</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.link.${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary text-sm transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919435561868"
                  className="hover:text-primary transition-smooth"
                >
                  +91 94355 61868
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+918876765958"
                  className="hover:text-primary transition-smooth"
                >
                  +91 88767 65958
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiWhatsapp size={14} className="text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/919435561868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin
                  size={14}
                  className="text-primary flex-shrink-0 mt-0.5"
                />
                <span>
                  Nagaon, Assam,
                  <br />
                  India — 782002
                </span>
              </li>
            </ul>
          </div>

          {/* Delivery info */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Delivery
            </h3>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🚚</span>
                <span className="font-semibold text-primary text-sm">
                  Pan-India Delivery
                </span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">
                We deliver premium health supplements to every corner of India.
                Order today and experience wellness at your doorstep.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Mail size={14} className="text-primary flex-shrink-0" />
              <span className="text-sm text-muted-foreground">
                Available via WhatsApp & Call
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-xs text-center sm:text-left">
            © {year} Olympia Lily Wellness Private Limited. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
