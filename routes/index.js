const express = require('express')
const app = express()



//Use of routes
app.use(require('./user.js'));
app.use(require('./rol.js'));
app.use(require('./sala.js'));
app.use(require('./permiso_acceso.js'));

module.exports = app;
