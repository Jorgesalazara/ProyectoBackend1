import { Schema } from "mongoose";
import { createConnection } from "../db/index.js";

const PedidoSchema = new Schema({
    user_id: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    status: { type: String, required: true },
    });
