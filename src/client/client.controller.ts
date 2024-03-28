import { Controller, Get, Post, Body, Param, Delete, ConflictException } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientController {

  constructor(private readonly clientService: ClientService) { }
  @Post('register') //registering clients
  async clientRegister(@Body() createClientDto: CreateClientDto) {

    const email = createClientDto.email
    const emailExists = await this.clientService.checkEmail(email);
    if (emailExists) {
      throw new ConflictException('Email are already exists');
    }
    return this.clientService.clientRegister(createClientDto);

  }

  @Get('list') //listing all clients
  findAll() {
    return this.clientService.clientList();
  }

  @Get('list/:id') //listing a client by id
  findOne(@Param('id') id: string) {
    return this.clientService.clientListOne(id);
  }
  @Delete('remove/:id') //removing a client by id
  remove(@Param('id') id: string) {
    return this.clientService.clientDelete(id);
  }
}
