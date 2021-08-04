import { MarginStyle, PaddingStyle, ShowStyle } from "@Components/styles"
import styled from "styled-components"
import { IContentsBar } from "./ContentsBar"

export const Container = styled.div<IContentsBar.IProps>`
    margin-bottom: 20px;
    ${MarginStyle}
    padding: 0 10px;
    ${PaddingStyle}
    display: flex;
    width: 100%;
    ${ShowStyle}
`
