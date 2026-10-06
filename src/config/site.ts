export const WHATSAPP_NUMBER="";
export const INSTAGRAM_URL="";
export const EMAIL="";

export const site={name:"West Business",tagline:"Nomes transformados em peças personalizadas.",shortDescription:"Fios e mascotes personalizados. Escolhe o nome, a cor, o tamanho e um estilo de letra de referência.",currency:"Kz"};

export const delivery={badge:"Produção: mínimo 3 semanas, máximo 1 mês",short:"Cada peça é feita por encomenda. O prazo de produção é de no mínimo 3 semanas e no máximo 1 mês.",steps:[
{title:"Envia o pedido",text:"Indica o tipo de peça, nome ou nomes, cor e tamanho em cm. Podes também indicar o estilo de letra."},
{title:"Confirmação",text:"A administração confirma o preço final, de acordo com o comprimento do nome e a cor escolhida."},
{title:"Pagamento ou sinal",text:"A produção começa depois da confirmação do pagamento ou do sinal pela administração."},
{title:"Produção",text:"A peça é produzida por encomenda dentro do prazo informado: mínimo 3 semanas e máximo 1 mês."}],terms:[
"Os preços apresentados no site são valores de referência. O valor final é confirmado pela administração conforme o comprimento do nome e a cor escolhida.",
"A produção inicia apenas após confirmação do pagamento ou do sinal pela administração.",
"Depois de a personalização começar, o cancelamento pode ter custos porque a peça passa a ser exclusiva do cliente.",
"Prazo de produção: mínimo 3 semanas, máximo 1 mês.",
"O pagamento é combinado diretamente com a administração. Este site não processa pagamentos online."
]};

export type PriceRef={label:string;amount:number};
export type Product={slug:string;name:string;category:"fios"|"mascote";image:string;description:string;prices:PriceRef[];details:string[]};
export const products:Product[]=[
{slug:"fio-personalizado",name:"Fio personalizado",category:"fios",image:"fioCoroa",description:"Transforma um nome numa peça personalizada para uso pessoal ou para oferecer.",prices:[{label:"1 nome",amount:6800},{label:"2 nomes",amount:12200}],details:["Escolha do estilo de letra de referência.","Tamanho indicado em centímetros.","Cor desejada; algumas combinações podem alterar o preço final."]},
{slug:"fio-dois-nomes",name:"Fio com dois nomes",category:"fios",image:"fioDoisNomes",description:"Uma composição personalizada com dois nomes.",prices:[{label:"2 nomes",amount:12200}],details:["Dois nomes na encomenda.","Estilo de letra de referência à escolha.","Tamanho e cor confirmados antes da produção."]},
{slug:"mascote-personalizada",name:"Mascote personalizada",category:"mascote",image:"mascote",description:"Uma peça personalizada com mascote e nome, definida com a administração antes da produção.",prices:[{label:"1 nome",amount:8000},{label:"2 nomes",amount:14500}],details:["A mascote é combinada com a administração.","Tamanho indicado em centímetros.","Cor e extensão do nome podem alterar o preço final."]}];

export const fontStyles=[
{code:"#03",name:"Cursiva com Coroa",description:"Referência de estilo com presença e detalhe.",recommended:"peças de casal e nomes com destaque",previewFamily:"'Playfair Display',serif",previewStyle:"italic" as const},
{code:"#07",name:"Cursiva Clássica",description:"Referência fluida e elegante.",recommended:"nomes e peças românticas",previewFamily:"'Great Vibes',cursive",previewStyle:"normal" as const},
{code:"#11",name:"Caligrafia Fina",description:"Referência delicada e discreta.",recommended:"nomes com aparência leve",previewFamily:"'Cormorant Garamond',serif",previewStyle:"italic" as const},
{code:"#17",name:"Cursiva Moderna Expressiva",description:"Referência fluida com mais movimento.",recommended:"nomes e frases",previewFamily:"'Dancing Script',cursive",previewStyle:"normal" as const}];
export const colorOptions=["Dourado","Prateado","Preto","Branco","Vermelho","Rosa","Azul","Outra cor (indico nas notas)"];
export const sizeHints=["3 cm","4 cm","5 cm","6 cm","7 cm","8 cm"];
export const quadrosDigitais={slug:"quadros-digitais",name:"Quadros digitais",available:false,badge:"Em breve",intro:"Uma nova linha de quadros digitais personalizados está em preparação. Modelos, tamanhos e preços serão publicados quando estiver disponível.",notes:["Ainda não há modelos nem preços definidos para esta linha.","Acompanha a abertura da categoria pelo canal de atendimento."],items:[] as Product[]};
export const faq=[
{q:"Quanto tempo leva a minha peça?",a:"O prazo de produção é de no mínimo 3 semanas e no máximo 1 mês."},
{q:"O preço do site é o preço final?",a:"Não. Os valores são de referência. O preço final é confirmado pela administração conforme o comprimento do nome e a cor escolhida."},
{q:"Como faço a encomenda?",a:"Preenche o formulário com nome, tipo de peça, cor e tamanho em cm. A administração confirma o preço final e o prazo."},
{q:"Posso pagar no site?",a:"Não. O site não processa pagamentos online. O pagamento ou sinal é combinado diretamente com a administração."},
{q:"Posso cancelar depois de encomendar?",a:"Depois de a personalização começar, o cancelamento pode ter custos porque a peça passa a ser exclusiva do cliente."},
{q:"Que informação tenho de dar?",a:"Nome ou nomes, tipo de peça, cor desejada, tamanho em cm e, se quiseres, o estilo de letra de referência."}];
export const formatKz=(amount:number)=>`${amount.toLocaleString("pt-AO").replace(/\u00a0/g,".")} Kz`;
