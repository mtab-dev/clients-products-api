import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client, clientDocument } from './entities/client.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClientService {

  constructor(@InjectModel(Client.name) private clientModel: Model<clientDocument>) {}

  async checkEmail(email: string): Promise<boolean>{
    const emailExist = await this.clientModel.findOne({ email}).exec();
    if(emailExist){
      return true;
    }else{
      return false;
    }
  }

  async create(createClientDto: CreateClientDto) {
    try{
      const client = new this.clientModel(createClientDto);
      return client.save()
    }catch(err){
      return err;
    }
  }

  findAll() {
    return this.clientModel.find()
  }

  findOne(email) {
    return this.clientModel.find(email)
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate({_id : id}, {updateClientDto},
      )
  }

  remove(id: string) {
    return this.clientModel.deleteOne({_id : id}).exec()
  }
}
