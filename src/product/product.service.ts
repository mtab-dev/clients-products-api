import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';
import { LogService } from 'src/log/log.service';
import { CreateLogDto } from 'src/log/dto/create-log.dto'
// import { Log, logDocument } from 'src/log/entities/log.entity';

@Injectable()
export class ProductService {
  constructor(
   @InjectModel('Product')
   public productModel: Model<ProductDocument>,
   public logService: LogService,
   ) {}
  async productRegister(createProductDto: CreateProductDto, createLogDto: CreateLogDto) {
    try{
      await this.logService.logCreate(createLogDto)
      await new this.productModel(createProductDto).save();
      return "OK"
    }catch(error){
      return error.message
    }
  }

  findAll() {
    try{
      return this.productModel.find();
    }catch(error){
      return error.message
    }
  }

  findOne(id: string) {
    try{
      return this.productModel.find({_id : id});
    }catch(error){
      return error.message
    }
  }

  remove(id: string) {
    return this.productModel.deleteOne({_id : id}).exec()
  }
}
