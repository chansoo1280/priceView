// #region Global Imports
// #endregion Global Imports

// #region Local Imports
import { IHeader } from "./Header"
import { StyledHeader } from "./styled"

// #endregion Local Imports

export const Header = function (props: IHeader.IProps) {
    return (
        <>
            <StyledHeader {...props} />
        </>
    )
}
