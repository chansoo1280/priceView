// #region Global Imports
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
// #endregion Global Imports

// #region Local Imports
import { Title, SlideTab, IconList, MainHeader } from "@Components"
import { RN_API } from "@Definitions"
import { AppActions, RootState, StarActions } from "@Redux"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { WebViewMessage } from "@Services/API/WebViewMessage"
import Swiper from "swiper"
import { Http } from "@Services"
// #endregion Local Imports

const Page = ({ result }: any): JSX.Element => {
    const { CATE_NAME, CATE_OBJ, SUBCATE_LIST } = result

    const { t, i18n } = useTranslation("common")
    const router = useRouter()
    const dispatch = useDispatch()
    const { app, star } = useSelector(({ appReducer, starReducer }: RootState) => ({
        app: appReducer,
        star: starReducer,
    }))

    const starList = SUBCATE_LIST.filter(({ seq }: any) => star.list.includes(seq)).map((info: any) => ({
        ...info,
        type: CATE_OBJ.STAR,
    }))
    const categoryStrList = Object.entries(CATE_NAME)
    const [swiper, setSwiper] = useState<Swiper>()
    const [selTab, setSelTab] = useState<number>(app.sel_cate !== null ? app.sel_cate : 1)
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
        // getStarList()
    }, [])
    return (
        <>
            <MainHeader>
                <Title as="h2" className="ir">
                    {t("header.category-sel")}
                </Title>
                <SlideTab>
                    {categoryStrList.map(([key, value], idx) => (
                        <SlideTab.Item
                            key={key}
                            onClick={() => {
                                swiper?.slideTo(idx)
                                setSlideIdx(key)
                            }}
                            name={t("main." + value)}
                            isStar={Number(key) === CATE_OBJ.STAR}
                            isSelected={Number(key) === selTab}
                        />
                    ))}
                </SlideTab>
            </MainHeader>
            <Title as="h2" className="ir">
                {t("main." + CATE_NAME[selTab])}
                {t("word.list")}
            </Title>
            <IconList
                setSwiper={setSwiper}
                selTab={selTab}
                onChange={(e: any) => {
                    const [key, value] = categoryStrList[e.activeIndex]
                    setSlideIdx(key)
                }}
            >
                {categoryStrList.map(([key, value]) => (
                    <SwiperSlide key={key}>
                        <IconList.Item key={key}>
                            {SUBCATE_LIST.concat(starList)
                                .filter(({ cate }: any) => cate === Number(key))
                                .map(({ name, seq, icon }: any) => (
                                    <IconList.InnerItem key={seq} name={t("main." + name)} href={"/info/" + seq} icon={icon} />
                                ))}
                        </IconList.Item>
                    </SwiperSlide>
                ))}
            </IconList>
        </>
    )
}
export const getStaticProps = async ({ locale }: { locale: string }): Promise<any> => {
    const reqCate = async () => {
        const result = await Http.Request<any>("get", "/api/item/cate").catch((e) => {
            switch (e.status) {
                default: {
                }
            }
            return null
        })
        return result
    }
    const result = await reqCate()
    if (!result) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
            result,
        },
    }
}
export default Page
