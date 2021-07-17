import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceController } from './price.controller';
import { PriceRepository } from './price.repository';
import { PriceService } from './price.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PriceRepository]),
    HttpModule.register({
      timeout: 1000 * 60 * 5,
      maxRedirects: 5,
    }),
  ],
  controllers: [PriceController],
  providers: [PriceService],
  exports: [PriceService],
})
export class PriceModule {}
