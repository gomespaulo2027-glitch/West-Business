import { createFileRoute } from "@tanstack/react-router";
import { delivery } from "@/config/site";
import { WhatsappCta } from "@/components/site/WhatsappCta";

export const Route = createFileRoute("/entregas-e-termos")({
  head: () => ({
    meta: [
      { title: "Entregas e condições — West Business" },
      {
        name: "description",
        content:
          "Prazo de produção de 3 semanas a 1 mês, confirmação de preço pela administração, pagamento combinado por WhatsApp e condições de cancelamento.",
      },
      { property: "og:title", content: "Entregas e condições — West Business" },
      {
        property: "og:description",
        content:
          "Como funcionam os prazos, o pagamento e o cancelamento das peças personalizadas da West Business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/entregas-e-termos" },
    ],
    links: [{ rel: "canonical", href: "/entregas-e-termos" }],
  }),
  component: EntregasPage,
});

function EntregasPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="eyebrow">Informação</p>
      <h1 className="mt-3 font-display text-4xl">Entregas e condições</h1>
      <p className="mt-4 rounded-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
        {delivery.badge}. {delivery.short}
      </p>

      <h2 className="mt-12 font-display text-2xl">Do pedido à entrega</h2>
      <ol className="mt-5 space-y-4">
        {delivery.steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-border bg-card p-5">
            <span className="font-display text-xl text-gold">0{i + 1}</span>
            <h3 className="mt-1 text-base">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-display text-2xl">Condições</h2>
      <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
        {delivery.terms.map((t) => (
          <li key={t} className="rounded-md border border-border p-4">{t}</li>
        ))}
      </ul>

      <div className="mt-10">
        <WhatsappCta message="Olá West Business! Tenho uma dúvida sobre prazos e pagamento." label="Esclarecer dúvida no WhatsApp" />
      </div>
    </div>
  );
}
