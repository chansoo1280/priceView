// #region Global Imports
import React, { ReactNode } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./SettingList.module.scss"
// #endregion Local Imports
interface Props {
    children?: ReactNode
}
const InternalSettingList = (props: Props): JSX.Element => {
    return <ul className={styles["setting-list"]} {...props} />
}
interface Props {
    children?: ReactNode
    onClick?: () => void
}
const SettingListInner = (props: Props): JSX.Element => {
    return <li className={styles["setting-list__item"]} {...props} />
}
const SettingListText = (props: Props): JSX.Element => {
    return <span className={styles["setting-list__text"]} {...props} />
}
interface TitleProps {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    children: ReactNode
}
const SettingListTitle = (props: TitleProps): JSX.Element => {
    const { children, as } = props
    const TitleNode = `${as}` as keyof JSX.IntrinsicElements
    return <TitleNode className={styles["setting-list__title"]}>{children}</TitleNode>
}

interface CompoundedComponent extends React.ForwardRefExoticComponent<Props> {
    Item: typeof SettingListInner
    Text: typeof SettingListText
    Title: typeof SettingListTitle
}
const SettingList = InternalSettingList as CompoundedComponent

SettingList.displayName = "SettingList"
SettingList.Item = SettingListInner
SettingList.Text = SettingListText
SettingList.Title = SettingListTitle
export default SettingList
