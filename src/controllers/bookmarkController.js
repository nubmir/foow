const {
  bookmarkById,
  getAllBookmark,
  addBookmark,
  deleteBookmark,
} = require("../models/bookmarkModels");
const { priceFood } = require("../models/foodModels");
const { getTotalOrder } = require("../models/orderModels");

//untuk menambahkan food ke bookmark
const addBookmarkUser = async (req, res) => {
  const uuid = req.user.uuid; // Mengambil user_uuid dari cookie
  const food_id = parseInt(req.params.food_id);

  try {
    if (!uuid) {
      return res.status(400).json({ message: "invalid user UUID" });
    }

    if (!food_id) {
      return res.status(400).json({ message: "invalid food_id" });
    }

    // Periksa apakah makanan sudah di-bookmark
    const existingBookmark = await bookmarkById(uuid, food_id);

    if (existingBookmark) {
      return res
        .status(400)
        .json({ message: "Food already exists in bookmark" });
    }

    // Tambahkan bookmark baru
    const newBookmark = await addBookmark(uuid, food_id);

    return res.status(201).json({
      data: newBookmark,
      message: "Food successfully added to bookmark",
    });
  } catch (error) {
    console.error("Error in addBookmarkHandler:", error);
    return res.status(500).json({ message: "Data insert failed" });
  }
};

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
      return res.status(200).json({
        data: null,
        message: "data not found",
      });
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

//remove food from bookmark
const deleteBookmarkUser = async (req, res) => {
  try {
    const uuid = req.user.uuid;
    const food_id = parseInt(req.params.food_id);
    const bookmark = await bookmarkById(uuid, food_id);

    if (bookmark?.length < 1 || bookmark == null) {
      return res.status(404).json({ data: null, message: "data not found" });
    }

    // Hapus bookmark
    const deleteData = await deleteBookmark(uuid, food_id);

    res.status(200).json({
      data: null, // Mengembalikan `null` karena data sudah dihapus
      message: "Bookmark successfully deleted",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  findBookmark,
  getBookmarkUser,
  addBookmarkUser,
  deleteBookmarkUser,
};
