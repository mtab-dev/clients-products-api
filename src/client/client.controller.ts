import { Controller, Get, Post, Body, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { LogInterceptor } from 'src/log/log.interceptor';
import { LogService } from 'src/log/log.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService, logService: LogService) {}

  @Post('register')
  @UseInterceptors(LogInterceptor)
  create(@Body() createClientDto: CreateClientDto) {
    try{
      return this.clientService.create(createClientDto), this.logService.logCreate()
    }catch(error){
      error.message
    }
  }

  @Get('list')
  findAll() {
    return this.clientService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
  }
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
