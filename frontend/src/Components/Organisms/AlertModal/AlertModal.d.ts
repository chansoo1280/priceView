import { IModal } from "@Components"
declare namespace IAlertModal {
    export interface IProps extends IModal.IProps {
        onClick?: () => void
    }
}

export { IAlertModal }
