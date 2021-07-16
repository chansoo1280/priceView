import { PriceService } from './price.service';
import { Response, Request } from 'express';
import { SelectCntPriceDto } from './dto/select_cnt-price.dto';
import { InitPriceDto } from './dto/init-count.dto';
export declare class PriceController {
    private priceService;
    constructor(priceService: PriceService);
    initDB({ P_YEAR_MONTH }: InitPriceDto, req: Request, res: Response): Promise<any>;
    getCnt({ A_NAME, A_UNIT, P_YEAR_MONTH }: SelectCntPriceDto, res: Response): Promise<any>;
}
