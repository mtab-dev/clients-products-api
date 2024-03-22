import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './entities/client.entity';
import { Client } from './entities/client.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: Client.name, schema: ClientSchema}])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
