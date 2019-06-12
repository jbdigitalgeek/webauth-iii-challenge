const bcrypt = require('bcryptjs');
const Users = require('../data/user-model');


function protected(req, res, next) {
  const { username, password } = req.headers;
   

  if (req.session && req.session.username) { 
    next();
  } else {
    if (username && password) {
      Users
        .findBy({ username })
        .first()
        .then(user => {
          if (user && bcrypt.compareSync(password, user.password)) {
            next();
          } else {
            res.status(401).json({ message: 'Unauthorized' });
          }
        })
        .catch(error => {
          res.status(500).json({ error: `${error}` });
        });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  }
}

 module.exports = protected;