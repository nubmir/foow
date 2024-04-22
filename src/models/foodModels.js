const prisma = require("../db");

//untuk fitur search
const findFood = async (query) => {
  const data = await prisma.food.findMany({
    where: {
      name: {
        contains: query,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      image: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  });
  return data;
};

//untuk mendapatkan total harga pada makanan berdasarkan food_id
const priceFood = async (food_id) => {
  const data = await prisma.ingredients.groupBy({
    by: ["food_id"],
    where: {
      food_id: food_id,
    },
    _sum: {
      price: true,
    },
  });
  return data[0]._sum.price;
};

//untuk mengubah rating pada food ketika user melakukan review/rate
const updateFoodRating = async (food_id, rating) => {
  const data = await prisma.food.update({
    where: {
      id: food_id,
    },
    data: {
      rating: rating,
    },
  });
  return data;
};

module.exports = { findFood, priceFood, updateFoodRating };
