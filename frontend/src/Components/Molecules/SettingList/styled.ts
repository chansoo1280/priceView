import styled from "styled-components"
import { ISettingList } from "./SettingList"
import { StyledButton, StyledTitle } from "@Components"

export const Container = styled.ul<ISettingList.IProps>`
    width: 100%;

    &:last-of-type {
        border-bottom: 1px solid;
    }
`

export const ContainerInner = styled.li<ISettingList.IProps>`
    padding: 0 20px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid;
    &:last-child {
        border-bottom: 0;
    }
    & > ${StyledTitle} {
        margin-right: auto;
    }
`
