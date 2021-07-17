import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ResCode } from 'src/common/handleResult';
import { Etc } from './etc.entity';
import { EtcRepository } from './etc.repository';
export declare class EtcService extends TypeOrmQueryService<Etc> {
    private readonly etcRepository;
    constructor(etcRepository: EtcRepository);
    getEtc(): Promise<Etc[] | ResCode.NoContent>;
}
