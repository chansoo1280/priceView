// #region Global Imports
import { combineReducers } from "redux"
// #endregion Global Imports

// #region Local Imports
import appReducer from "./app"
import starReducer from "./star"

// #endregion Local Imports

export * from "./app"
export * from "./star"

const rootReducer = combineReducers({
    appReducer,
    starReducer,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
