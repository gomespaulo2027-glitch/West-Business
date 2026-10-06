import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, WHATSAPP_NOT_CONFIGURED } from "@/lib/whatsapp";

type Props = {
  message: string;
  label?: string;
  variant?: "default" | "outline";
  className?: string;
};

export function WhatsappCta({
  message,
  label = "Pedir orçamento no WhatsApp",
  variant = "default",
  className,
}: Props) {
  const href = whatsappLink(message);

  if (!href) {
    return (
      <div
        role="status"
        className={`rounded-md border border-dashed border-border px-4 py-3 text-sm text-muted-foreground ${className ?? ""}`}
      >
        {WHATSAPP_NOT_CONFIGURED}
      </div>
    );
  }

  return (
    <Button asChild variant={variant} size="lg" className={className}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="size-4" aria-hidden />
        {label}
      </a>
    </Button>
  );
}
