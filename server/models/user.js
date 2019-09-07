const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create schema
const userSchema = new Schema({
    userId: Number,
    name: String,
    email: String,
    image: String
});

module.exports = mongoose.model('user', userSchema);