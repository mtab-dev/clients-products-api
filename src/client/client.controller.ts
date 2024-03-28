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

  @Get('list') //list all clients
  clientList() {
    return this.clientService.clientList();
  }

  @Get('list/:email') //list a client by email
  clientListOne(@Param('email') email: string) {
    return this.clientService.clientListEmail(email);
  }

  @Get('list/:id') //list a client by Id
  clientListId(@Param('id') id: string){
    return this.clientService.clientListId(id);
  }

  @Get('list/{:createdAt}') //list a client by date of creation
  clientDate(@Param('createdAt') createdAt: Date){
    return this.clientService.clientDate(createdAt);
  }
  
  @Delete('remove/:id') //removing a client by id
  clientDelete(@Param('id') id: string) {
    return this.clientService.clientDelete(id);
  }
}
