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
  User.find({
    "state": true
  }).populate('Rol').exec((err, usuarioDB) => {
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

app.put('/user/:id', (req, res) => {
  let id = req.params.id
  let body = req.body
  let userEdit = {
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    username: body.username,
    password: body.password,
    age: body.age,
    rol: body.rol
  }

  User.findByIdAndUpdate(id, userEdit, {
    new: true,
    runValidators: true
  }, (err, usuarioDB)=>{
    if (err) {
        
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if (!usuarioDB) {
      return res.status(400).json({
        ok: false,
        usuarioDB
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
      name: body.name,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      password: body.password,
      age: body.age,
      rol: body.rol
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

app.delete('/user:id', (req, res)=>{
  let id = req.params.id
  let userState = {
    state: false
  }

  User.findByIdAndUpdate(id, userState, {
    new: true,
    runValidators: true
  }, (err, usuarioDB)=>{
    if (err) {
      return res.status(500).json({
        ok: false,
        err
      })
    }
    if(!usuarioDB){
      return res.status(400).json({
        ok: false,
        err
      })
    }
    res.status(200).json({
      ok: true,
      usuarioDB
    })
  })
})

module.exports = app;
