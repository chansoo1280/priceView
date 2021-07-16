import { Response } from 'express';
export declare enum ResCode {
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
    TooManyRequests = 429
}
export declare enum ResMessage {
    OK = "OK",
    Created = "Created",
    Deleted = "Deleted",
    NoContent = "No Content",
    BadRequest = "Bad Request",
    Unauthorized = "Unauthorized - \uBBF8\uC778\uC99D",
    Forbidden = "Forbidden - \uD604\uC7AC \uC811\uADFC\uC774 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC740 \uC790\uC6D0",
    NotFound = "Not Found",
    MethodNotAllowed = "Method Not Allowed",
    Conflict = "Conflict",
    TooManyRequests = "Too Many Requests"
}
declare const handleResult: (result: number | object, Res: Response, description?: string | undefined) => Response<any, Record<string, any>>;
export default handleResult;
