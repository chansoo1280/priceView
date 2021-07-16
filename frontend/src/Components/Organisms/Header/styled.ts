import { StyledButton, StyledTitle } from "@Components"
import styled, { css } from "styled-components"
import { IHeader } from "./Header"

export const StyledHeader = styled.header<IHeader.IProps>`
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > ${StyledButton} {
        height: 100%;
        border: 0;
        font-size: 36px;
    }
    ${({ centerTitle }: IHeader.IProps) =>
        centerTitle &&
        css`
            & > ${StyledTitle} {
                position: absolute;
                left: 50%;
                transform: translate(-50%, 0);
            }
        `}
`
