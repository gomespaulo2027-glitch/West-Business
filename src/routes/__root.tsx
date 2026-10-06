import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/config/site";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><p className="eyebrow">Erro 404</p><h1 className="mt-2 text-5xl font-display">Página não encontrada</h1><p className="mt-4 text-sm text-muted-foreground">A página que procuras não existe ou foi movida.</p><Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">Voltar ao início</Link></div></div>}
function ErrorComponent({error,reset}:ErrorComponentProps){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"root"})},[error]);return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><p className="eyebrow">Ocorreu um erro</p><h1 className="mt-2 text-3xl font-display">Não conseguimos carregar esta página.</h1><button onClick={()=>{router.invalidate();reset()}} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Tentar novamente</button></div></div>}

export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{title:`${site.name} — peças personalizadas`},{name:"description",content:site.shortDescription},{name:"author",content:site.name},{property:"og:title",content:`${site.name} — peças personalizadas`},{property:"og:description",content:site.shortDescription},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/west-business-logo.svg",type:"image/svg+xml"}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent});
function RootShell({children}:{children:ReactNode}){return <html lang="pt-AO"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><div className="min-h-screen"><Header/><main><Outlet/></main><Footer/></div></QueryClientProvider>}
