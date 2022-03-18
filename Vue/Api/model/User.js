const {Schema, model} = require('mongoose')

const UserSchema = new Schema(
    {
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 500
    },
    img: {
        type: String,
        default: "",
    },
    followings: {
        type: Array,
        default: [],
    },
},{ timestamps: true });

module.exports = model("User", UserSchema);