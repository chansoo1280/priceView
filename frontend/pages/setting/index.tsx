// #region Global Imports
import { useState } from "react"
// #endregion Global Imports

// #region Local Imports
import { ISettingPage, ReduxNextPageContext } from "@Interfaces"
import { Header, Button, Title, Select, AlertModal, SettingList, SettingListInner, SettingTitle } from "@Components"
import { useRouter } from "next/router"
// #endregion Local Imports

const Setting = ({}: ISettingPage.InitialProps): JSX.Element => {
    const router = useRouter()
    const [showDataModal, setShowDataModal] = useState(false)
    const [showPrivacyModal, SetShowPrivacyModal] = useState(false)
    return (
        <>
            <Header title="설정">
                <Button onClick={() => router.back()} icon={<i className="xi-angle-left"></i>}>
                    <span className="ir">뒤로가기</span>
                </Button>
            </Header>
            <main id="contents" className="l_main">
                <SettingTitle>
                    <Title as="h2">사용성</Title>
                </SettingTitle>
                <SettingList>
                    <SettingListInner>
                        <Title as="h3">언어</Title>
                        <Select
                            setValue={() => {
                                console.log("hi")
                            }}
                        >
                            <option value="">한국어</option>
                            <option value="">English(영어)</option>
                            <option value="">日本語(일본어)</option>
                        </Select>
                    </SettingListInner>
                    <SettingListInner>
                        <Title as="h3">테마</Title>
                        <Select
                            setValue={() => {
                                console.log("hi")
                            }}
                        >
                            <option value="">기본</option>
                            <option value="">다크</option>
                            <option value="">베이지</option>
                        </Select>
                    </SettingListInner>
                </SettingList>
                <SettingTitle>
                    <Title as="h2">앱 정보</Title>
                </SettingTitle>
                <SettingList>
                    <SettingListInner
                        onClick={() => {
                            setShowDataModal(true)
                        }}
                    >
                        <Title as="h3">데이터 제공</Title>
                        서울 열린데이터 광장
                    </SettingListInner>
                    <SettingListInner>
                        <Title as="h3">제작자</Title>
                        Chansoo Kim
                    </SettingListInner>
                    <SettingListInner
                        onClick={() => {
                            SetShowPrivacyModal(true)
                        }}
                    >
                        <Title as="h3">개인정보처리방침</Title>
                    </SettingListInner>
                    <SettingListInner>
                        <Title as="h3">버전 정보</Title>
                        0.0.0.1
                    </SettingListInner>
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
            </main>
        </>
    )
}
Setting.getInitialProps = async (ctx: ReduxNextPageContext): Promise<ISettingPage.InitialProps> => {
    return {
        transition: "popup",
    }
}
export default Setting
