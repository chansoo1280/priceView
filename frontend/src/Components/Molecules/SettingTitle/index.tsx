// #region Global Imports
import { Title } from "@Components"
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { ISettingTitle } from "./SettingTitle"
import { Container } from "./styled"
// #endregion Local Imports

const SettingTitle: React.FunctionComponent<ISettingTitle.IProps> = (props) => {
    return <Container {...props} />
}
export { SettingTitle }
