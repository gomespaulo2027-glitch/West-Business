import { WHATSAPP_NUMBER } from "@/config/site";

export const whatsappConfigured = /^\d{8,15}$/.test(WHATSAPP_NUMBER.trim());

export const WHATSAPP_NOT_CONFIGURED =
  "WhatsApp do negócio ainda não configurado";

export function whatsappLink(message: string): string | null {
  if (!whatsappConfigured) return null;
  return `https://wa.me/${WHATSAPP_NUMBER.trim()}?text=${encodeURIComponent(message)}`;
}
