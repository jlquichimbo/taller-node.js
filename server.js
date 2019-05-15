const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const cors = require('cors')
const app = express();
const port = 3000


// =============
// Middelware
// app.use(cors());

// Atributo para dar seguridad
app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json());

// routes
app.use(require('./routes/index'));



app.listen(3000, function () {
  let cliente = 'Jose'
  console.log('Example app listening on port 3000!');
  console.log(`Hola ${cliente}!`);
});


// BASE DE DATOS
mongoose.connect('mongodb://localhost:27017/sga',{
  useNewUrlParser: true
}, (err, res) =>{
  if(err) throw error;
  console.log(`Mongo is working ${6+7}`);
});