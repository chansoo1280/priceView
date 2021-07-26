// #region Global Imports
import Head from "next/head"
// #endregion Global Imports

// #region Local Imports
import { Header, Button, Title } from "@Components"
import { StyledWrap } from "./styled"
import { ILayout } from "../Layout"
// #endregion Local Imports

export const Default = function ({ children }: ILayout.IProps) {
    return (
        <>
            <Head>
                <title>알고싶은 물가</title>
                <meta name="description" content="알고싶은 물가 앱입니다." />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"></link>
            </Head>
            <StyledWrap className="l_wrap">
                <Header>
                    <Title>알고싶은 물가</Title>
                    <Button href={"/setting"}>
                        <i className="xi-cog"></i>
                        <span className="ir">설정</span>
                    </Button>
                </Header>
                {children}
            </StyledWrap>
        </>
    )
}
