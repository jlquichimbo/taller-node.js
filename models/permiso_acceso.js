const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let typeAccess = {
    values: ['ENTRADA', 'SALIDA'],
    message: '{VALUE} no es valido para el acceso'
}

let PermisoSchema = new Schema({
    date: String,
    hour: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Debe ser obligatorio']
    },
    sala:{
        type:Schema.Types.ObjectId,
        ref: 'Sala',
        required: [true, 'Debe ser obligatorio']
    },
    typeAccess:{
        type: String,
        enum: typeAccess
    },
    state: {
        type: Boolean,
        default: true
    }

})


module.exports = mongoose.model('PermisoAcceso', PermisoSchema)
