import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) return;
    const text = encodeURIComponent(
      `Hi Olympia Lily Wellness!\n\nName: ${form.name}\nPhone: ${form.phone}\n\nMessage: ${form.message}`,
    );
    window.open(`https://wa.me/919435561868?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", message: "" });
    }, 4000);
  }

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-20 lg:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1">
            Contact Us
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to start your wellness journey? Contact us via WhatsApp,
            phone, or fill the form below — we'll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-6 fade-in">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-card">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.52 0.16 145 / 0.12)" }}
                  >
                    <SiWhatsapp
                      size={18}
                      style={{ color: "oklch(0.52 0.16 145)" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      WhatsApp / Primary
                    </p>
                    <a
                      href="https://wa.me/919435561868"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-ocid="contact.whatsapp_link"
                      className="text-primary font-medium hover:underline transition-smooth text-sm"
                    >
                      +91 94355 61868
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.65 0.18 253 / 0.12)" }}
                  >
                    <Phone
                      size={18}
                      style={{ color: "oklch(0.65 0.18 253)" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Alternate Phone
                    </p>
                    <a
                      href="tel:+918876765958"
                      data-ocid="contact.phone_link"
                      className="text-primary font-medium hover:underline transition-smooth text-sm"
                    >
                      +91 88767 65958
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.60 0.12 160 / 0.12)" }}
                  >
                    <MapPin
                      size={18}
                      style={{ color: "oklch(0.60 0.12 160)" }}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Address
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Nagaon, Assam, India — 782002
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      🚚 Delivery across India only
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Delivery banner */}
            <div
              className="rounded-2xl p-6 border border-primary/20 shadow-card"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.52 0.16 145 / 0.07), oklch(0.65 0.18 253 / 0.05))",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="font-display font-bold text-foreground">
                    Pan-India Delivery
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We ship to every state in India
                  </p>
                </div>
              </div>
              <Button
                data-ocid="contact.whatsapp_order_button"
                className="w-full rounded-xl font-semibold"
                style={{ background: "oklch(0.55 0.18 145)", color: "white" }}
                onClick={() =>
                  window.open("https://wa.me/919435561868", "_blank")
                }
              >
                <SiWhatsapp size={16} className="mr-2" /> Order on WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div
            className="bg-card border border-border rounded-2xl p-6 shadow-card fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <MessageCircle size={20} className="text-primary" />
              <h3 className="font-display font-bold text-foreground text-lg">
                Send Us a Message
              </h3>
            </div>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="text-4xl mb-4">✅</div>
                <p className="font-display font-bold text-foreground text-lg mb-2">
                  Message Sent!
                </p>
                <p className="text-muted-foreground text-sm">
                  We've opened WhatsApp with your message. We'll respond
                  shortly!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Your Name *
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name_input"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    className="rounded-xl border-input bg-background focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.phone_input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    required
                    className="rounded-xl border-input bg-background focus:ring-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-foreground"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message_textarea"
                    placeholder="Tell us which products you're interested in or ask us anything..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    required
                    rows={4}
                    className="rounded-xl border-input bg-background focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={
                    !form.name.trim() ||
                    !form.phone.trim() ||
                    !form.message.trim()
                  }
                  className="w-full rounded-xl py-3 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
                  style={{ background: "oklch(0.52 0.16 145)" }}
                >
                  <SiWhatsapp size={16} className="mr-2" /> Send via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  This will open WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
