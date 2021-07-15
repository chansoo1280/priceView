import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { PriceModule } from './price/price.module';
import { CountModule } from './count/count.module';
import { configService } from './config/config.service';
import { EtcModule } from './etc/etc.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PriceModule,
    CountModule,
    EtcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
