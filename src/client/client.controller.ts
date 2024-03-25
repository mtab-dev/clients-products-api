<<<<<<< HEAD
import { Controller, Get, Post, Body, Param, Delete, UseInterceptors } from '@nestjs/common';
=======
import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException } from '@nestjs/common';
>>>>>>> d538e40829beaf324d247df797a8462521545444
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { LogInterceptor } from 'src/log/log.interceptor';
import { LogService } from 'src/log/log.service';

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post('register')
<<<<<<< HEAD
  @UseInterceptors(LogInterceptor)
  create(@Body() createClientDto: CreateClientDto) {
    try{
      return this.clientService.create(createClientDto)
    }catch(error){
      error.message
    }
=======
    async create(@Body() createClientDto: CreateClientDto) {
    const email = createClientDto.email
    const emailExists = await this.clientService.checkEmail(email);
    if(emailExists){
      throw new ConflictException('Email are already exists');
    }
    return this.clientService.create(createClientDto);
>>>>>>> d538e40829beaf324d247df797a8462521545444
  }

  @Get('list')
  findAll() {
    return this.clientService.findAll();
  }

<<<<<<< HEAD
  @Get('list/:id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(id);
=======
  @Get('list/:email')
  findOne(@Param('email') email: string){
    return this.clientService.findOne({email});
  }

  @Get('list/:createdAt')
  findbyDate(@Param('createdAt') createdAt: Date){
    return this.clientService.findbyDate({createdAt});
>>>>>>> d538e40829beaf324d247df797a8462521545444
  }
  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(id);
  }
}
