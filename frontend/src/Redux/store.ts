// #region Global Imports
import { createStore, applyMiddleware, Middleware, StoreEnhancer } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { Context, createWrapper } from "next-redux-wrapper"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
// #endregion Global Imports

// #region Local Imports
import { Reducers } from "./Reducers"
// #endregion Local Imports

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
    if (process.env.NODE_ENV !== "production") {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const makeConfiguredStore = (reducer: any) => createStore(reducer, bindMiddleware([thunkMiddleware]))

const persistConfig = {
    key: "nextjs",
    whitelist: ["app", "star"], // make sure it does not clash with server keys
    storage,
}
const makeStore = (context?: Context) => {
    const isServer = typeof window === "undefined"
    if (isServer) {
        return makeConfiguredStore(Reducers)
    } else {
        // we need it only on client side

        const persistedReducer = persistReducer(persistConfig, Reducers)
        return makeConfiguredStore(persistedReducer)
    }
}
const tempStore = createStore(Reducers)
export type AppDispatch = typeof tempStore.dispatch

export const persistor = persistStore(createStore(persistReducer(persistConfig, Reducers)))

export const wrapper = createWrapper(makeStore, { debug: true })
