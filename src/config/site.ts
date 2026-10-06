/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ÁREA DE CONFIGURAÇÃO (apenas para a administração do negócio)
 * ─────────────────────────────────────────────────────────────────────────────
 * Tudo o que muda com frequência — preços, número de WhatsApp, Instagram,
 * prazos, textos de entrega e produtos futuros — é editado NESTE ficheiro.
 * Não é necessário alterar mais nenhuma parte do site.
 *
 * COMO CONFIGURAR O WHATSAPP:
 *   Escreva o número em formato internacional, apenas dígitos, sem "+",
 *   sem espaços e sem zeros à frente. Angola = indicativo 244.
 *   Exemplo: "244923000000"
 *   Enquanto o valor estiver vazio (""), o site mostra um aviso seguro
 *   em vez de um link quebrado.
 */

export const WHATSAPP_NUMBER = ""; // <-- SUBSTITUIR pelo número real. Ex.: "244923000000"

export const INSTAGRAM_URL = ""; // <-- SUBSTITUIR pelo link real. Ex.: "https://instagram.com/westbuniss"

export const EMAIL = ""; // opcional

export const site = {
  name: "West Buniss",
  tagline: "Nomes transformados em peças elegantes para usar.",
  shortDescription:
    "Fios e mascotes personalizados feitos à mão em Angola. Escolhe o nome, o estilo de letra, a cor e o tamanho.",
  city: "Luanda, Angola",
  currency: "Kz",
};

/** Prazo de produção e entrega — texto único reutilizado em todo o site. */
export const delivery = {
  badge: "Produção de 3 semanas a 1 mês",
  short: "Cada peça é feita por encomenda: a produção leva no mínimo 3 semanas e no máximo 1 mês.",
  steps: [
    {
      title: "Pedido de orçamento",
      text: "Envia o nome, o tipo de peça, a cor e o tamanho em cm pelo WhatsApp. O formulário do site prepara a mensagem por ti.",
    },
    {
      title: "Confirmação do preço",
      text: "O preço final é confirmado pela administração, de acordo com o comprimento do nome e a complexidade da cor escolhida.",
    },
    {
      title: "Pagamento ou sinal",
      text: "A produção só começa depois de o pagamento (ou sinal) ser confirmado pela administração.",
    },
    {
      title: "Produção e entrega",
      text: "A peça é feita à mão. O prazo é de 3 semanas a 1 mês, conforme a complexidade e a fila de produção.",
    },
  ],
  terms: [
    "O preço indicado no site é um valor de referência (a partir de). O valor final depende do comprimento do nome e da cor escolhida.",
    "A produção inicia apenas após confirmação do pagamento ou do sinal pela administração.",
    "Depois de a personalização começar, não é possível cancelar a encomenda sem custos, porque a peça já é exclusiva do cliente.",
    "Prazo de produção: mínimo 3 semanas, máximo 1 mês.",
    "O pagamento é combinado diretamente com a administração pelo WhatsApp. Este site não processa pagamentos online.",
  ],
};

export type PriceRef = { label: string; amount: number };

export type Product = {
  slug: string;
  name: string;
  category: "fios" | "mascote";
  image: string; // chave do mapa de imagens em src/config/images.ts
  description: string;
  prices: PriceRef[];
  details: string[];
};

export const products: Product[] = [
  {
    slug: "fio-personalizado",
    name: "Fio personalizado",
    category: "fios",
    image: "fioCoroa",
    description:
      "O nome em letra cursiva, trabalhado peça por peça. A escolha mais pedida para presente e para uso diário.",
    prices: [
      { label: "1 nome", amount: 6800 },
      { label: "2 nomes", amount: 12200 },
    ],
    details: [
      "Escolhe entre os quatro estilos de letra disponíveis.",
      "Tamanho definido por ti, em centímetros.",
      "Cor à escolha — algumas cores alteram o preço final.",
    ],
  },
  {
    slug: "fio-dois-nomes",
    name: "Fio com dois nomes",
    category: "fios",
    image: "fioDoisNomes",
    description:
      "Duas peças com nomes ligados, ou um fio com dois nomes na mesma composição. Muito procurado por casais e mãe e filho.",
    prices: [{ label: "2 nomes", amount: 12200 }],
    details: [
      "Ideal para casais, irmãos ou mãe e filho.",
      "Estilo #03 (cursiva com coroa) é o mais pedido para king & queen.",
      "Possibilidade de tamanhos diferentes para cada nome.",
    ],
  },
  {
    slug: "mascote-personalizada",
    name: "Mascote personalizada",
    category: "mascote",
    image: "mascote",
    description:
      "Uma figura escolhida pelo cliente junto ao nome. Acabamento mais detalhado e, por isso, um trabalho mais demorado.",
    prices: [
      { label: "1 nome", amount: 8000 },
      { label: "2 nomes", amount: 14500 },
    ],
    details: [
      "A mascote é combinada com a administração antes da produção.",
      "Peça com mais detalhe: confirma o tamanho em cm com atenção.",
      "Cor e nome influenciam o preço final.",
    ],
  },
];

