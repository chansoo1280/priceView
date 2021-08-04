// #region Global Imports
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
// #endregion Global Imports

// #region Local Imports
import { Button, Title, Tab, TabInner, ContentsBar, IconList, IconListCon, IconListInner, SizeCode } from "@Components"
import { CATEGORY_TYPE, CATEGORY_LIST, CATEGORY_TYPE_STR } from "@Definitions"
import { useAppDispatch, useAppSelector } from "@Redux/hooks"
import { IStore, ReduxNextPageContext } from "@Interfaces"
import { AppActions, StarActions } from "@Actions"
// #endregion Local Imports

const RN_API_GET_STAR = "RN_API_GET_STAR"

const Page = function () {
    return (
        <main id="contents" className="l_main">
            <Title as="h2" className="ir">
                메인 뷰
            </Title>
        </main>
    )
}
Page.getInitialProps = async (ctx: ReduxNextPageContext) => {
    return {}
}
export default Page
