// #region Global Imports
import { Modal, Button, ContentsBar } from "@Components"
// #endregion Global Imports

// #region Local Imports
import { IAlertModal } from "./AlertModal"
import { StyledAlertCon } from "./styled"

// #endregion Local Imports

export const AlertModal = function (props: IAlertModal.IProps) {
    const { children, onClick, ...rest } = props
    return (
        <>
            <Modal {...rest}>
                <StyledAlertCon>{children}</StyledAlertCon>
                <ContentsBar noPadding>
                    <Button onClick={onClick}>확인</Button>
                </ContentsBar>
            </Modal>
        </>
    )
}
