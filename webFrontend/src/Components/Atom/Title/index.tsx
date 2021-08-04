// #region Global Imports
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { ITitle } from "./Title"
import { StyledTitle } from "./styled"
// #endregion Local Imports
export { StyledTitle }

const Title: React.FunctionComponent<ITitle.IProps> = (props) => {
    return <StyledTitle {...props} />
}
Title.defaultProps = {
    as: "h1",
}

export { Title }
