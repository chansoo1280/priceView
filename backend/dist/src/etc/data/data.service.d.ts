import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ResCode } from 'src/common/handleResult';
import { Data } from './data.entity';
import { DataRepository } from './data.repository';
export declare class DataService extends TypeOrmQueryService<Data> {
    private readonly dataRepository;
    constructor(dataRepository: DataRepository);
    getData(): Promise<Data[] | ResCode.NoContent>;
}
