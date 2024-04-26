const prisma = require("../db");

//untuk mendapatkan jumlah order pada suatu makanan dengan parameter food_id ---------------------
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
  if (!data[0]?._count.food_id) {
    return 0;
  }
  return data[0]?._count.food_id;
};

//untuk mencari tau apakah ada order dengan id dan uuid tersebut ---------------------
const findOrderUser = async (id, uuid) => {
  const data = prisma.order.findUnique({
    where: {
      id: id,
      user_uuid: uuid,
    },
  });
  return data;
};

//untuk mengubah rating pada table order ketika user melakukan rate untuk pesanan tersebut ---------------------
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

//untuk mendapatkan total rating pada makanan tertentu berdasarkan semua user ---------------------------
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

//to get all order user data ----------------------------------------------
const getAllOrder = async (page, price, date = "desc", uuid) => {
  const showData = 10;
  const startIndex = (page - 1) * showData;
  const endIndex = startIndex + showData;
  const totalResults = await prisma.order.count({
    where: {
      user_uuid: uuid,
    },
  });
  const totalPages = Math.ceil(totalResults / showData);

  //get data order
  const order = await prisma.order.findMany({
    select: {
      id: true,
      food_id: true,
      date: true,
      food: {
        select: {
          name: true,
          image: true,
          rating: true,
        },
      },
    },
    where: {
      user_uuid: uuid,
    },
  });
  //get price food
  const priceFood = await prisma.ingredients.groupBy({
    by: ["food_id"],
    _sum: {
      price: true,
    },
  });
  //merge into one data
  const data = [];
  for (let i = 0; i < order.length; i++) {
    for (let j = 0; j < priceFood.length; j++) {
      if (order[i].food_id === priceFood[j].food_id) {
        let payload = {
          id: order[i].id,
          name: order[i].food.name,
          image: order[i].food.image,
          date: order[i].date,
          price: priceFood[j]._sum.price,
          rating: order[i].food.rating,
        };
        data.push(payload);
      }
    }
  }

  //sort by order
  if (price) {
    switch (price) {
      case "asc":
        data.sort((a, b) => a.price - b.price);
        break;
      case "desc":
        data.sort((a, b) => b.price - a.price);
        break;
    }
    //paginate
    const paginateData = data.slice(startIndex, endIndex);
    return {
      page,
      totalPages,
      totalResults,
      data: paginateData,
    };
  }

  //sort by date **default
  switch (date) {
    case "asc":
      data.sort((a, b) => new Date(a.date) - new Date(b.date));
      break;
    case "desc":
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
  }
  //paginate
  const paginateData = data.slice(startIndex, endIndex);
  return {
    page,
    totalPages,
    totalResults,
    data: paginateData,
  };
};

module.exports = {
  getTotalOrder,
  updateOrderRating,
  getTotalRating,
  findOrderUser,
  getAllOrder,
};
