import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    }
}, {timestamps: true});

const mode = model('user', userSchema);

export default mode