// #region Global Imports
import { Dispatch } from "redux"
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions"
// #endregion Local Imports

// #region Interface Imports
import { IStarPage } from "@Reducers"
import { IAction } from "@Interfaces"
// #endregion Interface Imports

export const StarActions = {
    // Map: (payload: {}) => ({
    //     payload,
    //     type: ActionConsts.Star.SetReducer,
    // }),

    Reset: () => ({
        type: ActionConsts.Star.ResetReducer,
    }),

    SetStar: (payload: IStarPage.Actions.ISetStarPayload): IAction<IStarPage.Actions.IMapPayload> => ({
        payload: payload,
        type: ActionConsts.Star.SetReducer,
    }),

    AddStar: (payload: IStarPage.Actions.IAddStarPayload): IAction<IStarPage.Actions.IMapPayload> => ({
        payload: {
            seq: payload.seq,
        },
        type: ActionConsts.Star.AddReducer,
    }),

    RemoveStar: (payload: IStarPage.Actions.IRemoveStarPayload): IAction<IStarPage.Actions.IMapPayload> => ({
        payload: {
            seq: payload.seq,
        },
        type: ActionConsts.Star.RemoveReducer,
    }),
}
