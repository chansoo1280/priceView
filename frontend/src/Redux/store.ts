// #region Global Imports
import { createStore, applyMiddleware, Middleware, StoreEnhancer } from "redux"
import thunkMiddleware from "redux-thunk"
// #endregion Global Imports

// #region Local Imports
import { Reducers } from "./Reducers"
import { createWrapper } from "next-redux-wrapper"
import { Reducer } from "react"
import { persistStore } from "redux-persist"
// #endregion Local Imports

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension")
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const makeConfiguredStore = (reducer: Reducer<any, any>) => createStore(reducer, bindMiddleware([thunkMiddleware]))

const makeStore = () => {
    const isServer = typeof window === "undefined"
    if (isServer) {
        return makeConfiguredStore(Reducers)
    } else {
        // we need it only on client side
        const { persistReducer } = require("redux-persist")
        const storage = require("redux-persist/lib/storage").default

        const persistConfig = {
            key: "nextjs",
            whitelist: ["app", "star"], // make sure it does not clash with server keys
            storage,
        }

        const persistedReducer = persistReducer(persistConfig, Reducers)
        const store = makeConfiguredStore(persistedReducer)

        return store
    }
}
const temp_store = makeStore()
export type AppDispatch = typeof temp_store.dispatch
export const persistor = persistStore(temp_store)

export const wrapper = createWrapper(makeStore, { debug: true })
