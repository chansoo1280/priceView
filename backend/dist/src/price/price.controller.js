"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceController = void 0;
const common_1 = require("@nestjs/common");
const handleResult_1 = require("../common/handleResult");
const price_service_1 = require("./price.service");
const select_cnt_price_dto_1 = require("./dto/select_cnt-price.dto");
const init_count_dto_1 = require("./dto/init-count.dto");
const constants_1 = require("../common/constants");
let PriceController = class PriceController {
    constructor(priceService) {
        this.priceService = priceService;
    }
    async initDB({ P_YEAR_MONTH }, req, res) {
        var _a, _b, _c;
        console.log(req.headers);
        if (req.headers.secret !== constants_1.SECRET)
            return handleResult_1.default(handleResult_1.ResCode.Unauthorized, res);
        const insertData = async (P_YEAR_MONTH, page) => {
            var _a, _b;
            const result = await this.priceService.findAll(P_YEAR_MONTH, page);
            const res_CODE = (_b = (_a = result.ListNecessariesPricesService) === null || _a === void 0 ? void 0 : _a.RESULT) === null || _b === void 0 ? void 0 : _b.CODE;
            const total_list = result.ListNecessariesPricesService.row;
            if (res_CODE !== 'INFO-000')
                return;
            const len = total_list.length;
            const step = 100;
            for (let j = 0; j < Math.ceil(len / step); j++) {
                await this.priceService.createPrice(total_list.slice(j * step, (j + 1) * step - 1));
            }
        };
        let total_cnt = 0;
        const result = await this.priceService.getLen(P_YEAR_MONTH);
        const list_total_count = (_a = result.ListNecessariesPricesService) === null || _a === void 0 ? void 0 : _a.list_total_count;
        const res_CODE = (_c = (_b = result.ListNecessariesPricesService) === null || _b === void 0 ? void 0 : _b.RESULT) === null || _c === void 0 ? void 0 : _c.CODE;
        if (res_CODE !== 'INFO-000')
            return handleResult_1.default(handleResult_1.ResCode.NoContent, res);
        total_cnt = total_cnt + list_total_count;
        const total_len = Math.ceil(list_total_count / 1000);
        for (let j = 0; j < total_len; j++) {
            console.log(total_cnt + '-' + (j + 1));
            await insertData(P_YEAR_MONTH, j);
        }
        return handleResult_1.default(handleResult_1.ResCode.OK, res);
    }
    async getCnt({ A_NAME, A_UNIT, P_YEAR_MONTH }, res) {
        A_UNIT = JSON.parse(A_UNIT);
        const result = await this.priceService.getCnt({
            name: A_NAME,
            A_UNIT,
            P_YEAR_MONTH,
        });
        return handleResult_1.default(result, res);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [init_count_dto_1.InitPriceDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PriceController.prototype, "initDB", null);
__decorate([
    common_1.Get('/cnt'),
    __param(0, common_1.Query()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_cnt_price_dto_1.SelectCntPriceDto, Object]),
    __metadata("design:returntype", Promise)
], PriceController.prototype, "getCnt", null);
PriceController = __decorate([
    common_1.Controller('price'),
    __metadata("design:paramtypes", [price_service_1.PriceService])
], PriceController);
exports.PriceController = PriceController;
//# sourceMappingURL=price.controller.js.map