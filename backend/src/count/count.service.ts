import { TypeOrmQueryService } from '@nestjs-query/query-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ResCode } from 'src/common/handleResult'
import { InsertResult } from 'typeorm'
import { Count } from './count.entity'
import { CountRepository } from './count.repository'

@Injectable()
export class CountService extends TypeOrmQueryService<Count> {
    constructor(
        @InjectRepository(Count)
        private readonly countRepository: CountRepository,
    ) {
        super(countRepository, { useSoftDelete: true })
    }

    async getStatistics({
        A_SEQ_LIST,
        P_YEAR_MONTH_LIST,
        M_GU_CODE = '',
    }: {
        A_SEQ_LIST: string[]
        P_YEAR_MONTH_LIST: string[]
        M_GU_CODE: string
    }): Promise<Count[]> {
        const result = await this.countRepository
            .createQueryBuilder('count')
            .select()
            .where('count.A_SEQ IN (:...A_SEQ_LIST)', {
                A_SEQ_LIST,
            })
            .andWhere('count.P_YEAR_MONTH IN (:...P_YEAR_MONTH_LIST)', {
                P_YEAR_MONTH_LIST,
            })
            .andWhere('count.M_GU_CODE = :M_GU_CODE', { M_GU_CODE })
            .orderBy('count.P_YEAR_MONTH')
            .getMany()
        return result
    }

    async getCount(C_CODE: Count['C_CODE']): Promise<Count | ResCode.NoContent> {
        const result = await this.countRepository
            .createQueryBuilder('count')
            .select()
            .where('count.C_CODE = :C_CODE', { C_CODE })
            .getOne()
        return result || ResCode.NoContent
    }

    async createCount(obj: any): Promise<InsertResult> {
        const result = await this.countRepository
            .createQueryBuilder()
            .insert()
            .into(Count)
            .values([obj])
            .orUpdate({ conflict_target: ['C_CODE'], overwrite: [] })
            .execute()
        return result
    }

    async updateCount(countSeq: Count['countSeq'], obj: any): Promise<ResCode.OK> {
        await this.countRepository
            .createQueryBuilder()
            .update(Count)
            .set(obj)
            .where('count.countSeq = :countSeq', { countSeq })
            .execute()
        return ResCode.OK
    }
}
