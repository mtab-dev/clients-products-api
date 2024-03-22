import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({required: false})
    clientId: string;
        
    @Prop()
    overview: string;

    @Prop({default: now(), required: false})
    createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

//id do cliente, data de cadastro, resumo do pedido;