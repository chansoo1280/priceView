// #region Global Imports
import Link from "next/link"
import { ReactNode } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./MainHeader.module.scss"
import { Button } from "@Components"

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
            <Button href="/setting" className={styles["main-header__btn-setting"]} icon={<img src="/static/images/icon_setting.svg" alt="설정" />}></Button>
            {children}
        </header>
    )
}
