const {
  findFood,
  getAllFood,
  getAllFoodbyCategory,
} = require("../models/foodModels");

const foodSearch = async (req, res) => {
  try {
    const query = req.query.query || "";
    if (!query) {
      return res.status(400).json({ message: "query is empty" });
    }
    const food = await findFood(query);
    res.status(200).json({
      data: food.map((i) => {
        return {
          id: i.id,
          name: i.name,
          image: i.image,
          category: i.category.name,
        };
      }),
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//get all food
const getFood = async (req, res) => {
  try {
    const order = req.query.order;
    const price = req.query.price;
    const rating = req.query.rating;
    const page = parseInt(req.query.page);
    const category = parseInt(req.query.category);
    //validation
    if (page < 1) {
      return res.status(400).json({ message: "Error : Negative pagination" });
    }
    if ((price && order) || (price && rating) || (rating && order)) {
      return res.status(400).json({ message: "accept only 1 sort parameter" });
    }

    //jika filter berdasarkan category
    if (category) {
      const data = await getAllFoodbyCategory(
        page,
        price,
        order,
        rating,
        category
      );
      return res.status(200).json(data);
    } else {
      //jika dapatkan semua data makanan
      const data = await getAllFood(page, price, order, rating);
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { foodSearch, getFood };
