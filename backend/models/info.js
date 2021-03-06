var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    login: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    age: { type: String },
    family: { type: String },
    race: { type: String },
    food: { type: String },
    creation_dt: { type: Date, require: true }
});

schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

schema.methods.isValid = function(hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('Info', schema);