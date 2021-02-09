const { Users } = require('../models');
const { compareSync } = require('bcrypt-nodejs');
const { sign } = require('jsonwebtoken');
const getPizzasByUser = require('./helpers/get-pizzas-by-user');

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) throw new Error('user not found');
        const isPasswordCorrect = compareSync(password, user.password);
        if(!isPasswordCorrect) throw new Error('incorrect password');
        const userPizzas = await getPizzasByUser(user._id);
        const token = sign({ userId: user._id }, 'supersecretstring');
        res.json({ token, user: {...user._doc, pizzas: userPizzas} });
    } catch(err) {
        res.status(401).json({ err: err.message })
    }
}