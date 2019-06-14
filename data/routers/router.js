const router = require('express').Router();
const Users = require('../user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../auth/secret')



router.post('/register', (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 12);

  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ error: `${error}` });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token, 
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const option = {
    expiresIn: '1d'
  };
  return jwt.sign(payload, secret.jwtSecret, option);
}


router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.send('Unable to logout');
      } else {
        res.send('Logged out');
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
