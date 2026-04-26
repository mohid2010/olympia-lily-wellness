import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Do you deliver across all of India?",
    answer:
      "Yes! We deliver our premium wellness supplements to all 28 states and 8 union territories across India. Whether you're in a major metro city or a smaller town, we ensure your order reaches you reliably. Contact us via WhatsApp or call to place your order.",
  },
  {
    question: "How can I place an order?",
    answer:
      "You can place an order by contacting us via WhatsApp at +91 94355 61868 or by calling us at +91 94355 61868 or +91 88767 65958. Our team will help you choose the right products and arrange delivery.",
  },
  {
    question: "Are your products safe and quality-tested?",
    answer:
      "Absolutely. All Olympia Lily Wellness products are formulated using pharmaceutical-grade ingredients, verified for purity and potency. Our formulations are developed by nutrition experts and are free from harmful additives, artificial colors, or fillers.",
  },
  {
    question: "What is the typical delivery time?",
    answer:
      "Delivery times vary by location. For most urban areas, expect delivery within 3-5 business days. For remote or rural areas, it may take 5-8 business days. We'll keep you updated on your order status.",
  },
  {
    question: "Can I use multiple supplements together?",
    answer:
      "Most of our supplements are designed to be taken together as part of a complete wellness routine. However, we recommend consulting with your healthcare provider for personalized advice, especially if you have any existing medical conditions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including bank transfer, UPI, and cash on delivery for select locations. Contact us to discuss the payment option most convenient for you.",
  },
  {
    question: "Are your products suitable for vegetarians?",
    answer:
      "Many of our products are vegetarian-friendly. Please contact us to inquire about specific products. We clearly communicate ingredients and dietary suitability for each supplement.",
  },
  {
    question: "How do I know which supplement is right for me?",
    answer:
      "Our team is happy to help guide you based on your health goals. Contact us on WhatsApp with your requirements and our wellness advisors will recommend the best products for your needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-ocid="faq.section"
      className="py-20 lg:py-28 bg-muted/30"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            FAQs
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Got questions? We've got answers. If you need more help, reach out
            via WhatsApp.
          </p>
        </div>

        <div className="space-y-3" data-ocid="faq.list">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              data-ocid={`faq.item.${i + 1}`}
              className="bg-card border border-border rounded-2xl shadow-card overflow-hidden"
            >
              <button
                type="button"
                data-ocid={`faq.toggle.${i + 1}`}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/30 transition-smooth"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-foreground text-sm leading-snug">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <ChevronUp size={18} className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown
                    size={18}
                    className="text-muted-foreground flex-shrink-0"
                  />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4 fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
