// #region Global Imports
// #endregion Global Imports

// #region Local Imports
import styles from "./Header.module.scss"

// #endregion Local Imports
interface Props {
    title?: string
    children?: React.ReactNode
    centerTitle?: boolean
}
export const Header = (props: Props): JSX.Element => {
    const { title, children } = props
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>{title}</h1>
            {children}
        </header>
    )
}
