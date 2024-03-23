import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type LogDocument = HydratedDocument<Log>;

@Schema()
export class Log {

    @Prop()
    clientId: string;
    
    @Prop()
    email: string;

    @Prop()
    productId: string;
    
    @Prop()
    productOverview: string;

    @Prop({default: now()})
    createdAt: Date;
}

export const logSchema = SchemaFactory.createForClass(Log);


