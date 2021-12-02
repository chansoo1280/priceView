// #region Global Imports
import { combineReducers } from "redux"
// #endregion Global Imports

// #region Local Imports
import appReducer from "./app"
import starReducer from "./star"
import subcateReducer from "./subcate"

// #endregion Local Imports

export * from "./app"
export * from "./star"
export * from "./subcate"

const rootReducer = combineReducers({
    appReducer,
    starReducer,
    subcateReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
