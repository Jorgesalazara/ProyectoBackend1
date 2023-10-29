import {Schema} from 'mongoose';
import { createConnection } from '../db/index.js';

const RestaurantSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    category: {type: [String], required : true},
    inventory: {type: Array, required: true},
    active: {type: Boolean, required: true},
});

const Restaurant = createConnection().model('Restaurant', RestaurantSchema);

export default Restaurant;

