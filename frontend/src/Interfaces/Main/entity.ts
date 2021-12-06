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
