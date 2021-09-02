import { CATEGORY_TYPE } from "@Definitions/MainConsts"

export interface Price {
    price_seq: number
    P_SEQ: number
    M_SEQ: number
    M_NAME: string
    A_SEQ: number
    A_NAME: string
    A_UNIT: string
    A_PRICE: string
    P_YEAR_MONTH: string
    ADD_COL: string
    P_DATE: string
    M_TYPE_CODE: string
    M_TYPE_NAME: string
    M_GU_CODE: string
    M_GU_NAME: string
}

export interface Count {
    count_seq: number
    C_CODE: string
    A_SEQ: string
    A_NAME: string
    A_UNIT: string
    P_YEAR: string
    P_YEAR_MONTH: string
    M_TYPE_CODE: string
    M_TYPE_NAME: string
    M_GU_CODE: string
    M_GU_NAME: string
    length: number
    AVER_VAL: number
}

export interface Category {
    seq: number
    name: Price["A_NAME"]
    icon?: string
    type: CATEGORY_TYPE
    seq_list: Price["A_SEQ"][]
}
export interface PriceGroup {
    A_SEQ?: Price["A_SEQ"]
    A_NAME: Price["A_NAME"]
    A_UNIT: Price["A_UNIT"][]
}
