import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Count } from 'src/count/count.entity'

export class SelectCntPriceDto {
    @IsString()
    readonly P_YEAR_MONTH!: Count['P_YEAR_MONTH']
}
