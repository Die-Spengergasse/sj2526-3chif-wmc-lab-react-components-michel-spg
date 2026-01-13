import type { Recipe } from "../types/Recipe";

export const recipes: Recipe[] = [
  {
    id: 1,
    title: "Cremige One-Pot-Pasta",
    imgUrl: "https://cdn.dummyjson.com/recipe-images/1.webp",
    description:
      "Eine einfache, cremige Pasta, die komplett in einem Topf gekocht wird – ideal, wenn es schnell gehen soll.",
    hints: [
      "Fertig in ca. 20 Minuten",
      "Wenig Abwasch",
      "Perfekt für unter der Woche",
    ],
  },
  {
    id: 2,
    title: "Bunte Veggie Bowl",
    imgUrl: "https://cdn.dummyjson.com/recipe-images/2.webp",
    description:
      "Eine frische Schüssel voller Gemüse, Körner und einem leichten Dressing – gesund und trotzdem sättigend.",
    hints: [
      "Viel frisches Gemüse",
      "Einfach variierbar",
      "Auch ideal zum Mitnehmen",
    ],  
  },
  {
    id: 3,
    title: "Chewy Choco Cookies",
    imgUrl: "https://cdn.dummyjson.com/recipe-images/3.webp",
    description:
      "Weiche Schoko-Cookies mit knusprigem Rand – perfekt als Dessert oder zum Kaffee am Nachmittag.",
    hints: [
      "Innen weich, außen knusprig",
      "Ideal zum Teilen",
      "Teig lässt sich einfrieren",
    ],
  },
];