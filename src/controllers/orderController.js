const { updateFoodRating } = require("../models/foodModels");
const { updateOrderRating, getTotalRating } = require("../models/orderModels");

const ratingFeature = async (req, res) => {
  try {
    const uuid = req.user.uuid;
    const id = parseInt(req.params.id);
    const rating = req.body.rating || null;
    if (!rating) {
      res.status(400).json({ message: "body request empty" });
    }

    //update order rating
    const data = await updateOrderRating(rating, uuid, id);

    //update food rating
    const { totalRating, totalCount } = await getTotalRating(data.food_id);
    const calculatedRating = Math.round(totalRating / totalCount);
    const foodRating = await updateFoodRating(data.food_id, calculatedRating);

    res.status(200).send({
      Data: {
        idorder: data.id,
        rated: data.rating,
        food_id: data.food_id,
        food: foodRating.name,
        food_rating: foodRating.rating,
      },
      message: "Food successfully rated",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { ratingFeature };
