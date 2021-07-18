// #region Global Imports
import { useRouter } from "next/router"
import React, { useState } from "react"
// #endregion Global Imports

// #region Local Imports
import { Button } from "@Components"
import { IInfoNav } from "./InfoNav"
import { Container } from "./styled"
// #endregion Local Imports

export const InfoNav: React.FunctionComponent<IInfoNav.IProps> = (props) => {
    const router = useRouter()
    const { nav_info } = props
    const { next, prev } = nav_info || {}
    let timer = null
    const [isDisabled, setIsDisabled] = useState(false)
    return (
        <Container {...props}>
            <Button
                opacityShow={prev !== null}
                onClick={() => {
                    if (isDisabled === true) return
                    setIsDisabled(true)
                    timer = setTimeout(() => {
                        setIsDisabled(false)
                    }, 500)
                    router.replace({ pathname: "/info", query: { seq: prev?.seq } })
                }}
            >
                <i className="xi-angle-left-min"></i>
                <span className="ir">{prev?.name}</span>
            </Button>
            <Button
                opacityShow={next !== null}
                onClick={() => {
                    if (isDisabled === true) return
                    setIsDisabled(true)
                    timer = setTimeout(() => {
                        setIsDisabled(false)
                    }, 500)
                    router.replace({ pathname: "/info", query: { seq: next?.seq } })
                }}
            >
                <i className="xi-angle-right-min"></i>
                <span className="ir">{next?.name}</span>
            </Button>
        </Container>
    )
}
