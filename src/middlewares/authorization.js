const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).send({ message: "No JWT token provided" });
    }
    let verify = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verify;
    next();
  } catch (error) {
    res.status(403).send({
      message: error.message,
    });
  }
};

module.exports = verify;
