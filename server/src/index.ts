import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boilded Egg",
      price: 50,
      text: "Boiled eggs are eggs, typically from a chicken, cooked with their shells unbroken, usually by immersion in boiling water.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 250,
      text: "Ramyeon is the Korean version of instant Japanese ramen. In Japan, ramen can be instant or fresh, but in Korea, ramyeon is always instant.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 150,
      text: "The dry heat quickly cooks the surface of the chicken, then slowly cooks the middle.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 150,
      text: " a breadlike food made from a dough or batter that is usually fried or baked in small flat shapes and is often unleavened.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 180,
      text: "A burger is a patty of ground beef grilled and placed between two halves of a bun.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 120,
      text: "Pancakes are thin, flat, circular cakes made from a batter of flour, eggs, and milk.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
