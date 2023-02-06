const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        role: { type: Number, require: true },
        userName: { type: String, require: true, unique: true },
        password: { type: String },
        email: { type: String, require: true, unique: true },
        phone: { type: String, require: true },
        firstName: { type: String, require: true },
        lastName: { type: String, require: true },
        dateOfBirth: { type: String, require: true },
        googleId: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('users', User);
