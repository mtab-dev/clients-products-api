import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogService } from 'src/log/log.service';
import { Client, clientDocument } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client')
    public clientModel: Model<clientDocument>,
    public logService: LogService,
  ) { }

  async checkEmail(email: string) { //check if the email already exists in db
    const emailExist = await this.clientModel.findOne({ email }).exec()
    if (emailExist) {
      return true;
    } else {
      return false;
    }
  }

  async clientRegister(createClientDto: CreateClientDto) { //register client
    try {
      await this.logService.logClient(createClientDto); // Log the client registration
      await new this.clientModel(createClientDto).save(); // Save the client
      return 'Client created successfully';
    } catch (error) {
      return 'Client registration failed';
    }
  }

  async clientList() { //list all clients
    try {
      return await this.clientModel.find().exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async clientListEmail(email: string) { //list a client by email
    try {
      return await this.clientModel.find({ email }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  } 

  async clientListId(id: string){ //list a client by Id
    try{
      return this.clientModel.find({_id : id}).exec();
    }catch(error){
      return 'Error at finding client'
    }
  }
  async clientListDate(createdAt: any){ //list a client by date of creation
      return this.clientModel.findOne({ createdAt }).exec();
  };

  async clientDelete(id: string) { //delete a client by id
    try {
      return await this.clientModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      return 'Error deleting the client';
    }
  }
  
  async clientSort(): Promise<Client[]>{
    try{
      return this.clientModel.find().sort({createdAt: -1}).exec()
    }catch(error){
      return error;
    }
     };

  async clientReset(){ //delete all clients in db
    try{
      return await this.clientModel.deleteMany({}).exec();
    }catch(error){
      return 'Error deleting the clients'
    }
  }
}
    

