declare namespace IAppPage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[]
    }

    export interface IStateProps {
        sel_cate: number | null
        sel_theme: number | null
    }

    namespace Actions {
        export interface IMapResponse {}

        export type ISetSelCatePayload = number | null
        export type ISetSelThemePayload = number | null
    }
}

export { IAppPage }
