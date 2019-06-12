
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../auth/secret');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

 
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
        if (error) { res.status(401).json({ error: 'Unauthorized - Token' }) }
      else {
          req.decodedToken = decodedToken,
        next()
      }
    })
 
}