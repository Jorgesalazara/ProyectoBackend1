import {Schema} from 'mongoose';
import { createConnection } from '../db/index.js';

const UserSchema = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    password: {type: String, required : true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    role: {
        type: String, 
        required: true,
        default: 'Client'
    },
});

const User = createConnection().model('User', UserSchema);

export default User;


