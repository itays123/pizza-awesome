const express = require('express');
const router = express.Router();
const newPizza = require('./new-pizza');
const getOrders = require('./get-orders');

router.post('/', newPizza);
router.get('/admin', getOrders);

module.exports = router;