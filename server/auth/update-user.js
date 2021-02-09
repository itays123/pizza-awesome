const updateAddress = require('./helpers/update-address');
const updatePassword = require('./helpers/update-password');

module.exports =  async (req, res) =>  {
    try {
        const { userId } = req.user;
        if (!userId) throw new Error('you must log in to update');
        const { query } = req.body;
        if (!query.field) throw new Error('you must provide a filed to update');
        if (!query.data) throw new Error('you must provide data to update');

        if (query.field === 'address') {
            console.log('updaing address');
            const doc = await updateAddress(userId, query.data);
            console.log(doc.address);
            res.json({ user: doc });
        }

        if(query.field === 'password') {
            const doc = await updatePassword(userId, query.data);
            res.json({ user: doc });
        }

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

