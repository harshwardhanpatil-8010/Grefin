const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    pin: String,
    dob: Date,
    verified: {
        type: Boolean,
        default: false,
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;