const prisma = require("../db");

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
  return data;
};

module.exports = { findFood, priceFood };
