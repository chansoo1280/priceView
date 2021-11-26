// #region Global Imports
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
// #endregion Global Imports

// #region Local Imports
import { Title, SlideTab, IconList, MainHeader } from "@Components"
import { CATEGORY_TYPE, CATEGORY_LIST, CATEGORY_TYPE_STR, RN_API } from "@Definitions"
import { AppActions, RootState, StarActions } from "@Redux"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { WebViewMessage } from "@Services/API/WebViewMessage"
import Swiper from "swiper"
// #endregion Local Imports

const Page = (): JSX.Element => {
    const { t, i18n } = useTranslation("common")
    const router = useRouter()
    const dispatch = useDispatch()
    const { app, star } = useSelector(({ appReducer, starReducer }: RootState) => ({
        app: appReducer,
        star: starReducer,
    }))

    const starList = CATEGORY_LIST.filter(({ seq }) => star.list.includes(seq)).map((info) => ({
        ...info,
        type: CATEGORY_TYPE.STAR,
    }))
    const categoryTypeStrList = Object.entries(CATEGORY_TYPE_STR)
    const [swiper, setSwiper] = useState<Swiper>()
    const [selTab, setSelTab] = useState<number>(app.sel_cate !== null ? app.sel_cate : 1)
    // const listener = (event: any) => {
    //     const { data, type } = JSON.parse(event.data)
    //     switch (type) {
    //         case RN_API_GET_STAR: {
    //             dispatch(StarActions.setStar(data))
    //             break
    //         }
    //         default: {
    //             break
    //         }
    //     }
    // }
    const getStarList = async () => {
        const data = await WebViewMessage<typeof RN_API.RN_API_GET_STAR>(RN_API.RN_API_GET_STAR)
        if (data === null) return
        dispatch(StarActions.setStar(data))
    }
    const setSlideIdx = (key: string) => {
        dispatch(AppActions.setCate(Number(key)))
        setSelTab(Number(key))
    }
    useEffect(() => {
        if (app.sel_lang !== i18n.language) {
            router.replace("/", "/", { locale: app.sel_lang || "ko" })
        }
        getStarList()
        // if (window.ReactNativeWebView) {
        //     window.ReactNativeWebView.postMessage(
        //         JSON.stringify({
        //             type: RN_API_GET_STAR,
        //         }),
        //     )
        //     /** android */
        //     document.addEventListener("message", listener)
        //     /** ios */
        //     window.addEventListener("message", listener)
        // } else {
        //     // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
        //     // alert("모바일이 아닙니다.")
        // }
        // return () => {
        //     /** android */
        //     document.removeEventListener("message", listener)
        //     /** ios */
        //     window.removeEventListener("message", listener)
        // }
    }, [])
    return (
        <>
            <MainHeader>
                <Title as="h2" className="ir">
                    {t("header.category-sel")}
                </Title>
                <SlideTab>
                    {categoryTypeStrList.map(([key, value], idx) => (
                        <SlideTab.Item
                            key={key}
                            onClick={() => {
                                swiper?.slideTo(idx)
                                setSlideIdx(key)
                            }}
                            name={t("main." + value)}
                            isStar={Number(key) === CATEGORY_TYPE.STAR}
                            isSelected={Number(key) === selTab}
                        />
                    ))}
                </SlideTab>
            </MainHeader>
            <Title as="h2" className="ir">
                {t("main." + CATEGORY_TYPE_STR[selTab])}
                {t("word.list")}
            </Title>
            <IconList
                setSwiper={setSwiper}
                selTab={selTab}
                onChange={(e: any) => {
                    const [key, value] = categoryTypeStrList[e.activeIndex]
                    setSlideIdx(key)
                }}
            >
                {categoryTypeStrList.map(([key, value]) => (
                    <SwiperSlide key={key}>
                        <IconList.Item key={key}>
                            {CATEGORY_LIST.concat(starList)
                                .filter(({ type }) => type === Number(key))
                                .map(({ name, seq, icon }) => (
                                    <IconList.InnerItem key={seq} name={t("main." + name)} href={"/info/" + seq} icon={icon} />
                                ))}
                        </IconList.Item>
                    </SwiperSlide>
                ))}
            </IconList>
        </>
    )
}
export const getStaticProps = async ({ locale }: { locale: string }): Promise<any> => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
    },
})
export default Page
