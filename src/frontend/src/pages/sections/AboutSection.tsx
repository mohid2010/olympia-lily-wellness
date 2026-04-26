import { Badge } from "@/components/ui/badge";
import { Eye, MapPin, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            About Us
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Story & Vision
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Built on a foundation of trust, quality, and accessibility — Olympia
            Lily Wellness is transforming healthcare across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Founder image */}
          <div className="relative fade-in">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.16 145), oklch(0.65 0.18 253))",
                }}
                aria-hidden
              />
              <img
                src="/assets/founder.jpg"
                alt="Abul Kalam Azad — Founder, Olympia Lily Wellness"
                className="relative rounded-3xl w-full h-auto object-cover shadow-elevated"
                style={{ maxHeight: "480px", objectPosition: "top" }}
              />
              {/* Founder tag */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card shadow-elevated border border-border rounded-2xl px-6 py-3 whitespace-nowrap text-center">
                <p className="font-display font-bold text-foreground text-sm">
                  Abul Kalam Azad
                </p>
                <p className="text-primary text-xs font-medium">
                  Founder & Visionary
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="space-y-6 fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="prose-sm">
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                <strong className="text-foreground">Abul Kalam Azad</strong> was
                born and raised in a{" "}
                <strong className="text-foreground">
                  middle class family in Nagaon, Assam, India
                </strong>
                . Growing up amidst the challenges of limited access to quality
                healthcare in the Northeast, he developed a deep passion for
                making wellness accessible to every family, regardless of their
                background.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base mb-4">
                His humble beginnings gave him an unwavering commitment to
                affordability and trust — values that form the very foundation
                of{" "}
                <strong className="text-foreground">
                  Olympia Lily Wellness Private Limited
                </strong>
                . Today, he leads the company with a singular vision: to bring
                premium-quality healthcare supplements within reach of every
                Indian household.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Headquartered in{" "}
                <strong className="text-foreground">Nagaon, Assam</strong>, the
                company serves customers from the Northeast and across all of
                India, delivering scientifically formulated nutrition that makes
                a real difference in people's lives.
              </p>
            </div>

            {/* Mission & Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.16 145 / 0.12)" }}
                  >
                    <Target
                      size={16}
                      style={{ color: "oklch(0.52 0.16 145)" }}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To empower every Indian with affordable, high-quality
                  nutritional supplements that support long-term health and
                  wellness.
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-5 shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: "oklch(0.65 0.18 253 / 0.12)" }}
                  >
                    <Eye size={16} style={{ color: "oklch(0.65 0.18 253)" }} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  To become India's most trusted wellness brand — bridging the
                  gap between modern science and accessible healthcare for all.
                </p>
              </div>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm pt-2">
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <span>
                Based in{" "}
                <strong className="text-foreground">
                  Nagaon, Assam, India 782002
                </strong>{" "}
                — delivering wellness nationwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
