// #region Global Imports
import { Dispatch } from "redux"
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions"
// #endregion Local Imports

// #region Interface Imports
import { IStarPage } from "@Reducers"
// #endregion Interface Imports

export const StarActions = {
    // Map: (payload: {}) => ({
    //     payload,
    //     type: ActionConsts.Star.SetReducer,
    // }),

    Reset: () => ({
        type: ActionConsts.Star.ResetReducer,
    }),

    AddStar: (payload: IStarPage.Actions.IAddStarPayload) => async (dispatch: Dispatch) => {
        dispatch({
            payload: {
                seq: payload.seq,
            },
            type: ActionConsts.Star.AddReducer,
        })
    },

    RemoveStar: (payload: IStarPage.Actions.IRemoveStarPayload) => async (dispatch: Dispatch) => {
        dispatch({
            payload: {
                seq: payload.seq,
            },
            type: ActionConsts.Star.RemoveReducer,
        })
    },
}
