const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    try {
      token = authHeader.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to request (excluding password)
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found. Please log in again.' });
      }

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid or expired token. Please log in again.' });
    }
  } else {
    return res.status(401).json({ message: 'Not authorized. Please log in.' });
  }
};

module.exports = { protect };