import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
<<<<<<< HEAD
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, logDocument } from './entities/log.entity'


@Injectable()
export class LogService {

  constructor(@InjectModel(Log.name) private LogModel: Model<logDocument>){}
  
  async logCreate(createLogDto: CreateLogDto): Promise<Log>{
    try{
      const logEntry = new this.LogModel({CreateLogDto});
      return logEntry.save()
    }catch(error){
      return error.message
    }
  }

  logListAll(){
    try{  
      return this.LogModel.find();
    }catch(error){
      return error.message
    }
  }

  logListOne(id: string){
    try{
      return this.LogModel.findOne({_id : id});
    }catch(error){
      return error.message
    } 
  }

=======
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

>>>>>>> d538e40829beaf324d247df797a8462521545444
}
