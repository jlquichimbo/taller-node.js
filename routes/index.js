const express = requere('express')
const app = express()


app.use('./users.js')
module.expoert = app
