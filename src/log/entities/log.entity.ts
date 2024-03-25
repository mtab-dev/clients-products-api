import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type logDocument = HydratedDocument<Log>;

@Schema()
export class Log {

    @Prop()
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

