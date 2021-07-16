import { EtcService } from './etc.service';
import { Response } from 'express';
export declare class EtcController {
    private etcService;
    constructor(etcService: EtcService);
    getEtc(res: Response): Promise<Response<any, Record<string, any>>>;
}
