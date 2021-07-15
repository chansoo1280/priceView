import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCode } from 'src/common/handleResult';
import { InsertResult } from 'typeorm';
import { Etc } from './Etc.entity';
import { EtcRepository } from './Etc.repository';

@Injectable()
export class EtcService extends TypeOrmQueryService<Etc> {
  constructor(
    @InjectRepository(Etc)
    private readonly etcRepository: EtcRepository,
  ) {
    super(etcRepository, { useSoftDelete: true });
  }

  async getEtc(): Promise<Etc[] | ResCode.NoContent> {
    const result = await this.etcRepository
      .createQueryBuilder('Etc')
      .select()
      .getMany();
    return result || ResCode.NoContent;
  }
}
