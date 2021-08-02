import { Category } from "@Interfaces/Main"
declare namespace IInfoNav {
    export interface IProps {
        children?: React.ReactNode
        nav_info?: {
            next?: Category | null
            prev?: Category | null
        } | null
    }
}

export { IInfoNav }
