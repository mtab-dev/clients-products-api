import { Controller, Get, Param, Delete } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) { }

  @Get('list') // list all logs
  logListAll() {
    return this.logService.logListAll();
  }

  @Get('list/:id') // list a log by id
  logListOne(@Param('id') id: string) {
    return this.logService.logListOne(id);
  }

  @Delete('delete/:id') // delete the log by id
  logRemove(@Param('id') id: string) {
    return this.logService.logRemove(id);
  }

}
