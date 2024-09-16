const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: 
    {   
        type: String,
        required: true
    },
    username:
    {
        type: String,
        required: true,
        unique: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    date: 
    {
        type: Date,
        default: Date.now
    },
    isAdmin:
    {
        type: Boolean,
        default: false
    },
});

const User = mongoose.model('users', userSchema);
module.exports = User;