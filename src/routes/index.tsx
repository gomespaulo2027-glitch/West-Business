import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock3, Sparkles, Ruler } from "lucide-react";
import heroFio from "@/assets/hero-fio.svg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { WhatsappCta } from "@/components/site/WhatsappCta";
import {
  delivery,
  fontStyles,
  products,
  quadrosDigitais,
  site,
} from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "West Buniss — Fios e mascotes personalizados em Angola" },
      {
        name: "description",
        content:
          "Fios e mascotes personalizados com o teu nome, feitos à mão em Angola. Preços de referência em Kz, quatro estilos de letra e encomenda pelo WhatsApp.",
      },
      { property: "og:title", content: "West Buniss — Fios personalizados com o teu nome" },
      {
        property: "og:description",
        content:
          "Nomes transformados em peças elegantes para usar. Fios e mascotes personalizados, produção de 3 semanas a 1 mês.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
          <div className="fade-up">
            <p className="eyebrow">{site.city}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
              Nomes transformados em <span className="text-gold">peças elegantes</span> para usar.
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              A West Buniss produz fios e mascotes personalizados peça por peça. Escolhe o nome, o
              estilo de letra, a cor e o tamanho — nós tratamos do resto.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/encomendar">Personalizar a minha peça</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/fios">Ver peças</Link>
              </Button>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">
              <Clock3 className="size-4 text-gold" aria-hidden />
              {delivery.badge}
            </p>
          </div>

          <div className="fade-up">
            <img
              src={heroFio}
              alt="Fio dourado personalizado com o nome em letra cursiva, sobre seda azul-marinho"
              width={1600}
              height={1200}
              className="w-full rounded-lg border border-border object-cover"
            />
          </div>
        </div>
      </section>

      <div className="hairline mx-auto max-w-6xl" />

      {/* CATEGORIAS */}
      <section aria-labelledby="categorias" className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="categorias" className="font-display text-3xl">Categorias</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <CategoryCard
            to="/fios"
            title="Fios personalizados"
            text="O nome em letra cursiva, com tamanho e cor à tua escolha."
          />
          <CategoryCard
            to="/fios"
            title="Mascotes"
            text="Uma figura escolhida pelo cliente junto ao nome, com acabamento detalhado."
          />
          <CategoryCard
            to="/quadros-digitais"
            title={quadrosDigitais.name}
            text="Nova linha em preparação. Modelos e preços serão publicados em breve."
            badge={quadrosDigitais.badge}
          />
        </div>
      </section>

      {/* FIOS DESTACADOS */}
      <section aria-labelledby="destaques" className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Mais pedidos</p>
            <h2 id="destaques" className="mt-2 font-display text-3xl">Fios e mascotes</h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/fios">Ver todas as peças</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section aria-labelledby="como-funciona" className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Processo</p>
        <h2 id="como-funciona" className="mt-2 font-display text-3xl">Como funciona</h2>
        <ol className="mt-8 grid gap-6 md:grid-cols-4">
          {delivery.steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-border bg-card p-5">
              <span className="font-display text-2xl text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-base">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ESTILOS DE LETRA */}
      <section aria-labelledby="estilos" className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Referências de letra</p>
        <h2 id="estilos" className="mt-2 font-display text-3xl">Quatro estilos à escolha</h2>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Indica o código do estilo no pedido. As pré-visualizações abaixo são uma aproximação
          tipográfica — a peça final é trabalhada à mão.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {fontStyles.map((f) => (
            <article key={f.code} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base">
                  <span className="text-gold">{f.code}</span> · {f.name}
                </h3>
                <span
                  aria-hidden
                  className="text-3xl text-gold-soft"
                  style={{ fontFamily: f.previewFamily, fontStyle: f.previewStyle }}
                >
                  Nome
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{f.description}</p>
              <p className="mt-2 text-sm">
                <Sparkles className="mr-1 inline size-3.5 text-gold" aria-hidden />
                Recomendado para: {f.recommended}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* QUADROS DIGITAIS — TEASER */}
      <section aria-labelledby="quadros" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-lg border border-border bg-surface p-8">
          <span className="rounded-full border border-gold/40 px-3 py-1 text-xs tracking-widest text-gold">
            {quadrosDigitais.badge}
          </span>
          <h2 id="quadros" className="mt-4 font-display text-3xl">{quadrosDigitais.name}</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{quadrosDigitais.intro}</p>
          <div className="mt-6">
            <Button asChild variant="outline">
              <Link to="/quadros-digitais">Saber mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section aria-labelledby="cta" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-lg border border-border bg-card p-8 text-center">
          <Ruler className="mx-auto size-6 text-gold" aria-hidden />
          <h2 id="cta" className="mt-4 font-display text-3xl">Pronto para encomendar?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            Preenche o formulário com o nome, a cor e o tamanho em cm. A mensagem é preparada para
            enviar pelo WhatsApp e a administração confirma o preço final.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/encomendar">Abrir formulário</Link>
            </Button>
            <WhatsappCta
              variant="outline"
              message="Olá West Buniss! Quero informações sobre um fio personalizado."
              label="Falar no WhatsApp"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CategoryCard({
  to,
  title,
  text,
  badge,
}: {
  to: "/fios" | "/quadros-digitais";
  title: string;
  text: string;
  badge?: string;
}) {
  return (
    <Link
      to={to}
      className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-gold/50"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-xl">{title}</h3>
        {badge && (
          <span className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.65rem] tracking-widest text-gold">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{text}</p>
      <span className="mt-4 inline-block text-sm text-gold">Ver mais →</span>
    </Link>
  );
}