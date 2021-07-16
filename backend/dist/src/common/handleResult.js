"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResMessage = exports.ResCode = void 0;
var ResCode;
(function (ResCode) {
    ResCode[ResCode["OK"] = 200] = "OK";
    ResCode[ResCode["Created"] = 201] = "Created";
    ResCode[ResCode["Deleted"] = 202] = "Deleted";
    ResCode[ResCode["NoContent"] = 204] = "NoContent";
    ResCode[ResCode["BadRequest"] = 400] = "BadRequest";
    ResCode[ResCode["Unauthorized"] = 401] = "Unauthorized";
    ResCode[ResCode["Forbidden"] = 403] = "Forbidden";
    ResCode[ResCode["NotFound"] = 404] = "NotFound";
    ResCode[ResCode["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    ResCode[ResCode["Conflict"] = 409] = "Conflict";
    ResCode[ResCode["TooManyRequests"] = 429] = "TooManyRequests";
})(ResCode = exports.ResCode || (exports.ResCode = {}));
var ResMessage;
(function (ResMessage) {
    ResMessage["OK"] = "OK";
    ResMessage["Created"] = "Created";
    ResMessage["Deleted"] = "Deleted";
    ResMessage["NoContent"] = "No Content";
    ResMessage["BadRequest"] = "Bad Request";
    ResMessage["Unauthorized"] = "Unauthorized - \uBBF8\uC778\uC99D";
    ResMessage["Forbidden"] = "Forbidden - \uD604\uC7AC \uC811\uADFC\uC774 \uD5C8\uC6A9\uB418\uC9C0 \uC54A\uC740 \uC790\uC6D0";
    ResMessage["NotFound"] = "Not Found";
    ResMessage["MethodNotAllowed"] = "Method Not Allowed";
    ResMessage["Conflict"] = "Conflict";
    ResMessage["TooManyRequests"] = "Too Many Requests";
})(ResMessage = exports.ResMessage || (exports.ResMessage = {}));
const handleResult = function (result, Res, description) {
    if (description === undefined) {
        description = '';
    }
    switch (result) {
        case ResCode.OK: {
            return Res.status(ResCode.OK).send({
                message: ResMessage.OK,
                description: description
            });
        }
        case ResCode.Created: {
            return Res.status(ResCode.Created).send({
                message: ResMessage.Created,
                description: description
            });
        }
        case ResCode.Deleted: {
            return Res.status(ResCode.Deleted).send({
                message: ResMessage.Deleted,
                description: description
            });
        }
        case ResCode.NoContent: {
            return Res.status(ResCode.NoContent).send({
                message: ResMessage.NoContent,
                description: description
            });
        }
        case ResCode.BadRequest: {
            return Res.status(ResCode.BadRequest).send({
                message: ResMessage.BadRequest,
                description: description
            });
        }
        case ResCode.Unauthorized: {
            return Res.status(ResCode.Unauthorized).send({
                message: ResMessage.Unauthorized,
                description: description
            });
        }
        case ResCode.Forbidden: {
            return Res.status(ResCode.Forbidden).send({
                message: ResMessage.Forbidden,
                description: description
            });
        }
        case ResCode.NotFound: {
            return Res.status(ResCode.NotFound).send({
                message: ResMessage.NotFound,
                description: description
            });
        }
        case ResCode.MethodNotAllowed: {
            return Res.status(ResCode.MethodNotAllowed).send({
                message: ResMessage.MethodNotAllowed,
                description: description
            });
        }
        case ResCode.Conflict: {
            return Res.status(ResCode.Conflict).send({
                message: ResMessage.Conflict,
                description: description
            });
        }
        case ResCode.TooManyRequests: {
            return Res.status(ResCode.TooManyRequests).set({ 'Retry-After': 3600 }).send({
                message: ResMessage.TooManyRequests,
                description: description
            });
        }
        default: {
            return Res.status(ResCode.OK).send(result);
        }
    }
};
exports.default = handleResult;
//# sourceMappingURL=handleResult.js.map