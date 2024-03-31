import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';
import { LogService } from 'src/log/log.service';


@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    public productModel: Model<ProductDocument>,
    public logService: LogService,
  ) { }
  async productRegister(createProductDto: CreateProductDto) { // register a product
    try {
      await this.logService.logProduct(createProductDto)
      await new this.productModel(createProductDto).save();
      return "Product registered successfully"
    } catch (error) {
      return 'Failed product registration'
    }
  }

  productList() { // list all products
    try {
      return this.productModel.find();
    } catch (error) {
      return error.message
    }
  }

  productListOne(id: string) { // list a product by Id
    try {
      return this.productModel.find({ _id: id });
    } catch (error) {
      return error.message
    }
  }

  async productSort(): Promise<Product[]>{
    return this.productModel.find().sort({createdAt: -1}).exec()
    };

  productDelete(id: string) { // remove a product by Id
    return this.productModel.deleteOne({ _id: id }).exec()
  }
}
