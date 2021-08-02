import { MarginStyle, RightStyle, SizeStyle, CoverStyle, PaddingStyle, ShowStyle, DisabledStyle } from "@Components/styles"
import styled from "styled-components"
import { ISelect } from "./Select"

// wrapped styled-component and re-typed it works as expected
export const StyledSelect = styled.select<ISelect.IProps>`
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
