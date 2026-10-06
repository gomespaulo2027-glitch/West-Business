import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion=AccordionPrimitive.Root;
export const AccordionItem=({className,...props}:React.ComponentProps<typeof AccordionPrimitive.Item>)=><AccordionPrimitive.Item className={cn("border-b border-border",className)} {...props}/>;
export const AccordionTrigger=({className,children,...props}:React.ComponentProps<typeof AccordionPrimitive.Trigger>)=><AccordionPrimitive.Header><AccordionPrimitive.Trigger className={cn("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium hover:text-gold",className)} {...props}>{children}<ChevronDown className="size-4 shrink-0 transition-transform data-[state=open]:rotate-180"/></AccordionPrimitive.Trigger></AccordionPrimitive.Header>;
export const AccordionContent=({className,children,...props}:React.ComponentProps<typeof AccordionPrimitive.Content>)=><AccordionPrimitive.Content className={cn("overflow-hidden text-sm text-muted-foreground",className)} {...props}><div className="pb-4">{children}</div></AccordionPrimitive.Content>;