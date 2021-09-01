// #region Global Imports
import { combineReducers } from "redux"
// #endregion Global Imports

// #region Local Imports
import { AppReducer } from "./app"
import { StarReducer } from "./star"
// #endregion Local Imports

export * from "./app"
export * from "./star"

export const Reducers = combineReducers({
    app: AppReducer,
    star: StarReducer,
})
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// export default persistedReducer
