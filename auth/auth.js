
const jwt = require('jsonwebtoken');
const secrets = require('../auth/secret');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
    if (error) {
      res.status(403).json({ message: 'Token problem' });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};
