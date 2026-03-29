import { NextResponse } from "next/server";

const recipes = [
  {
    id: "1",
    title: "Pasta Carbonara",
    image: "/img/veggie_carbonara.jpg",
    time: 20,
    description: "Classic Italian pasta with eggs and bacon",
    vegan: false,
  },
  {
    id: "2",
    title: "Vegan Buddha Bowl",
    image: "/img/roasted_veg_salad.jpg",
    time: 15,
    description: "Healthy and colorful vegetable bowl",
    vegan: true,
  },
  {
    id: "3",
    title: "Veg Alfredo",
    image: "/img/veg_alfredo.jpg",
    time: 30,
    description: "Creamy vegetable pasta with Alfredo sauce",
    vegan: true,
  },
  {
    id: "4",
    title: "Mushroom Risotto",
    image: "/img/mushroom_risotto.jpg",
    time: 25,
    description: "Creamy and aromatic mushroom risotto",
    vegan: false,
  },
  {
    id: "5",
    title: "Lentil Soup",
    image: "/img/veg_lentil_soup.jpg",
    time: 10,
    description: "Protein-rich and hearty lentil soup",
    vegan: true,
  },
  {
    id: "6",
    title: "Grilled Mushrooms",
    image: "/img/grilled_mushrooms.jpg",
    time: 35,
    description: "Grilled mushrooms with herbs and spices",
    vegan: true,
  },
  {
    id: "7",
    title: "Veggie Stir Fry",
    image: "/img/veg_stir_fry.jpg",
    time: 40,
    description: "Quick and delicious vegetable stir fry",
    vegan: true,
  },
  {
    id: "8",
    title: "Veggie Tacos",
    image: "/img/veggie_tacos.jpg",
    time: 20,
    description: "Flavorful tacos with roasted vegetables",
    vegan: true,
  },
  {
    id: "9",
    title: "Chocolate Cookies",
    image: "/img/chocolate_cookies.jpg",
    time: 5,
    description: "Delicious chocolate cookies for dessert",
    vegan: false,
  },
];

export async function GET() {
  return NextResponse.json(recipes);
}
