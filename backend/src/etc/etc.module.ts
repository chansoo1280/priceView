import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtcController } from './Etc.controller';
import { EtcRepository } from './Etc.repository';
import { EtcService } from './Etc.service';

@Module({
  imports: [TypeOrmModule.forFeature([EtcRepository])],
  controllers: [EtcController],
  providers: [EtcService],
})
export class EtcModule {}
