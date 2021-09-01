// #region Global Imports
import "/styles/style.scss"
import "/styles/reset.css"
// Import Swiper styles
import "swiper/swiper.scss"
import * as React from "react"
import App, { AppInitialProps, AppContext } from "next/app"
import { withRouter } from "next/router"
import { ThemeProvider } from "styled-components"
import { connect } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
// #endregion Global Imports

// #region Local Imports
import { ThemeObj, ThemeType } from "@Definitions/Styled"
// import { appWithTranslation } from "@Server/i18n";
import { AppWithStore, IStore } from "@Interfaces"
import { persistor, wrapper } from "@Redux"
import TheLayout, { LayoutCode } from "@Components/Layout"
import "@Services/API/DateFormat"
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    constructor(props: any) {
        super(props)
        this.state = {
            nextPathname: this.props.router.pathname,
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
        })
    }
    componentDidMount() {
        this.props.router.events.on("routeChangeStart", this.handleRouteChange)
    }
    componentWillUnmount() {
        this.props.router.events.off("routeChangeStart", this.handleRouteChange)
    }
    render() {
        const { Component, pageProps, router, app }: any = this.props
        const { nextPathname }: any = this.state
        const AppLayout = TheLayout[pageProps?.layout || LayoutCode.Default]
        const theme = ThemeObj[ThemeType[app.sel_theme] || ThemeType.WHITE]
        return (
            <ThemeProvider theme={theme}>
                <TransitionGroup
                    style={{
                        overflow: "hidden",
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        perspective: "500px",
                    }}
                >
                    <CSSTransition appear={true} key={router.pathname} timeout={300} classNames={pageProps?.transition || ""}>
                        <div className={"l_transition " + nextPathname}>
                            <PersistGate persistor={persistor} loading={<div>Loading</div>}>
                                <AppLayout {...pageProps}>
                                    <Component {...pageProps} />
                                </AppLayout>
                            </PersistGate>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </ThemeProvider>
        )
    }
}
const mapStateToProps = (state: IStore) => ({
    app: state.app,
})

// export default wrapper.withRedux(withRouter(WebApp))
// export default withRedux(makeStore)(appWithTranslation(WebApp));
export default wrapper.withRedux(connect(mapStateToProps)(withRouter(WebApp)))
