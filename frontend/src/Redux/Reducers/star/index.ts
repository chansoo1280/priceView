// #region Local Imports
import { createAction, ActionType, createReducer, PayloadAction, action } from "typesafe-actions"
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

// 상태의 타입 선언
type seq = number
interface StarReducer {
    list: seq[]
}
// 상태 초기화
const initialState: StarReducer = {
    list: [],
}

// 액션타입 선언
export const StarActionConsts = {
    RESET_STAR: "starReducer/RESET_STAR",
    SET_STAR: "starReducer/SET_STAR",
    ADD_STAR: "starReducer/ADD_STAR",
    REMOVE_STAR: "starReducer/REMOVE_STAR",
}

// 액션함수 선언
export const resetStar = createAction(StarActionConsts.RESET_STAR)()
export const setStar = createAction(StarActionConsts.SET_STAR)<seq[]>()
export const addStar = createAction(StarActionConsts.ADD_STAR)<seq>()
export const removeStar = createAction(StarActionConsts.REMOVE_STAR)<seq>()

// 액션 객체타입
export const StarActions = { resetStar, setStar, addStar, removeStar }

const saveStarList = (newStarList: seq[]) => {
    if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                type: "RN_API_SET_STAR",
                data: newStarList,
            }),
        )
    }
}

// 리듀서 추가
const starReducer = createReducer<StarReducer, ActionType<typeof StarActions>>(initialState, {
    [StarActionConsts.RESET_STAR]: () => ({
        list: [],
    }),
    [StarActionConsts.SET_STAR]: (state, action: any) => {
        return {
            ...state,
            list: [...action.payload],
        }
    },
    [StarActionConsts.ADD_STAR]: (state, action: any) => {
        const newStarList = state.list.slice()
        if (action.payload && !state.list.find((seq) => seq === action.payload)) {
            newStarList.push(action.payload)
            saveStarList(newStarList)
        }
        return {
            ...state,
            list: newStarList,
        }
    },
    [StarActionConsts.REMOVE_STAR]: (state, action: any) => {
        const newStarList = state.list.slice()
        if (action.payload && state.list.find((seq) => seq === action.payload)) {
            const idx = state.list.indexOf(action.payload)
            newStarList.splice(idx, 1)
            saveStarList(newStarList)
        }
        return {
            ...state,
            list: newStarList,
        }
    },
})
export default starReducer
