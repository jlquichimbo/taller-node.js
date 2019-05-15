const express = require('express')
const app = express()
const User = require('../models/user')

// app.get('/usuario', (req, res) =>  {
//   // res.send('Hello World users!');
//   res.json({
//     ok: true,
//     msg: "All ok"
//   })
// })

app.get("/user", (req,res) => {
  User.find().exec((err, usuarioDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        "err": err
      })
    }
    res.status(200).json({
      ok: true,
      usuarioDB
    })
  })
})

app.post("/user", (req, res)=>{
  let body = req.body
  let userSave = new User({
      nombre: body.nombre,
      apellido: body.apellido,
      edad: body.edad
    }
  )

  userSave.save((err, usuarioDB)=>{
    if(err){
      return res.json({
        ok: false,
        error: err
      })
    }

    if(!usuarioDB){
      return res.status(400).json({
        ok: false,
        error: err
      })
    }
    res.status(200).json(({
      ok: true,
      data: usuarioDB

    }))
  })
  // let permiso = new PermisoRol([{day: body.day, start_time: body.start_time,
  //                                 end_time, rol: body.rol}])
});
module.exports = app;
