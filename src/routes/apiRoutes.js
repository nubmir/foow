const router = require("express").Router();
const {
  findBookmark,
  getBookmarkUser,
} = require("../controllers/bookmarkController");
const { getCategoryData } = require("../controllers/categoryController");
const { foodSearch, getFood } = require("../controllers/foodController");
const {
  ratingFeature,
  getOrderUser,
} = require("../controllers/orderController");
const { verify } = require("../middlewares/authorization");

//categories
router.get("/categories", getCategoryData);

//food
router.get("/food/search", foodSearch);
router.get("/food", getFood);

//bookmark
router.get("/bookmark/:food_id", verify, findBookmark);
router.get("/bookmark", verify, getBookmarkUser);

//order
router.patch("/order/rating/:id", verify, ratingFeature);
router.get("/order", verify, getOrderUser);

module.exports = router;
