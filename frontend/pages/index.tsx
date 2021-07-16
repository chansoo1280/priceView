import { IStore, ReduxNextPageContext } from "@Interfaces"
import { Swiper, SwiperSlide } from "swiper/react"

// #region Local Imports
import { Button, Title, Tab, TabInner, ContentsBar, IconList, IconListCon, IconListInner, SizeCode } from "@Components"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "@Redux/hooks"
import { AppActions } from "@Actions"
import { CATEGORY_TYPE, CATEGORY_LIST, CATEGORY_TYPE_STR } from "@Definitions"
// #endregion Local Imports

const Page = function () {
    const dispatch = useAppDispatch()
    const app = useAppSelector((state: IStore) => state.app)
    const star = useAppSelector((state: IStore) => state.star)
    const [swiper, setSwiper] = useState<any>(null)
    const [selTab, setSelTab] = useState<number>(app.sel_cate !== null ? app.sel_cate : CATEGORY_TYPE.MEAT)
    const starList = CATEGORY_LIST.filter(({ seq }) => star.list.includes(seq)).map((info) => {
        return {
            ...info,
            type: CATEGORY_TYPE.STAR,
        }
    })
    const cate_list = CATEGORY_LIST.concat(starList)
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
                                swiper?.slideTo(idx)
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
                {Object.entries(CATEGORY_TYPE_STR).map(([key, value]) => (
            <SwiperSlide key={key}>
                    <IconListCon>
                            {cate_list
                                .filter(({ type }) => type === Number(key))
                                .map(({ name, seq }) => (
                                    <IconListInner key={name}>
                                    <Button href={`/info?seq=${  seq}`} sizeVal={SizeCode.icon}>
                                        {name}
                                            <span className="ir">{name}</span>
                                        </Button>
                                  </IconListInner>
                                ))}
                        </IconListCon>
                  </SwiperSlide>
                ))}
          </IconList>
        <ContentsBar>
                <Button cover>기타 통계</Button>
            </ContentsBar>
      </main>
    )
}
Page.getInitialProps = async (ctx: ReduxNextPageContext) => {
    return {}
}
export default Page
