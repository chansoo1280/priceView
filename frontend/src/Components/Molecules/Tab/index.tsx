// #region Global Imports
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { ITab } from "./Tab"
import { Container, ContainerInner } from "./styled"
import { Button } from "@Components/Atom"
// #endregion Local Imports

export const TabInner: React.FunctionComponent<ITab.IProps> = (props) => {
    const { children } = props
    return <ContainerInner {...props}>{children}</ContainerInner>
}

export const Tab: React.FunctionComponent<ITab.IProps> = (props) => {
    const { children } = props
    return <Container {...props}>{children}</Container>
}
