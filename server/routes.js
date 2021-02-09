const express = require('express');
const router = express.Router();
const path = require('path')

router.use(require('body-parser').json());
router.use(require('./middleware/cors'));
router.use(require('./middleware/auth/check-auth'));
router.use('/api', require('./api/routes'));
router.use('/auth', require('./auth/routes'));
router.use(express.static('build'));

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

module.exports = router;