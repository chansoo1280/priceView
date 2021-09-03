// #region Interface Imports
import { IAppPage, IStarPage } from "@Redux"
// #endregion Interface Imports

export interface IStore {
    star: IStarPage.IStateProps
    app: IAppPage.IStateProps
}
