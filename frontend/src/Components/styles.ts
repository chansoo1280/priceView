import { css } from "styled-components"
import { SizeCode } from "./Components"

export const AbsCenterStyle = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const SizeStyle = ({ sizeVal }: { sizeVal?: SizeCode }) => {
    switch (sizeVal) {
        case SizeCode.small: {
            return css`
                height: 20px;
                font-size: 12px;
            `
        }
        case SizeCode.large: {
            return css`
                height: 40px;
                font-size: 18px;
            `
        }
        case SizeCode.icon: {
            return css`
                width: 30px;
                height: 30px;
                & > i {
                    font-size: 24px;
                }
            `
        }
        case SizeCode.profile: {
            return css`
                width: 40px;
                height: 40px;
                border-radius: 100%;
            `
        }
        default: {
            //normal
            return css`
                height: 30px;
                font-size: 16px;
            `
        }
    }
}

export const PaddingStyle = ({ sizeVal, noPadding }: { sizeVal?: SizeCode, noPadding?: boolean }) => {
    if(noPadding === true)return css`
        padding: 0;
    `
    switch (sizeVal) {
        case SizeCode.small: {
            return css`
                padding: 0 5px;
            `
        }
        case SizeCode.large: {
            return css`
                padding: 0 15px;
            `
        }
        default: {
            return css`
                padding: 0 10px;
            `
        }
    }
}

export const CoverStyle = ({ cover }: { cover?: boolean }) => {
    if (cover) {
        return css`
            flex: 1;
        `
    }
}

export const MarginStyle = ({ noMargin }: { noMargin?: boolean }) => css`
    ${noMargin && `margin:0;`}
    &:last-child {
        margin-right: 0;
        margin-bottom: 0;
    }
`
export const RightStyle = ({ right }: { right?: boolean }) => css`
    ${right && `margin-left:auto;`}
`

export const ShowStyle = ({ show }: { show?: boolean }) => css`
    ${show === false && "display: none;"}
`

export const DisabledStyle = ({ isDisabled }: { isDisabled?: boolean }) => {
    if (isDisabled === true) {
        return css`
            background: gray;
        `
    }
}

export const ReadOnlyStyle = ({ readOnly }: { readOnly?: boolean }) => {
    if (readOnly === true) {
        return css`
            background: gray;
        `
    }
}

export const centerStyle = ({ center }: { center?: boolean }) => {
    if (center === true) {
        return css`
            justify-content: center;
        `
    }
}
