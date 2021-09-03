// #region Global Imports
import { ReactNode } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./Space.module.scss"

// #endregion Local Imports
interface Props {
    children?: ReactNode
    padding?: string
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    gap?: string
}

const Space = (props: Props): JSX.Element => {
    const { gap, padding, direction, children } = props

    return (
        <div style={{ gap, padding, flexDirection: direction }} className={styles["space"]}>
            {children}
        </div>
    )
}
export default Space
