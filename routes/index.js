const express = require('express')
const app = express()



//Use of routes
// app.use(require('./access.js'));
// app.use(require('./rol.js'));
// app.use(require('./sala.js'));
app.use(require('./user.js'));

module.exports = app;
