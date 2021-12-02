// #region Global Imports
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
// #endregion Global Imports

// #region Local Imports
import { Title, SlideTab, IconList, MainHeader } from "@Components"
import { RN_API, SUBCATE_LIST } from "@Definitions"
import { AppActions, RootState, StarActions } from "@Redux"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { WebViewMessage } from "@Services/API/WebViewMessage"
import Swiper from "swiper"
import { Http } from "@Services"
import { CATE, CATE_NAME, CATE_NAME_LIST } from "@Interfaces"
// #endregion Local Imports

const Page = (): JSX.Element => {
    const { t, i18n } = useTranslation("common")
    const router = useRouter()
    const dispatch = useDispatch()
    const { app, star } = useSelector(({ appReducer, starReducer }: RootState) => ({
        app: appReducer,
        star: starReducer,
    }))

    const starList = SUBCATE_LIST.filter(({ seq }) => star.list.includes(seq)).map((info) => ({
        ...info,
        cate: CATE.STAR,
    }))
    const [swiper, setSwiper] = useState<Swiper>()
    const [selTab, setSelTab] = useState<CATE>((app.sel_cate !== null ? app.sel_cate : 1) as CATE)
    const setSlideIdx = (key: string) => {
        dispatch(AppActions.setCate(Number(key)))
        setSelTab(Number(key) as CATE)
    }
    useEffect(() => {
        if (app.sel_lang !== i18n.language) {
            router.replace("/", "/", { locale: app.sel_lang || "ko" })
        }
    }, [])
    return (
        <>
            <MainHeader>
                <Title as="h2" className="ir">
                    {t("header.category-sel")}
                </Title>
                <SlideTab>
                    {CATE_NAME_LIST.map(([key, value], idx) => (
                        <SlideTab.Item
                            key={key}
                            onClick={() => {
                                swiper?.slideTo(idx)
                                setSlideIdx(key)
                            }}
                            name={t("main." + value)}
                            isStar={Number(key) === CATE.STAR}
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
                    const [key, value] = CATE_NAME_LIST[e.activeIndex]
                    setSlideIdx(key)
                }}
            >
                {CATE_NAME_LIST.map(([key, value]) => (
                    <SwiperSlide key={key}>
                        <IconList.Item key={key}>
                            {SUBCATE_LIST.concat(starList)
                                .filter(({ cate }) => cate === Number(key))
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
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"])),
        },
    }
}
export default Page
