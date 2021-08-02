import { IComponents } from "@Components/Components.d"

declare namespace IMolecules {
    export interface IProps {
        children?: React.ReactNode
        className?: string
        sizeVal?: IComponents.SizeCode
        cover?: boolean
        show?: boolean
        isDisabled?: boolean
        noPadding?: boolean
        noMargin?: boolean
    }
}

export { IMolecules }
