// #region Local Imports
import { ActionConsts } from "@Definitions"
// #endregion Local Imports

// #region Interface Imports
import { IAction } from "@Interfaces"
import { IAppPage } from "./App"
// #endregion Interface Imports

export type { IAppPage }

const INITIAL_STATE: IAppPage.IStateProps = {
    sel_cate: null,
    sel_theme: null,
}

type ISetSelCatePayload = IAppPage.Actions.ISetSelCatePayload
type ISetSelThemePayload = IAppPage.Actions.ISetSelThemePayload

export const AppReducer = (state = INITIAL_STATE, action: IAction<ISetSelCatePayload | ISetSelThemePayload>) => {
    switch (action.type) {
        case ActionConsts.App.SetSelCateReducer:
            return {
                ...state,
                sel_cate: action.payload,
            }
        case ActionConsts.App.SetSelThemeReducer:
            return {
                ...state,
                sel_theme: action.payload,
            }
        case ActionConsts.App.ResetReducer:
            return INITIAL_STATE

        default:
            return state
    }
}
