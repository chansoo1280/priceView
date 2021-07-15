import { StyledTitle } from "@Components/Atom"
import { NoPaddingStyle, ShowStyle } from "@Components/styles"
import styled from "styled-components"
import { ISettingTitle } from "./SettingTitle"

export const Container = styled.div<ISettingTitle.IProps>`
    padding:0 10px;
    display: flex;
    align-items:center;
    height:30px;
    width: 100%;
    border-top:2px solid;
    border-bottom:2px solid;
    &>${StyledTitle}{
        font-size:16px;
    }
`
