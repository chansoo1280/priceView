import { PriceService } from 'src/price/price.service';
import { CountService } from './count.service';
import { Response, Request } from 'express';
import { Count } from './count.entity';
import { SelectCountDto } from './dto/select-count.dto';
export declare class CountController {
    private countService;
    private priceService;
    constructor(countService: CountService, priceService: PriceService);
    getStatistics({ A_SEQ }: {
        A_SEQ: Count['A_SEQ'];
    }, { P_YEAR_MONTH, M_TYPE_CODE, M_GU_CODE }: SelectCountDto, res: Response): Promise<Response<any, Record<string, any>>>;
    initDB({ P_YEAR_MONTH }: {
        P_YEAR_MONTH: string;
    }, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
