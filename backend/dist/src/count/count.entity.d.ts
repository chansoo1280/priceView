import { BaseEntity } from 'typeorm';
export declare class Count extends BaseEntity {
    count_seq: number;
    C_CODE: string;
    A_SEQ: string;
    A_NAME: string;
    A_UNIT: string;
    P_YEAR: string;
    P_YEAR_MONTH: string;
    M_TYPE_CODE: string;
    M_TYPE_NAME: string;
    M_GU_CODE: string;
    M_GU_NAME: string;
    length: number;
    AVER_VAL: number;
}
