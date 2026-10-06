import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { site, delivery, INSTAGRAM_URL, EMAIL } from "@/config/site";
import { WhatsappCta } from "./WhatsappCta";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.18em] text-gold">WEST BUNISS</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{site.shortDescription}</p>
          <p className="mt-3 text-sm text-muted-foreground">{site.city}</p>
        </div>

        <nav aria-label="Navegação do rodapé" className="text-sm">
          <h2 className="eyebrow">Navegação</h2>
          <ul className="mt-4 space-y-2">
            <li><Link to="/fios" className="text-muted-foreground hover:text-gold">Fios & Mascotes</Link></li>
            <li><Link to="/quadros-digitais" className="text-muted-foreground hover:text-gold">Quadros digitais</Link></li>
            <li><Link to="/encomendar" className="text-muted-foreground hover:text-gold">Personalizar peça</Link></li>
            <li><Link to="/entregas-e-termos" className="text-muted-foreground hover:text-gold">Entregas e condições</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-gold">Perguntas frequentes</Link></li>
          </ul>
        </nav>

        <div className="text-sm">
          <h2 className="eyebrow">Contacto</h2>
          <p className="mt-4 text-muted-foreground">{delivery.short}</p>
          <div className="mt-4">
            <WhatsappCta message="Olá West Buniss! Gostaria de informações sobre peças personalizadas." />
          </div>
          {INSTAGRAM_URL ? (
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-muted-foreground hover:text-gold"
            >
              <Instagram className="size-4" aria-hidden /> Instagram
            </a>
          ) : (
            <p className="mt-4 text-xs text-muted-foreground">Instagram ainda não configurado.</p>
          )}
          {EMAIL && (
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-muted-foreground hover:text-gold">
              {EMAIL}
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-border/60 px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Peças feitas por encomenda em Angola. Preços em Kwanza (Kz).
      </div>
    </footer>
  );
}
