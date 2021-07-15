import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCode } from 'src/common/handleResult';
import { InsertResult } from 'typeorm';
import { Count } from './count.entity';
import { CountRepository } from './count.repository';

@Injectable()
export class CountService extends TypeOrmQueryService<Count> {
  constructor(
    @InjectRepository(Count)
    private readonly countRepository: CountRepository,
  ) {
    super(countRepository, { useSoftDelete: true });
  }

  async getStatistics({
    A_SEQ,
    P_YEAR_MONTH_LIST,
    M_TYPE_CODE = '',
    M_GU_CODE = '',
  }: any): Promise<Count[]> {
    const result = await this.countRepository
      .createQueryBuilder('count')
      .select()
      .where('count.A_SEQ = :A_SEQ', { A_SEQ })
      .andWhere('count.P_YEAR_MONTH IN (:...P_YEAR_MONTH_LIST)', {
        P_YEAR_MONTH_LIST,
      })
      .andWhere('count.M_TYPE_CODE = :M_TYPE_CODE', { M_TYPE_CODE })
      .andWhere('count.M_GU_CODE = :M_GU_CODE', { M_GU_CODE })
      .orderBy('count.P_YEAR_MONTH')
      .getMany();
    return result;
  }

  async getCount(C_CODE: Count['C_CODE']): Promise<Count | ResCode.NoContent> {
    const result = await this.countRepository
      .createQueryBuilder('count')
      .select()
      .where('count.C_CODE = :C_CODE', { C_CODE })
      .getOne();
    return result || ResCode.NoContent;
  }

  async createCount(obj: any): Promise<InsertResult> {
    const result = await this.countRepository
      .createQueryBuilder()
      .insert()
      .into(Count)
      .values([obj])
      .orUpdate({ conflict_target: ['C_CODE'], overwrite: [] })
      .execute();
    return result;
  }

  async updateCount(
    count_seq: Count['count_seq'],
    obj: any,
  ): Promise<ResCode.OK> {
    await this.countRepository
      .createQueryBuilder()
      .update(Count)
      .set(obj)
      .where('count.count_seq = :count_seq', { count_seq })
      .execute();
    return ResCode.OK;
  }
}
