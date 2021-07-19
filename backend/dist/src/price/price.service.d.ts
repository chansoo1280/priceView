import { HttpService } from '@nestjs/common';
import { Price } from './price.entity';
import { PriceRepository } from './price.repository';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { InsertResult } from 'typeorm';
export declare class PriceService extends TypeOrmQueryService<Price> {
    private readonly priceRepository;
    private httpService;
    constructor(priceRepository: PriceRepository, httpService: HttpService);
    handleInterval(): Promise<void>;
    getCnt({ name, A_UNIT, P_YEAR_MONTH }: any): Promise<Price[]>;
    getLen(P_YEAR_MONTH: Price['P_YEAR_MONTH']): Promise<any>;
    findAll(P_YEAR_MONTH: Price['P_YEAR_MONTH'], page: number): Promise<any>;
    createPrice(list: Price[]): Promise<InsertResult>;
}
