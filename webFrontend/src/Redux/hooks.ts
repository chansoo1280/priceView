import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { IStore } from "./IStore"
import { AppDispatch } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<IStore> = useSelector
