const {Schema, model} = require('mongoose')

const msgSchema = new Schema(
    {
    sender: {
        type: String,
    },
    memberFname:{
        type: String,
    },
    memberLname:{
        type: String,
    }, 
    memberImg:{
        type: String,
    },
    message: {
        type: String,
    },
},{ timestamps: true });

module.exports = model("msg", msgSchema);