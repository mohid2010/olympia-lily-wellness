import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface Product {
  emoji: string;
  category: string;
  name: string;
  description: string;
  benefits: string[];
  color: string;
}

const products: Product[] = [
  {
    emoji: "💊",
    category: "Vitamins",
    name: "Multivitamin Complex",
    description:
      "A comprehensive blend of essential vitamins A, B, C, D, E & K to support immunity, energy, and overall vitality.",
    benefits: [
      "Boosts immunity",
      "Improves energy levels",
      "Supports bone health",
      "Enhances skin health",
    ],
    color: "oklch(0.52 0.16 145)",
  },
  {
    emoji: "🦴",
    category: "Calcium",
    name: "Calcium + D3 Forte",
    description:
      "Advanced calcium supplement enriched with Vitamin D3 and Magnesium for superior absorption and bone strength.",
    benefits: [
      "Strengthens bones & teeth",
      "Prevents osteoporosis",
      "Supports muscle function",
      "Enhanced D3 absorption",
    ],
    color: "oklch(0.65 0.18 253)",
  },
  {
    emoji: "💪",
    category: "Protein",
    name: "Premium Whey Protein",
    description:
      "High-quality whey protein with essential amino acids for muscle recovery, growth, and sustained energy.",
    benefits: [
      "Muscle growth & repair",
      "Fast absorption",
      "Rich in BCAAs",
      "Supports weight management",
    ],
    color: "oklch(0.60 0.12 160)",
  },
  {
    emoji: "🌿",
    category: "Wellness",
    name: "Ashwagandha Gold",
    description:
      "Certified KSM-66 Ashwagandha extract for stress relief, hormonal balance, and adaptogenic support.",
    benefits: [
      "Reduces stress & anxiety",
      "Balances hormones",
      "Improves sleep quality",
      "Boosts stamina",
    ],
    color: "oklch(0.70 0.14 70)",
  },
  {
    emoji: "🐟",
    category: "Wellness",
    name: "Omega-3 Fish Oil",
    description:
      "Pharmaceutical-grade omega-3 fatty acids (EPA & DHA) for heart health, brain function, and joint mobility.",
    benefits: [
      "Heart health support",
      "Brain & cognitive function",
      "Reduces inflammation",
      "Joint flexibility",
    ],
    color: "oklch(0.65 0.18 253)",
  },
  {
    emoji: "⚡",
    category: "Vitamins",
    name: "Vitamin B12 + Iron",
    description:
      "Targeted formula combining methylcobalamin B12 and iron to combat fatigue and support red blood cell formation.",
    benefits: [
      "Fights fatigue & anemia",
      "Supports nerve health",
      "Boosts metabolism",
      "Improves focus",
    ],
    color: "oklch(0.52 0.16 145)",
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article
      data-ocid={`products.item.${index + 1}`}
      className="bg-card border border-border rounded-2xl shadow-card hover:shadow-elevated transition-smooth overflow-hidden group"
    >
      {/* Top color stripe */}
      <div
        className="h-1.5 w-full"
        style={{ background: product.color }}
        aria-hidden
      />
      <div className="p-6">
        {/* Category badge + emoji */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl" role="img" aria-label={product.category}>
            {product.emoji}
          </span>
          <Badge
            className="rounded-full text-xs font-semibold border"
            style={{
              background: `${product.color}18`,
              color: product.color,
              borderColor: `${product.color}40`,
            }}
          >
            {product.category}
          </Badge>
        </div>

        <h3 className="font-display font-bold text-foreground text-lg mb-2 leading-snug">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Benefits */}
        <ul className="space-y-1.5 mb-5">
          {product.benefits.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: product.color }}
              />
              {b}
            </li>
          ))}
        </ul>

        <Button
          variant="outline"
          data-ocid={`products.contact_button.${index + 1}`}
          className="w-full rounded-xl border-primary/30 text-primary hover:bg-primary/5 font-semibold transition-smooth"
          onClick={() => {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Phone size={15} className="mr-2" /> Contact to Buy
        </Button>
      </div>
    </article>
  );
}

export default function ProductsSection() {
  return (
    <section
      id="products"
      data-ocid="products.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Our Products
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Premium Supplement Range
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Scientifically formulated, quality-tested supplements across
            Vitamins, Calcium, Protein, and Wellness categories — trusted by
            thousands across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <div
          data-ocid="products.cta_banner"
          className="mt-12 rounded-3xl p-8 text-center shadow-card border border-primary/20"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.52 0.16 145 / 0.08), oklch(0.65 0.18 253 / 0.06))",
          }}
        >
          <p className="font-display font-bold text-foreground text-xl mb-2">
            🚚 Pan-India Delivery Available
          </p>
          <p className="text-muted-foreground mb-5">
            Order any product via WhatsApp or phone. We deliver to every corner
            of India.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              data-ocid="products.whatsapp_order_button"
              className="bg-[oklch(0.55_0.18_145)] hover:bg-[oklch(0.48_0.18_145)] text-white font-semibold rounded-xl px-6"
              onClick={() =>
                window.open("https://wa.me/919435561868", "_blank")
              }
            >
              Order via WhatsApp
            </Button>
            <Button
              variant="outline"
              data-ocid="products.call_order_button"
              className="border-primary/30 text-primary hover:bg-primary/5 font-semibold rounded-xl px-6"
              onClick={() => {
                window.location.href = "tel:+919435561868";
              }}
            >
              Call to Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
