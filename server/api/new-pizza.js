const { Pizzas } = require('../models');

module.exports = async (req, res) => {
    try {
        if (!req.isAuth) {
            res.status(401).json({ err: 'Unauthenticated' });
            return;
        }
        const { userId } = req.user;
        const { title, topics, flags } = req.body;
        const doc = await Pizzas.create({
            user: userId,
            title, 
            topics, 
            flags
        });
        res.status(201).json(doc);
    } catch(err) {
        res.status(500).json({ err: err.message });
    }
}