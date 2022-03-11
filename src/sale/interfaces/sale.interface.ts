import {Document}from 'mongoose'
import { Product } from 'src/product/interfaces/product.interface';

export interface Sale extends Document{
    readonly name: string;
    readonly dni: number;
    readonly direction: string;
    //readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
    readonly total: number;
    readonly product: Product;

}