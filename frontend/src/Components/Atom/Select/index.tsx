// #region Global Imports
import classNames from "classnames"
import React, { ChangeEvent, Dispatch, ReactNode, SetStateAction, useCallback } from "react"
// #endregion Global Imports

// #region Local Imports
import styles from "./Select.module.scss"
// #endregion Local Imports
interface Props {
    children?: ReactNode
    value?: string | number
    setValue?: Dispatch<SetStateAction<number>>
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void
    round?: boolean
    maxWidth?: string
}

const Select = (props: Props): JSX.Element => {
    const { setValue, onChange, round, maxWidth, ...rest } = props
    const onChangeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue!(Number(e.target.value) || 0)
    }, [])
    return (
        <div className={styles["select-wrap"]}>
            <select
                className={classNames({
                    [styles["select"]]: true,
                    [styles["select--round"]]: round,
                })}
                style={{
                    maxWidth,
                }}
                {...rest}
                onChange={onChange || onChangeSelect}
            />
        </div>
    )
}

export default Select
