// #region Local Imports
import { Subcate } from "@Interfaces"
import { createAction, ActionType, createReducer } from "typesafe-actions"
// #endregion Local Imports

// #region Interface Imports
// #endregion Interface Imports

// 상태의 타입 선언
interface SubcateReducer {
    list: Subcate[]
}
// 상태 초기화
const initialState: SubcateReducer = {
    list: [],
}

// 액션타입 선언
export const SubcateActionConsts = {
    SET_LIST: "subcateReducer/SET_LIST",
}

// 액션함수 선언
export const setList = createAction(SubcateActionConsts.SET_LIST)<typeof initialState.list>()

// 액션 객체타입
export const SubcateActions = { setList }

// 리듀서 추가
const subcateReducer = createReducer<SubcateReducer, ActionType<typeof SubcateActions>>(initialState, {
    [SubcateActionConsts.SET_LIST]: (state, action: any) => ({
        ...state,
        list: action.payload,
    }),
})
export default subcateReducer
