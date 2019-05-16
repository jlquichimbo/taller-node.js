const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
// const uniqueValidator = require('mongoose-unique-validator')
let Schema = mongoose.Schema

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Fill the name please"]
    },
    lastName: {
        type: String,
        required: [true, "Fill the lastname please"]
    },
    email: {
        type: String,
        required: [true, "Fill the email please"]
    },
    password: {
        type: String,
        required: [true, "Fill the password please"]
    },
    age: {
        type: Number,
    },
    rol: {
        type: Schema.Types.ObjectId,
        ref: 'Rol',
        required: [true, "Select the rol please!"]
    },
    state: {
        type: Boolean,
        default: true
    }
})

userSchema.methods.toJSON = function(){
    let user = this
    let user_object = user.toObject()
    delete user_object.password
    return user_object
}

userSchema.plugin(uniqueValidator, {
    message: `{PATH} debe ser unico`
})

module.exports = mongoose.model('User', userSchema)