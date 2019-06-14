const router = require('express').Router();
const auth = require('../../auth/auth');
const Users = require('../user-model');

router.get('/users', auth, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedToken });
    })
    .catch(error => res.send(error));
});

module.exports = router;