// #region Global Imports
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { stringify } from "query-string"
// #endregion Global Imports

// #region Local Imports
import { CATEGORY_LIST, M_GU, M_TYPE, NAME_OBJ } from "@Definitions"
import { Header, Title, Chart, Select, PriceCard, Space, InfoNav, Button, Tab } from "@Components"
import { Category, Count, IInfoPage, ReduxNextPageContext } from "@Interfaces"
import { Http } from "@Services"
import { StarActions } from "@Actions"
import { IStore, useAppDispatch, useAppSelector } from "@Redux"
// #endregion Local Imports

const RN_API_GET_POSITION = "RN_API_GET_POSITION"

const formatComma = function (v: string) {
    if (v === null) return "0"
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Info = ({}: IInfoPage.InitialProps): JSX.Element => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const star = useAppSelector((state: IStore) => state.star)
    let cate_idx = null
    const cate_info =
        CATEGORY_LIST.find((info, idx) => {
            cate_idx = idx
            return info.seq === Number(router.query.seq)
        }) || null

    const getIsStar = () => star.list.find((seq: number) => seq === cate_info?.seq) !== undefined

    const nav_info = {
        prev: (cate_idx !== null && CATEGORY_LIST[cate_idx - 1]) || null,
        next: (cate_idx !== null && CATEGORY_LIST[cate_idx + 1]) || null,
    }

    const P_YEAR_MONTH = new Date().format("yyyy-MM")
    const [resData, setResData] = useState<Count[]>([])
    const [cateList, setCateList] = useState<
        {
            chart: any
            A_SEQ: number
            A_NAME: string
            A_UNIT: string
            isOpen: boolean
            dataList: (string | null)[] | null
            dateList: (string | null)[] | null
        }[]
    >(
        cate_info?.seq_list.map((seq) => ({
            A_SEQ: seq,
            chart: null,
            A_NAME: NAME_OBJ[seq].A_NAME,
            A_UNIT: NAME_OBJ[seq].A_UNIT[0],
            isOpen: false,
            dataList: null,
            dateList: null,
        })) || [],
    )
    // const [chart, setChart] = useState<any>(null)
    // const [chartData, setChartData] = useState([])
    // const [selCate, setSelCate] = useState(cate_info?.seq_list[0])
    const [selGu, setSelGu] = useState(M_GU[""])
    const [selType, setSelType] = useState<string>(M_TYPE[""])
    const updateChart = () => {
        setCateList(
            cateList.map((cateInfo) => {
                const cateResult = resData.filter(({ A_SEQ, M_TYPE_CODE }) => Number(A_SEQ) === cateInfo.A_SEQ && M_TYPE_CODE === selType)
                return {
                    ...cateInfo,
                    dateList: ["Dates"].concat(cateResult.map(({ P_YEAR_MONTH }) => P_YEAR_MONTH + "-01")),
                    dataList: [cate_info?.name || ""].concat(cateResult.map(({ AVER_VAL }) => String(AVER_VAL) || (null as unknown as string))),
                }
            }),
        )
    }
    const reqPriceData = async () => {
        const result = await Http.Request<Count[]>("get", "/api/count/info", {
            A_SEQS: cate_info?.seq_list.join(", ") || "",
            P_YEAR_MONTH: P_YEAR_MONTH,
            M_GU_CODE: selGu,
        }).catch((e) => {
            switch (e.status) {
                default: {
                }
            }
            return null
        })
        if (result === null) return
        setResData(result)
        // setChartData(result.map((obj: any) => obj.AVER_VAL || null))
    }

    const reqPositionData = ({ x, y }: { x: string; y: string }) => {
        fetch(
            `https://dapi.kakao.com/v2/local/geo/coord2address.json?${stringify({
                x,
                y,
            })}`,
            {
                method: `get`,
                headers: {
                    "content-type": "application/json",
                    Authorization: "KakaoAK 4fdda60789cef4f549581038ad7564e5",
                },
            },
        ).then(async (response) => {
            if (response.status === 200) {
                return response.json().then((res) => {
                    if (res.documents && res.documents.length === 0) {
                        alert("위치정보를 찾지 못했습니다.")
                        return
                    }
                    const { region_1depth_name, region_2depth_name } = res.documents[0]?.address
                    if (region_1depth_name !== "서울") {
                        alert("서울이 아닙니다")
                        return
                    }
                    const guSeq = Object.keys(M_GU).find((key) => M_GU[key] === region_2depth_name) || ""
                    setSelGu(guSeq)
                })
            }
        })
    }

    // const isValidData = () => {
    //     if (chartData.length === 0) return false
    //     const list = chartData.filter((val) => val !== null)
    //     if (list.length === 0) return false
    //     return true
    // }

    const listener = (event: any) => {
        const { data, type } = JSON.parse(event.data)
        switch (type) {
            case RN_API_GET_POSITION: {
                //alert(data.coords.latitude + "-" + data.coords.longitude)
                reqPositionData({
                    y: data.coords.latitude,
                    x: data.coords.longitude,
                })
                break
            }
            default: {
                break
            }
        }
    }
    useEffect(() => {
        if (window.ReactNativeWebView) {
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

    useEffect(() => {
        reqPriceData()
    }, [selGu])
    useEffect(() => {
        updateChart()
    }, [selType, resData])
    return (
        <>
            <Header title={cate_info?.name}>
                <Button onClick={() => router.back()} icon={<img src="/static/images/icon_back.svg" alt="뒤로가기" />}></Button>
                <Button
                    show={!getIsStar()}
                    onClick={() => {
                        if (cate_info === null) return
                        dispatch(
                            StarActions.AddStar({
                                seq: cate_info?.seq,
                            }),
                        )
                    }}
                    icon={<img src="/static/images/icon_favorite.svg" alt="즐겨찾기 추가" />}
                ></Button>
                <Button
                    show={getIsStar()}
                    onClick={() => {
                        if (cate_info === null) return
                        dispatch(
                            StarActions.RemoveStar({
                                seq: cate_info?.seq,
                            }),
                        )
                    }}
                    icon={<img src="/static/images/icon_favorite_active.svg" alt="즐겨찾기 삭제" />}
                ></Button>
            </Header>
            <Tab>
                {Object.entries(M_TYPE)
                    .reverse()
                    .map(([key, value], idx) => (
                        <Tab.Item
                            key={key}
                            onClick={() => {
                                setSelType(key)
                            }}
                            name={value || "평균"}
                            isSelected={key === selType}
                        />
                    ))}
            </Tab>
            {/* <ContentsBar>
                    <Select
                        sizeVal={SizeCode.large}
                        value={selCate}
                        setValue={(value: React.ChangeEvent<HTMLSelectElement>) => {
                            setSelCate(Number(value))
                        }}
                    >
                        {cate_info?.seq_list.map((seq) => (
                            <option key={seq} value={seq}>
                                {NAME_OBJ[seq].A_NAME}
                            </option>
                        ))}
                    </Select>
                </ContentsBar> */}
            <Space padding="0 20px">
                <Select
                    value={selGu}
                    onChange={(e) => {
                        setSelGu(e.target.value || "")
                    }}
                >
                    {Object.entries(M_GU)
                        .reverse()
                        .map(([key, value]) => (
                            <option key={key} value={key}>
                                {value || "지역 전체"}
                            </option>
                        ))}
                </Select>
                <Button
                    onClick={() => {
                        // https 만 지원
                        // if (!("geolocation" in navigator)) {
                        //     return
                        // }
                        // navigator.geolocation.getCurrentPosition(
                        //     (position) => {
                        //         reqPositionData({
                        //             x: String(position.coords.longitude),
                        //             y: String(position.coords.latitude),
                        //         })
                        //     },
                        //     (e) => {
                        //         alert(e.code + "-" + e.message)
                        //     },
                        //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                        // )
                        if (window.ReactNativeWebView) {
                            window.ReactNativeWebView.postMessage(
                                JSON.stringify({
                                    type: RN_API_GET_POSITION,
                                }),
                            )
                        }
                    }}
                    type="default"
                    icon={<img src="/static/images/icon_location.svg" alt="내위치" />}
                />
                <span style={{ marginLeft: "auto" }}>{P_YEAR_MONTH} 기준</span>
            </Space>
            <Space padding="24px 20px" gap="24px" direction="column">
                {cateList.map((cateInfo) => {
                    const { A_SEQ, A_NAME, A_UNIT, dataList, dateList } = cateInfo
                    if (!dataList || dataList.length === 1)
                        return (
                            <PriceCard key={A_SEQ} title={A_NAME} unit={A_UNIT} price={"0"} priceChange={""}>
                                <Chart seq={A_SEQ} dataList={dataList} dateList={dateList}></Chart>
                            </PriceCard>
                        )
                    const priceChange = (Number(dataList && dataList[dataList.length - 1]) || 0) - (Number(dataList && dataList[dataList.length - 2]) || 0)
                    return (
                        <PriceCard key={A_SEQ} title={A_NAME} unit={A_UNIT} price={formatComma((dataList && dataList[dataList.length - 1]) || "0")} priceChange={formatComma(String(priceChange))}>
                            <Chart seq={A_SEQ} dataList={dataList} dateList={dateList}></Chart>
                        </PriceCard>
                    )
                })}
            </Space>
            {/* <ContentsBar>
                    <Title as="h2">
                        {isValidData() ? `${formatComma(String(chartData[chartData.length - 1] || "0") || "0")}원 - ${P_YEAR_MONTH} ${cate_info?.name} 물가` : "등록된 데이터가 없습니다."}
                    </Title>
                </ContentsBar>
                <ContentsBar noPadding show={isValidData()}>
                    <Chart setChart={setChart}></Chart>
                </ContentsBar>
                <ContentsBar show={isValidData()}>
                    <Title as="h2">2020년 이맘때의 가격</Title>
                </ContentsBar> */}
            {/* <InfoNav nav_info={nav_info} /> */}
        </>
    )
}
Info.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IInfoPage.InitialProps> => {
    return {
        transition: "slide",
    }
}
export default Info
