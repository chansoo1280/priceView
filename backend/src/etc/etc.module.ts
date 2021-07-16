import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EtcController } from './etc.controller';
import { EtcRepository } from './etc.repository';
import { EtcService } from './etc.service';

@Module({
  imports: [TypeOrmModule.forFeature([EtcRepository])],
  controllers: [EtcController],
  providers: [EtcService],
})
export class EtcModule {}
