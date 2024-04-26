const router = require("express").Router();
const { findBookmark } = require("../controllers/bookmarkController");
const { getCategoryData } = require("../controllers/categoryController");
const { foodSearch, getFoodById, getRandomFoods } = require("../controllers/foodController");
const { ratingFeature } = require("../controllers/orderController");
const { verify } = require("../middlewares/authorization");

//categories
router.get("/categories", getCategoryData);

//food
router.get("/food/random", getRandomFoods);

//food
router.get("/food/:id", getFoodById);

//food
router.get("/food/search", foodSearch);

//bookmark
router.get("/bookmark/:food_id", verify, findBookmark);

//order
router.patch("/order/rating/:id", verify, ratingFeature);

module.exports = router;