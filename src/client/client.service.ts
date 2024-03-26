import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogService } from 'src/log/log.service';
import { CreateLogDto } from 'src/log/dto/create-log.dto'
import { Log } from 'src/log/entities/log.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private clientModel: Model<any>,
    private logService: LogService,
  ) {}

  async checkEmail(email: string): Promise<boolean> {
    const emailExist = await this.clientModel.findOne({ email }).exec();
    return !!emailExist;
  }

  async clientRegister(createClientDto: CreateClientDto, createLogDto: CreateLogDto): Promise<string> {
    try {
      await this.logService.logCreate(createLogDto); // Log the client registration
      await new this.clientModel(createClientDto).save(); // Save the client
      return 'OK';
    } catch (error) {
      return error.message;
    }
  }

  async clientList(): Promise<any[]> {
    try {
      return await this.clientModel.find().exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async clientListOne(email: string): Promise<any[]> {
    try {
      return await this.clientModel.find({ email }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async clientDelete(id: string): Promise<any> {
    try {
      return await this.clientModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
