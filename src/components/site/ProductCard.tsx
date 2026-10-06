import { Link } from "@tanstack/react-router";
import { formatKz, type Product } from "@/config/site";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  const from = Math.min(...product.prices.map((p) => p.amount));

  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card">
      <img
        src={images[product.image]}
        alt={`${product.name} em dourado, peça personalizada West Buniss`}
        loading="lazy"
        width={1200}
        height={1200}
        className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="space-y-4 p-5">
        <div>
          <h3 className="font-display text-xl">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">A partir de</p>
          <p className="font-display text-2xl text-gold">{formatKz(from)}</p>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            {product.prices.map((p) => (
              <li key={p.label}>
                {p.label}: <span className="text-foreground">{formatKz(p.amount)}</span>{" "}
                <span className="text-xs">(referência)</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-muted-foreground">
            O preço final pode variar conforme a cor e o comprimento do nome.
          </p>
        </div>

        <Button asChild variant="outline" className="w-full">
          <Link to="/encomendar" search={{ produto: product.slug }}>
            Personalizar esta peça
          </Link>
        </Button>
      </div>
    </article>
  );
}
