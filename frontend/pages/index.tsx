// #region Global Imports
import { useEffect, useState } from "react"
import { SwiperSlide } from "swiper/react"
// #endregion Global Imports

// #region Local Imports
import { Title, SlideTab, IconList, MainHeader } from "@Components"
import { CATEGORY_TYPE, CATEGORY_LIST, CATEGORY_TYPE_STR } from "@Definitions"
import { ReduxNextPageContext } from "@Interfaces"
import { AppActions, RootState, StarActions } from "@Redux"
import { useDispatch, useSelector } from "react-redux"
// #endregion Local Imports

declare global {
    interface Window {
        ReactNativeWebView: any
    }
}
const RN_API_GET_STAR = "RN_API_GET_STAR"

const Page = (): JSX.Element => {
    const dispatch = useDispatch()
    const { app, star } = useSelector(({ appReducer, starReducer }: RootState) => ({
        app: appReducer,
        star: starReducer,
    }))
    const [swiper, setSwiper] = useState<any>(null)
    const starList = CATEGORY_LIST.filter(({ seq }) => star.list.includes(seq)).map((info) => ({
        ...info,
        type: CATEGORY_TYPE.STAR,
    }))
    const cate_list = CATEGORY_LIST.concat(starList)
    const [selTab, setSelTab] = useState<number>(app.sel_cate !== null ? app.sel_cate : 1)
    const listener = (event: any) => {
        const { data, type } = JSON.parse(event.data)
        switch (type) {
            case RN_API_GET_STAR: {
                dispatch(StarActions.setStar(data))
                break
            }
            default: {
                break
            }
        }
    }
    useEffect(() => {
        if (window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(
                JSON.stringify({
                    type: RN_API_GET_STAR,
                }),
            )
            /** android */
            document.addEventListener("message", listener)
            /** ios */
            window.addEventListener("message", listener)
        } else {
            // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
            // alert("모바일이 아닙니다.")
        }
        return () => {
            /** android */
            document.removeEventListener("message", listener)
            /** ios */
            window.removeEventListener("message", listener)
        }
    }, [])
    return (
        <>
            <MainHeader>
                <Title as="h2" className="ir">
                    카테고리 탭
                </Title>
                <SlideTab>
                    {Object.entries(CATEGORY_TYPE_STR).map(([key, value], idx) => (
                        <SlideTab.Item
                            key={key}
                            onClick={() => {
                                swiper?.slideTo(idx)
                                dispatch(AppActions.setCate(Number(key)))
                                setSelTab(Number(key))
                            }}
                            name={value}
                            isStar={Number(key) === CATEGORY_TYPE.STAR}
                            isSelected={Number(key) === selTab}
                        />
                    ))}
                </SlideTab>
            </MainHeader>
            <Title as="h2" className="ir">
                {CATEGORY_TYPE_STR[selTab]} 리스트
            </Title>
            <IconList
                setSwiper={(swiper: any) => setSwiper(swiper)}
                selTab={selTab}
                onChange={(e: any) => {
                    const [key, value] = Object.entries(CATEGORY_TYPE_STR)[e.activeIndex]
                    setSelTab(Number(key))
                    dispatch(AppActions.setCate(Number(key)))
                }}
            >
                {Object.entries(CATEGORY_TYPE_STR).map(([key, value]) => (
                    <SwiperSlide key={key}>
                        <IconList.Item key={key}>
                            {cate_list
                                .filter(({ type }) => type === Number(key))
                                .map(({ name, seq, icon }) => (
                                    <IconList.InnerItem key={seq} name={name} href={"/info?seq=" + seq} icon={icon} />
                                ))}
                        </IconList.Item>
                    </SwiperSlide>
                ))}
            </IconList>
        </>
    )
}
Page.getInitialProps = async (ctx: ReduxNextPageContext) => {
    return {}
}
export default Page
