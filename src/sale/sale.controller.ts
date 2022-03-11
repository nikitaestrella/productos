import { Controller, Get, Post, Put, Delete, Res , HttpStatus, Body, Param, NotFoundException,Query} from '@nestjs/common';
import {CreateSaleDTO }from './dto/sale.dto'
import {SaleService}from './sale.service'

@Controller('sale')
export class SaleController {
    
constructor(private saleService:SaleService){}

    @Post('/create')
   async createPost(@Res() res , @Body()createSaleDTO:CreateSaleDTO){
        const sale= await this.saleService.createSale(createSaleDTO);
        
        return res.status(HttpStatus.OK).json({
            message:'Sale Succesfully Created',
            sale:sale

        });
    }
    @Get('/')
   async getSales(@Res() res){
        const sales =await this.saleService.getSales();
        return res.status(HttpStatus.OK).json({
            sales
        })
    }
    @Get('/:saleID')
    async getSale(@Res() res, @Param('saleID')saleID){
       const sale= await this.saleService.getSale(saleID);
       if(!sale) throw new NotFoundException('Sale Does not exists')
       return res.status(HttpStatus.OK).json(sale);
    }
    @Delete('/delete')
    async deleteSale(@Res() res, @Query('saleID')saleID){
        const saleDeleted =await this.saleService.deleteSale(saleID);
        if(!saleDeleted) throw new NotFoundException('Sale Does not exists');
        return res.status(HttpStatus.OK).json({
            Message: 'Sale Deleted Succesfully',
            saleDeleted
        });
     }
     @Put('/update')
     async updateSale(@Res() res, @Body() createSaleDTO: CreateSaleDTO, @Query('saleID') saleID){
         const updatedSale= await this.saleService.updateSale(saleID,createSaleDTO);
         if(!updatedSale) throw new NotFoundException('Sale Does not exists')
         return res.status(HttpStatus.OK).json({
             message:'Sale Updated Successfully',
             updatedSale
         });
    }
}

