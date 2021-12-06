import { HttpModule, HttpService, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceModule } from 'src/price/price.module';
import { PriceRepository } from 'src/price/price.repository';
import { PriceService } from 'src/price/price.service';
import { CountController } from './count.controller';
import { CountRepository } from './count.repository';
import { CountService } from './count.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountRepository, PriceRepository]), HttpModule],
  controllers: [CountController],
  providers: [CountService, PriceService]
})
export class CountModule { }
