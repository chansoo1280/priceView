import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResCode } from 'src/common/handleResult';
import { InsertResult } from 'typeorm';
import { Data } from './data.entity';
import { DataRepository } from './data.repository';

@Injectable()
export class DataService extends TypeOrmQueryService<Data> {
  constructor(
    @InjectRepository(Data)
    private readonly dataRepository: DataRepository,
  ) {
    super(dataRepository, { useSoftDelete: true });
  }

  async getData(): Promise<Data[] | ResCode.NoContent> {
    const result = await this.dataRepository
      .createQueryBuilder('Data')
      .select()
      .getMany();
    return result || ResCode.NoContent;
  }
}