/** Referências de letra fornecidas pelo negócio. */
export const fontStyles = [
  {
    code: "#03",
    name: "Cursiva com Coroa",
    description:
      "Maiúsculas marcadas e inclinadas, com coroa integrada. Presença forte.",
    recommended: "Pulseiras e fios de casal, peças king & queen.",
    previewFamily: "'Playfair Display', serif",
    previewStyle: "italic" as const,
  },
  {
    code: "#07",
    name: "Cursiva Clássica",
    description: "Curvas longas e fluidas, com traço contínuo e equilibrado.",
    recommended: "Nomes e frases românticas.",
    previewFamily: "'Great Vibes', cursive",
    previewStyle: "normal" as const,
  },
  {
    code: "#11",
    name: "Caligrafia Fina",
    description: "Traços ultrafinos e inclinados, discretos e delicados.",
    recommended: "Gravações subtis e iniciais.",
    previewFamily: "'Cormorant Garamond', serif",
    previewStyle: "italic" as const,
  },
  {
    code: "#17",
    name: "Cursiva Moderna Expressiva",
    description:
      "Letras fluidas com aspeto de pincel e terminações curvas modernas.",
    recommended: "Nomes, datas e frases.",
    previewFamily: "'Dancing Script', cursive",
    previewStyle: "normal" as const,
  },
];

export const colorOptions = [
  "Dourado",
  "Prateado",
  "Preto",
  "Branco",
  "Vermelho",
  "Rosa",
  "Azul",
  "Outra cor (indico nas notas)",
];

export const sizeHints = ["3 cm", "4 cm", "5 cm", "6 cm", "7 cm", "8 cm"];

/**
 * CATEGORIA FUTURA — QUADROS DIGITAIS
 * Quando os materiais forem fornecidos, basta colocar `available: true`,
 * acrescentar os itens em `items` e a categoria passa a aparecer no catálogo
 * sem qualquer alteração de design.
 */
export const quadrosDigitais = {
  slug: "quadros-digitais",
  name: "Quadros digitais",
  available: false,
  badge: "Em breve",
  intro:
    "Uma nova linha da West Buniss em preparação: quadros digitais personalizados. Os modelos, tamanhos e preços serão publicados quando a linha abrir.",
  notes: [
    "Ainda não há modelos nem preços definidos para esta linha.",
    "Para ser avisado quando abrir, envia mensagem pelo WhatsApp.",
  ],
  items: [] as Product[],
};

export const faq = [
  {
    q: "Quanto tempo leva a minha peça?",
    a: "Entre 3 semanas e 1 mês. Cada peça é feita por encomenda, depois da confirmação do pagamento ou do sinal.",
  },
  {
    q: "O preço do site é o preço final?",
    a: "Não. Os valores indicados são de referência (a partir de). O preço final é confirmado pela administração conforme o comprimento do nome e a cor escolhida.",
  },
  {
    q: "Como faço a encomenda?",
    a: "Preenche o formulário de personalização do site. A mensagem é preparada automaticamente e enviada pelo WhatsApp para confirmação do preço e do prazo.",
  },
  {
    q: "Posso pagar no site?",
    a: "Não. O site não processa pagamentos. O pagamento ou sinal é combinado diretamente com a administração pelo WhatsApp.",
  },
  {
    q: "Posso cancelar depois de encomendar?",
    a: "Depois de a personalização começar, não é possível cancelar sem custos, porque a peça já foi produzida com o nome do cliente.",
  },
  {
    q: "Que informação tenho de dar?",
    a: "Nome ou nomes a gravar, tipo de peça (fio ou mascote), cor desejada, tamanho em cm e, se quiseres, o estilo de letra de referência.",
  },
];

export const formatKz = (amount: number) =>
  `${amount.toLocaleString("pt-AO").replace(/\u00a0/g, ".")} Kz`;
