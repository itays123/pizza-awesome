const { Pizzas } = require('../../models');

module.exports = async uid => {
    try {
        const pizzas = await Pizzas.find({ user: uid }).sort({ createdAt: 'desc' });
        return pizzas;
    } catch (err) {
        throw err;
    }
}