import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {

  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
  create(createProductDto: CreateProductDto) {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: string) {
    return this.productModel.find({_id : id});
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate({_id : id}, {updateProductDto: updateProductDto});
  }

  remove(id: string) {
    return this.productModel.deleteOne({_id : id}).exec()
  }
}
