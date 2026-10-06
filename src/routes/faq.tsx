import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/config/site";
import { WhatsappCta } from "@/components/site/WhatsappCta";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas frequentes — West Buniss" },
      {
        name: "description",
        content:
          "Prazos, preços de referência, informação necessária para encomendar, pagamento e cancelamento das peças personalizadas West Buniss.",
      },
      { property: "og:title", content: "Perguntas frequentes — West Buniss" },
      {
        property: "og:description",
        content: "Respostas sobre prazos, preços, encomenda e pagamento das peças personalizadas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="eyebrow">Apoio</p>
      <h1 className="mt-3 font-display text-4xl">Perguntas frequentes</h1>

      <Accordion type="single" collapsible className="mt-8">
        {faq.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10">
        <WhatsappCta message="Olá West Buniss! Tenho uma pergunta." label="Perguntar no WhatsApp" />
      </div>
    </div>
  );
}
