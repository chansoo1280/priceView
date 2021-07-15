declare namespace IStarPage {
    export interface IProps extends WithTranslation {}

    export interface InitialProps {
        namespacesRequired: string[]
    }

    export interface IStateProps {
        list: number[]
    }

    namespace Actions {
        export interface IMapPayload {
            seq: number
        }

        export interface IMapResponse {}

        export interface IAddStarPayload {
            seq: number
        }

        export interface IRemoveStarPayload {
            seq: number
        }
    }
}

export { IStarPage }
