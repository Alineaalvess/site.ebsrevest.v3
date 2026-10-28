import { CONTACT } from '../data/site';

/** Monta o link do WhatsApp, com mensagem opcional já codificada. */
export const buildWhatsAppLink = (message?: string): string => {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};
