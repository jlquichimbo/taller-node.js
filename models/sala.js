const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const express = require('express')
const app = express()


let salaSchema = new Schema({
    name: {
        type: String,
        required: [true, "The sala name should be filled"]
    },
    description: {
        type: String,
        required: [true, "The sala description should be filled"]
        
    },
    state: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Sala', salaSchema)
