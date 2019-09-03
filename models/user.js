const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name:{
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number
    },
    gender: {
        type: String,
    },
    clgName: {
        type: String,
        // required: true
    },
    clgCity: {
        type: String,
        // required: true
    },
    clgState: {
        type: String,
        // required: true
    },
    clgId: {
        type: String,
        // required: true
    },
    emailOTP: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    pantheonId: {
        type: Number,
        default:-1
    },
    teamMongoId:{
        type: String,
        default: null
    },
    isTeamLeader:{
        type: Boolean,
        default: false
    }
});

const User = mongoose.model('users', userSchema);
module.exports = User;