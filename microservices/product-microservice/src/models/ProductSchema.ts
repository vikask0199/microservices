import mongoose, { Schema } from "mongoose";
import { IProduct } from "../interfaces/Product";

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


export default mongoose.model<IProduct>('Product', ProductSchema)