import { EntityRepository, Repository } from 'typeorm';

import { Data } from './Data.entity';

@EntityRepository(Data)
export class DataRepository extends Repository<Data> {}
