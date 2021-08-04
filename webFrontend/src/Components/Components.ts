export const SizeCode = {
    small: 101,
    normal: 102,
    large: 103,
    icon: 104,
    profile: 105,
} as const
export type SizeCode = typeof SizeCode[keyof typeof SizeCode]
