const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const express = require('express')
const app = express()


let rolSchema = new Schema({
    name: {
        type: String,
        required: [true, "The role name should be filled"]
    },
    description: {
        type: String,
        required: [true, "The description should be filled"]
        
    },
    state: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Rol', rolSchema)
