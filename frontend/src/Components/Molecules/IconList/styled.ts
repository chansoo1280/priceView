import styled from "styled-components"
import { StyledButton } from "@Components"
import { IIconList } from "./IconList"

export const Wraper = styled.div<IIconList.IProps>`
    width: 100%;
    flex: 1;
    & > .swiper-container {
        height: 100%;
    }
`
export const Container = styled.div<IIconList.IProps>`
    padding: 0 20px;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
`

export const ContainerInner = styled.div<IIconList.IProps>`
    flex: 1;
    width: 100%;
    & > ${StyledButton} {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
`
