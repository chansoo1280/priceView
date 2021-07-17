import { BaseEntity } from 'typeorm';
import { Etc } from '../etc.entity';
export declare class Data extends BaseEntity {
    data_seq: number;
    etc: Etc;
    DATE: string;
    VALUE: number;
}
