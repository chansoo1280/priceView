import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// #region Local Imports
import { IInfoPage, ReduxNextPageContext } from "@Interfaces"
import { CATEGORY_LIST, M_GU, M_TYPE, NAME_OBJ } from "@Definitions"
import { Http } from "@Services"
import { LayoutCode, Title, Chart, Select, ContentsBar, SizeCode, InfoNav } from "@Components"
// #endregion Local Imports

const Info = function ({}: IInfoPage.InitialProps) {
    const router = useRouter()
    console.log(router.query.seq)
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
        chart.load({
            unload: true,
            x: "Dates",
            columns: [["Dates"].concat(result.map((obj: any) => obj.P_YEAR_MONTH + "-01")), [cate_info?.name].concat(result.map((obj: any) => obj.AVER_VAL || null))],
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

    const formatComma = function (v: string) {
        if (v === null) return "0"
        return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

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
            </ContentsBar>
            <ContentsBar>
                <Title as="h2">
                    {isValidData() ? `${formatComma(String(chartData[chartData.length - 1] || "0") || "0")}원 - ${P_YEAR_MONTH} ${cate_info?.name} 물가` : "등록된 데이터가 없습니다."}
                </Title>
            </ContentsBar>
            <ContentsBar noPadding show={isValidData()}>
                <Chart
                    setChart={setChart}
                    //{
                    //    x: "Dates",
                    //    // xFormat: "%Y-%m-%d",
                    //    // columns: [
                    //    //     ["Dates", "2020-07-01", "2020-08-01", "2020-09-01", //"2020-10-01", "2020-11-01", "2020-12-01"],
                    //    //     ["쇠고기", 2985, 2997, 3267, 3227, 3202, 3302],
                    //    // ],
                    //    columns: [["Dates"].concat(chartDateData), [chartDataName].concat//(chartData)],
                    //    labels: {
                    //        format: function (v: any) {
                    //            return formatComma(v) + "원"
                    //        },
                    //    },
                    //}
                ></Chart>
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
