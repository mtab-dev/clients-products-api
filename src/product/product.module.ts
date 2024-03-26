import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './entities/product.entity';
import { Product } from './entities/product.entity';
import { LogService } from 'src/log/log.service';
import { LogModule } from 'src/log/log.module'
import { Log, LogSchema } from 'src/log/entities/log.entity';


@Module({
  imports: [MongooseModule.forFeature([
    {name: Product.name, schema: ProductSchema},
    {name: Log.name, schema: LogSchema}
  ]),
  LogModule
],
  controllers: [ProductController],
  providers: [
    ProductService,
    LogService
  ],
})
export class ProductModule {}
