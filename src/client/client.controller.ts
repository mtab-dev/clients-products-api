import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('register')
    async create(@Body() createClientDto: CreateClientDto) {
    const email = createClientDto.email
    const emailExists = await this.clientService.checkEmail(email);
    if(emailExists){
      throw new ConflictException('Email are already exists');
    }
    return this.clientService.create(createClientDto);
  }

  @Get('list')
  findAll() {
    return this.clientService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(id, updateClientDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
