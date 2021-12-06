// #region Global Imports
import "/styles/style.scss"
import "/styles/reset.css"
// Import Swiper styles
import "swiper/swiper.scss"

import { AppInitialProps, AppContext, AppProps } from "next/app"
import { useRouter } from "next/router"
import { ThemeProvider } from "styled-components"
import { ReactReduxContext, useSelector } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { appWithTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { NextComponentType } from "next"
// #endregion Global Imports

// #region Local Imports
import { ThemeObj, ThemeType } from "@Definitions/Styled"
import { RootState, wrapper } from "@Redux"
import TheLayout, { LayoutCode } from "@Components/Layout"
import "@Services/DateFormat"
// #endregion Local Imports

const formatPathname = (url: string) =>
    url
        .replace(/\/[0-9]{1,}/g, "") //seq 제거
        .replace("/en", "") //locale 제거
        .replace("/[seq]", "") //seq 제거2
        .replace(/\/$/g, "") //마지막 / 제거
        .split("?")[0] || //query string 제거
    "/"

const WebApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
    const router = useRouter()
    const { app } = useSelector(({ appReducer }: RootState) => ({
        app: appReducer,
    }))
    const [nextPathname, setNextPathname] = useState<string>(formatPathname(router.pathname))
    const [prevPathname, setPrevPathname] = useState<string>(formatPathname(router.pathname))
    const AppLayout = TheLayout[pageProps?.layout || LayoutCode.Default]
    const theme = ThemeObj[ThemeType[app.sel_theme || ""] || ThemeType.WHITE]

    const handleRouteChange = (url: string) =>
        setNextPathname((prevPathname) => {
            setPrevPathname(prevPathname)
            return formatPathname(url)
        })
    useEffect(() => {
        router.events.on("routeChangeStart", handleRouteChange)
        return () => {
            router.events.off("routeChangeStart", handleRouteChange)
        }
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <ReactReduxContext.Consumer>
                {({ store }: any) => (
                    <PersistGate
                        persistor={store.__persistor}
                        loading={
                            <div className="l_loading">
                                <img src="/static/images/splash_bg.svg" alt="알고싶은 서울물가" />
                            </div>
                        }
                    >
                        <TransitionGroup className="l_transition-wrap">
                            <CSSTransition
                                key={router.pathname}
                                timeout={{
                                    enter: 300,
                                    exit: 290,
                                }}
                                classNames={pageProps?.transition || ""}
                            >
                                <div className={"l_transition " + nextPathname + "From" + prevPathname}>
                                    <AppLayout {...pageProps}>
                                        <Component {...pageProps} />
                                    </AppLayout>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </PersistGate>
                )}
            </ReactReduxContext.Consumer>
        </ThemeProvider>
    )
}
export const getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps: pageProps }
}

export default wrapper.withRedux(appWithTranslation(WebApp))
