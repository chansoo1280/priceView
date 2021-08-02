// #region Global Imports
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { ISettingList } from "./SettingList"
import { Container, ContainerInner } from "./styled"
// #endregion Local Imports

export const SettingListInner: React.FunctionComponent<ISettingList.IProps> = (props) => {
    const { children, onClick } = props

    return <ContainerInner onClick={onClick}>{children}</ContainerInner>
}

export const SettingList: React.FunctionComponent<ISettingList.IProps> = (props) => {
    const { children } = props
    return <Container {...props}>{children}</Container>
}
