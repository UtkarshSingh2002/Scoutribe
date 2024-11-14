// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const auth = (requiredRole) => async (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user || (requiredRole && user.role !== requiredRole)) {
      return res.status(403).json({ message: 'Access denied.' });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = auth;
