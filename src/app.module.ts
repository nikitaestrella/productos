import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb://localhost/product-nest-tutorial',{
useNewUrlParser:true
  }), SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
