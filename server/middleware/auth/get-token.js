const { decode } = require('jsonwebtoken');

module.exports = header => {
    try {
        if (!header) throw new Error('no header');
        const token = header.split(' ')[1];
        if (!token || token === '') throw new Error('invalid header');
        const decodedToken = decode(token, 'supersecretstring');
        if (!decodedToken) throw new Error('invalid token');
        const { userId } = decodedToken;
        return { userId };
    } catch(err) {
        throw err;
    }
}