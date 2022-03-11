import {Document}from 'mongoose'
import { Product } from 'src/product/interfaces/product.interface';

export interface SaleProduct extends Document{

    readonly product: Product;
    readonly cantidad:Number;
    readonly montototal:Number

}