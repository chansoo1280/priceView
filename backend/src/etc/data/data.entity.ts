import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  Unique,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Etc } from '../Etc.entity';

@Entity()
export class Data extends BaseEntity {
  @PrimaryGeneratedColumn()
  data_seq!: number;
  @ManyToOne(() => Etc, (etc) => etc.datas)
  @JoinColumn({ name: 'etc_seq' })
  etc!: Etc;
  @Column()
  DATE!: string;
  @Column()
  VALUE!: number;
}
