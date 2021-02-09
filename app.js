const express = require('express');
const app = express();
const { connect } = require('mongoose');
const path = require('path')

app.use(require('body-parser').json());
app.use(require('./server/middleware/cors'));
app.use(require('./server/middleware/auth/check-auth'));
app.use('/api', require('./server/api/routes'));
app.use('/auth', require('./server/auth/routes'));
app.use(express.static('build'));

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

connect(process.env.DB_LINK, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        app.listen(3001);
        console.log('> listening to port 3001')
    })
    .catch(err => {
        console.log(err);
    })


/* 
    note: before procution, make sure to map() your responses;
*/
