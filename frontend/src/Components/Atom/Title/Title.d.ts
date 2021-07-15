import { IAtom } from "../Atom"

declare namespace ITitle {
    export type ITags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    export interface IProps extends IAtom.IProps {
        children?: React.ReactNode;
        as?: ITags;
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
    }
}

export { ITitle };