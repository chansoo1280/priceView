import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  Unique,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Data } from './data/Data.entity';

@Entity()
export class Etc extends BaseEntity {
  @PrimaryGeneratedColumn()
  etc_seq!: number;
  @Column()
  name!: string;
  @OneToMany((type) => Data, (data) => data.etc)
  @JoinColumn()
  datas!: Data[];
}
