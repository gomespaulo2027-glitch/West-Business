import { describe, expect, it } from "vitest";
import { faq, fontStyles, products, site } from "@/config/site";

describe("West Business configuration", () => {
  it("uses the official brand name", () => {
    expect(site.name).toBe("West Business");
    expect(site.name.toLowerCase()).not.toContain("buniss");
  });

  it("preserves the official reference prices", () => {
    expect(products.find(p => p.slug === "fio-personalizado")?.prices).toEqual([
      { label: "1 nome", amount: 6800 },
      { label: "2 nomes", amount: 12200 },
    ]);
    expect(products.find(p => p.slug === "mascote-personalizada")?.prices).toEqual([
      { label: "1 nome", amount: 8000 },
      { label: "2 nomes", amount: 14500 },
    ]);
  });

  it("keeps the four font references", () => {
    expect(fontStyles.map(f => f.code)).toEqual(["#03", "#07", "#11", "#17"]);
  });

  it("contains customer-critical FAQ answers", () => {
    expect(faq.map(item => item.q).join(" ")).toContain("Quanto tempo");
    expect(faq.map(item => item.q).join(" ")).toContain("preço");
  });
});
