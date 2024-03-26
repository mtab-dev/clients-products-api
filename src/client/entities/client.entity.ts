import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';
import { CreateClientDto } from 'src/client/dto/create-client.dto'

export type clientDocument = HydratedDocument<Client>;



@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop({unique: true})
  email: string;

  @Prop()
  cellphone: string;

  @Prop()
  birthday: string;

  @Prop()
  address: string;

  @Prop()
  addressComp: string;

  @Prop()
  city: string;

  @Prop()
  cep: string;

  @Prop({default: now()})
  createdAt: Date;
}

export const ClientSchema = SchemaFactory.createForClass(Client);

// nome, email, telefone, data de nascimento, endereço, complemento, bairro, cep, data de cadastro;
