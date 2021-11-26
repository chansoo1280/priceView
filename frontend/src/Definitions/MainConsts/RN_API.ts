import { StarReducer } from "@Reducers"

export const RN_API = {
    RN_API_GET_STAR: "RN_API_GET_STAR",
} as const
export type RN_API = typeof RN_API[keyof typeof RN_API]

export type RN_API_RES_TYPES = {
    [RN_API.RN_API_GET_STAR]: StarReducer["list"]
}
