declare namespace IIconList {
    export interface IProps {
        setSwiper?: Dispatch<SetStateAction<Swiper | undefined>>
        selTab?: number
        onChange?: any
        children?: React.ReactNode
        className?: string
        onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void
        disabled?: boolean
    }
}

export { IIconList }
