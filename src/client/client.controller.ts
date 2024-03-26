import { Controller, Get, Post, Body, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { CreateLogDto } from 'src/log/dto/create-log.dto'
// import { LogInterceptor } from 'src/log/log.interceptor';

@Controller('clients')
export class ClientController{

  constructor(private readonly clientService: ClientService) {}
  @Post('register')
  // @UseInterceptors(LogInterceptor)
  clientRegister(@Body() createClientDto: CreateClientDto, createLogDto: CreateLogDto) {
    try{
      this.clientService.clientRegister(createClientDto, createLogDto)
    }catch(error){
      error.message
    }
  }

  @Get('list')
  findAll() {
    return this.clientService.clientList();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.clientService.clientListOne(id);
  }
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.clientService.clientDelete(id);
  }
}
