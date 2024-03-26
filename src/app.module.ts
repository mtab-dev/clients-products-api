import { Module } from '@nestjs/common';

import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LogModule } from './log/log.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://mtab-admin:Vq4HSUd4aK7602hO@cluster0.ildcwxd.mongodb.net/?retryWrites=true&w=majority"),
    ClientModule,
    ProductModule,
    LogModule],
})
export class AppModule {}
