import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    
    @Prop({required: true})
    clientId: string;
        
    @Prop({required: true})
    productOverview: string;

    @Prop({default: now(), required: true})
    createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

//id do cliente, data de cadastro, resumo do pedido;