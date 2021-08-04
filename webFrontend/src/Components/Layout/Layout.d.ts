import { Category } from "@Interfaces"

declare namespace ILayout {
    export interface IProps {
        children?: React.ReactNode
        cate_info?: Category
    }
}

export { ILayout }
