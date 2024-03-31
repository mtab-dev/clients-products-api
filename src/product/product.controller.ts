import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('register') //register a product
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.productRegister(createProductDto);
  }

  @Get('list') // list all products
  findAll() {
    return this.productService.productList();
  }

  @Get('list/:id') //list a product by id
  findOne(@Param('id') id: string) {
    return this.productService.productListOne(id);
  }

  @Get('dateSort') //ordernar os pedidos por data de cadastro
  productSort(){
    return this.productService.productSort();   
  }

  @Delete('delete/:id') // remove a product by id
  remove(@Param('id') id: string) {
    return this.productService.productDelete(id);
  }
}
