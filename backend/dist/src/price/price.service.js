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
exports.PriceService = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const price_entity_1 = require("./price.entity");
const price_repository_1 = require("./price.repository");
const query_typeorm_1 = require("@nestjs-query/query-typeorm");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const schedule_1 = require("@nestjs/schedule");
let PriceService = class PriceService extends query_typeorm_1.TypeOrmQueryService {
    constructor(priceRepository, httpService) {
        super(priceRepository, { useSoftDelete: true });
        this.priceRepository = priceRepository;
        this.httpService = httpService;
    }
    async handleCron() {
        const date = new Date();
        const curDate_1 = new Date(date.getFullYear(), date.getMonth() - 1, 2);
        const curDate_2 = new Date(date.getFullYear(), date.getMonth(), 2);
        const P_YEAR_MONTH = String(curDate_1.getFullYear()) +
            '-' +
            (String(curDate_1.getMonth() + 1).length === 1
                ? 0 + String(curDate_1.getMonth() + 1)
                : String(curDate_1.getMonth() + 1));
        const P_YEAR_MONTH2 = String(curDate_2.getFullYear()) +
            '-' +
            (String(curDate_2.getMonth() + 1).length === 1
                ? 0 + String(curDate_2.getMonth() + 1)
                : String(curDate_2.getMonth() + 1));
        await this.httpService
            .get(`http://localhost:5000/api/price?P_YEAR_MONTH=${P_YEAR_MONTH}`)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
        await this.httpService
            .get(`http://localhost:5000/api/price?P_YEAR_MONTH=${P_YEAR_MONTH2}`)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
        await this.httpService
            .get(`http://localhost:5000/api/count?P_YEAR_MONTH=${P_YEAR_MONTH}`)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
        await this.httpService
            .get(`http://localhost:5000/api/count?P_YEAR_MONTH=${P_YEAR_MONTH2}`)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async getCnt({ name, A_UNIT, P_YEAR_MONTH }) {
        const result = await this.priceRepository
            .createQueryBuilder('price')
            .select()
            .where('price.A_NAME = :name', { name })
            .andWhere(new typeorm_2.Brackets((subQy) => {
            A_UNIT.map((unit, idx) => {
                return subQy.orWhere('price.A_UNIT LIKE :unit_' + idx, {
                    ['unit_' + idx]: `%${unit}%`,
                });
            });
        }))
            .andWhere('price.P_YEAR_MONTH = :P_YEAR_MONTH', { P_YEAR_MONTH })
            .getMany();
        return result;
    }
    async getLen(P_YEAR_MONTH) {
        return this.httpService
            .get('http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/1/1/%20/%20/' +
            P_YEAR_MONTH)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async findAll(P_YEAR_MONTH, page) {
        return this.httpService
            .get('http://openapi.seoul.go.kr:8088/5766576b4e63686136305a414e6345/json/ListNecessariesPricesService/' +
            String(page * 1000 + 1) +
            '/' +
            String((page + 1) * 1000) +
            '/%20/%20/' +
            P_YEAR_MONTH)
            .pipe(operators_1.map((response) => response.data))
            .toPromise();
    }
    async createPrice(list) {
        const result = await this.priceRepository
            .createQueryBuilder()
            .insert()
            .into(price_entity_1.Price)
            .values(list)
            .orUpdate({ conflict_target: ['P_SEQ'], overwrite: [] })
            .execute()
            .catch((err) => {
            console.log(err);
            return err;
        });
        return result;
    }
};
__decorate([
    schedule_1.Cron('0 0 0 0 * *', {
        name: 'notifications',
        timeZone: 'Asia/Seoul',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceService.prototype, "handleCron", null);
PriceService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(price_entity_1.Price)),
    __metadata("design:paramtypes", [price_repository_1.PriceRepository,
        common_1.HttpService])
], PriceService);
exports.PriceService = PriceService;
//# sourceMappingURL=price.service.js.map