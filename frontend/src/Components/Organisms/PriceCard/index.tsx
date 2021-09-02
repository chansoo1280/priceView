// #region Global Imports
import Link from "next/link"
import { ReactNode } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./PriceCard.module.scss"
import { Button } from "@Components"

// #endregion Local Imports
interface Props {
    children?: ReactNode
    title?: string
    unit?: string
    price?: string
    priceChange?: string
}

export const PriceCard = (props: Props): JSX.Element => {
    const { title, unit, price, priceChange, children } = props

    return (
        <div className={styles["price-card"]}>
            <div className={styles["price-card__con"]}>
                <div className={styles["price-card__header"]}>
                    <h2 className={styles["price-card__title"]}>{title}</h2>
                    <span className={styles["price-card__unit"]}>{unit}</span>
                </div>
                <div>
                    {price !== "0" ? (
                        <>
                            <strong className={styles["price-card__price"]}>
                                {price}
                                <span className={styles["price-card__price-unit"]}>원</span>
                            </strong>
                            <span className={styles["price-card__price-change"]}>
                                {priceChange}
                                <span className={styles["price-card__price-unit"]}>원</span>
                            </span>
                        </>
                    ) : (
                        <>
                            <strong className={styles["price-card__price"]}>미등록</strong>
                            <span className={styles["price-card__price-change"]}></span>
                        </>
                    )}
                </div>
                <Button icon={<img src="/static/images/icon_plus.svg" alt="차트 보기" />}></Button>
            </div>
            <div className={styles["price-card__chart"]}>{children}</div>
        </div>
    )
}
