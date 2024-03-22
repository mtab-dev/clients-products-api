import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    clientId: string;
        
    @Prop()
    overview: string;

    @Prop({default: new Date()})
    createdAt: Date;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

//id do cliente, data de cadastro, resumo do pedido;