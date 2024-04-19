const router = require("express").Router();
const { register, login } = require("../controllers/authController");
const {
  loginValidation,
  RegisterValidation,
} = require("../middlewares/authValidation");

router.post("/register", RegisterValidation, register);
router.post("/login", loginValidation, login);

module.exports = router;
