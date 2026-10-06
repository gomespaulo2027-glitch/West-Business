import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { formatKz, type Product } from "@/config/site";
import { images } from "@/config/images";
import { Button } from "@/components/ui/button";

export function ProductCard({product}:{product:Product}){
 const from=Math.min(...product.prices.map(p=>p.amount));
 return <article className="group overflow-hidden rounded-xl border border-border bg-card"><Link to="/produto" search={{produto:product.slug}} className="block overflow-hidden"><img src={images[product.image]} alt={`${product.name} — pré-visualização da peça`} loading="lazy" width="1200" height="1200" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"/></Link><div className="space-y-4 p-5"><div className="flex items-start justify-between gap-4"><div><p className="eyebrow">Personalizado</p><h3 className="mt-1 font-display text-2xl">{product.name}</h3></div><ArrowUpRight className="mt-1 size-4 text-gold"/></div><p className="text-sm leading-6 text-muted-foreground">{product.description}</p><div className="rounded-md bg-surface p-3"><p className="text-xs uppercase tracking-widest text-muted-foreground">Preço de referência</p><p className="mt-1 font-display text-2xl text-gold">a partir de {formatKz(from)}</p>{product.prices.map(p=><p key={p.label} className="text-xs text-muted-foreground">{p.label}: <span className="text-foreground">{formatKz(p.amount)}</span></p>)}</div><p className="text-xs text-muted-foreground">O valor final é confirmado pela administração.</p><Button asChild variant="outline" className="w-full"><Link to="/produto" search={{produto:product.slug}}>Ver detalhes e personalizar</Link></Button></div></article>;
}