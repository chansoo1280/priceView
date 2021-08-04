import { ShowStyle } from "@Components/styles"
import styled from "styled-components"
import { IModal } from "./Modal"

export const StyledModalWrap = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    ${ShowStyle}
`
export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border: 1px solid;
`
export const StyledModalHeader = styled.header`
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid;
`
