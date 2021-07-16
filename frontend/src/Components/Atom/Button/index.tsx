// #region Global Imports
import React from "react"
import Link from "next/link"
// #endregion Global Imports

// #region Local Imports
import { IButton } from "./Button"
import { StyledButton } from "./styled"
// #endregion Local Imports
export { StyledButton }

const Button: React.FunctionComponent<IButton.IProps> = (props) => {
    const { href } = props
    if (href !== undefined) {
        return (
            <Link href={href}>
                <StyledButton as="a" {...props} />
          </Link>
        )
    }
    return <StyledButton {...props} />
}
Button.defaultProps = {
    type: "button",
}

export { Button }
