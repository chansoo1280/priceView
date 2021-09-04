// #region Global Imports
import { Modal, Button } from "@Components"
import { Space } from "@Components/Atom"
// #endregion Global Imports

// #region Local Imports
import styles from "./AlertModal.module.scss"

// #endregion Local Imports

interface Props {
    children?: React.ReactNode
    show?: boolean
    title?: string
    onClick?: () => void
}

const AlertModal = (props: Props) => {
    const { children, onClick, ...rest } = props
    return (
        <>
            <Modal {...rest}>
                <div className={styles["alert-modal"]}>{children}</div>
                <Space>
                    <Button onClick={onClick}>확인</Button>
                </Space>
            </Modal>
        </>
    )
}
export default AlertModal
