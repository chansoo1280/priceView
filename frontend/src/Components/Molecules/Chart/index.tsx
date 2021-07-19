// #region Global Imports
import React, { useEffect } from "react"
import "c3/c3.css"
// #endregion Global Imports

// #region Local Imports
import { IChart } from "./Chart"
import { Container } from "./styled"
// #endregion Local Imports

const formatComma = function (v: string) {
    if (v === null) return "0"
    return v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const Chart: React.FunctionComponent<IChart.IProps> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const c3 = require("c3")
    const { setChart } = props
    useEffect(function () {
        const chart = c3.generate({
            bindto: "#chart",
            data: {
                x: "Dates",
                // xFormat: "%Y-%m-%d",
                // columns: [
                //     ["Dates", "2020-07-01", "2020-08-01", "2020-09-01", "2020-10-01", "2020-11-01", "2020-12-01"],
                //     ["쇠고기", 2985, 2997, 3267, 3227, 3202, 3302],
                // ],
                columns: [],
                labels: {
                    format: function (v: any) {
                        return formatComma(v) + "원"
                    },
                },
            },
            padding: {
                right: 40,
            },
            tooltip: {
                format: {
                    // title: function (d) { return 'Data ' + d; },
                    value: function (value: any) {
                        return formatComma(value) + "원"
                    },
                    //            value: d3.format(',') // apply this format to both y and y2
                },
            },
            line: {
                connect_null: false,
            },
            axis: {
                x: {
                    type: "timeseries",
                    tick: {
                        format: "%Y-%m",
                    },
                },
                y: {
                    padding: { top: 200, bottom: 200 },
                },
            },
        })
        setChart(chart)
    }, [])
    return (
        <Container {...props}>
            <div id="chart"></div>
        </Container>
    )
}
