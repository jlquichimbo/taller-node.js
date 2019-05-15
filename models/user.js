const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')
let Schema = mongoose.Schema

let userSchema = new Schema({
    nombre: {
        type: String,
    },
    apellido: {
        type: String,
    },
    edad: {
        type: Number,
    },
    // rol: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Rol',
    //     required: [true, 'the rol debe ser asignado.']
    // },
    // state: {
    //     type: Boolean,
    //     default: true
    // }
})

module.exports = mongoose.model('User', userSchema)