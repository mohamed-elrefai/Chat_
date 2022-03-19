import { Schema, model } from 'mongoose';

const msgSchema = new Schema({
    
}, {timestamps: true});

const mode = model('message', msgSchema);

export default mode