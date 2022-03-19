import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    }
}, {timestamps: true});

const mode = model('user', userSchema);

export default mode