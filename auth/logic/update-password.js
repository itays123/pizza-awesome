const { Users } = require('../../models');
const encryptPassword = require('./encrypt-password');

module.exports = async (uid, password) => {
    try {
        const hash = encryptPassword(password);
        const doc = await Users.findByIdAndUpdate(uid, { $set: {
            password: hash
        } });
        return doc;
    } catch(err) {
        throw err;
    }
}