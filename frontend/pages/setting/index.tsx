// #region Global Imports
import { useState } from "react"
// #endregion Global Imports

// #region Local Imports
import { ISettingPage, ReduxNextPageContext } from "@Interfaces"
import { Header, Button, Title, Select, AlertModal, SettingList, SettingTitle } from "@Components"
import { useRouter } from "next/router"
// #endregion Local Imports

const Setting = ({}: ISettingPage.InitialProps): JSX.Element => {
    const router = useRouter()
    const [showDataModal, setShowDataModal] = useState(false)
    const [showPrivacyModal, SetShowPrivacyModal] = useState(false)
    return (
        <>
            <Header title="설정">
                <Button onClick={() => router.back()} icon={<img src="/static/images/icon_back.svg" alt="뒤로가기" />}></Button>
            </Header>
            <SettingTitle as="h2">사용성</SettingTitle>
            <SettingList>
                <SettingList.Item>
                    <Title as="h3">언어</Title>
                    <SettingList.Text>한국어</SettingList.Text>
                </SettingList.Item>
                <SettingList.Item>
                    <Title as="h3">테마</Title>
                    <SettingList.Text>기본</SettingList.Text>
                </SettingList.Item>
            </SettingList>
            <SettingTitle as="h2">앱 정보</SettingTitle>
            <SettingList>
                <SettingList.Item
                    onClick={() => {
                        setShowDataModal(true)
                    }}
                >
                    <Title as="h3">데이터 제공</Title>
                    <SettingList.Text>서울 열린데이터 광장</SettingList.Text>
                </SettingList.Item>
                <SettingList.Item>
                    <Title as="h3">제작자</Title>
                    <SettingList.Text>Chansoo Kim</SettingList.Text>
                </SettingList.Item>
                <SettingList.Item
                    onClick={() => {
                        SetShowPrivacyModal(true)
                    }}
                >
                    <Title as="h3">개인정보처리방침</Title>
                </SettingList.Item>
                <SettingList.Item>
                    <Title as="h3">버전 정보</Title>
                    <SettingList.Text>0.0.0.1</SettingList.Text>
                </SettingList.Item>
            </SettingList>
            <AlertModal
                onClick={() => {
                    setShowDataModal(false)
                }}
                show={showDataModal}
                title={"데이터 제공"}
            >
                서울시 생필품 농수축산물 가격 정보API
            </AlertModal>
            <AlertModal
                onClick={() => {
                    SetShowPrivacyModal(false)
                }}
                show={showPrivacyModal}
                title={"개인정보처리방침"}
            >
                본 앱은 사용자의 정보를 수집하지 않습니다.
            </AlertModal>
        </>
    )
}
Setting.getInitialProps = async (ctx: ReduxNextPageContext): Promise<ISettingPage.InitialProps> => {
    return {
        transition: "popup",
    }
}
export default Setting
