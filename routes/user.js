const express = require('express')
const app = express()


app.get('/usuario', (req, res) =>  {
  // res.send('Hello World users!');
  res.json({
    ok: true,
    msg: "All ok"
  })
})

module.exports = app;
