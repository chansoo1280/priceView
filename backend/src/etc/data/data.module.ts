import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './Data.controller';
import { DataRepository } from './Data.repository';
import { DataService } from './Data.service';

@Module({
  imports: [TypeOrmModule.forFeature([DataRepository])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
