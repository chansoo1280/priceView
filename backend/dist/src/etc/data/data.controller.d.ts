import { DataService } from './data.service';
import { Response } from 'express';
export declare class DataController {
    private dataService;
    constructor(dataService: DataService);
    getData(res: Response): Promise<Response<any, Record<string, any>>>;
}
