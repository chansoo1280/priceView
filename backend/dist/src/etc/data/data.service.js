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
exports.DataService = void 0;
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const handleResult_1 = require("../../common/handleResult");
const Data_entity_1 = require("./Data.entity");
const Data_repository_1 = require("./Data.repository");
let DataService = class DataService extends query_typeorm_1.TypeOrmQueryService {
    constructor(dataRepository) {
        super(dataRepository, { useSoftDelete: true });
        this.dataRepository = dataRepository;
    }
    async getData() {
        const result = await this.dataRepository
            .createQueryBuilder('Data')
            .select()
            .getMany();
        return result || handleResult_1.ResCode.NoContent;
    }
};
DataService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(Data_entity_1.Data)),
    __metadata("design:paramtypes", [Data_repository_1.DataRepository])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map