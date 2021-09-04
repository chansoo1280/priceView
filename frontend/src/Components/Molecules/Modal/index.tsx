// #region Global Imports
import { Title } from "@Components/Atom"
import React from "react"
import className from "classnames"
// #endregion Global Imports

// #region Local Imports
import styles from "./Modal.module.scss"
// #endregion Local Imports
interface Props {
    children?: React.ReactNode
    show?: boolean
    title?: string
}

const Modal = (props: Props): JSX.Element => {
    const { show, title, children } = props
    return (
        <section
            className={className({
                [styles["modal-wrap"]]: true,
                [styles["modal-wrap--show"]]: show,
            })}
        >
            <div className={styles["modal"]}>
                {title && (
                    <header className={styles["modal__header"]}>
                        <Title>{title}</Title>
                    </header>
                )}
                {children}
            </div>
        </section>
    )
}
export default Modal
