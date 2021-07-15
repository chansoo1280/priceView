import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { Count } from 'src/count/count.entity';

export class InitPriceDto {
  @IsString()
  readonly P_YEAR_MONTH!: string;
}
