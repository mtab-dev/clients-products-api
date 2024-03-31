import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LogModule } from './log/log.module';

const DB_URL = "seu banco de dados";

@Module({
  imports: [
    MongooseModule.forRoot(DB_URL),
    ClientModule,
    ProductModule,
    LogModule],
})
export class AppModule { }
