const { bookmarkById, getAllBookmark } = require("../models/bookmarkModels");
const { priceFood } = require("../models/foodModels");
const { getTotalOrder } = require("../models/orderModels");

//untuk mendapatkan semua data bookmark user
const getBookmarkUser = async (req, res) => {
  try {
    const uuid = req.user.uuid;
    const order = req.query.order;
    const price = req.query.price;
    const rating = req.query.rating;
    const page = parseInt(req.query.page);

    //validation
    if (page < 1) {
      return res.status(400).json({ message: "Error : Negative pagination" });
    }
    if ((price && order) || (price && rating) || (rating && order)) {
      return res.status(400).json({ message: "accept only 1 sort parameter" });
    }

    const data = await getAllBookmark(page, price, order, rating, uuid);
    return res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// untuk mendapatkan / mencari apakah ada bookmark dengan food_id dan uuid sekian
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
        price: price,
        rating: bookmark.food.rating,
        order: totalOrder,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { findBookmark, getBookmarkUser };
