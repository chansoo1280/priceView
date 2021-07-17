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
exports.EtcService = void 0;
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const handleResult_1 = require("../common/handleResult");
const etc_entity_1 = require("./etc.entity");
const etc_repository_1 = require("./etc.repository");
let EtcService = class EtcService extends query_typeorm_1.TypeOrmQueryService {
    constructor(etcRepository) {
        super(etcRepository, { useSoftDelete: true });
        this.etcRepository = etcRepository;
    }
    async getEtc() {
        const result = await this.etcRepository
            .createQueryBuilder('Etc')
            .select()
            .getMany();
        return result || handleResult_1.ResCode.NoContent;
    }
};
EtcService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(etc_entity_1.Etc)),
    __metadata("design:paramtypes", [etc_repository_1.EtcRepository])
], EtcService);
exports.EtcService = EtcService;
//# sourceMappingURL=etc.service.js.map