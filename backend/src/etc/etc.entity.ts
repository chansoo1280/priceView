import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Data } from './data/data.entity';

@Entity()
export class Etc extends BaseEntity {
  @PrimaryGeneratedColumn()
  etc_seq!: number;
  @Column()
  name!: string;
  @OneToMany((type) => Data, (data: Data) => data.etc)
  @JoinColumn()
  datas!: Data[];
}
