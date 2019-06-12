const router = require('express').Router();
const Users = require('../user-model');
const protected = require('../../auth/auth');
const bcrypt = require('bcryptjs');


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
        req.session.username = user.username;
        res.status(200).json({ message: `Hello ${user.username}!` });
      } else {
        res.status(401).json({ message: ' Unauthorized ' });
      }
    })
    .catch(error => {
      res.status(500).json({ error: `${error}` });
    });
});

 router.get('/users', protected, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});


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
