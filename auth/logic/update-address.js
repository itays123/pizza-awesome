const { Users } = require('../../models');
const getGeoLocation = require('./get-geo-location');

module.exports = async (uid, address) => {
    try {
        const coordinates = await getGeoLocation(address);
        const doc = await Users.findByIdAndUpdate(uid, { $set: {
            address: address,
            location: { coordinates }
        } });
        return doc;
    } catch {

    }
}
