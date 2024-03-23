import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { Model } from 'mongoose';
import { Log, LogDocument } from './entities/log.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  async logCreate(clientId: string): Promise<Log> {

    const logEntry = new this.logModel({CreateLogDto})
    return logEntry.save()
  }

}
