const prisma = require("../db");

const getTotalOrder = async (food_id) => {
  const data = await prisma.order.groupBy({
    by: ["food_id"],
    where: {
      food_id: food_id,
    },
    _count: {
      food_id: true,
    },
  });
  return data;
};

module.exports = { getTotalOrder };
