import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Count } from 'src/count/count.entity';

export class SelectCountDto {
  @IsString()
  readonly P_YEAR_MONTH!: Count['P_YEAR_MONTH'];

  @IsString()
  readonly A_SEQS!: string;

  @IsString()
  readonly M_GU_CODE!: Count['M_GU_CODE'];
}
