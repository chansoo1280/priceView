// #region Global Imports
import React, { MouseEventHandler, ReactNode } from "react"
import Link from "next/link"
import classNames from "classnames"
// #endregion Global Imports

// #region Local Imports
import styles from "./Button.module.scss"
// #endregion Local Imports

const ButtonTypes = ["default", "primary", "dashed", "link", "text"] as const
export type ButtonType = typeof ButtonTypes[number]
const ButtonShapes = ["circle", "round"] as const
export type ButtonShape = typeof ButtonShapes[number]
const ButtonHTMLTypes = ["submit", "button", "reset"] as const
export type ButtonHTMLType = typeof ButtonHTMLTypes[number]

interface BaseButtonProps {
    children?: ReactNode
    icon?: React.ReactNode
    type?: ButtonType
    shape?: ButtonShape
    onClick?: MouseEventHandler
    show?: boolean
    ghost?: boolean
    danger?: boolean
    href?: string
    loading?: boolean | { delay?: number }
    className?: string
    block?: boolean
    htmlType?: ButtonHTMLType
}
type AnchorButtonProps = {
    href: string
    target?: string
    onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
    Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">

type NativeButtonProps = {
    htmlType?: ButtonHTMLType
    onClick?: React.MouseEventHandler<HTMLElement>
} & BaseButtonProps &
    Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">

type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

type Loading = number | boolean
const Button = (props: ButtonProps): JSX.Element => {
    const { href, icon, loading = false, htmlType = "button", type, shape, className, children, block, ...rest } = props
    const [innerLoading, setLoading] = React.useState<Loading>(!!loading)
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
        const { onClick, disabled } = props
        if (innerLoading || disabled) {
            e.preventDefault()
            return
        }
        ;(onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e)
    }
    const iconType = innerLoading ? "loading" : icon
    const prefixCls = "btn"
    const classes = classNames(
        styles[`${prefixCls}`],
        {
            [styles[`${prefixCls}--${type}`]]: type,
            [styles[`${prefixCls}--${shape}`]]: shape,
            [styles[`${prefixCls}--icon-only`]]: !children && children !== 0 && !!iconType,
            [styles[`${prefixCls}--loading`]]: innerLoading,
            [styles[`${prefixCls}--block`]]: block,
        },
        className,
    )
    return href !== undefined ? (
        <Link href={href}>
            <a {...(rest as AnchorButtonProps)} onClick={handleClick} className={classes}>
                {icon}
                {children}
            </a>
        </Link>
    ) : (
        <button {...(rest as NativeButtonProps)} onClick={handleClick} type={htmlType} className={classes}>
            {icon}
            {children}
        </button>
    )
}

export { Button }
