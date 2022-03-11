import { Schema } from 'mongoose';
import { SaleProductSchema } from 'src/sale/schemas/saleproduct.schema'

export const SaleSchema = new Schema({

    name: { type: String, required: true },
    dni: String,
    direction: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    total: Number,
    product: SaleProductSchema

})