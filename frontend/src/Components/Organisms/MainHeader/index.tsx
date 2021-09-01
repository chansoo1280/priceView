// #region Global Imports
import Link from "next/link"
import { ReactNode } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./MainHeader.module.scss"

// #endregion Local Imports
interface Props {
    children?: ReactNode
}

export const MainHeader = (props: Props): JSX.Element => {
    const { children } = props

    return (
        <header className={styles["main-header"]}>
            <h1 className={styles["main-header__title"]}>
                <img src="/static/images/logo.svg" alt="알고싶은 서울물가" />
            </h1>
            <Link href="/setting">
                <a className={styles["main-header__btn-setting"]}>
                    <img src="/static/images/icon_setting.svg" alt="설정" />
                </a>
            </Link>
            {children}
        </header>
    )
}
