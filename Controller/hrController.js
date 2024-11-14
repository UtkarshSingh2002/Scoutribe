// controllers/hrController.js
const User = require('./models/User');

exports.getEmployees = async (req, res) => {
  const employees = await User.find({ role: 'Employee' });
  res.json(employees);
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updatedEmployee = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedEmployee);
};
