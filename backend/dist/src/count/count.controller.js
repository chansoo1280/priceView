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
exports.CountController = void 0;
const common_1 = require("@nestjs/common");
const define_1 = require("../common/define");
const handleResult_1 = require("../common/handleResult");
const price_entity_1 = require("../price/price.entity");
const price_service_1 = require("../price/price.service");
const count_service_1 = require("./count.service");
const select_count_dto_1 = require("./dto/select-count.dto");
const constants_1 = require("../common/constants");
let CountController = class CountController {
    constructor(countService, priceService) {
        this.countService = countService;
        this.priceService = priceService;
    }
    async getStatistics({ A_SEQ }, { P_YEAR_MONTH, M_TYPE_CODE, M_GU_CODE }, res) {
        const P_YEAR_MONTH_LIST = (function () {
            const fillZero = (str) => {
                if (str.length === 1)
                    return '0' + str;
                return str;
            };
            const list = [];
            let year = Number(P_YEAR_MONTH.split('-')[0]);
            let month = Number(P_YEAR_MONTH.split('-')[1]);
            for (let i = 0; i < 6; i++) {
                list.push(fillZero(String(year)) + '-' + fillZero(String(month)));
                if (month !== 1) {
                    month--;
                }
                else {
                    month = 12;
                    year--;
                }
            }
            return list;
        })();
        const result = await this.countService.getStatistics({
            A_SEQ,
            P_YEAR_MONTH_LIST,
            M_TYPE_CODE,
            M_GU_CODE,
        });
        return handleResult_1.default(result, res);
    }
    async initDB({ P_YEAR_MONTH }, req, res) {
        if (req.headers.secret !== constants_1.SECRET)
            return handleResult_1.default(handleResult_1.ResCode.Unauthorized, res);
        const insertCount = async (P_YEAR_MONTH, A_SEQ, A_UNIT) => {
            const result = await this.priceService.getCnt({
                name: define_1.NAME_OBJ[A_SEQ].A_NAME,
                A_UNIT,
                P_YEAR_MONTH,
            });
            for (let i = 0; i < define_1.M_TYPE_CODE_LIST.length; i++) {
                const type_list = result.filter((price_info) => {
                    if (define_1.M_TYPE_CODE_LIST[i] === '')
                        return true;
                    return price_info.M_TYPE_CODE === define_1.M_TYPE_CODE_LIST[i];
                });
                for (let j = 0; j < define_1.M_GU_CODE_LIST.length; j++) {
                    const insert_list = type_list.filter((price_info) => {
                        if (define_1.M_GU_CODE_LIST[j] === '')
                            return true;
                        return price_info.M_GU_CODE === define_1.M_GU_CODE_LIST[j];
                    });
                    const A_TOTAL_PRICE = (function () {
                        let price = 0;
                        for (let k = 0; k < insert_list.length; k++) {
                            price = price + Number(insert_list[k].A_PRICE);
                        }
                        return price;
                    })();
                    const C_CODE = [
                        String(A_SEQ),
                        P_YEAR_MONTH,
                        define_1.M_TYPE_CODE_LIST[i],
                        define_1.M_GU_CODE_LIST[j],
                    ].join('_');
                    const isExist = await this.countService.getCount(C_CODE);
                    if (isExist !== handleResult_1.ResCode.NoContent) {
                        const count_seq = isExist.count_seq;
                        this.countService.updateCount(count_seq, {
                            A_UNIT: A_UNIT[0],
                            length: insert_list.length,
                            AVER_VAL: A_TOTAL_PRICE / insert_list.length || 0,
                        });
                        continue;
                    }
                    this.countService.createCount({
                        C_CODE: C_CODE,
                        A_SEQ: String(A_SEQ),
                        A_NAME: define_1.NAME_OBJ[A_SEQ].A_NAME,
                        A_UNIT: A_UNIT[0],
                        P_YEAR: P_YEAR_MONTH.slice(0, 4),
                        P_YEAR_MONTH: P_YEAR_MONTH,
                        M_TYPE_CODE: define_1.M_TYPE_CODE_LIST[i],
                        M_TYPE_NAME: define_1.TYPE_NAME_OBJ[define_1.M_TYPE_CODE_LIST[i]] || '',
                        M_GU_CODE: define_1.M_GU_CODE_LIST[j],
                        M_GU_NAME: define_1.GU_NAME_OBJ[define_1.M_GU_CODE_LIST[j]] || '',
                        length: insert_list.length,
                        AVER_VAL: A_TOTAL_PRICE / insert_list.length || 0,
                    });
                }
            }
        };
        console.log(P_YEAR_MONTH);
        for (const A_SEQ in define_1.NAME_OBJ) {
            await insertCount(P_YEAR_MONTH, Number(A_SEQ), define_1.NAME_OBJ[A_SEQ].A_UNIT);
        }
        console.log('done');
        return handleResult_1.default(handleResult_1.ResCode.OK, res);
    }
};
__decorate([
    common_1.Get('/:A_SEQ'),
    __param(0, common_1.Param()),
    __param(1, common_1.Query()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, select_count_dto_1.SelectCountDto, Object]),
    __metadata("design:returntype", Promise)
], CountController.prototype, "getStatistics", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CountController.prototype, "initDB", null);
CountController = __decorate([
    common_1.Controller('count'),
    __metadata("design:paramtypes", [count_service_1.CountService,
        price_service_1.PriceService])
], CountController);
exports.CountController = CountController;
//# sourceMappingURL=count.controller.js.map