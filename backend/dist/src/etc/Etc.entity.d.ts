import { BaseEntity } from 'typeorm';
import { Data } from './data/Data.entity';
export declare class Etc extends BaseEntity {
    etc_seq: number;
    name: string;
    datas: Data[];
}
