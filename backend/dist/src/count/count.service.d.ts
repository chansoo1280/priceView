import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ResCode } from 'src/common/handleResult';
import { InsertResult } from 'typeorm';
import { Count } from './count.entity';
import { CountRepository } from './count.repository';
export declare class CountService extends TypeOrmQueryService<Count> {
    private readonly countRepository;
    constructor(countRepository: CountRepository);
    getStatistics({ A_SEQ, P_YEAR_MONTH_LIST, M_TYPE_CODE, M_GU_CODE, }: any): Promise<Count[]>;
    getCount(C_CODE: Count['C_CODE']): Promise<Count | ResCode.NoContent>;
    createCount(obj: any): Promise<InsertResult>;
    updateCount(count_seq: Count['count_seq'], obj: any): Promise<ResCode.OK>;
}
