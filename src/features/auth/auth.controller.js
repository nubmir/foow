const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const prisma = require('../../configs/config');
const secret = 'YOUR_SECRET_KEY'; // ganti dengan secret key Anda

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });

  res.json(user);
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

  res.json({ token });
};

const logout = (req, res) => {
  // Untuk logout, Anda bisa menghapus token JWT di client
  // karena JWT tidak menyimpan sesi di server
  res.json({ message: 'Logged out' });
};

module.exports = {
  register,
  login,
  logout,
};