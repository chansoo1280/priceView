export const RN_API = {
    RN_API_GET_VERSION: "RN_API_GET_VERSION",
    RN_API_GET_POSITION: "RN_API_GET_POSITION",
} as const
export type RN_API = typeof RN_API[keyof typeof RN_API] // type
// 요청 타입
export type RN_API_REQ_TYPES = {
    [RN_API.RN_API_GET_VERSION]: unknown
    [RN_API.RN_API_GET_POSITION]: unknown
}
// 응답 타입
export type RN_API_RES_TYPES = {
    [RN_API.RN_API_GET_VERSION]: string
    [RN_API.RN_API_GET_POSITION]: any
}
