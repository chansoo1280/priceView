import { StyledButton } from "@Components/Atom"
import styled from "styled-components"
import { IInfoNav } from "./InfoNav"

export const Container = styled.div<IInfoNav.IProps>`
    position: fixed;
    top: 50%;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 0;
    & > ${StyledButton} {
        border: 0;
    }
`
