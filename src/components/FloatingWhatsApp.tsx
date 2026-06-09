import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919778888339';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#1ebe57] transition-all hover:-translate-y-0.5"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
