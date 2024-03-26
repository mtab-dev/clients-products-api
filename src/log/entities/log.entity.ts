import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';
import { CreateClientDto } from 'src/client/dto/create-client.dto'

export type logDocument = HydratedDocument<Log>;

const userId = CreateClientDto.name

@Schema()
export class Log {

    @Prop({required: false, default: userId})
    clientId: string;

    @Prop()
    productId: string;

    @Prop()
    email: string;

    @Prop()
    productOverview: string;

    @Prop({default: now()})
    createdAt: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);

