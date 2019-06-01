require('./config/config')
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


// BASE DE DATOS
mongoose.connect(process.env.URLDB,{
  useNewUrlParser: true
}, (err, res) =>{
  if(err) throw error;
  console.log(`Mongo is working ${6+7}`);
});

// Port 
app.listen(process.env.PORT, () => {
  // console.log("NODEJS LISTENING ", process.env.PORT);    
  console.log("NODEJS WORKING");
});


