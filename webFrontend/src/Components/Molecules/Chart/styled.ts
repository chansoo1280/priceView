import styled from "styled-components"
import { IChart } from "./Chart"

export const Container = styled.div<IChart.IProps>`
    margin-bottom: 20px;
    display: flex;
    width: 100%;

    & > .c3 > svg > defs:first-child > clipPath:first-child > rect {
        width: 3000px;
        transform: translate(-50%, 0);
    }
`
