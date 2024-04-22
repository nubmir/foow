const prisma = require("../db");

const bookmarkById = async (uuid, food_id) => {
  const data = await prisma.bookmark.findUnique({
    where: {
      bookmark_id: {
        user_uuid: uuid,
        food_id: food_id,
      },
    },
    select: {
      food: {
        select: {
          id: true,
          name: true,
          image: true,
          rating: true,
        },
      },
    },
  });
  return data;
};

module.exports = { bookmarkById };
