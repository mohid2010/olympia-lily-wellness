import { Badge } from "@/components/ui/badge";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    location: "Guwahati, Assam",
    rating: 5,
    text: "I've been using Olympia Lily's Calcium + D3 for three months now, and the difference in my bone health is remarkable. Excellent quality and delivered right to my door!",
    initials: "PS",
    color: "oklch(0.52 0.16 145)",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    rating: 5,
    text: "The Multivitamin Complex is fantastic. I feel more energetic throughout the day. Trust the brand completely — fast delivery across India and great pricing.",
    initials: "RK",
    color: "oklch(0.65 0.18 253)",
  },
  {
    name: "Meena Devi",
    location: "Nagaon, Assam",
    rating: 5,
    text: "Very happy with Ashwagandha Gold. My stress levels have reduced significantly. Local company with global quality — proud to support them!",
    initials: "MD",
    color: "oklch(0.60 0.12 160)",
  },
  {
    name: "Arjun Bora",
    location: "Jorhat, Assam",
    rating: 5,
    text: "The Whey Protein is top-notch. Great taste and mixes perfectly. Delivery was fast even to Jorhat. Will definitely order again!",
    initials: "AB",
    color: "oklch(0.52 0.16 145)",
  },
  {
    name: "Sunita Patel",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Affordable and effective. The Omega-3 capsules are genuinely pharmaceutical grade. I recommend Olympia Lily to all my family members.",
    initials: "SP",
    color: "oklch(0.65 0.18 253)",
  },
  {
    name: "Dipankar Das",
    location: "Dibrugarh, Assam",
    rating: 5,
    text: "Contacted via WhatsApp and got quick responses. Ordered Vitamin B12 + Iron and feel a noticeable boost in energy. Wonderful service!",
    initials: "DD",
    color: "oklch(0.60 0.12 160)",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Testimonials
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thousands of customers across India trust Olympia Lily Wellness for
            their daily health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-elevated transition-smooth flex flex-col"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-primary/30 mb-3" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={`star-${t.name}-${idx}`}
                    size={14}
                    className="fill-[oklch(0.75_0.14_70)] text-[oklch(0.75_0.14_70)]"
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
