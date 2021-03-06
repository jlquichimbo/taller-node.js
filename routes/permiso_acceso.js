const express = require('express')
const app = express()
const mongoose = require('mongoose')
const date = require('date-and-time')
const dateFormat = require('dateformat')

const PermisoAcceso = require('../models/permiso_acceso')
const Sala = require('../models/sala')
let now = new Date()

app.get('/permiso', (req, res) => {
    PermisoAcceso.find({state:true}).exec((err, permisos)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err,
            })
        }
        if(!permisos){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.status(200).json({
            ok: true,
            permisos
        })
    })
});

app.post('/permiso', (req,res)=>{
    let body = req.body
    let permiso_guardar_salida = new PermisoAcceso({
        date: dateFormat(now, "dddd, d ;de mmmm, yyyy"),
        hour: date.format(now, "hh:mm:ss A"),
        user: body.user,
        sala: body.sala,
        typeAccess: "SALIDA",
    })
    let permiso_guardar_entrada = new PermisoAcceso({
        date: dateFormat(now, "dddd, d ;de mmmm, yyyy"),
        hour: date.format(now, "hh:mm:ss A"),
        user: body.user,
        sala: body.sala,
        typeAccess: "ENTRADA",
    })

    PermisoAcceso.findOne((
        {user:body.user}
    ), (err, permisoDB)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        if(permisoDB === null){
            permiso_guardar_entrada.save()
            return res.status(200).json({
                ok: true,
                acceso: permiso_guardar_entrada
            })
        }else{
            if (permisoDB.typeAccess === 'SALIDA') {
                permiso_guardar_entrada.save()
                return res.status(200).json({
                    ok: true,
                    acceso: permiso_guardar_entrada
                })
            } else {
                if (permisoDB.typeAccess === 'ENTRADA') {
                    permiso_guardar_salida.save()
                    return res.status(200).json({
                        ok: true,
                        acceso: permiso_guardar_salida
                    })
                }
            }
        }
    }).sort({
        _id: -1
    })

})

module.exports = app;
