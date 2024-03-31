import { Controller, Get, Param, Delete } from '@nestjs/common';
import { LogService } from './log.service';

@Controller('log')
export class LogController {
  constructor(private readonly logService: LogService) { }

  @Get('list') // list all logs
  logListAll() {
    return this.logService.logListAll();
  }

  @Get('id/:id') // list a log by id
  logListId(@Param('id') id: string) {
    return this.logService.logListId(id);
  }

  @Get('email/:email') // list a log by email
  logListEmail(@Param('email') email: string){
    return this.logService.logListEmail(email);
  }

  @Delete('delete/:id') // delete the log by id
  logRemove(@Param('id') id: string) {
    return this.logService.logRemove(id);
  }

}
