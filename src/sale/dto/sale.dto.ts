import { Schema } from 'mongoose';
import { CreateSaleProductDTO } from 'src/sale/dto/saleproduct.dto';

export class CreateSaleDTO{
    readonly name: string;
    readonly dni: number;
    readonly direction: string;
    readonly price: number;
    readonly createdAt:Date;
    readonly total:Number;
    readonly product: CreateSaleProductDTO;
 
 }