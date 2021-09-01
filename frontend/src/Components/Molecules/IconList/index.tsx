// #region Global Imports
import React, { MouseEventHandler, ReactNode } from "react"
import className from "classnames"
import Link from "next/link"
// #endregion Global Imports

// #region Local Imports
import styles from "./IconList.module.scss"
import { Swiper } from "swiper/react"
import { CATEGORY_TYPE_STR } from "@Definitions"
// #endregion Local Imports
interface Props {
    children?: React.ReactNode
    setSwiper?: any
    selTab?: number
    onChange?: any
    onClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

const InternalIconList = (props: Props): JSX.Element => {
    const { children, setSwiper, onChange, selTab } = props
    const initIdx = Object.entries(CATEGORY_TYPE_STR).findIndex(([key, value]) => selTab === Number(key))
    return (
        <div className={styles["icon-list"]}>
            <Swiper style={{ height: "100%" }} observer={true} initialSlide={initIdx} onSlideChange={onChange} onSwiper={(swiper) => setSwiper(swiper)}>
                {children}
            </Swiper>
        </div>
    )
}
interface ConProps {
    children?: React.ReactNode
}
const IconListCon = (props: ConProps): JSX.Element => {
    const { children } = props
    return <ul className={styles["icon-list__con"]}>{children}</ul>
}

interface InnerProps {
    onClick?: MouseEventHandler<HTMLButtonElement>
    name?: string
    href?: string
    icon?: string
}
const IconListInner = (props: InnerProps): JSX.Element => {
    const { href, name, onClick, icon } = props

    return (
        <li>
            {href ? (
                <Link href={href}>
                    <a className={styles["icon-list__btn"]}>
                        <img className={styles["icon-list__img"]} src={icon} alt="" />
                        {name}
                    </a>
                </Link>
            ) : (
                <button className={styles["icon-list__btn"]} onClick={onClick}>
                    <img className={styles["icon-list__img"]} src={icon} alt="" />
                    {name}
                </button>
            )}
        </li>
    )
}
interface CompoundedComponent extends React.ForwardRefExoticComponent<Props> {
    IconListInner: typeof IconListInner
    IconListCon: typeof IconListCon
}
const IconList = InternalIconList as CompoundedComponent

IconList.displayName = "IconList"
IconList.IconListCon = IconListCon

IconList.IconListInner = IconListInner

export default IconList
