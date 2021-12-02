import { CATE_NAME, CATE_OBJ } from '../define'

export type CATE = typeof CATE_OBJ[keyof typeof CATE_OBJ]
export type CATE_NAME = typeof CATE_NAME[keyof typeof CATE_NAME]
export type Seq = number

export interface Subcate {
    seq: Seq
    name: string
    icon?: string
    cate: CATE
    seqList: Seq[]
}
