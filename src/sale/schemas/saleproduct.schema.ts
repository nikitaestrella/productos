import { Schema } from 'mongoose';
import { ProductSchema } from 'src/product/schemas/product.schema'

export const SaleProductSchema = new Schema({

    product: ProductSchema,
    cantidad:Number,
    montototal:Number

})