import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    clientId: string;
    
    @Prop()
    createdAt: Date;

    @Prop()
    overview: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);

//id do cliente, data de cadastro, resumo do pedido;