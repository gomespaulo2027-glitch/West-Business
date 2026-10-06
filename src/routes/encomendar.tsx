import { createFileRoute } from "@tanstack/react-router";
import { OrderForm } from "@/components/site/OrderForm";
import { delivery } from "@/config/site";

export const Route = createFileRoute("/encomendar")({
  validateSearch: (search: Record<string, unknown>) => ({
    produto: typeof search.produto === "string" ? search.produto : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Personalizar e encomendar — West Business" },
      {
        name: "description",
        content:
          "Indica o nome, o tipo de peça, a cor, o tamanho em cm e o estilo de letra. O site prepara a mensagem de encomenda para enviar pelo WhatsApp.",
      },
      { property: "og:title", content: "Personalizar a tua peça — West Business" },
      {
        property: "og:description",
        content:
          "Formulário de personalização: nome, cor, tamanho em cm e estilo de letra. Preço final confirmado pela administração.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/encomendar" },
    ],
    links: [{ rel: "canonical", href: "/encomendar" }],
  }),
  component: EncomendarPage,
});

function EncomendarPage() {
  const { produto } = Route.useSearch();

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="eyebrow">Encomenda</p>
      <h1 className="mt-3 font-display text-4xl">Personaliza a tua peça</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Preenche os dados abaixo. A mensagem é preparada automaticamente e enviada pelo WhatsApp
        para a administração confirmar o preço final e o prazo.
      </p>
      <p className="mt-4 rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
        {delivery.badge}. {delivery.short}
      </p>

      <div className="mt-10">
        <OrderForm initialProduct={produto} />
      </div>
    </div>
  );
}
