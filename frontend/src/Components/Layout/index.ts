import { Default } from "./Default"
import { Info } from "./Info"
import { Setting } from "./Setting"
import { ILayout } from "./Layout"
export enum LayoutCode {
    "Default",
    "Info",
    "Setting",
}
const TheLayout: {
    [key: number]: ({ children, cate_info }: ILayout.IProps) => JSX.Element
} = {
    [LayoutCode.Default]: Default,
    [LayoutCode.Info]: Info,
    [LayoutCode.Setting]: Setting,
}
export default TheLayout
