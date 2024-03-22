import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type clientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
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
