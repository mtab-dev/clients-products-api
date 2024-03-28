import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('register')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.productRegister(createProductDto);
  }

  @Get('list')
  findAll() {
    return this.productService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
