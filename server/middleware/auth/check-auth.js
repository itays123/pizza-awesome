const decode = require('./get-token');

module.exports = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization');
        const adminEmail = process.env.ADMIN_EMAIL || process.env.ADMIN.email;
        const user = decode(authHeader);
        req.isAuth = true;
        req.user = user;
        if (adminEmail === user.email) req.isAdmin = true;
        next();
    } catch(err) {
        req.isAuth = false;
        next();
    }
}