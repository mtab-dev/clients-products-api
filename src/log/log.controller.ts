import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogService } from './log.service';
import { CreateLogDto } from './dto/create-log.dto';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) {}

  @Post('register')
  create(@Body() createLogDto: CreateLogDto) {
    return this.logService.logCreate(createLogDto);
  }

  @Get('list')
  logListAll() {
    return this.logService.logListAll();
  }

  @Get('list/:id')
  logListOne(@Param('id') id: string){
    return this.logService.logListOne(id);
  }

}
