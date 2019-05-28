const express = require('express')
const app = express()
const Sala = require('../models/sala')


app.get('/sala', (req, res)=>{
    Sala.find().exec((err, salaDB)=>{
      if (err) {
          return res.status(500).json({
              ok:false,
              err
          })
      }  
      res.status(200).json({
        ok: true,
        salaDB
      })
    })
});

app.post("/sala", (req, res)=>{
    let body = req.body
    let salaSave = new Sala({
        name: body.name,
        description: body.description,
      }
    )

    salaSave.save((err, salaDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!salaDB) {
            return res.status(404).json({
                ok: false,
                salaDB
            })
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
});

app.put('/sala/:id', (req, res)=>{
    let id = req.params.id
    let body = req.body
    let salaUpdate = {
        name: body.name,
        description: body.description
    }

    Sala.findByIdAndUpdate(id, salaUpdate, {
        new: true,
        runValidators: true
    }, (err, salaDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if (!salaDB) {
            return res.status(400).json({
                ok: false,
                salaDB
            })
        }
        res.status(200).json({
            ok: true,
            salaDB
        })
    })
})

app.delete('/sala/:id', (req, res)=>{
    let id = req.params.id
    let salaDelete = {
      state: false
    }
  
    Sala.findByIdAndUpdate(id, salaDelete, {
      new: true,
      runValidators: true
    }, (err, salaDB)=>{
      if (err) {
        return res.status(500).json({
          ok: false,
          err
        })
      }
      if(!salaDB){
        return res.status(400).json({
          ok: false,
          err
        })
      }
      res.status(200).json({
        ok: true,
        salaDB
      })
    })
  
    Sala
  })

module.exports = app;
