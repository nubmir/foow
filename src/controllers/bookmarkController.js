const { bookmarkById } = require("../models/bookmarkModels");
const { priceFood } = require("../models/foodModels");
const { getTotalOrder } = require("../models/orderModels");

const findBookmark = async (req, res) => {
  try {
    const uuid = req.user.uuid;
    const food_id = parseInt(req.params.food_id);
    const bookmark = await bookmarkById(uuid, food_id);
    if (bookmark?.length < 1 || bookmark == null) {
      return res.status(200).json({ data: {}, message: "data not found" });
    }
    const price = await priceFood(food_id);
    const totalOrder = await getTotalOrder(food_id);
    res.status(200).json({
      data: {
        id: bookmark.food.id,
        name: bookmark.food.name,
        image: bookmark.food.image,
        price: price[0]._sum.price,
        rating: bookmark.food.rating,
        order: totalOrder[0]._count.food_id,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { findBookmark };
