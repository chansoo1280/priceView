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
    const dispatch = useAppDispatch()
    const app = useAppSelector((state: IStore) => state.app)
    const star = useAppSelector((state: IStore) => state.star)
    const [swiper, setSwiper] = useState<any>(null)
    const [selTab, setSelTab] = useState<number>(app.sel_cate !== null ? app.sel_cate : 0)
    const starList = CATEGORY_LIST.filter(({ seq }) => star.list.includes(seq)).map((info) => ({
        ...info,
        type: CATEGORY_TYPE.STAR,
    }))
    const cate_list = CATEGORY_LIST.concat(starList)
    const listener = (event: any) => {
        const { data, type } = JSON.parse(event.data)
        switch (type) {
            case RN_API_GET_STAR: {
                dispatch(StarActions.SetStar(data))
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
            alert("모바일이 아닙니다.")
        }
        return () => {
            /** android */
            document.removeEventListener("message", listener)
            /** ios */
            window.removeEventListener("message", listener)
        }
    }, [])
    return (
        <main id="contents" className="l_main">
            <Title as="h2" className="ir">
                카테고리 탭
            </Title>
            <Tab>
                {Object.entries(CATEGORY_TYPE_STR).map(([key, value], idx) => (
                    <TabInner key={key}>
                        <Button
                            show={Number(key) !== CATEGORY_TYPE.STAR || starList.length !== 0}
                            onClick={() => {
                                swiper?.slideTo(starList.length !== 0 ? idx : idx - 1)
                                dispatch(AppActions.SetSelCate(Number(key)))
                                setSelTab(Number(key))
                            }}
                        >
                            {value}
                        </Button>
                    </TabInner>
                ))}
            </Tab>
            <Title as="h2" className="ir">
                {CATEGORY_TYPE_STR[selTab]} 리스트
            </Title>
            <IconList
                setSwiper={setSwiper}
                selTab={selTab}
                onChange={(e: any) => {
                    const [key, value] = Object.entries(CATEGORY_TYPE_STR)[e.activeIndex]
                    setSelTab(Number(key))
                    dispatch(AppActions.SetSelCate(Number(key)))
                }}
            >
                {Object.entries(CATEGORY_TYPE_STR).map(
                    ([key, value]) =>
                        (Number(key) !== CATEGORY_TYPE.STAR || starList.length !== 0) && (
                            <SwiperSlide key={key}>
                                <IconListCon>
                                    {cate_list
                                        .filter(({ type }) => type === Number(key))
                                        .map(({ name, seq }) => (
                                            <IconListInner key={name}>
                                                <Button href={"/info?seq=" + seq} sizeVal={SizeCode.icon}>
                                                    {name}
                                                    <span className="ir">{name}</span>
                                                </Button>
                                            </IconListInner>
                                        ))}
                                </IconListCon>
                            </SwiperSlide>
                        ),
                )}
            </IconList>
            {/* <ContentsBar>
                <Button cover>기타 통계</Button>
            </ContentsBar> */}
        </main>
    )
}
Page.getInitialProps = async (ctx: ReduxNextPageContext) => {
    return {}
}
export default Page
