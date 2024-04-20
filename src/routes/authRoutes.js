const router = require("express").Router();
const { register, login, logout } = require("../controllers/authController");
const {
  loginValidation,
  RegisterValidation,
} = require("../middlewares/authValidation");

router.post("/register", RegisterValidation, register);
router.post("/login", loginValidation, login);
router.get("/logout", logout);

module.exports = router;
