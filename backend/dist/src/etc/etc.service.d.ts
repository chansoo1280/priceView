import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { ResCode } from 'src/common/handleResult';
import { Etc } from './Etc.entity';
import { EtcRepository } from './Etc.repository';
export declare class EtcService extends TypeOrmQueryService<Etc> {
    private readonly etcRepository;
    constructor(etcRepository: EtcRepository);
    getEtc(): Promise<Etc[] | ResCode.NoContent>;
}
