import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, logDocument } from './entities/log.entity'
import { CreateProductDto } from 'src/product/dto/create-product.dto';


@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) public LogModel: Model<logDocument>){}
  async logClient(createClientDto: CreateClientDto): Promise<Log>{
    try{
      const logEntry = new this.LogModel(createClientDto);
      return logEntry.save()
    }catch(error){
      return error.message
    }
  }
  async logProduct(createProductDto: CreateProductDto): Promise<Log>{
    try{
      const logEntry = new this.LogModel(createProductDto);
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
