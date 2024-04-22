const prisma = require("../db");

//untuk mendapatkan jumlah order pada suatu makanan dengan parameter food_id
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
  return data[0]._count.food_id;
};

//untuk mengubah rating pada table order ketika user melakukan rate untuk pesanan tersebut
const updateOrderRating = async (rate, uuid, id) => {
  const data = await prisma.order.update({
    where: {
      id: id,
      user_uuid: uuid,
    },
    data: {
      rating: rate,
    },
  });
  return data;
};

//untuk mendapatkan total rating pada makanan tertentu berdasarkan semua user
const getTotalRating = async (food_id) => {
  const totalCount = await prisma.order.count({
    where: {
      food_id: food_id,
    },
  });
  const totalRating = await prisma.order.groupBy({
    by: ["food_id"],
    where: {
      food_id: food_id,
    },
    _sum: {
      rating: true,
    },
  });
  return { totalCount, totalRating: totalRating[0]._sum.rating };
};

module.exports = { getTotalOrder, updateOrderRating, getTotalRating };
