// #region Global Imports
import { Dispatch } from "redux"
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions"
// #endregion Local Imports

// #region Interface Imports
import { IAppPage } from "@Reducers"
// #endregion Interface Imports

export const AppActions = {
    // Map: (payload: {}) => ({
    //     payload,
    //     type: ActionConsts.App.SetReducer,
    // }),

    Reset: () => ({
        type: ActionConsts.App.ResetReducer,
    }),

    SetSelCate: (payload: IAppPage.Actions.ISetSelCatePayload) => async (dispatch: Dispatch) => {
        dispatch({
            payload: payload,
            type: ActionConsts.App.SetSelCateReducer,
        })
    },
}
