import { Response } from 'express'

export enum ResCode {
    OK = 200,
    Created = 201,
    Deleted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    MethodNotAllowed = 405,
    Conflict = 409,
    TooManyRequests = 429,
}
export enum ResMessage {
    OK = 'OK',
    Created = 'Created',
    Deleted = 'Deleted',
    NoContent = 'No Content',
    BadRequest = 'Bad Request',
    Unauthorized = 'Unauthorized - 미인증',
    Forbidden = 'Forbidden - 현재 접근이 허용되지 않은 자원',
    NotFound = 'Not Found',
    MethodNotAllowed = 'Method Not Allowed',
    Conflict = 'Conflict',
    TooManyRequests = 'Too Many Requests',
}
const handleResult = function (result: number | object, Res: Response, description?: string) {
    if (description === undefined) {
        description = '';
    }

    switch (result) {
        case ResCode.OK: {
            return Res.status(ResCode.OK).send({
                message: ResMessage.OK,
                description: description
            })
        }
        case ResCode.Created: {
            return Res.status(ResCode.Created).send({
                message: ResMessage.Created,
                description: description
            })
        }
        case ResCode.Deleted: {
            return Res.status(ResCode.Deleted).send({
                message: ResMessage.Deleted,
                description: description
            })
        }
        case ResCode.NoContent: {
            return Res.status(ResCode.NoContent).send({
                message: ResMessage.NoContent,
                description: description
            })
        }
        case ResCode.BadRequest: {
            return Res.status(ResCode.BadRequest).send({
                message: ResMessage.BadRequest,
                description: description
            })
        }
        case ResCode.Unauthorized: {
            return Res.status(ResCode.Unauthorized).send({
                message: ResMessage.Unauthorized,
                description: description
            })
        }
        case ResCode.Forbidden: {
            return Res.status(ResCode.Forbidden).send({
                message: ResMessage.Forbidden,
                description: description
            })
        }
        case ResCode.NotFound: {
            //이건 서버에서 알아서 처리
            return Res.status(ResCode.NotFound).send({
                message: ResMessage.NotFound,
                description: description
            })
        }
        case ResCode.MethodNotAllowed: {
            return Res.status(ResCode.MethodNotAllowed).send({
                message: ResMessage.MethodNotAllowed,
                description: description
            })
        }
        case ResCode.Conflict: {
            // 로직상의 조건이나 순서에 부합하지 않음
            return Res.status(ResCode.Conflict).send({
                message: ResMessage.Conflict,
                description: description
            })
        }
        case ResCode.TooManyRequests: {
            // DoS, Brute-force attack 같은 비정상적인 접근
            return Res.status(ResCode.TooManyRequests).set({ 'Retry-After': 3600 }).send({
                message: ResMessage.TooManyRequests,
                description: description
            })
        }
        default: {
            return Res.status(ResCode.OK).send(result)
        }
    }
}

export default handleResult
