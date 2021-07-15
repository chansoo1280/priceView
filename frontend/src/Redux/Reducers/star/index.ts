// #region Local Imports
import { ActionConsts } from "@Definitions"
// #endregion Local Imports

// #region Interface Imports
import { IAction } from "@Interfaces"
import { IStarPage } from "./Star"
// #endregion Interface Imports

export type { IStarPage }

const INITIAL_STATE: IStarPage.IStateProps = {
    list: [],
}

type IMapPayload = IStarPage.Actions.IMapPayload

export const StarReducer = (state = INITIAL_STATE, action: IAction<IMapPayload>) => {
    const payloadSeq = action.payload?.seq || null
    const newStar = {
        list: state.list.slice(),
    }
    switch (action.type) {
        case ActionConsts.Star.AddReducer:
            if (payloadSeq && !state.list.find((seq) => seq === payloadSeq)) {
                newStar.list.push(payloadSeq)
            }
            return {
                ...state,
                ...newStar,
            }

        case ActionConsts.Star.RemoveReducer:
            if (payloadSeq && state.list.find((seq) => seq === payloadSeq)) {
                const idx = state.list.indexOf(payloadSeq)
                newStar.list.splice(idx, 1)
            }
            return {
                ...state,
                ...newStar,
            }

        case ActionConsts.Star.ResetReducer:
            return INITIAL_STATE

        default:
            return state
    }
}
