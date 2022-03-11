import { Schema } from 'mongoose';
import { Product } from 'src/product/interfaces/product.interface';

export class CreateSaleProductDTO{
    readonly product: _id;
    readonly cantidad: Number;
    readonly montototal: Number;
 }