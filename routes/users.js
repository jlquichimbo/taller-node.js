const express = requere('express')
const app = express()


app.get('/usuario', function (req, res) {
  res.send('Hello World!');
});

module.exports = app
