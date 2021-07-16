import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './data.controller';
import { DataRepository } from './data.repository';
import { DataService } from './data.service';

@Module({
  imports: [TypeOrmModule.forFeature([DataRepository])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}
