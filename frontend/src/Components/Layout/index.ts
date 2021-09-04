import { Category } from "@Interfaces"
import { Default } from "./Default"
export interface LayoutProps {
    children?: React.ReactNode
    cate_info?: Category
}
export enum LayoutCode {
    "Default",
}
const TheLayout: {
    [key: number]: ({ children, cate_info }: LayoutProps) => JSX.Element
} = {
    [LayoutCode.Default]: Default,
}
export default TheLayout
