// #region Global Imports
import { useState } from "react"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "next-i18next"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
// #endregion Global Imports

// #region Local Imports
import { Header, Select, Button, Title, AlertModal, SettingList } from "@Components"
import { AppActions } from "@Reducers"
// #endregion Local Imports

const Page = (): JSX.Element => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { t, i18n } = useTranslation("common")
    const [showDataModal, setShowDataModal] = useState(false)
    const [showMakerModal, setShowMakerModal] = useState(false)
    return (
        <>
            <Header title={t("header.title.setting")}>
                <Button
                    onClick={() => router.replace("/", "/")}
                    icon={<img src="/static/images/icon_back.svg" alt={t("header.back")} />}
                ></Button>
            </Header>
            <SettingList.Title as="h2">{t("setting.app")}</SettingList.Title>
            <SettingList>
                <SettingList.Item>
                    <Title as="h3">{t("setting.review-message")}</Title>
                    <SettingList.Text>
                        <a
                            href="https://play.google.com/store/apps/details?id=site.chansoo1280.priceview"
                            target="_blank"
                        >
                            {t("setting.go-review")}
                        </a>
                    </SettingList.Text>
                </SettingList.Item>
                {/* <SettingList.Item>
                    <Title as="h3">1대1 문의</Title>
                </SettingList.Item> */}
            </SettingList>
            <SettingList.Title as="h2">{t("setting.usability")}</SettingList.Title>
            <SettingList>
                <SettingList.Item>
                    <Title as="h3">{t("setting.langage")}</Title>
                    <Select
                        value={i18n.language}
                        onChange={(e) => {
                            const value = e.target.value
                            dispatch(AppActions.setLang(value))
                            router.replace("/setting", "/setting", { locale: value })
                        }}
                    >
                        <option value={"ko"}>한국어</option>
                        <option value={"en"}>english</option>
                    </Select>
                </SettingList.Item>
            </SettingList>
            <SettingList.Title as="h2">{t("setting.policy")}</SettingList.Title>
            <SettingList>
                {/* <SettingList.Item>
                    <Title as="h3">이용약관</Title>
                </SettingList.Item> */}
                <SettingList.Item>
                    <Title as="h3">{t("setting.privacy-policy")}</Title>
                    <SettingList.Text>
                        <a href="https://chansoo1280.site/privacy/priceview/" target="_blank">
                            {t("setting.open-to-new-tab")}
                        </a>
                    </SettingList.Text>
                </SettingList.Item>
            </SettingList>
            <SettingList.Title as="h2">{t("setting.app-info")}</SettingList.Title>
            <SettingList>
                <SettingList.Item
                    onClick={() => {
                        setShowDataModal(true)
                    }}
                >
                    <Title as="h3">{t("setting.data-provider")}</Title>
                    <SettingList.Text>서울 열린데이터 광장</SettingList.Text>
                </SettingList.Item>
                <SettingList.Item
                    onClick={() => {
                        setShowMakerModal(true)
                    }}
                >
                    <Title as="h3">{t("setting.producer")}</Title>
                </SettingList.Item>
                {/* <SettingList.Item>
                    <Title as="h3">{t("setting.policy")}</Title>
                    <SettingList.Text>
                        <a href="https://chansoo1280.site/privacy/priceview/" target="_blank">
                            {t("setting.privacy-policy")}
                        </a>
                    </SettingList.Text>
                </SettingList.Item> */}
                <SettingList.Item>
                    <Title as="h3">{t("setting.version-info")}</Title>
                    <SettingList.Text>1.0</SettingList.Text>
                </SettingList.Item>
            </SettingList>
            <AlertModal
                onClick={() => {
                    setShowDataModal(false)
                }}
                show={showDataModal}
                title={t("setting.data-provider")}
            >
                서울시 생필품 농수축산물 가격 정보API
            </AlertModal>
            <AlertModal
                onClick={() => {
                    setShowMakerModal(false)
                }}
                show={showMakerModal}
                title={t("setting.producer")}
            >
                {t("setting.developer")}: {t("김찬수")}
                <br />
                {t("setting.designer")}: {t("박진구")}
            </AlertModal>
        </>
    )
}
export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"])),
        transition: "popup",
    },
})
export default Page
