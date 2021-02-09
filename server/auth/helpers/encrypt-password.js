const { genSaltSync, hashSync } = require('bcrypt-nodejs');

module.exports = async password => {
    try {
        const salt = genSaltSync(12);
        const hash = hashSync(password, salt);
        return hash;
    } catch(err) {
        throw err;
    }
}