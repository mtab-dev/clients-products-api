import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type logDocument = HydratedDocument<Log>;

// const userId = this.CreateClientDto.name

@Schema()
export class Log {

    @Prop({ required: false })
    clientId: string;

    @Prop()
    productId: string;

    @Prop()
    email: string;

    @Prop()
    productOverview: string;

    @Prop({ required: false, default: now() })
    createdAt: Date;
}

export const LogSchema = SchemaFactory.createForClass(Log);

