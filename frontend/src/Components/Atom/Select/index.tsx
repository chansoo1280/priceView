// #region Global Imports
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
}

const Select = (props: Props): JSX.Element => {
    const { setValue, onChange, ...rest } = props
    const onChangeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue!(Number(e.target.value) || 0)
    }, [])
    return <select className={styles["select"]} {...rest} onChange={onChange || onChangeSelect} />
}

export default Select
