import type { category } from "@/types/menu";


export const categories: category[] = [
  {
    id: "entradas",
    name: "Entradas",
    subcategories: [
      { id: "antipasto", name: "Antipasto" },
      { id: "extras-guarnicoes", name: "Extras e Guarnições" },
    ],
  },
  {
    id: "pratos-principais",
    name: "Pratos Principais",
    subcategories: [
      { id: "primeiro-prato", name: "Primeiro Prato (Primo Piatto)" },
      { id: "segundo-prato", name: "Segundo Prato (Secondo Piatto)" },
      { id: "pratos-nacionais", name: "Pratos Nacionais" },
    ],
  },
  {
    id: "pizzas",
    name: "Pizzas",
    subcategories: [
      { id: "todas-pizzas", name: "Todas as Pizzas" },
    ],
  },
  {
    id: "sobremesas",
    name: "Sobremesas",
    subcategories: [
      { id: "doces", name: "Doces" },
    ],
  },
  {
    id: "cafetaria",
    name: "Cafetaria",
    subcategories: [
      { id: "cafes-bebidas-quentes", name: "Cafés e Bebidas Quentes" },
    ],
  },
  {
    id: "bebidas-nao-alcoolicas",
    name: "Bebidas Não Alcoólicas",
    subcategories: [
      { id: "aguas", name: "Águas" },
      { id: "refrigerantes", name: "Refrigerantes" },
      { id: "sumos-naturais", name: "Sumos Naturais" },
    ],
  },
  {
    id: "vinhos",
    name: "Vinhos",
    subcategories: [
      { id: "vinhos-tintos", name: "Vinhos Tintos" },
      { id: "vinhos-brancos", name: "Vinhos Brancos" },
      { id: "vinhos-rose", name: "Vinhos Rosé" },
      { id: "vinhos-verdes", name: "Vinhos Verdes" },
      { id: "vinhos-a-copo", name: "Vinhos a Copo" },
      { id: "vinhos-licorosos-generosos", name: "Vinhos Licorosos / Generosos" },
    ],
  },
  {
    id: "espumantes-champagne",
    name: "Espumantes & Champagne",
    subcategories: [
      { id: "espumantes", name: "Espumantes" },
      { id: "champagne", name: "Champagne" },
    ],
  },
  {
    id: "cocktails",
    name: "Cocktails",
    subcategories: [
      { id: "cocktails-com-alcool", name: "Cocktails (Com Álcool)" },
      { id: "cocktails-sem-alcool", name: "Cocktails Sem Álcool" },
      { id: "sangrias-ao-copo", name: "Sangrias ao Copo" },
      { id: "sangria-em-jarro", name: "Sangria em Jarro" },
    ],
  },
  {
    id: "bebidas-destiladas",
    name: "Bebidas Destiladas",
    subcategories: [
      { id: "vodka", name: "Vodka" },
      { id: "rum", name: "Rum" },
      { id: "gin", name: "Gin" },
      { id: "whisky", name: "Whisky" },
      { id: "cognac", name: "Cognac" },
      { id: "aguardentes-bagaceiras-brandy", name: "Aguardentes / Bagaceiras / Brandy" },
      { id: "licores", name: "Licores" },
      { id: "vermutes", name: "Vermutes" },
    ],
  },
  {
    id: "cervejas",
    name: "Cervejas",
    subcategories: [
      { id: "cervejas", name: "Cervejas" },
    ],
  },
  {
    id: "alergenios",
    name: "Alergénios",
    subcategories: [
      { id: "informacao-alergenios", name: "Informação de Alergénios" },
    ],
  },
];
