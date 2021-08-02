// #region Global Imports
import React, { useCallback } from "react"
// #endregion Global Imports

// #region Local Imports
import { ISelect } from "./Select"
import { StyledSelect } from "./styled"
// #endregion Local Imports
export { StyledSelect }

const Select = (props: ISelect.IProps) => {
    const { value, setValue } = props
    const onChangeSelect = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value)
    }, [])
    return <StyledSelect {...props} onChange={onChangeSelect} />
}

export { Select }
