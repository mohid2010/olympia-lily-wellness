import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ChevronRight, ShieldCheck, Truck } from "lucide-react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const trustBadges = [
  { icon: <ShieldCheck size={18} />, label: "Trusted Formulations" },
  { icon: <Award size={18} />, label: "Premium Quality" },
  { icon: <Truck size={18} />, label: "Pan-India Delivery" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background pt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.52 0.16 145), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.18 253), transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="fade-in">
            <Badge
              data-ocid="hero.badge"
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full bg-primary/10 text-primary border-primary/20"
            >
              🌿 Nagaon, Assam · Delivering Across India
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Empowering{" "}
              <span
                className="relative"
                style={{ color: "oklch(0.52 0.16 145)" }}
              >
                Health,
              </span>
              <br />
              Enhancing{" "}
              <span style={{ color: "oklch(0.65 0.18 253)" }}>Life</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Premium nutritional supplements formulated with the finest
              ingredients — Vitamins, Calcium, Protein, and Wellness products
              crafted for every Indian household.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                size="lg"
                data-ocid="hero.explore_products_button"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-2xl shadow-elevated transition-smooth"
                onClick={() => scrollTo("products")}
              >
                Explore Products <ChevronRight size={18} className="ml-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.contact_us_button"
                className="border-primary/30 text-primary hover:bg-primary/5 font-semibold px-8 py-3 rounded-2xl transition-smooth"
                onClick={() => scrollTo("contact")}
              >
                Contact Us
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 shadow-card text-sm font-medium text-foreground"
                >
                  <span className="text-primary">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="/assets/generated/hero-wellness.dim_1200x600.jpg"
                alt="Olympia Lily Wellness — Premium Health Supplements"
                className="w-full h-auto object-cover rounded-3xl"
                loading="eager"
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-2xl p-4 shadow-elevated border border-border/60">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.52 0.16 145 / 0.12)" }}
                  >
                    <Truck
                      size={20}
                      style={{ color: "oklch(0.52 0.16 145)" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      Pan-India Delivery
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Order via WhatsApp or Call
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
