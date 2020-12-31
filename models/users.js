var mongoose = require('mongoose');


var userShema = mongoose.Schema({
    login: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', userShema);