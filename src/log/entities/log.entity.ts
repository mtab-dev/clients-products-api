import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type logDocument = HydratedDocument<Log>;

@Schema()
export class Log {

    @Prop()
    clientId: string;
<<<<<<< HEAD

    @Prop()
    productId: string;

    @Prop()
    email: string;

    @Prop()
    createdAt: Date;

    @Prop()
    overview: string;
=======
>>>>>>> d538e40829beaf324d247df797a8462521545444
    
    @Prop()
    email: string;

    @Prop()
    productId: string;
    
    @Prop()
    productOverview: string;

    @Prop({default: now()})
    createdAt: Date;
}

<<<<<<< HEAD
export const LogSchema = SchemaFactory.createForClass(Log);
=======
export const logSchema = SchemaFactory.createForClass(Log);

>>>>>>> d538e40829beaf324d247df797a8462521545444

