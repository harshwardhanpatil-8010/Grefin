const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userVerificationSchema = Schema({
    user_id: String,
    verification_code: String,
    createdAt: Date,
    expiresIn: Date
})

const UserVerification = mongoose.model('UserVerification', userVerificationSchema)
module.exports = UserVerification;