import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { faq, products } from "@/config/site";

const pages = [
 {label:"Início",href:"/",keywords:"início west business"},
 {label:"Fios e mascotes",href:"/fios",keywords:"fio fios mascote personalizados"},
 {label:"Personalizar / encomendar",href:"/encomendar",keywords:"personalizar encomenda pedido whatsapp"},
 {label:"Entregas e condições",href:"/entregas-e-termos",keywords:"prazo produção pagamento cancelamento"},
 {label:"Perguntas frequentes",href:"/faq",keywords:"faq perguntas preço tamanho cor prazo"},
 {label:"Quadros digitais",href:"/quadros-digitais",keywords:"quadros digitais em breve"},
] as const;

export function SiteSearch({compact=false}:{compact?:boolean}) {
 const [open,setOpen]=useState(false); const [query,setQuery]=useState("");
 const results=useMemo(()=>{
  const q=query.trim().toLowerCase(); if(!q)return [];
  const items=[...pages,...products.map(p=>({label:p.name,href:`/produto?produto=${p.slug}`,keywords:`${p.name} ${p.category} ${p.description}`})),...faq.map(f=>({label:f.q,href:"/faq",keywords:f.a}))];
  return items.filter(x=>`${x.label} ${x.keywords}`.toLowerCase().includes(q)).slice(0,8);
 },[query]);
 if(!open)return <button type="button" onClick={()=>setOpen(true)} className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-3 text-sm hover:border-gold/60 hover:text-gold" aria-label="Pesquisar no site"><Search className="size-4" aria-hidden/><span className="hidden xl:inline">Pesquisar</span></button>;
 return <div className="relative">
  <div className="flex h-10 items-center gap-2 rounded-md border border-gold/50 bg-background px-3"><Search className="size-4 text-gold" aria-hidden/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Pesquisar..." className="w-32 bg-transparent text-sm outline-none placeholder:text-muted-foreground sm:w-48" aria-label="Pesquisar no site"/><button type="button" onClick={()=>{setQuery("");setOpen(false)}} aria-label="Fechar pesquisa"><X className="size-4"/></button></div>
  {query.trim()&&<div className="absolute right-0 top-12 z-[70] w-[min(92vw,22rem)] rounded-lg border border-border bg-surface p-2 shadow-2xl">{results.length?<ul>{results.map((x,i)=><li key={x.href+x.label+i}><a href={x.href} onClick={()=>{setOpen(false);setQuery("")}} className="block rounded-md px-3 py-2.5 text-sm hover:bg-accent hover:text-gold">{x.label}</a></li>)}</ul>:<p className="px-3 py-4 text-sm text-muted-foreground">Nenhum resultado. Tenta “preço”, “tamanho”, “mascote” ou “prazo”.</p>}</div>}
 </div>;
}