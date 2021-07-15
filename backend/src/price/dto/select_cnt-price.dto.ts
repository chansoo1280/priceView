import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'
import { Count } from 'src/count/count.entity'

export class SelectCntPriceDto {
    @IsString()
    readonly A_NAME!: Count['A_NAME']
    @IsString()
    readonly A_UNIT!: Count['A_UNIT']
    @IsString()
    readonly P_YEAR_MONTH!: Count['P_YEAR_MONTH']
}
