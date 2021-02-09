const { Users } = require('../../models');

module.exports = async email => {
    try {
        const user = await Users.findOne({ email });
        if (user) throw new Error('user exists!');
        return true;
    } catch(err) {
        throw err; 
    }
}