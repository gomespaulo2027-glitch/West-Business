import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { WhatsappCta } from "@/components/site/WhatsappCta";
import { quadrosDigitais } from "@/config/site";

export const Route = createFileRoute("/quadros-digitais")({
  head: () => ({
    meta: [
      { title: "Quadros digitais (em breve) — West Business" },
      {
        name: "description",
        content:
          "A linha de quadros digitais personalizados da West Business está em preparação. Modelos, tamanhos e preços serão publicados quando a linha abrir.",
      },
      { property: "og:title", content: "Quadros digitais — em breve na West Business" },
      {
        property: "og:description",
        content:
          "Nova linha de quadros digitais personalizados em preparação. Fala pelo WhatsApp para ser avisado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/quadros-digitais" },
    ],
    links: [{ rel: "canonical", href: "/quadros-digitais" }],
  }),
  component: QuadrosPage,
});

function QuadrosPage() {
  const { available, name, badge, intro, notes, items } = quadrosDigitais;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="flex flex-wrap items-center gap-3">
        <p className="eyebrow">Categoria</p>
        {!available && (
          <span className="rounded-full border border-gold/40 px-3 py-1 text-xs tracking-widest text-gold">
            {badge}
          </span>
        )}
      </div>
      <h1 className="mt-3 font-display text-4xl">{name}</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{intro}</p>

      {available && items.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-lg border border-dashed border-border bg-surface p-8">
          <h2 className="font-display text-2xl">Ainda sem modelos publicados</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {notes.map((n) => (
              <li key={n}>— {n}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <WhatsappCta
              message="Olá West Business! Quero ser avisado quando os quadros digitais estiverem disponíveis."
              label="Quero ser avisado"
            />
            <Button asChild variant="outline" size="lg">
              <Link to="/fios">Ver fios e mascotes</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
