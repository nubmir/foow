const prisma = require("../db");

const getData = async () => {
  const data = await prisma.category.findMany();
  return data;
};

module.exports = { getData };
