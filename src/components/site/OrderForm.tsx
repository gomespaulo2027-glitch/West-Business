import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  colorOptions,
  fontStyles,
  products,
  sizeHints,
  delivery,
  site,
} from "@/config/site";
import { whatsappLink, WHATSAPP_NOT_CONFIGURED } from "@/lib/whatsapp";

const typeOptions = [
  { value: "fio", label: "Fio personalizado" },
  { value: "mascote", label: "Mascote personalizada" },
] as const;

export function OrderForm({ initialProduct }: { initialProduct?: string }) {
  const preset = products.find((p) => p.slug === initialProduct);

  const [tipo, setTipo] = useState<string>(preset?.category === "mascote" ? "mascote" : "fio");
  const [nome1, setNome1] = useState("");
  const [nome2, setNome2] = useState("");
  const [cor, setCor] = useState(colorOptions[0]);
  const [tamanho, setTamanho] = useState("");
  const [estilo, setEstilo] = useState("");
  const [notas, setNotas] = useState("");
  const [tentouEnviar, setTentouEnviar] = useState(false);

  const erros = {
    nome1: nome1.trim().length < 1 ? "Indica o nome a gravar." : "",
    tamanho: !/\d/.test(tamanho) ? "Indica o tamanho em centímetros (ex.: 5)." : "",
  };
  const valido = !erros.nome1 && !erros.tamanho;

  const mensagem = useMemo(() => {
    const tipoLabel = typeOptions.find((t) => t.value === tipo)?.label ?? tipo;
    return [
      `Olá ${site.name}! Quero encomendar uma peça personalizada.`,
      "",
      `• Tipo de peça: ${tipoLabel}`,
      `• Nome principal: ${nome1.trim() || "(a indicar)"}`,
      nome2.trim() ? `• Segundo nome: ${nome2.trim()}` : null,
      `• Cor desejada: ${cor}`,
      `• Tamanho: ${tamanho.trim() || "(a indicar)"} cm`,
      estilo ? `• Estilo de letra: ${estilo}` : null,
      notas.trim() ? `• Notas: ${notas.trim()}` : null,
      "",
      "Aguardo a confirmação do preço final e do prazo de produção. Obrigado!",
    ]
      .filter(Boolean)
      .join("\n");
  }, [tipo, nome1, nome2, cor, tamanho, estilo, notas]);

  const href = valido ? whatsappLink(mensagem) : null;
  const semWhatsapp = whatsappLink("teste") === null;

  return (
    <form
      className="space-y-7"
      onSubmit={(e) => {
        e.preventDefault();
        setTentouEnviar(true);
        if (href) window.open(href, "_blank", "noopener,noreferrer");
      }}
      noValidate
    >
      <fieldset className="space-y-3">
        <legend className="eyebrow">Tipo de peça</legend>
        <div className="grid grid-cols-2 gap-3">
          {typeOptions.map((opt) => (
            <label
              key={opt.value}
              className={`cursor-pointer rounded-md border px-4 py-3 text-sm transition-colors ${
                tipo === opt.value
                  ? "border-gold bg-accent text-gold"
                  : "border-border text-muted-foreground hover:border-gold/50"
              }`}
            >
              <input
                type="radio"
                name="tipo"
                value={opt.value}
                checked={tipo === opt.value}
                onChange={() => setTipo(opt.value)}
                className="sr-only"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nome1">Nome a gravar *</Label>
          <Input
            id="nome1"
            value={nome1}
            onChange={(e) => setNome1(e.target.value)}
            placeholder="Ex.: Joana"
            aria-invalid={tentouEnviar && !!erros.nome1}
            aria-describedby="nome1-erro"
          />
          {tentouEnviar && erros.nome1 && (
            <p id="nome1-erro" className="text-sm text-destructive">{erros.nome1}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="nome2">Segundo nome (opcional)</Label>
          <Input
            id="nome2"
            value={nome2}
            onChange={(e) => setNome2(e.target.value)}
            placeholder="Ex.: Miguel"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cor">Cor desejada</Label>
          <select
            id="cor"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground"
          >
            {colorOptions.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="tamanho">Tamanho em cm *</Label>
          <Input
            id="tamanho"
            inputMode="decimal"
            value={tamanho}
            onChange={(e) => setTamanho(e.target.value)}
            placeholder="Ex.: 5"
            aria-invalid={tentouEnviar && !!erros.tamanho}
            aria-describedby="tamanho-ajuda tamanho-erro"
          />
          <p id="tamanho-ajuda" className="text-xs text-muted-foreground">
            Tamanhos mais pedidos: {sizeHints.join(" · ")}
          </p>
          {tentouEnviar && erros.tamanho && (
            <p id="tamanho-erro" className="text-sm text-destructive">{erros.tamanho}</p>
          )}
        </div>
      </div>

      <fieldset className="space-y-3">
        <legend className="eyebrow">Estilo de letra (opcional)</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {fontStyles.map((f) => {
            const value = `${f.code} ${f.name}`;
            const active = estilo === value;
            return (
              <label
                key={f.code}
                className={`cursor-pointer rounded-md border p-4 transition-colors ${
                  active ? "border-gold bg-accent" : "border-border hover:border-gold/50"
                }`}
              >
                <input
                  type="radio"
                  name="estilo"
                  value={value}
                  checked={active}
                  onChange={() => setEstilo(value)}
                  className="sr-only"
                />
                <span className="flex items-baseline justify-between gap-2">
                  <span className={`text-sm ${active ? "text-gold" : "text-foreground"}`}>
                    {f.code} · {f.name}
                  </span>
                  <span
                    aria-hidden
                    className="text-2xl text-gold-soft"
                    style={{ fontFamily: f.previewFamily, fontStyle: f.previewStyle }}
                  >
                    {nome1.trim() ? nome1.trim().slice(0, 10) : "Nome"}
                  </span>
                </span>
                <span className="mt-2 block text-xs text-muted-foreground">{f.description}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor="notas">Notas (opcional)</Label>
        <Textarea
          id="notas"
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          rows={4}
          placeholder="Mascote desejada, data de entrega pretendida, outra cor, etc."
        />
      </div>

      <div className="rounded-lg border border-border bg-surface p-5">
        <h3 className="eyebrow">Resumo da mensagem</h3>
        <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm text-muted-foreground">
          {mensagem}
        </pre>
      </div>

      {semWhatsapp ? (
        <div role="status" className="rounded-md border border-dashed border-border px-4 py-3 text-sm text-muted-foreground">
          {WHATSAPP_NOT_CONFIGURED}. Copia o resumo acima e envia pelos canais do negócio.
        </div>
      ) : (
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          <MessageCircle className="size-4" aria-hidden />
          Enviar pedido pelo WhatsApp
        </Button>
      )}

      <p className="text-xs text-muted-foreground">
        {delivery.short} O preço final é confirmado pela administração e a produção começa após
        confirmação do pagamento ou sinal.
      </p>
    </form>
  );
}
