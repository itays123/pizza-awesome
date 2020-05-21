const { Pizzas } = require('../../models');

module.exports = async (req, res) => {
    if (!req.isAuth || !req.isAdmin) {
        res.status(401).json({ err: 'Unauthorized' });
        return;
    }
    try {
        const { lng, lat } = process.env.ADMIN;
        const orders = await Pizzas.aggregate([
            {
               $geoNear: {
                  near: { type: "Point", coordinates: [ lng, lat ] }, 
                  spherical: true,
                  distanceField: "calcDistance"
               }
            }
         ]);
         res.json(orders);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}