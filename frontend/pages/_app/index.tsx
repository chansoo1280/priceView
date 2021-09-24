// #region Global Imports
import "/styles/style.scss"
import "/styles/reset.css"
// Import Swiper styles
import "swiper/swiper.scss"
import * as React from "react"
import App, { AppInitialProps, AppContext } from "next/app"
import { withRouter } from "next/router"
import { ThemeProvider } from "styled-components"
import { connect, Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
// #endregion Global Imports

// #region Local Imports
import { ThemeObj, ThemeType } from "@Definitions/Styled"
// import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces"
import { RootState, makeStore, wrapper } from "@Redux"
import TheLayout, { LayoutCode } from "@Components/Layout"
import "@Services/API/DateFormat"
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    constructor(props: any) {
        super(props)
        this.state = {
            nextPathname: this.props.router.pathname,
            prevPathname: this.props.router.pathname,
        }
    }
    static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

        return { pageProps: pageProps }
    }
    handleRouteChange = (url: string) => {
        this.setState({
            ...this.state,
            nextPathname: url.split("?")[0],
            prevPathname: this.props.router.pathname,
        })
    }
    componentDidMount() {
        this.props.router.events.on("routeChangeStart", this.handleRouteChange)
    }
    componentWillUnmount() {
        this.props.router.events.off("routeChangeStart", this.handleRouteChange)
    }
    render() {
        const store = makeStore()
        const persistor = persistStore(store)
        const { Component, pageProps, router, app }: any = this.props
        const { nextPathname, prevPathname }: any = this.state
        const AppLayout = TheLayout[pageProps?.layout || LayoutCode.Default]
        const theme = ThemeObj[ThemeType[app.sel_theme] || ThemeType.WHITE]
        return (
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <PersistGate
                        persistor={persistor}
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
                </Provider>
            </ThemeProvider>
        )
    }
}
const mapStateToProps = (state: RootState) => ({
    app: state.appReducer,
})

export default wrapper.withRedux(connect(mapStateToProps)(withRouter(WebApp)))
