import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  HeartHandshake,
  IndianRupee,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

interface Reason {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const reasons: Reason[] = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Trusted Formulations",
    description:
      "Every product is formulated by nutrition experts using clinically validated ingredients, ensuring efficacy and safety for your family.",
    color: "oklch(0.52 0.16 145)",
  },
  {
    icon: <FlaskConical size={24} />,
    title: "High-Quality Ingredients",
    description:
      "We source only the finest raw materials — pharmaceutical-grade, non-GMO, and lab-tested for purity and potency.",
    color: "oklch(0.65 0.18 253)",
  },
  {
    icon: <IndianRupee size={24} />,
    title: "Affordable Pricing",
    description:
      "Premium quality doesn't have to be expensive. We believe every Indian deserves access to high-quality nutrition at fair prices.",
    color: "oklch(0.60 0.12 160)",
  },
  {
    icon: <Truck size={24} />,
    title: "Pan-India Delivery",
    description:
      "Whether you're in a metro or a remote village, we deliver your supplements reliably across all 28 states and 8 union territories.",
    color: "oklch(0.52 0.16 145)",
  },
  {
    icon: <Leaf size={24} />,
    title: "Natural & Safe",
    description:
      "Our products are free from harmful additives and artificial colors. Safe for daily use by adults, seniors, and children.",
    color: "oklch(0.60 0.12 160)",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Trusted by Customers",
    description:
      "Hundreds of satisfied customers across Northeast India and beyond trust Olympia Lily for their daily wellness needs.",
    color: "oklch(0.65 0.18 253)",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      id="why-choose-us"
      data-ocid="why-choose-us.section"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Why Choose Us
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The Olympia Lily Difference
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We go beyond just selling supplements — we're committed to being
            your long-term health and wellness partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              data-ocid={`why-choose-us.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth group"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-smooth group-hover:scale-110"
                style={{ background: `${reason.color}18`, color: reason.color }}
              >
                {reason.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 bg-card border border-border rounded-3xl p-8 shadow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Happy Customers" },
              { value: "6+", label: "Product Lines" },
              { value: "28", label: "States Served" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="font-display text-3xl font-bold mb-1"
                  style={{ color: "oklch(0.52 0.16 145)" }}
                >
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
