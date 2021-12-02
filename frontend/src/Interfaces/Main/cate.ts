export type Seq = number

export const CATE = {
    STAR: 0,
    MEAT: 1,
    FISH: 2,
    VEGETABLE: 3,
} as const

export const CATE_NAME = {
    [CATE.STAR]: "favorites",
    [CATE.MEAT]: "meat",
    [CATE.FISH]: "fish",
    [CATE.VEGETABLE]: "vegetable",
} as const

export type CATE = typeof CATE[keyof typeof CATE]
export type CATE_NAME = typeof CATE_NAME[keyof typeof CATE_NAME]
export const CATE_NAME_LIST = Object.entries(CATE_NAME)

export interface Subcate {
    seq: Seq
    name: string
    icon?: string
    cate: CATE
    seqList: Seq[]
}
