// controllers/employeeController.js
exports.getProfile = async (req, res) => {
    res.json(req.user);
  };
  