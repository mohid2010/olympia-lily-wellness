import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919435561868"
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="floating_whatsapp_button"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-elevated transition-smooth hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[oklch(var(--primary))]"
      style={{ background: "oklch(0.55 0.18 145)" }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-40"
        style={{ background: "oklch(0.55 0.18 145)" }}
      />
      <SiWhatsapp size={28} className="text-white relative z-10" />
    </a>
  );
}
