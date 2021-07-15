import { EntityRepository, Repository } from 'typeorm';

import { Etc } from './Etc.entity';

@EntityRepository(Etc)
export class EtcRepository extends Repository<Etc> {}
