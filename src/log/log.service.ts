import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
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

}
