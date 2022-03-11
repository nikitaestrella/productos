import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel}from '@nestjs/mongoose'
import {Sale} from'./interfaces/sale.interface'
import{CreateSaleDTO} from './dto/sale.dto'

@Injectable()
export class SaleService {
  
constructor(@InjectModel('Sale') private readonly saleModel: Model<Sale>){}

async getSales():Promise<Sale[]>{
    const sales= await this.saleModel.find();
    return sales;
}

async getSale(saleID:string):Promise<Sale>{
    const sale=await this.saleModel.findById(saleID);
    return sale;
}

async createSale(createProductDTO:CreateSaleDTO):Promise<Sale>{
    const sale=new this.saleModel(CreateSaleDTO);
    return await sale.save();
    
}

async deleteSale(saleID:string): Promise<Sale>{
    const deletedSale=await this.saleModel.findByIdAndDelete(saleID);
    return deletedSale;
}

async updateSale(saleID,createSaleDTO:CreateSaleDTO):Promise<Sale>{
    const updatedSale=await this.saleModel.findByIdAndUpdate(saleID,
    createSaleDTO, {new:true});
    return updatedSale;
}


}

