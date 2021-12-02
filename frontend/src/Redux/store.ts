import { createWrapper } from "next-redux-wrapper"
import { compose, createStore, Store } from "redux"
import rootReducer from "./Reducers"
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import { persistStore } from "redux-persist"
import { persistReducer } from "redux-persist"

const persistConfig = {
    key: "nextjs",
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const makeStore = () => {
    const isServer = typeof window === "undefined"

    if (isServer) {
        return configureStore({
            reducer: persistedReducer,
        })
    } else {
        const store = configureStore({
            reducer: persistedReducer,
            devTools: process.env.NODE_ENV !== "production",
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware({
                    serializableCheck: false,
                }),
        }) as any

        store.__persistor = persistStore(store) // Nasty hack

        return store
    }
}
export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== "production",
})
