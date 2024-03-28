import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientSchema } from './entities/client.entity';
import { Client } from './entities/client.entity';
import { LogService } from 'src/log/log.service';
import { LogModule } from 'src/log/log.module'
import { Log, LogSchema } from 'src/log/entities/log.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Client.name, schema: ClientSchema },
      { name: Log.name, schema: LogSchema }
    ]),
    LogModule
  ],
  controllers: [ClientController],
  providers: [
    ClientService,
    LogService
  ],
})
export class ClientModule { }
