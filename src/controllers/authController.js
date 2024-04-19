const { createAccount, getAccount } = require("../models/authModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const data = req.body;
    // if account with that email already exists
    const account = await getAccount(data.email);
    if (account) {
      return res.status(400).json({
        message: "Email alredy exists",
      });
    }
    const created = await createAccount(data);
    res.status(200).json({
      data: {
        uuid: created.uuid,
        email: created.email,
        username: created.username,
      },
      message: "Create Account Success",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const account = await getAccount(email);

    // account doesnt find
    if (!account) {
      return res.status(400).send({ message: "Account not found" });
    }

    //wrong password
    const isPasswordValid = bcrypt.compareSync(password, account.password);
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Wrong Password" });
    }

    //give token (Authentication)
    const SECRET_KEY = process.env.SECRET_KEY;
    const DURATION = 60 * 60 * 168;
    const token = jwt.sign(
      {
        uuid: account.uuid,
        email: account.email,
        username: account.username,
      },
      SECRET_KEY,
      { expiresIn: DURATION }
    );

    //set cookie for remember user info with jwt
    res.cookie("token", token);
    //send user info non credentials
    res.status(200).send({
      data: {
        uuid: account.uuid,
        email: account.email,
        username: account.username,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };
