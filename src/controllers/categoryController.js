const { getData } = require("../models/categoryModels");

const getCategoryData = async (req, res) => {
  try {
    const data = await getData();
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCategoryData };
