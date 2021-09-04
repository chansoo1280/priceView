declare namespace IChart {
    export interface IProps {
        children?: React.ReactNode
        noPadding?: boolean
        dateList?: any
        dataList?: any
        seq?: string | number
        MONTH_BIAS: number
    }
}

export { IChart }
