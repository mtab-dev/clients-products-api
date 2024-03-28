import { Controller, Get, Post, Body, Param, Delete, ConflictException } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) { }
  @Post('register') //registering clients
  async clientRegister(@Body() createClientDto: CreateClientDto) {
    // const email = createClientDto.email
    const emailExists: boolean = await this.clientService.checkEmail(createClientDto.email);
    if (emailExists) {
      throw new ConflictException('Email are already exists');
    }
    return this.clientService.clientRegister(createClientDto);

  }

  @Get('list') //listing all clients
  clientList() {
    return this.clientService.clientList();
  }

  @Get('list/:id') //listing a client by id
  clientListOne(@Param('id') id: string) {
    return this.clientService.clientListOne(id);
  }

  // @Get('sort')
  // clientSort(){
  //   return this.clientService.clientSort();
  // }
  
  @Delete('remove/:id') //removing a client by id
  clientDelete(@Param('id') id: string) {
    return this.clientService.clientDelete(id);
  }
}
