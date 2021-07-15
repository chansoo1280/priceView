// #region Interface Imports
import { IAppPage, IHomePage, IStarPage } from "@Redux"
// #endregion Interface Imports

export interface IStore {
    app: IAppPage.IStateProps
    home: IHomePage.IStateProps
    star: IStarPage.IStateProps
}
