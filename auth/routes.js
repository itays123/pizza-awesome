const express = require('express');
const router = express.Router();
const signin = require('./logic/sign-in');
const signup = require('./logic/sign-up');
const updateUser = require('./logic/update-user');

router.post('/signin', signin);
router.post('/signup', signup);
router.put('/', updateUser);

module.exports = router;