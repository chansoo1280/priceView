import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ResCode } from 'src/common/handleResult';
import { Data } from './Data.entity';
import { DataRepository } from './Data.repository';
export declare class DataService extends TypeOrmQueryService<Data> {
    private readonly dataRepository;
    constructor(dataRepository: DataRepository);
    getData(): Promise<Data[] | ResCode.NoContent>;
}
