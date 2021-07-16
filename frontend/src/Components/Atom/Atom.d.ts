import { IComponents } from "@Components/Components.d"

declare namespace IAtom {
    export interface IProps {
        children?: React.ReactNode
        className?: string
        sizeVal?: IComponents.SizeCode
        cover?: boolean
        show?: boolean
        noMargin?: boolean
        isDisabled?: boolean
    }
}

export { IAtom }
