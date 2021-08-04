declare namespace IStarPage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[]
    }

    export interface IStateProps {
        list: number[]
    }

    namespace Actions {
        export type ISetStarPayload = string

        export interface IAddStarPayload {
            seq: number
        }

        export interface IRemoveStarPayload {
            seq: number
        }
        export type IMapPayload = ISetStarPayload | IAddStarPayload | IRemoveStarPayload
    }
}

export { IStarPage }
