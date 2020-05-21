const express = require('express');
const router = express.Router();
const newPizza = require('./logic/new-pizza');
const getOrders = require('./logic/get-orders');

router.post('/', newPizza);
router.get('/admin', getOrders);

module.exports = router;