// #region Global Imports
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { stringify } from "query-string"
// #endregion Global Imports

// #region Local Imports
import { CATEGORY_LIST, M_GU, M_TYPE, NAME_OBJ } from "@Definitions"
import { Header, Chart, Select, PriceCard, Space, Tooltip, Button, Tab } from "@Components"
import { Count, IInfoPage } from "@Interfaces"
import { Http } from "@Services"
import { RootState, StarActions } from "@Redux"
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { GetStaticPaths } from "next"
// #endregion Local Imports

const RN_API_GET_POSITION = "RN_API_GET_POSITION"

const formatComma = function (v: string) {
    if (v === null) return "0"
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Info = ({}: IInfoPage.InitialProps): JSX.Element => {
    const router = useRouter()
    const { seq } = router.query
    const dispatch = useDispatch()
    const { t } = useTranslation("common")
    const star = useSelector((state: RootState) => state.starReducer)

    const cate_info =
        CATEGORY_LIST.find((info, idx) => {
            return info.seq === Number(seq)
        }) || null
    const [cateName, _] = useState(cate_info?.name)

    const getIsStar = star.list.find((seq: number) => seq === cate_info?.seq) !== undefined
    const newDate = new Date()

    const MONTH_BIAS = 15 < newDate.getDate() ? 1 : 0
    const P_YEAR_MONTH = (() => {
        const d = new Date(newDate.getFullYear(), newDate.getMonth(), 1)
        d.setMonth(d.getMonth() - (1 - MONTH_BIAS))
        return d
    })().format("yyyy-MM")
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

    const [selGu, setSelGu] = useState(M_GU[""])
    const [selType, setSelType] = useState(M_TYPE[""])
    const updateChart = (selType: string, resData: Count[]) => {
        setCateList(
            cateList.map((cateInfo) => {
                const cateResult = resData.filter(({ A_SEQ, M_TYPE_CODE }) => Number(A_SEQ) === cateInfo.A_SEQ && M_TYPE_CODE === selType)
                const curDate = new Date(P_YEAR_MONTH + "-01")
                const minDate = (() => {
                    const d = new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                    d.setMonth(d.getMonth() - (4 - MONTH_BIAS))
                    return d
                })()
                const dateList = ["Dates"]
                const dataList = [t("main." + cate_info?.name || "")]

                for (let i = 0; minDate < curDate; i++) {
                    const cateResultInfo = cateResult.find(({ P_YEAR_MONTH }) => P_YEAR_MONTH === minDate.format("yyyy-MM"))
                    dateList.push(minDate.format("yyyy-MM-01"))
                    const value = cateResultInfo && String(cateResultInfo?.AVER_VAL)
                    dataList.push(value !== "0" ? value || (null as unknown as string) : (null as unknown as string))
                    minDate.setMonth(minDate.getMonth() + 1)
                }

                return {
                    ...cateInfo,
                    dateList: dateList,
                    dataList: dataList,
                }
            }),
        )
    }
    const reqPriceData = async (M_GU_CODE: string) => {
        const result = await Http.Request<Count[]>("get", "/api/count/info", {
            A_SEQS: cate_info?.seq_list.join(", ") || "",
            P_YEAR_MONTH: P_YEAR_MONTH,
            M_GU_CODE: M_GU_CODE,
        }).catch((e) => {
            switch (e.status) {
                default: {
                }
            }
            return null
        })
        setResData(result || [])
        updateChart(selType, result || [])
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
        ).then((response) => {
            if (response.status !== 200) {
                alert(t("message.location-information-not-found"))
                return
            }
            return response.json().then((res) => {
                if (res.documents && res.documents.length === 0) {
                    alert(t("message.location-information-not-found"))
                    return
                }
                const { region_1depth_name, region_2depth_name } = res.documents[0]?.address
                if (region_1depth_name !== "서울") {
                    alert(t("message.is-not-Seoul"))
                    return
                }
                const guSeq = Object.keys(M_GU).find((key) => M_GU[key] === region_2depth_name) || ""
                setSelGu(guSeq)
                reqPriceData(guSeq)
            })
        })
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
        reqPriceData(selGu)
    }, [])
    return (
        <>
            <Header title={t("main." + cateName)}>
                <Button onClick={() => router.back()} icon={<img src="/static/images/icon_back.svg" alt={t("message.back")} />} />
                <Tooltip posX="left" contents={getIsStar ? t("message.was-added") : t("message.was-removed")}>
                    <Button
                        show={!getIsStar}
                        onClick={() => {
                            if (cate_info === null) return
                            dispatch(StarActions.addStar(cate_info?.seq))
                        }}
                        icon={<img src="/static/images/icon_favorite.svg" alt={t("message.add-to-favorites")} />}
                    />
                    <Button
                        show={getIsStar}
                        onClick={() => {
                            if (cate_info === null) return
                            dispatch(StarActions.removeStar(cate_info?.seq))
                        }}
                        icon={<img src="/static/images/icon_favorite_active.svg" alt={t("message.remove-to-favorites")} />}
                    />
                </Tooltip>
            </Header>
            <Tab>
                {Object.entries(M_TYPE)
                    .reverse()
                    .map(([key, value], idx) => (
                        <Tab.Item
                            key={key}
                            onClick={() => {
                                setSelType(key)
                                updateChart(key, resData)
                            }}
                            name={t("main.type." + (value || "overall-average"))}
                            isSelected={key === selType}
                        />
                    ))}
            </Tab>
            <Space padding="0 20px">
                <Select
                    round
                    value={selGu}
                    onChange={(e) => {
                        const guSeq = e.target.value || ""
                        setSelGu(guSeq)
                        reqPriceData(guSeq)
                    }}
                >
                    {Object.entries(M_GU)
                        .reverse()
                        .map(([key, value]) => (
                            <option key={key} value={key}>
                                {t("main.gu." + (value || "서울전체"))}
                            </option>
                        ))}
                </Select>
                <Button
                    onClick={() => {
                        if (window.ReactNativeWebView) {
                            window.ReactNativeWebView.postMessage(
                                JSON.stringify({
                                    type: RN_API_GET_POSITION,
                                }),
                            )
                        } else {
                            alert(t("message.not-mobile-device"))
                            return
                        }
                    }}
                    type="default"
                    icon={<img src="/static/images/icon_location.svg" alt={t("word.my-location")} />}
                />
                <span style={{ marginLeft: "auto" }}>{P_YEAR_MONTH}</span>
            </Space>
            <Space padding="24px 20px" gap="24px" direction="column">
                {cateList.map((cateInfo) => {
                    const { A_SEQ, A_NAME, A_UNIT, dataList, dateList, isOpen } = cateInfo
                    if (dataList === null || 4 <= dataList.filter((val) => val === null).length)
                        return (
                            <PriceCard key={A_SEQ} title={A_NAME} unit={A_UNIT} price={"0"} priceChange={""}>
                                <Chart MONTH_BIAS={MONTH_BIAS} seq={A_SEQ} dataList={dataList} dateList={dateList} />
                            </PriceCard>
                        )
                    const priceChange = (Number(dataList && dataList[dataList.length - 1]) || 0) - (Number(dataList && dataList[dataList.length - 2]) || 0)
                    return (
                        <PriceCard
                            key={A_SEQ}
                            onClick={() => {
                                setCateList(
                                    cateList.map((obj) => {
                                        if (A_SEQ === obj.A_SEQ) {
                                            return {
                                                ...cateInfo,
                                                isOpen: !isOpen,
                                            }
                                        }
                                        return obj
                                    }),
                                )
                            }}
                            isOpen={isOpen}
                            title={A_NAME}
                            unit={A_UNIT}
                            price={formatComma((dataList && dataList[dataList.length - 1]) || "0")}
                            priceChange={formatComma(String(priceChange))}
                        >
                            <Chart MONTH_BIAS={MONTH_BIAS} seq={A_SEQ} dataList={dataList} dateList={dateList} />
                        </PriceCard>
                    )
                })}
            </Space>
        </>
    )
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
        transition: "slide",
    },
})
export const getStaticPaths: GetStaticPaths<{ seq: string }> = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: "blocking", //indicates the type of fallback
    }
}
export default Info
