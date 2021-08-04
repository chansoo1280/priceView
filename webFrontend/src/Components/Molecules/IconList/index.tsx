// #region Global Imports
import React from "react"
// #endregion Global Imports

// #region Local Imports
import { IIconList } from "./IconList"
import { Wraper, Container, ContainerInner } from "./styled"
// #endregion Local Imports

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { CATEGORY_TYPE_STR } from "@Definitions"

export const IconListInner: React.FunctionComponent<IIconList.IProps> = (props) => {
    const { children } = props
    return <ContainerInner>{children}</ContainerInner>
}

export const IconListCon: React.FunctionComponent<IIconList.IProps> = (props) => {
    const { children } = props
    return <Container {...props}>{children}</Container>
}

export const IconList: React.FunctionComponent<IIconList.IProps> = (props) => {
    const { children, setSwiper, onChange, selTab } = props
    const initIdx = Object.entries(CATEGORY_TYPE_STR).findIndex(([key, value]) => selTab === Number(key))
    return (
        <Wraper>
            <Swiper observer={true} initialSlide={initIdx} onSlideChange={onChange} onSwiper={(swiper) => setSwiper(swiper)}>
                {children}
            </Swiper>
        </Wraper>
    )
}
