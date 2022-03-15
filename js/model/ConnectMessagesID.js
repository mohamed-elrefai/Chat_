const {Schema, model} = require('mongoose')

const connectIdSchema = new Schema({
    members:{
        type: Array,
    },
}, {timestamps: true});

module.exports = model('ConnectionId', connectIdSchema);