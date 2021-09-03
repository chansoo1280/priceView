// #region Global Imports
import { Action } from "redux"
// #endregion Global Imports

export interface IAction<T> extends Action {
    payload: T
}
