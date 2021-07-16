// #region Global Imports
import { useRouter } from "next/router"
import React from "react"
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
    return (
        <Container {...props}>
            <Button
            show={prev !== null}
                onClick={() => {
                    router.replace({ pathname: "/info", query: { seq: prev?.seq } })
                }}
          >
            <i className="xi-angle-left-min" />
                <span className="ir">{prev?.name}</span>
          </Button>
            <Button
            show={next !== null}
            onClick={() => {
                    router.replace({ pathname: "/info", query: { seq: next?.seq } })
                }}
          >
            <i className="xi-angle-right-min" />
            <span className="ir">{next?.name}</span>
          </Button>
      </Container>
    )
}
