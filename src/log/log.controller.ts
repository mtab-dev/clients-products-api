import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { CreateProductDto } from 'src/product/dto/create-product.dto';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  // @Post('register')
  // create(@Body() createClientDto: CreateClientDto, createProductDto: CreateProductDto) {
  //   return this.logService.logCreate(createClientDto, createProductDto);
  // }

  @Get('list')
  logListAll() {
    return this.logService.logListAll();
  }

  @Get('list/:id')
  logListOne(@Param('id') id: string){
    return this.logService.logListOne(id);
  }

}
