import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { site } from "@/config/site";
import { SiteSearch } from "./SiteSearch";
import { Button } from "@/components/ui/button";

const nav=[{to:"/",label:"Início"},{to:"/fios",label:"Fios"},{to:"/fios",label:"Mascotes"},{to:"/quadros-digitais",label:"Quadros digitais"},{to:"/entregas-e-termos",label:"Como encomendar"}] as const;

export function Header(){
 const [open,setOpen]=useState(false);
 const menu=[...nav,{to:"/encomendar",label:"Personalizar / Encomendar"},{to:"/faq",label:"Perguntas frequentes"}];
 return <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
  <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-3 px-4 sm:px-5">
   <Link to="/" className="shrink-0" aria-label={`${site.name} — início`}><img src="/west-business-logo.svg" alt="West Business" width="210" height="55" className="h-10 w-auto sm:h-11"/></Link>
   <nav aria-label="Navegação principal" className="ml-auto hidden items-center gap-5 lg:flex">{nav.map((x,i)=><Link key={x.label+i} to={x.to} activeProps={{className:"text-gold"}} activeOptions={{exact:x.to==="/"}} className="text-sm text-muted-foreground hover:text-gold">{x.label}</Link>)}</nav>
   <div className="ml-auto flex items-center gap-2 lg:ml-4"><SiteSearch compact/><Button asChild className="hidden sm:inline-flex"><Link to="/encomendar">Encomendar</Link></Button><button type="button" onClick={()=>setOpen(v=>!v)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:border-gold/60 hover:text-gold" aria-expanded={open} aria-controls="menu-principal" aria-label={open?"Fechar menu":"Abrir menu"}>{open?<X className="size-5"/>:<Menu className="size-5"/>}</button></div>
  </div>
  {open&&<div id="menu-principal" className="border-t border-border bg-surface shadow-xl"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-7 md:grid-cols-[1fr_auto]"><nav aria-label="Menu do site"><p className="eyebrow">Explorar</p><div className="mt-3 grid gap-1 sm:grid-cols-2">{menu.map((x,i)=><Link key={x.label+i} to={x.to} onClick={()=>setOpen(false)} className="group flex items-center justify-between rounded-md px-3 py-3 text-sm hover:bg-accent hover:text-gold">{x.label}<ChevronRight className="size-4 opacity-0 group-hover:opacity-100"/></Link>)}</div></nav><div className="max-w-sm rounded-lg border border-gold/20 bg-background p-5"><p className="eyebrow">Personalização</p><h2 className="mt-2 font-display text-2xl">Cria uma peça com o teu nome.</h2><p className="mt-2 text-sm text-muted-foreground">Escolhe tipo, nomes, cor, tamanho e estilo. O preço final é confirmado pela administração.</p><Button asChild className="mt-4"><Link to="/encomendar" onClick={()=>setOpen(false)}>Começar agora</Link></Button></div></div></div>}
 </header>;
}