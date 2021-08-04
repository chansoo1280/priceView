// #region Global Imports
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { IContentsBar } from "./ContentsBar"
import { Container } from "./styled"
// #endregion Local Imports

const ContentsBar: React.FunctionComponent<IContentsBar.IProps> = (props) => {
    return <Container {...props} />
}
export { ContentsBar }
