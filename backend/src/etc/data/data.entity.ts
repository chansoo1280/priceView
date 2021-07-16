import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Etc } from '../etc.entity';

@Entity()
export class Data extends BaseEntity {
  @PrimaryGeneratedColumn()
  data_seq!: number;
  @ManyToOne(() => Etc, (etc: Etc) => etc.datas)
  @JoinColumn({ name: 'etc_seq' })
  etc!: Etc;
  @Column()
  DATE!: string;
  @Column()
  VALUE!: number;
}
