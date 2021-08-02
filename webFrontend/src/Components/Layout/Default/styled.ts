import styled from "styled-components"

export const StyledWrap = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-rows: 60px 1fr;
    grid-template-areas:
        "header"
        "main";
`
