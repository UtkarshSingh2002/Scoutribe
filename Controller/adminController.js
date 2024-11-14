// controllers/adminController.js
const User = require('./models/User');

exports.getAllUsers = async (req, res) => {
  const hrUsers = await User.find({ role: 'HR' });
  const employees = await User.find({ role: 'Employee' });
  res.json({ hrUsers, employees });
};
