const decode = require('./get-token');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        const user = decode(authHeader);
        req.isAuth = true;
        req.user = user;
        if (process.env.ADMIN.email === user.email) req.isAdmin = true;
        next();
    } catch(err) {
        req.isAuth = false;
        next();
    }
}