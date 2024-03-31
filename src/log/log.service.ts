import { Injectable } from '@nestjs/common';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log, logDocument } from './entities/log.entity'
import { CreateProductDto } from 'src/product/dto/create-product.dto';


@Injectable()
export class LogService {
  constructor(@InjectModel(Log.name) public LogModel: Model<logDocument>) { }

  async logClient(createClientDto: CreateClientDto) { //log for clients
    try {
      const logEntry = new this.LogModel(createClientDto);
      return logEntry.save()
    } catch (error) {
      return error.message
    }
  }

  async logProduct(createProductDto: CreateProductDto) { //log for products
    try {
      const logEntry = new this.LogModel(createProductDto);
      return logEntry.save()
    } catch (error) {
      return error.message
    }
  }

  logListAll() { //list all logs
    try {
      return this.LogModel.find();
    } catch (error) {
      return error.message
    }
  }

  logListId(id: string) { //list a log by the client or product id
    try {
      return this.LogModel.findOne({ _id: id }).exec();
    } catch (error) {
      return 'Error finding the log'
    }
  }

  logListEmail(email: string){ //list a log by the client email
    try{
      return this.LogModel.findOne({email}).exec();
    }catch(error){
      return 'Error finding the log'
    }
  }

  logRemove(id: string) { //remove a log by id
    return this.LogModel.deleteOne({ _id: id }).exec();
    console.log("Log removed")
  }

}
