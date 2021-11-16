export const CATE_OBJ = {
    MEAT: 1,
    FISH: 2,
    VEGETABLE: 3,
} as const
export type CATE_OBJ = typeof CATE_OBJ[keyof typeof CATE_OBJ]

export const SUBCATE_LIST: {
    name: string
    type: number
    seqList: string[]
}[] = [
    {
        name: '돼지고기',
        type: CATE_OBJ.MEAT,
        seqList: ['285', '52', '99'],
    },
    {
        name: '쇠고기',
        type: CATE_OBJ.MEAT,
        seqList: ['278', '58', '82', '131', '106'],
    },
    {
        name: '닭고기',
        type: CATE_OBJ.MEAT,
        seqList: ['18', '275', '283', '138'],
    },
    {
        name: '달걀',
        type: CATE_OBJ.MEAT,
        seqList: ['171', '321', '320', '181'],
    },
    {
        name: '고등어',
        type: CATE_OBJ.FISH,
        seqList: ['13', '266', '267', '268', '269', '316', '318'],
    },
    {
        name: '조기',
        type: CATE_OBJ.FISH,
        seqList: ['303', '258', '259', '261', '260', '135', '313', '314'],
    },
    {
        name: '명태',
        type: CATE_OBJ.FISH,
        seqList: ['302', '262', '263', '264', '265', '184', '152', '315'],
    },
    {
        name: '동태',
        type: CATE_OBJ.FISH,
        seqList: ['288'],
    },
    {
        name: '오징어',
        type: CATE_OBJ.FISH,
        seqList: ['253', '54', '254', '256', '255', '257'],
    },
    {
        name: '배추',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['26', '125', '271', '307'],
    },
    {
        name: '상추',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['23', '310'],
    },
    {
        name: '무',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['25', '133', '274', '308'],
    },
    {
        name: '양파',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['24', '309'],
    },
    {
        name: '오이',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['22', '311'],
    },
    {
        name: '배',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['27', '284', '276', '248', '306'],
    },
    {
        name: '사과',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['28', '50', '305', '270', '244', '279'],
    },
    {
        name: '호박',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['277', '119', '118'],
    },
    {
        name: '애호박',
        type: CATE_OBJ.VEGETABLE,
        seqList: ['312'],
    },
]
export const NAME_OBJ: {
    [x: string]: {
        A_NAME: string
        A_UNIT: string[]
    }
} = {
    '285': { A_NAME: '돼지고기', A_UNIT: ['600g', '1근'] },
    '52': { A_NAME: '돼지고기(삼겹살)', A_UNIT: ['600g', '1근'] },
    '99': { A_NAME: '돼지고기(생삼겹살)', A_UNIT: ['600g', '1근'] },
    '278': { A_NAME: '쇠고기', A_UNIT: ['600g', '1근'] },
    '58': { A_NAME: '쇠고기(한우,불고기)', A_UNIT: ['600g', '1근'] },
    '82': { A_NAME: '쇠고기(육우,불고기)', A_UNIT: ['600g', '1근'] },
    '131': { A_NAME: '쇠고기(한우1등급)', A_UNIT: ['600g', '1근'] },
    '106': { A_NAME: '쇠고기(한우2등급)', A_UNIT: ['600g', '1근'] },
    '18': { A_NAME: '닭고기', A_UNIT: ['1마리'] },
    '275': { A_NAME: '닭고기(중간)', A_UNIT: ['1마리', '1kg'] },
    '283': { A_NAME: '닭고기(육계)', A_UNIT: ['1마리', '1kg'] },
    '138': { A_NAME: '닭고기(토종닭)', A_UNIT: ['1마리'] },
    '171': { A_NAME: '달걀(10개)', A_UNIT: ['10개'] },
    '321': { A_NAME: '달걀(15개)', A_UNIT: ['15개', '특란'] },
    '320': { A_NAME: '달걀(30개)', A_UNIT: ['30개', '특란'] },
    '181': { A_NAME: '달걀(왕란)', A_UNIT: ['30개'] },
    '13': { A_NAME: '고등어', A_UNIT: ['1마리'] },
    '266': { A_NAME: '고등어(생물,국산)', A_UNIT: ['1마리'] },
    '267': { A_NAME: '고등어(생물,수입산)', A_UNIT: ['1마리'] },
    '268': { A_NAME: '고등어(냉동,국산)', A_UNIT: ['1마리'] },
    '269': { A_NAME: '고등어(냉동,수입산)', A_UNIT: ['1마리'] },
    '316': { A_NAME: '고등어(30cm,국산)', A_UNIT: ['1마리'] },
    '318': { A_NAME: '고등어(30cm,수입산)', A_UNIT: ['1마리'] },
    '303': { A_NAME: '조기', A_UNIT: ['1마리'] },
    '258': { A_NAME: '조기(생물,국산)', A_UNIT: ['1마리'] },
    '259': { A_NAME: '조기(냉동,국산)', A_UNIT: ['1마리'] },
    '261': { A_NAME: '조기(생물,수입산)', A_UNIT: ['1마리'] },
    '260': { A_NAME: '조기(냉동,수입산)', A_UNIT: ['1마리'] },
    '135': { A_NAME: '조기(중국산,생물)', A_UNIT: ['1마리'] },
    '314': { A_NAME: '냉동참조기(20cm,국산)', A_UNIT: ['1마리'] },
    '313': { A_NAME: '냉동참조기(20cm,수입)', A_UNIT: ['1마리'] },
    '302': { A_NAME: '명태', A_UNIT: ['1마리'] },
    '262': { A_NAME: '명태(생물,국산)', A_UNIT: ['1마리'] },
    '263': { A_NAME: '명태(냉동,국산)', A_UNIT: ['1마리'] },
    '264': { A_NAME: '명태(냉동,수입산)', A_UNIT: ['1마리'] },
    '265': { A_NAME: '명태(생물,수입산)', A_UNIT: ['1마리'] },
    '184': { A_NAME: '명태(일본산,냉동)', A_UNIT: ['500g'] },
    '152': { A_NAME: '명태(러시아,냉동)', A_UNIT: ['1마리'] },
    '315': { A_NAME: '명태(45cm,수입산)', A_UNIT: ['1마리'] },
    '288': { A_NAME: '동태', A_UNIT: ['1마리'] },
    '253': { A_NAME: '오징어', A_UNIT: ['1마리'] },
    '54': { A_NAME: '오징어(냉동)', A_UNIT: ['1마리'] },
    '254': { A_NAME: '오징어(생물,국산)', A_UNIT: ['1마리'] },
    '256': { A_NAME: '오징어(냉동,국산)', A_UNIT: ['1마리'] },
    '255': { A_NAME: '오징어(생물,수입산)', A_UNIT: ['1마리'] },
    '257': { A_NAME: '오징어(냉동,수입산)', A_UNIT: ['1마리'] },
    '26': { A_NAME: '배추', A_UNIT: ['1포기'] },
    '125': { A_NAME: '배추(국산)', A_UNIT: ['1포기'] },
    '271': { A_NAME: '배추(중간)', A_UNIT: ['1포기'] },
    '307': { A_NAME: '배추(2.5~3kg)', A_UNIT: ['1포기', '1개'] },
    '23': { A_NAME: '상추', A_UNIT: ['100g'] },
    '310': { A_NAME: '상추(100g)', A_UNIT: ['100g', '1봉지'] },
    '25': { A_NAME: '무', A_UNIT: ['1개'] },
    '133': { A_NAME: '무(세척무)', A_UNIT: ['1개'] },
    '274': { A_NAME: '무(세척무, 중)', A_UNIT: ['1개'] },
    '308': { A_NAME: '무(1kg)', A_UNIT: ['1개', '1kg'] },
    '24': { A_NAME: '양파', A_UNIT: ['1.5kg'] },
    '309': { A_NAME: '양파(1.5kg망)', A_UNIT: ['1망', '1.5kg'] },
    '22': { A_NAME: '오이', A_UNIT: ['1개'] },
    '311': { A_NAME: '오이(다다기)', A_UNIT: ['1개', '1 개'] },
    '27': { A_NAME: '배', A_UNIT: ['1개'] },
    '284': { A_NAME: '배(중품)', A_UNIT: ['1개'] },
    '276': { A_NAME: '배(신고)', A_UNIT: ['1개'] },
    '248': { A_NAME: '배(신고),중급(대)', A_UNIT: ['1개', '1 개'] },
    '306': { A_NAME: '배(신고, 600g)', A_UNIT: ['1개', '600g'] },
    '28': { A_NAME: '사과', A_UNIT: ['1개'] },
    '50': { A_NAME: '사과(부사)', A_UNIT: ['1개'] },
    '305': { A_NAME: '사과(부사, 300g)', A_UNIT: ['1개', '300g'] },
    '270': { A_NAME: '사과(부사),중급(중)', A_UNIT: ['1개'] },
    '244': { A_NAME: '사과(부사),중급(대)', A_UNIT: ['1개', '1 개'] },
    '279': { A_NAME: '사과(중품)', A_UNIT: ['1개'] },
    '277': { A_NAME: '호박', A_UNIT: ['1개'] },
    '119': { A_NAME: '호박(인큐베이터)', A_UNIT: ['1개'] },
    '118': { A_NAME: '호박(인큐베이터),중간', A_UNIT: ['1개'] },
    '312': { A_NAME: '애호박', A_UNIT: ['1개', '1 개'] },
}
export const TYPE_NAME_OBJ: {
    [x: string]: string
} = {
    '': '',
    '001': '전통시장',
    '002': '대형마트',
} as const
export const GU_NAME_OBJ: {
    [x: string]: string
} = {
    '': '',
    '680000': '강남구',
    '440000': '마포구',
    '305000': '강북구',
    '650000': '서초구',
    '710000': '송파구',
    '380000': '은평구',
    '290000': '성북구',
    '590000': '동작구',
    '350000': '노원구',
    '470000': '양천구',
    '170000': '용산구',
    '320000': '도봉구',
    '740000': '강동구',
    '410000': '서대문구',
    '215000': '광진구',
    '545000': '금천구',
    '620000': '관악구',
    '110000': '종로구',
    '140000': '중구',
    '200000': '성동구',
    '500000': '강서구',
    '530000': '구로구',
    '560000': '영등포구',
    '260000': '중랑구',
    '230000': '동대문구',
} as const
export const M_TYPE_CODE_LIST = Object.keys(TYPE_NAME_OBJ)
export const M_GU_CODE_LIST = Object.keys(GU_NAME_OBJ)
