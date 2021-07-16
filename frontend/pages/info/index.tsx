import { useRouter } from "next/router"
import { useEffect, useState } from "react"

// #region Local Imports
import { IInfoPage, ReduxNextPageContext } from "@Interfaces"
import { CATEGORY_LIST, M_GU, M_TYPE, NAME_OBJ } from "@Definitions"
import { Http } from "@Services"
import { LayoutCode, Title, Chart, Select, ContentsBar, SizeCode, InfoNav } from "@Components"
// #endregion Local Imports

const Info = function ({ cate_info, nav_info }: IInfoPage.InitialProps) {
    const router = useRouter()
    const P_YEAR_MONTH = new Date().format("yyyy-MM")
    const [chartData, setChartData] = useState([cate_info?.name])
    const [selCate, setSelCate] = useState(cate_info?.seq_list[0])
    const [selGu, setSelGu] = useState(M_GU[""])
    const [selType, setSelType] = useState(M_TYPE[""])
    const [chartDateData, setChartDateData] = useState(["Dates"])

    const reqCntData = async () => {
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
        const initChartDateData = ["Dates"]
        setChartDateData(initChartDateData.concat(result.map((obj: any) => obj.P_YEAR_MONTH + "-01")))
        const initChartData = [cate_info?.name]
        setChartData(initChartData.concat(result.map((obj: any) => obj.AVER_VAL || null)))
    }

    const formatComma = function (v: string) {
        return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    useEffect(() => {
        reqCntData()
        return () => {}
    }, [selCate, selType, selGu])
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
                    {chartData.length !== 1 ? `${formatComma(String(chartData[chartData.length - 1]) || "0")}원 - ${P_YEAR_MONTH} ${cate_info?.name} 물가` : "등록된 데이터가 없습니다."}
                </Title>
            </ContentsBar>
            <ContentsBar noPadding show={chartData.length !== 1}>
                <Chart
                    data={[
                        // ["Dates", "2020-07-01", "2020-08-01", "2020-09-01", "2020-10-01", "2020-11-01", "2020-12-01"],
                        chartDateData,
                        // ["쇠고기", 2985, 2997, 3267, 3227, 3202, 3302],
                        chartData,
                    ]}
                ></Chart>
            </ContentsBar>
            <ContentsBar show={chartData.length !== 1}>
                <Title as="h2">2020년 이맘때의 가격</Title>
            </ContentsBar>
            <InfoNav nav_info={nav_info} />
        </main>
    )
}
Info.getInitialProps = async (ctx: ReduxNextPageContext): Promise<IInfoPage.InitialProps> => {
    let cate_idx = null
    const cate_info = CATEGORY_LIST.find((info, idx) => {
        cate_idx = idx
        return info.seq === Number(ctx.query.seq)
    })
    const nav_info = {
        prev: (cate_idx && CATEGORY_LIST[cate_idx - 1]) || null,
        next: (cate_idx && CATEGORY_LIST[cate_idx + 1]) || null,
    }
    return {
        layout: LayoutCode.Info,
        cate_info: cate_info,
        nav_info: nav_info,
        transition: "slide",
    }
}
export default Info
