// #region Global Imports
import { SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import Swiper from "swiper"
// #endregion Global Imports

// #region Local Imports
import { Title, SlideTab, IconList, MainHeader } from "@Components"
import { SUBCATE_LIST } from "@Definitions"
import { AppActions, RootState } from "@Redux"
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
    const [selTab, setSelTab] = useState<CATE>(app.sel_cate !== null ? app.sel_cate : CATE.MEAT)
    const setSlideIdx = (key: string) => {
        const seLcate = Number(key) as CATE
        dispatch(AppActions.setCate(seLcate))
        setSelTab(seLcate)
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
                    {CATE_NAME_LIST.map(([key, value]) => (
                        <SlideTab.Item
                            key={key}
                            onClick={() => {
                                swiper?.slideTo(Number(key))
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
                    const [key] = CATE_NAME_LIST[e.activeIndex]
                    setSlideIdx(key)
                }}
            >
                {CATE_NAME_LIST.map(([key]) => (
                    <SwiperSlide key={key}>
                        <IconList.Item key={key}>
                            {SUBCATE_LIST.concat(starList)
                                .filter(({ cate }) => cate === Number(key))
                                .map(({ name, seq, icon }: any) => (
                                    <IconList.InnerItem
                                        key={seq}
                                        name={t("main." + name)}
                                        href={"/info/" + seq}
                                        icon={icon}
                                    />
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
