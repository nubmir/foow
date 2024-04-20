const router = require("express").Router();
const { getCategoryData } = require("../controllers/categoryController");
const { verify } = require("../middlewares/authorization");

router.get("/categories", getCategoryData);

module.exports = router;
