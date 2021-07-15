import { MarginStyle, RightStyle, SizeStyle, CoverStyle, PaddingStyle, ShowStyle, DisabledStyle } from "@Components/styles"
import styled from "styled-components"
import { IButton } from "./Button"

export const StyledButton = styled.button<IButton.IProps>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border: 1px solid;
    border-radius: 2px;
    ${SizeStyle}
    ${CoverStyle}
    ${PaddingStyle}
    ${DisabledStyle}
    ${ShowStyle}
`
