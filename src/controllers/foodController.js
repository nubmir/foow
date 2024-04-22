const { category } = require("../db");
const { findFood } = require("../models/foodModels");

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

module.exports = { foodSearch };
