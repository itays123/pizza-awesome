const express = require('express');
const router = express.Router();
const signin = require('./sign-in');
const signup = require('./sign-up');
const updateUser = require('./update-user');

router.post('/signin', signin);
router.post('/signup', signup);
router.put('/', updateUser);

module.exports = router;