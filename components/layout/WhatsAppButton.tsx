import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the Nigeria programme team on WhatsApp"
      className="fixed bottom-6 right-6 z-[55] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 active:scale-95"
    >
      <WhatsappLogo weight="fill" className="size-7" />
    </a>
  );
}
