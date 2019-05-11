

var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const port = 3000


// =============
// Middelware
app.use(bodyParser.json)

// Atributo para dar seguridad
app.use(bodyParser.urlencoded({
  extended: false
}))


// routes
app.use(require('./routes/index'))


app.get('/usuario', function (req, res) {
  res.send('Hello World!');
});


app.listen(3000, function () {
  let cliente = 'Jose'
  console.log('Example app listening on port 3000!');
  console.log(`Hola ${cliente}`);
});
