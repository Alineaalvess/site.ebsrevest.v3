import { buildWhatsAppLink } from '../utils/whatsapp';

const WhatsAppButton = () => (
  <a
    href={buildWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[99] bg-[#25d366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
    aria-label="Atendimento pelo WhatsApp"
  >
    <i className="fa-brands fa-whatsapp text-3xl" aria-hidden="true" />
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
      Fale conosco agora!
    </span>
  </a>
);

export default WhatsAppButton;
