import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

const nav = [
  { to: "/", label: "Início" },
  { to: "/fios", label: "Fios & Mascotes" },
  { to: "/quadros-digitais", label: "Quadros digitais" },
  { to: "/encomendar", label: "Personalizar" },
  { to: "/entregas-e-termos", label: "Entregas" },
  { to: "/faq", label: "Perguntas" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex flex-col leading-none" aria-label={`${site.name} — início`}>
          <span className="font-display text-xl tracking-[0.18em] text-gold">WEST</span>
          <span className="font-display text-xl tracking-[0.18em] text-foreground">BUNISS</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-movel"
          aria-label="Navegação principal (móvel)"
          className="border-t border-border bg-surface md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/60 py-3 text-sm text-foreground last:border-0"
                  activeProps={{ className: "text-gold" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
