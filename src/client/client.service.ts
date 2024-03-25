import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client, clientDocument } from './entities/client.entity';
import { Model } from 'mongoose';
<<<<<<< HEAD
=======
import { LogService } from 'src/log/log.service';

>>>>>>> d538e40829beaf324d247df797a8462521545444
@Injectable()
export class ClientService {

  constructor(@InjectModel(Client.name) private clientModel: Model<clientDocument>,
  private logService: LogService
  ) {}


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
      const client = new this.clientModel(createClientDto)
      // const savedClient = await client.save();
      // await this.logService.logCreate('CREATE', client)
      // return savedClient;
      return client.save()
    }catch(err){
      return err;
    }
  }

  // async logClient(client){
  //   try{
  //     const client = this.clientModel(createC);
  //     return client.save()
  //   }catch(err){
  //     return err;
  //   }
  // }

  findAll() {
    return this.clientModel.find()
  }

  findOne(email) {
    return this.clientModel.find(email)
  }

  findbyDate(createdAt){
    return this.clientModel.find(createdAt)
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return this.clientModel.findByIdAndUpdate({_id : id}, {updateClientDto},
      )
  }

  remove(id: string) {
    return this.clientModel.deleteOne({_id : id}).exec()
  }
}
