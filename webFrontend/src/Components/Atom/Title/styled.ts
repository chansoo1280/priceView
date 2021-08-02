import { MarginStyle } from "@Components"
import styled, { css } from "styled-components"
import { ITitle } from "./Title"
const TitleSizeStyle = ({ as }: { as?: ITitle.ITags }) => {
    switch (as) {
        case "h1": {
            return css`
                font-weight: 700;
                font-size: 26px;
            `
        }
        case "h2": {
            return css`
                font-weight: 500;
                font-size: 22px;
            `
        }
        case "h3": {
            return css`
                font-size: 18px;
            `
        }
        case "h4": {
            return css`
                font-size: 16px;
            `
        }
        case "h5": {
            return css`
                font-size: 16px;
            `
        }
        case "h6": {
            return css`
                font-size: 16px;
            `
        }
    }
}

export const StyledTitle = styled.h1<ITitle.IProps>`
    line-height: 1;
    ${TitleSizeStyle}
`
