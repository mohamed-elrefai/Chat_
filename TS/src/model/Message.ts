import { Schema, model } from 'mongoose';

const msgSchema = new Schema({
    userId: {
        type: String
    },
    GetMessageId: {
        type: String,
    },
    message: {
        type: String
    }
}, {timestamps: true});

const mode = model('message', msgSchema);

export default mode