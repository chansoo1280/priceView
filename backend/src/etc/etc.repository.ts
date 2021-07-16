import { EntityRepository, Repository } from 'typeorm';

import { Etc } from './etc.entity';

@EntityRepository(Etc)
export class EtcRepository extends Repository<Etc> {}
