import { IAtom } from "../Atom"

declare namespace ISelect {
    export interface IProps extends IAtom.IProps {
        value?: string | number
        setValue?: Dispatch<SetStateAction<string | number>>
        onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    }
}

export { ISelect }
