const router = require("express").Router();
const { getCategoryData } = require("../controllers/categoryController");

router.get("/categories", getCategoryData);

module.exports = router;
