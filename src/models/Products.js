import {Schema} from 'mongoose';
import { createConnection } from '../db/index.js';

const ProductSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    restaurant_id: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    active: {type: Boolean, required: true},
});


