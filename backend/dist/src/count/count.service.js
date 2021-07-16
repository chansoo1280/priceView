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
exports.CountService = void 0;
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const handleResult_1 = require("../common/handleResult");
const count_entity_1 = require("./count.entity");
const count_repository_1 = require("./count.repository");
let CountService = class CountService extends query_typeorm_1.TypeOrmQueryService {
    constructor(countRepository) {
        super(countRepository, { useSoftDelete: true });
        this.countRepository = countRepository;
    }
    async getStatistics({ A_SEQ, P_YEAR_MONTH_LIST, M_TYPE_CODE = '', M_GU_CODE = '', }) {
        const result = await this.countRepository
            .createQueryBuilder('count')
            .select()
            .where('count.A_SEQ = :A_SEQ', { A_SEQ })
            .andWhere('count.P_YEAR_MONTH IN (:...P_YEAR_MONTH_LIST)', {
            P_YEAR_MONTH_LIST,
        })
            .andWhere('count.M_TYPE_CODE = :M_TYPE_CODE', { M_TYPE_CODE })
            .andWhere('count.M_GU_CODE = :M_GU_CODE', { M_GU_CODE })
            .orderBy('count.P_YEAR_MONTH')
            .getMany();
        return result;
    }
    async getCount(C_CODE) {
        const result = await this.countRepository
            .createQueryBuilder('count')
            .select()
            .where('count.C_CODE = :C_CODE', { C_CODE })
            .getOne();
        return result || handleResult_1.ResCode.NoContent;
    }
    async createCount(obj) {
        const result = await this.countRepository
            .createQueryBuilder()
            .insert()
            .into(count_entity_1.Count)
            .values([obj])
            .orUpdate({ conflict_target: ['C_CODE'], overwrite: [] })
            .execute();
        return result;
    }
    async updateCount(count_seq, obj) {
        await this.countRepository
            .createQueryBuilder()
            .update(count_entity_1.Count)
            .set(obj)
            .where('count.count_seq = :count_seq', { count_seq })
            .execute();
        return handleResult_1.ResCode.OK;
    }
};
CountService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(count_entity_1.Count)),
    __metadata("design:paramtypes", [count_repository_1.CountRepository])
], CountService);
exports.CountService = CountService;
//# sourceMappingURL=count.service.js.map