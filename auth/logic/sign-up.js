const { Users } = require('../../models');
const checkIfUserExists = require('./check-user-exists');
const encryptPassword = require('./encrypt-password');
const getGeoLocation = require('./get-geo-location');

module.exports = async (req, res) => {
    try {
        const { email, password, address } = req.body;
        await checkIfUserExists(email);
        const hash = await encryptPassword(password);
        const coordinates = await getGeoLocation(address);
        const doc = await Users.create({
            email: email, 
            password: hash,
            address: address,
            location: { coordinates: coordinates }
        });
        res.status(201).json({ user: doc });
    } catch(err) {
        res.status(500).json({ err: err.message })
    }
}