// #region Global Imports
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { stringify } from "query-string"
// #endregion Global Imports

// #region Local Imports
import { CATEGORY_LIST, M_GU, M_TYPE, NAME_OBJ } from "@Definitions"
import { LayoutCode, Title, Chart, Select, ContentsBar, SizeCode, InfoNav, Button } from "@Components"
import { IInfoPage, ReduxNextPageContext } from "@Interfaces"
import { Http } from "@Services"
// #endregion Local Imports

declare global {
    interface Window {
        ReactNativeWebView: any
    }
}

const RN_API_GET_POSITION = "RN_API_GET_POSITION"

const formatComma = function (v: string) {
    if (v === null) return "0"
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Info = function ({}: IInfoPage.InitialProps) {
    const router = useRouter()
    let cate_idx = null
    const cate_info = CATEGORY_LIST.find((info, idx) => {
        cate_idx = idx
        return info.seq === Number(router.query.seq)
    })
    const nav_info = {
        prev: (cate_idx !== null && CATEGORY_LIST[cate_idx - 1]) || null,
        next: (cate_idx !== null && CATEGORY_LIST[cate_idx + 1]) || null,
    }

    const P_YEAR_MONTH = new Date().format("yyyy-MM")
    const [chart, setChart] = useState<any>(null)
    const [chartData, setChartData] = useState([])
    const [selCate, setSelCate] = useState(cate_info?.seq_list[0])
    const [selGu, setSelGu] = useState(M_GU[""])
    const [selType, setSelType] = useState(M_TYPE[""])

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

    const reqCntData = async () => {
        if (selCate === undefined) return
        const result = await Http.Request<any>("get", "/api/count/" + selCate, {
            P_YEAR_MONTH: P_YEAR_MONTH,
            M_TYPE_CODE: selType,
            M_GU_CODE: selGu,
        }).catch((e) => {
            switch (e.status) {
                default: {
                }
            }
            return null
        })
        if (result === null) return
        setChartData(result.map((obj: any) => obj.AVER_VAL || null))
        if (chart === null) return
        const date_list = ["Dates"].concat(result.map((obj: any) => obj.P_YEAR_MONTH + "-01"))
        const data_list = [cate_info?.name].concat(result.map((obj: any) => obj.AVER_VAL || null))
        chart.load({
            unload: true,
            x: "Dates",
            columns: [date_list, data_list],
            labels: {
                format: function (v: any) {
                    return formatComma(v) + "원"
                },
            },
        })
    }

    const isValidData = () => {
        if (chartData.length === 0) return false
        const list = chartData.filter((val) => val !== null)
        if (list.length === 0) return false
        return true
    }

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
            alert("모바일이 아닙니다.")
        }
        return () => {
            /** android */
            document.removeEventListener("message", listener)
            /** ios */
            window.removeEventListener("message", listener)
        }
    }, [])

    useEffect(() => {
        reqCntData()
    }, [chart, selCate, selType, selGu])
    useEffect(() => {
        setSelCate(cate_info?.seq_list[0])
    }, [cate_info])

    return (
        <main id="contents" className="l_main">
            <ContentsBar>
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
            </ContentsBar>
            <ContentsBar>
                <Select value={selGu} setValue={setSelGu}>
                    {Object.entries(M_GU)
                        .reverse()
                        .map(([key, value]) => (
                            <option key={key} value={key}>
                                {value || "지역 전체"}
                            </option>
                        ))}
                </Select>
                <Select value={selType} setValue={setSelType}>
                    {Object.entries(M_TYPE)
                        .reverse()
                        .map(([key, value]) => (
                            <option key={key} value={key}>
                                {value || "시장 전체"}
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
                        window.ReactNativeWebView.postMessage(
                            JSON.stringify({
                                type: RN_API_GET_POSITION,
                            }),
                        )
                    }}
                >
                    <i className="xi-my-location"></i>
                    <span className="ir">내위치</span>
                </Button>
            </ContentsBar>
            <ContentsBar>
                <Title as="h2">
                    {isValidData() ? `${formatComma(String(chartData[chartData.length - 1] || "0") || "0")}원 - ${P_YEAR_MONTH} ${cate_info?.name} 물가` : "등록된 데이터가 없습니다."}
                </Title>
            </ContentsBar>
            <ContentsBar noPadding show={isValidData()}>
                <Chart setChart={setChart}></Chart>
            </ContentsBar>
            <ContentsBar show={isValidData()}>
                <Title as="h2">2020년 이맘때의 가격</Title>
            </ContentsBar>
            <InfoNav nav_info={nav_info} />
        </main>
    )
}
Info.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IInfoPage.InitialProps> => {
    return {
        layout: LayoutCode.Info,
        transition: "slide",
    }
}
export default Info
