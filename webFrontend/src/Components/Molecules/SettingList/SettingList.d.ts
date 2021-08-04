import { IMolecules } from "../Molecules"

declare namespace ISettingList {
    export interface IProps extends IMolecules.IProps {
        onClick?: () => void
    }
}

export { ISettingList }
