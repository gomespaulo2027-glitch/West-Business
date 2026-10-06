import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { delivery, products, fontStyles } from "@/config/site";

export const Route = createFileRoute("/fios")({
  head: () => ({
    meta: [
      { title: "Fios e mascotes personalizados — West Business" },
      {
        name: "description",
        content:
          "Catálogo West Business: fios personalizados com 1 ou 2 nomes e mascotes personalizadas. Preços de referência em Kz e encomenda pelo WhatsApp.",
      },
      { property: "og:title", content: "Fios e mascotes personalizados — West Business" },
      {
        property: "og:description",
        content:
          "Fios com 1 nome desde 6.800 Kz e mascotes desde 8.000 Kz. Preço final conforme cor e comprimento do nome.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/fios" },
    ],
    links: [{ rel: "canonical", href: "/fios" }],
  }),
  component: FiosPage,
});

function FiosPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="eyebrow">Catálogo</p>
      <h1 className="mt-3 font-display text-4xl">Fios e mascotes personalizados</h1>
      <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
        Todas as peças são feitas por encomenda. Os valores abaixo são preços de referência: o preço
        final é confirmado pela administração de acordo com o comprimento do nome e a cor escolhida.
      </p>
      <p className="mt-4 rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
        {delivery.short}
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>

      <section aria-labelledby="detalhes" className="mt-16">
        <h2 id="detalhes" className="font-display text-2xl">O que precisas de indicar</h2>
        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <li className="rounded-md border border-border p-4">Nome ou nomes a gravar</li>
          <li className="rounded-md border border-border p-4">Tipo de peça: fio ou mascote</li>
          <li className="rounded-md border border-border p-4">Cor desejada</li>
          <li className="rounded-md border border-border p-4">Tamanho em centímetros</li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Estilos de letra disponíveis:{" "}
          {fontStyles.map((f) => `${f.code} ${f.name}`).join(" · ")}.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link to="/encomendar">Personalizar a minha peça</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
