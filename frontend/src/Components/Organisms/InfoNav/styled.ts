import { StyledButton } from "@Components/Atom"
import styled from "styled-components"
import { IInfoNav } from "./InfoNav"

export const Container = styled.div<IInfoNav.IProps>`
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    & > ${StyledButton} {
        border: 0;
    }
`
